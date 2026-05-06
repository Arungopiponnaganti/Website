'use client';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import DynamicFormModal from '../Common/DynamicFormModal';

const defaultFormFields = [
  {
    label: 'Full Name',
    name: 'name',
    type: 'text',
    placeholder: 'John Smith',
    required: true,
    colSize: 6
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'john@company.com',
    required: true,
    colSize: 6
  },
  {
    label: 'Subject',
    name: 'subject',
    type: 'text',
    placeholder: 'Your Subject Here',
    required: true,
    colSize: 6
  },
  {
    label: 'Phone',
    name: 'phone',
    type: 'tel',
    placeholder: '+1 (555) 000-0000',
    required: true,
    colSize: 6
  },
  {
    label: 'Message',
    name: 'message',
    type: 'textarea',
    placeholder: 'Tell us more about your project...',
    required: false,
    colSize: 12
  },
];

const TAGS = [
  'Shift-left testing',
  'Test automation',
  'CI/CD gates',
  'Performance testing',
  'Security scanning',
  'Zero regressions',
];

// ── Timing (ms) ──────────────────────────────────────────────
const T = {
  char: 45,
  out: 90,
  preOut: 320,
  step: 440,
  loop: 2600,
};

// ── Test runner scripts ───────────────────────────────────────
const SCRIPT = [
  {
    cmd: 'npx playwright test --reporter=line',
    out: [
      { k: 'plain', cls: 'tc-gray', t: 'Running 42 tests using 4 workers' },
      { k: 'parts', parts: [['tc-green', '  ✓ '], ['tc-white', 'auth/login.spec.ts'], ['tc-gray', ' · 312ms']] },
      { k: 'parts', parts: [['tc-green', '  ✓ '], ['tc-white', 'checkout/flow.spec.ts'], ['tc-gray', ' · 841ms']] },
      { k: 'parts', parts: [['tc-green', '  ✓ '], ['tc-white', 'api/products.spec.ts'], ['tc-gray', ' · 204ms']] },
      { k: 's', t: '42 passed (12.3s)' },
    ],
  },
  {
    cmd: 'pytest tests/ -v --tb=short',
    out: [
      { k: 'parts', parts: [['tc-green', 'PASSED '], ['tc-white', 'test_user_service.py::test_create']] },
      { k: 'parts', parts: [['tc-green', 'PASSED '], ['tc-white', 'test_order_api.py::test_checkout']] },
      { k: 'parts', parts: [['tc-green', 'PASSED '], ['tc-white', 'test_auth.py::test_refresh_token']] },
      { k: 's', t: '138 passed in 6.42s' },
    ],
  },
  {
    cmd: 'k6 run --vus 50 --duration 30s load.js',
    out: [
      { k: 'plain', cls: 'tc-gray', t: 'http_req_duration avg=142ms p95=287ms' },
      { k: 'parts', parts: [['tc-green', '✓ '], ['tc-gray', 'p95 under 300ms threshold']] },
      { k: 'parts', parts: [['tc-green', '✓ '], ['tc-gray', 'error rate: '], ['tc-yellow', '0.0%']] },
      { k: 's', t: '100% of checks passed' },
    ],
  },
  {
    cmd: 'npx playwright test --project=chromium',
    out: [
      { k: 'parts', parts: [['tc-green', '  ✓ '], ['tc-white', 'search/filters.spec.ts'], ['tc-gray', ' · 520ms']] },
      { k: 'parts', parts: [['tc-green', '  ✓ '], ['tc-white', 'dashboard/metrics.spec.ts'], ['tc-gray', ' · 730ms']] },
      { k: 's', t: '18 passed (8.1s)' },
    ],
  },
];

