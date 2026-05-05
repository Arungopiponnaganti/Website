'use client';
import React, { useState, useRef, useEffect } from 'react';

// ─── Formatting helpers ───────────────────────────────────────────────────────
function fmt(v) {
  if (v >= 10000000) return '₹' + (v / 10000000).toFixed(1) + 'Cr';
  if (v >= 100000)   return '₹' + (v / 100000).toFixed(1) + 'L';
  return '₹' + Math.round(v / 1000) + 'k';
}

// ─── Calculation logic ────────────────────────────────────────────────────────
function calcResults(p, h, c, e, eff, implCost, subCost) {
  const weeklyHrs      = p * h;
  const annualStaffCost = p * c * 12;
  const errCost        = annualStaffCost * 0.15 * (e / 100);
  const totalCost      = annualStaffCost + errCost;

  const effR           = eff / 100;
  const savedLabor     = totalCost * effR;
  const annualSubCost  = subCost * 12;
  const netAnnualSaving = savedLabor - annualSubCost;
  const hrsSaved       = Math.round(weeklyHrs * effR);

  const netMonthlySaving = netAnnualSaving / 12;
  const paybackMonths    = netMonthlySaving > 0
    ? implCost / netMonthlySaving
    : null;

  return {
    totalCost,
    savedLabor,
    netAnnualSaving,
    annualSubCost,
    hrsSaved,
    paybackMonths,
    errCost,
    implCost,
    subCost: annualSubCost,
  };
}

// ─── Tooltip ──────────────────────────────────────────────────────────────────
function Tooltip({ text }) {
  const [show, setShow] = useState(false);
  return (
    <span
      className="position-relative d-inline-flex flex-shrink-0"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span className="wa-roi-tip">i</span>
      {show && (
        <span style={{
          position: 'absolute', bottom: 'calc(100% + 6px)', left: '50%',
          transform: 'translateX(-50%)',
          background: '#050a1e', color: '#f1f5f9',
          padding: '6px 10px', borderRadius: 6,
          fontSize: 11, lineHeight: 1.5,
          width: 210, zIndex: 200,
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
          pointerEvents: 'none', whiteSpace: 'normal', textAlign: 'center',
        }}>
          {text}
        </span>
      )}
    </span>
  );
}