const SCRIPT_2 = [
  {
    cmd: 'snyk test --all-projects',
    out: [
      { k: 'parts', parts: [['tc-green', '✓ '], ['tc-gray', 'Tested 12 dependencies']] },
      { k: 'parts', parts: [['tc-green', '✓ '], ['tc-gray', 'No vulnerable paths found']] },
    ],
  },
  {
    cmd: 'npx postman-cli run collection.json',
    out: [
      { k: 'parts', parts: [['tc-green', '✓ '], ['tc-white', 'GET /api/users'], ['tc-gray', '    200']] },
      { k: 'parts', parts: [['tc-green', '✓ '], ['tc-white', 'POST /api/orders'], ['tc-gray', '   201']] },
      { k: 's', t: '24/24 requests passed' },
    ],
  },
  {
    cmd: 'npx jest --coverage --silent',
    out: [
      { k: 'plain', cls: 'tc-gray', t: 'Coverage summary:' },
      { k: 'parts', parts: [['tc-cyan', '  Statements: '], ['tc-green', '87.4%']] },
      { k: 'parts', parts: [['tc-cyan', '  Branches:   '], ['tc-yellow', '74.2%']] },
    ],
  },
];

// Coverage bars for bottom-right panel
const COV_BARS = [
  { label: 'Unit tests', pct: 86, color: '#4ade80' },
  { label: 'Integration', pct: 72, color: '#60a5fa' },
  { label: 'E2E journeys', pct: 95, color: '#22d3ee' },
];

// ── Line renderer ─────────────────────────────────────────────
function renderLine(line) {
  if (line.k === 's') {
    return (
      <div className="qe-tl">
        <span className="tc-green">✓</span>
        <span className="tc-gray">{' ' + line.t}</span>
      </div>
    );
  }
  if (line.k === 'plain') {
    return <div className={`qe-tl ${line.cls}`}>{line.t}</div>;
  }
  if (line.k === 'parts') {
    return (
      <div className="qe-tl">
        {line.parts.map(([cls, text], i) => (
          <span key={i} className={cls}>{text}</span>
        ))}
      </div>
    );
  }
  return <div className="qe-tl">&nbsp;</div>;
}

// ── Reusable animated terminal ────────────────────────────────
function AnimatedTerminal({ script, bodyClass = 'qe-term-body-sm', delay = 0 }) {
  const [lines, setLines] = useState([]);
  const [typing, setTyping] = useState(null);
  const bodyRef = useRef(null);
  const cancelRef = useRef(false);
  const idRef = useRef(0);

  const nid = () => ++idRef.current;

  useEffect(() => {
    cancelRef.current = false;
    let tid;
    const wait = (ms) => new Promise(res => { tid = setTimeout(res, ms); });

    async function run() {
      if (delay) await wait(delay);

      while (!cancelRef.current) {
        let committed = [];
        setLines([]);
        setTyping(null);

        for (const step of script) {
          if (cancelRef.current) return;

          for (let len = 1; len <= step.cmd.length; len++) {
            if (cancelRef.current) return;
            setTyping({ text: step.cmd, len });
            await wait(T.char);
          }

          await wait(T.preOut);
          if (cancelRef.current) return;

          const cmdEntry = {
            id: nid(),
            node: (
              <div className="qe-tl">
                <span className="tc-blue">$</span>
                <span className="tc-white"> {step.cmd}</span>
              </div>
            ),
          };
          committed = [...committed, cmdEntry];
          setLines([...committed]);
          setTyping(null);

          for (const outLine of step.out) {
            if (cancelRef.current) return;
            await wait(T.out);
            committed = [...committed, { id: nid(), node: renderLine(outLine) }];
            setLines([...committed]);
          }

          await wait(T.step / 2);
          if (cancelRef.current) return;
          committed = [...committed, { id: nid(), node: <div className="qe-tl">&nbsp;</div> }];
          setLines([...committed]);
          await wait(T.step / 2);
        }

        await wait(T.loop);
      }
    }

    run();
    return () => {
      cancelRef.current = true;
      clearTimeout(tid);
    };
  }, []);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines, typing]);

  return (
    <div className={bodyClass} ref={bodyRef}>
      {lines.map(({ id, node }) => (
        <React.Fragment key={id}>{node}</React.Fragment>
      ))}
      {typing ? (
        <div className="qe-tl">
          <span className="tc-blue">$</span>
          <span className="tc-white"> {typing.text.slice(0, typing.len)}</span>
          <span className="qe-cursor"></span>
        </div>
      ) : (
        <div className="qe-tl">
          <span className="tc-blue">$</span>
          <span> </span>
          <span className="qe-cursor"></span>
        </div>
      )}
    </div>
  );
}