// ─── Animated number ──────────────────────────────────────────────────────────
function AnimNum({ val, fmtFn = fmt }) {
  const [displayed, setDisplayed] = useState(val);
  const prevRef = useRef(val);
  const rafRef  = useRef(null);

  useEffect(() => {
    const from = prevRef.current;
    const to   = val;
    prevRef.current = val;
    if (from === to) return;

    const dur   = 600;
    const start = performance.now();
    const step  = (now) => {
      const progress = Math.min((now - start) / dur, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      setDisplayed(from + (to - from) * eased);
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [val]);

  return <span>{fmtFn(Math.round(displayed))}</span>;
}

// ─── Semi-circular gauge ──────────────────────────────────────────────────────
const HALF_CIRC = Math.PI * 80; // ≈ 251.33

function SemiGauge({ ratio, centerValue, centerLabel }) {
  const clamped    = Math.max(0, Math.min(1, isNaN(ratio) ? 0 : ratio));
  const fillLength = clamped * HALF_CIRC;

  return (
    <div className="position-relative d-flex align-items-end justify-content-center">
      <svg viewBox="0 0 200 120" className="wa-roi-gauge-svg" aria-hidden="true">
        <defs>
          <filter id="wa-roi-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Track */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#f1f5f9"
          strokeWidth="14"
          strokeLinecap="round"
        />
        {/* Fill */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#ff3c00"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={HALF_CIRC}
          strokeDashoffset={HALF_CIRC - fillLength}
          style={{ transition: 'stroke-dashoffset 0.7s cubic-bezier(0.4,0,0.2,1)' }}
          filter="url(#wa-roi-glow)"
        />
        {/* Scale ticks */}
        <text x="16" y="115" textAnchor="middle" fontSize="9" fill="#a0a0a0">0</text>
        <text x="184" y="115" textAnchor="middle" fontSize="9" fill="#a0a0a0">100%</text>
      </svg>
      <div
        className="position-absolute start-50 translate-middle-x text-center text-nowrap"
        style={{ bottom: 6 }}
      >
        <div className="wa-roi-gauge-num">{centerValue}</div>
        <div className="wa-roi-gauge-lbl">{centerLabel}</div>
      </div>
    </div>
  );
}

// ─── 3-year bar chart ─────────────────────────────────────────────────────────
function YearChart({ res }) {
  const annual = res.netAnnualSaving;
  const yr1    = annual - res.implCost;
  const yr2    = annual;
  const yr3    = annual;
  const values = [yr1, yr2, yr3];

  const maxAbs  = Math.max(...values.map(Math.abs), 1);
  const barMaxH = 72;
  const barW    = 44;
  const baseline = 88;
  const xPos    = [42, 100, 158];

  return (
    <svg viewBox="0 0 200 140" className="wa-roi-year-chart w-100" aria-label="3-year ROI projection">
      {/* Baseline */}
      <line x1="8" y1={baseline} x2="192" y2={baseline} stroke="#e5e7eb" strokeWidth="1" />
      {values.map((v, i) => {
        const h      = Math.max(3, (Math.abs(v) / maxAbs) * barMaxH);
        const isNeg  = v < 0;
        const barY   = isNeg ? baseline : baseline - h;
        const color  = isNeg ? '#ef4444' : '#ff3c00';
        const x      = xPos[i] - barW / 2;
        const lblY   = isNeg ? barY + h + 13 : barY - 5;

        return (
          <g key={i}>
            <rect x={x} y={barY} width={barW} height={h}
              fill={color} rx="3" opacity="0.85"
              style={{ transition: 'height 0.5s cubic-bezier(0.4,0,0.2,1), y 0.5s cubic-bezier(0.4,0,0.2,1)' }}
            />
            <text x={xPos[i]} y={lblY} textAnchor="middle" fontSize="9.5" fill={color} fontWeight="600">
              {v >= 0 ? '+' : ''}{fmt(v)}
            </text>
            <text x={xPos[i]} y="128" textAnchor="middle" fontSize="10" fill="#6b7280">
              Year {i + 1}
            </text>
          </g>
        );
      })}
      {/* Legend */}
      <text x="100" y="142" textAnchor="middle" fontSize="9" fill="#a0a0a0">
        Net P&amp;L (Year 1 absorbs impl. cost)
      </text>
    </svg>
  );
}

// ─── DEFAULTS ─────────────────────────────────────────────────────────────────
const DEFAULTS = {
  people:   4,
  hrs:      12,
  cost:     80000,
  err:      7,       // maps to "5–10%" segment
  eff:      75,
  implCost: 500000,
  subCost:  15000,
  freq:     'weekly',
};

// ─── Main component ───────────────────────────────────────────────────────────
export default function WAROICalculator() {
  const [vals, setVals]         = useState(DEFAULTS);
  const [activeTab, setActiveTab] = useState('savings');

  const res    = calcResults(
    vals.people, vals.hrs, vals.cost, vals.err, vals.eff,
    vals.implCost, vals.subCost,
  );
  const update = (key, value) =>
    setVals((v) => ({ ...v, [key]: key === 'freq' ? value : +value }));

  // Gauge ratios
  const savingsRatio = Math.max(0, Math.min(1,
    res.totalCost > 0 ? res.netAnnualSaving / res.totalCost : 0
  ));
  const timeRatio = vals.eff / 100;

  // Payback display
  const paybackStr = res.paybackMonths === null
    ? '—'
    : res.paybackMonths < 1
      ? '<1 mo'
      : res.paybackMonths < 24
        ? res.paybackMonths.toFixed(1) + ' mo'
        : (res.paybackMonths / 12).toFixed(1) + ' yrs';

  // Slider helper: compute --pct
  const pct = (val, min, max) => `${((val - min) / (max - min)) * 100}%`;

  return (
    <section
      id="wa-roi"
      className="cd-section cd-section-muted border-top border-bottom"
    >
      <div className="container py-4">

        {/* Header */}
        <div className="mb-5">
          <span className="wa-roi-eyebrow">Automation ROI calculator</span>
          <h2 className="wa-roi-title">
            How much is manual work costing you right now?
          </h2>
          <p className="text-muted mb-0">
            Drag the sliders. See what automation is worth — net of software cost — before we talk.
          </p>
        </div>

        {/* Warning strip */}
        {res.paybackMonths === null && (
          <div className="wa-roi-warn">
            At current settings, the monthly tool subscription exceeds projected savings.
            Try reducing the subscription cost, increasing automation coverage, or selecting a larger team.
          </div>
        )}

        {/* Two-column wrap */}
        <div className="wa-roi-wrap">

          {/* ══ LEFT: Inputs ══ */}
          <div className="bg-white border rounded-3 p-4 d-flex flex-column gap-3">

            {/* Frequency toggle */}
            <div>
              <span className="wa-roi-section-label">Workflow frequency</span>
              <div
                className="d-flex border rounded overflow-hidden mt-2"
                style={{ width: 'fit-content' }}
              >
                {['daily', 'weekly', 'monthly'].map((f) => (
                  <button
                    key={f}
                    className={`wa-roi-freq-btn${vals.freq === f ? ' active' : ''}`}
                    onClick={() => update('freq', f)}
                  >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders: people, hrs, cost */}
            <div className="d-flex flex-column gap-3">
              {[
                {
                  key: 'people', label: 'Team members doing this work',
                  tooltip: 'Everyone whose time goes into this process — full-time or partial.',
                  min: 1, max: 20, step: 1,
                  display: (v) => v + ' people',
                },
                {
                  key: 'hrs', label: 'Hours per person per week on this task',
                  tooltip: 'Average hours each person spends — include prep, execution, and follow-up.',
                  min: 1, max: 40, step: 1,
                  display: (v) => v + ' hrs',
                },
                {
                  key: 'cost', label: 'Fully-loaded cost per person (₹/month)',
                  tooltip: 'Include salary, PF, benefits, and overhead. Typically 1.3–1.5× CTC.',
                  min: 30000, max: 300000, step: 5000,
                  display: (v) => '₹' + Math.round(v / 1000) + 'k',
                },
              ].map((s) => (
                <div key={s.key} className="d-flex flex-column gap-2">
                  <div className="d-flex align-items-center gap-1 small">
                    {s.label}
                    <Tooltip text={s.tooltip} />
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      type="range"
                      className="wa-roi-range"
                      min={s.min} max={s.max} step={s.step}
                      value={vals[s.key]}
                      onChange={(e) => update(s.key, e.target.value)}
                      style={{ '--pct': pct(vals[s.key], s.min, s.max) }}
                    />
                    <div className="wa-roi-slider-val">{s.display(vals[s.key])}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Segmented: Error rate */}
            <div className="d-flex flex-column gap-2">
              <div className="d-flex align-items-center gap-1 small">
                Error / rework rate on this process
                <Tooltip text="How often does a manual step require correction? Industry avg is 5–15%." />
              </div>
              <div className="d-flex border rounded overflow-hidden">
                {[
                  { label: '0–5%', val: 2 },
                  { label: '5–10%', val: 7 },
                  { label: '10–20%', val: 15 },
                  { label: '20–30%', val: 25 },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    className={`wa-roi-seg-btn${vals.err === opt.val ? ' active' : ''}`}
                    onClick={() => update('err', opt.val)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Segmented: Automation coverage */}
            <div className="d-flex flex-column gap-2">
              <div className="d-flex align-items-center gap-1 small">
                Automation coverage achievable
                <Tooltip text="% of this process that can be automated. First-phase automations typically cover 60–80%." />
              </div>
              <div className="d-flex border rounded overflow-hidden">
                {[40, 60, 75, 85].map((v) => (
                  <button
                    key={v}
                    className={`wa-roi-seg-btn${vals.eff === v ? ' active' : ''}`}
                    onClick={() => update('eff', v)}
                  >
                    {v}%
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders: implCost, subCost */}
            <div className="d-flex flex-column gap-3">
              {[
                {
                  key: 'implCost', label: 'One-time implementation cost',
                  tooltip: 'Setup, configuration, integration, and onboarding. ₹2L–₹15L is a typical range.',
                  min: 50000, max: 2000000, step: 50000,
                  display: (v) => fmt(v),
                },
                {
                  key: 'subCost', label: 'Monthly tool / platform subscription',
                  tooltip: 'The ongoing SaaS fee. This is netted out of savings so ROI is honest.',
                  min: 0, max: 100000, step: 2500,
                  display: (v) => fmt(v) + '/mo',
                },
              ].map((s) => (
                <div key={s.key} className="d-flex flex-column gap-2">
                  <div className="d-flex align-items-center gap-1 small">
                    {s.label}
                    <Tooltip text={s.tooltip} />
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      type="range"
                      className="wa-roi-range"
                      min={s.min} max={s.max} step={s.step}
                      value={vals[s.key]}
                      onChange={(e) => update(s.key, e.target.value)}
                      style={{ '--pct': pct(vals[s.key], s.min, s.max) }}
                    />
                    <div className="wa-roi-slider-val">{s.display(vals[s.key])}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted small fst-italic mb-0">
              Estimates are illustrative. Error rework cost is estimated at 15% of annual staff cost × error rate — a common operations benchmark.
              Savings are netted against your subscription. We produce a precise model after the free process audit.
            </p>
          </div>

          {/* ══ RIGHT: Results ══ */}
          <div className="wa-roi-right bg-white border rounded-3 overflow-hidden d-flex flex-column">

            {/* Tab bar */}
            <div className="d-flex border-bottom bg-light" role="tablist">
              {[
                { id: 'savings', label: 'Cost Savings' },
                { id: 'time',    label: 'Time Efficiency' },
                { id: 'roi',     label: 'ROI Timeline' },
              ].map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={activeTab === t.id}
                  className={`wa-roi-tab${activeTab === t.id ? ' active' : ''}`}
                  onClick={() => setActiveTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Tab 1: Cost Savings */}
            {activeTab === 'savings' && (
              <div className="p-4 d-flex flex-column gap-3">
                <SemiGauge
                  ratio={savingsRatio}
                  centerValue={
                    <AnimNum
                      val={Math.max(0, res.netAnnualSaving)}
                      fmtFn={(v) => fmt(v)}
                    />
                  }
                  centerLabel="net annual savings"
                />
                <div className="text-center small text-muted wa-roi-gauge-legend">
                  Net annual savings after automation
                </div>
                <div className="row g-2">
                  <div className="col-6">
                    <div className="bg-light border rounded-2 p-3 text-center">
                      <div className="wa-roi-stat-val">{res.hrsSaved} hrs</div>
                      <div className="text-muted small">Hours freed / week</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-light border rounded-2 p-3 text-center">
                      <div className="wa-roi-stat-val">
                        <AnimNum val={res.totalCost} fmtFn={(v) => fmt(v)} />
                      </div>
                      <div className="text-muted small">Annual process cost today</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Time Efficiency */}
            {activeTab === 'time' && (
              <div className="p-4 d-flex flex-column gap-3">
                <SemiGauge
                  ratio={timeRatio}
                  centerValue={
                    <AnimNum
                      val={res.hrsSaved * 52}
                      fmtFn={(v) => Math.round(v) + ' hrs'}
                    />
                  }
                  centerLabel="freed per year"
                />
                <div className="text-center small text-muted wa-roi-gauge-legend">
                  Hours reclaimed annually by automation
                </div>
                <div className="row g-2">
                  <div className="col-6">
                    <div className="bg-light border rounded-2 p-3 text-center">
                      <div className="wa-roi-stat-val">{vals.eff}%</div>
                      <div className="text-muted small">Automation coverage</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-light border rounded-2 p-3 text-center">
                      <div className="wa-roi-stat-val">{res.hrsSaved} hrs</div>
                      <div className="text-muted small">Freed per week</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: ROI Timeline */}
            {activeTab === 'roi' && (
              <div className="p-4 d-flex flex-column gap-3">
                <YearChart res={res} />
                <div className="row g-2">
                  <div className="col-6">
                    <div className="bg-light border rounded-2 p-3 text-center">
                      <div className="wa-roi-stat-val">{paybackStr}</div>
                      <div className="text-muted small">Payback period</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-light border rounded-2 p-3 text-center">
                      <div className="wa-roi-stat-val">
                        <AnimNum
                          val={Math.max(0, res.netAnnualSaving - res.implCost)}
                          fmtFn={(v) => fmt(v)}
                        />
                      </div>
                      <div className="text-muted small">Year-1 net ROI</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CTA Footer — always visible */}
            <div className="p-4 border-top bg-light mt-auto">
              <div className="wa-roi-cta-label">So, what&apos;s next?</div>
              <p className="small text-muted mt-0 mb-3">
                We&apos;ll model this precisely after a free 90-minute process audit. No commitment, no sales pitch.
              </p>
              <a href="/contact" className="cd-btn-primary d-block w-100 text-center text-decoration-none">
                Book a free audit →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