// ── Coverage bar panel ────────────────────────────────────────
function CoverageBars() {
  return (
    <div className="qe-cov-panel-wrap">
      <div className="qe-cov-panel-header">coverage · latest run</div>
      {COV_BARS.map((bar) => (
        <div className="qe-cov-bar-row" key={bar.label}>
          <div className="qe-cov-bar-label">{bar.label}</div>
          <div className="qe-cov-bar-track">
            <div
              className="qe-cov-bar-fill"
              style={{ width: `${bar.pct}%`, background: bar.color }}
            />
          </div>
          <div className="qe-cov-bar-pct" style={{ color: bar.color }}>{bar.pct}%</div>
        </div>
      ))}
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────
export default function QEHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="qe-hero-split">

      {/* ── LEFT: Terminals + coverage ── */}
      <div className="qe-hero-left">
        <div className="qe-terminal-fullpane pt-5 mt-5">

          {/* Primary terminal */}
          <div className="qe-term-pane-main">
            <div className="qe-term-pane-label">$ test runner · ci pipeline</div>
            <AnimatedTerminal script={SCRIPT} bodyClass="qe-term-body-main" />
          </div>

          {/* Bottom row: secondary terminal + coverage bars */}
          <div className="qe-term-pane-bottom">
            <div className="qe-term-pane-secondary">
              <div className="qe-term-pane-label">$ security & api · live</div>
              <AnimatedTerminal script={SCRIPT_2} bodyClass="qe-term-body-sm" delay={1200} />
            </div>
            <div className="qe-term-pane-table">
              <div className="qe-term-pane-label">▸ coverage.report</div>
              <CoverageBars />
            </div>
          </div>

        </div>
      </div>

      {/* ── RIGHT: Content ── */}
      <div className="qe-hero-right">
        <div className="qe-hero-content">

          <div className="qe-eyebrow-pill">
            <span className="qe-eyebrow-dot"></span>
            $ qa --mode=shift-left --coverage=full
          </div>

          <h1 className="qe-hero-heading">
            Ship fast.<br />
            <span style={{ color: '#9ca3af' }}>Break nothing.</span>
          </h1>

          <p className="qe-hero-sub">
            MayuraSoft builds quality into every sprint — not as a phase at the end, but as an engineering discipline from day one. Automated, comprehensive, and designed to keep shipping velocity high as your product scales.
          </p>

          <div className="qe-hero-tags">
            {TAGS.map(tag => (
              <span key={tag} className="qe-hero-tag">{tag}</span>
            ))}
          </div>

          <div className="qe-hero-ctas">
            {/* <Link href="/free-audit?service=quality-engineering" className="qe-cta-primary" data-cta="hero-primary"> */}
            <Link href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="qe-cta-primary" data-cta="hero-primary">
              Get a free QA audit &rarr;
            </Link>
            <button
              className="qe-cta-ghost"
              onClick={() => document.getElementById('qe-approach')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See our approach
            </button>
          </div>

        </div>
      </div>

      <DynamicFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get a Free QA Audit"
        description="Fill out the form below and we'll get back to you shortly."
        submitButtonText="Submit"
        fields={defaultFormFields}
        metadata={{ service: 'quality-engineering', pageTitle: 'Quality Engineering' }}
      />
    </section>

  );
}
