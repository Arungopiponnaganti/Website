'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const PHASES = [
  {
    n: 'Phase 01',
    t: 'Discover',
    d: 'Process audit',
    duration: '1 wk',
    acts: [
      '90-min process mapping workshop',
      'Document as-is flow with all exceptions',
      'Identify automation candidates & rank by ROI',
      'Stakeholder interviews & pain point capture',
    ],
    tools: ['Miro / Lucidchart', 'Process documentation', 'ROI estimation model', 'Stakeholder survey'],
  },
  {
    n: 'Phase 02',
    t: 'Design',
    d: 'Workflow architecture',
    duration: '1–2 wks',
    acts: [
      'Design target automation architecture',
      'Map every trigger, condition, and action',
      'Define escalation paths and human gates',
      'Select tooling: no-code vs. custom code',
    ],
    tools: ['Flow diagram tooling', 'Decision logic documentation', 'Tool evaluation matrix', 'Architecture sign-off'],
  },
  {
    n: 'Phase 03',
    t: 'Build',
    d: 'Automation delivery',
    duration: '2–6 wks',
    acts: [
      'Build automation in selected platform',
      'Integrate all required systems',
      'Implement error handling & retry logic',
      'Unit test every branch and edge case',
    ],
    tools: ['n8n / Make / Zapier', 'Custom Python / Node.js functions', 'API integrations', 'Test data sets'],
  },
  {
    n: 'Phase 04',
    t: 'Launch',
    d: 'Deploy & hand over',
    duration: '1 wk',
    acts: [
      'Parallel run with manual process',
      'Production cutover with monitoring live',
      'Team training on management & override',
      'Dashboard & documentation handover',
    ],
    tools: ['Monitoring dashboard', 'Admin runbook', 'Training session recording', 'Escalation contacts'],
  },
];

export default function WAProcess() {
  const [active, setActive] = useState(0);

  const phase = PHASES[active];

  return (
    <section className="cd-section cd-section-light border-bottom py-5 pb-5">
      <div className="container py-4">
        <SectionTitle
          className="text-center"
          SubTitle="How we deliver"
          Title="Four phases from messy manual process to smooth automation"
          Content="Click any phase to see what we do, what you receive, and how long it takes."
          isDarkMode={false}
        />

        {/* Phase nav — reuses .step-nav / .sn / .sn.on */}
        <div className="step-nav mb-4">
          {PHASES.map((p, i) => (
            <button
              key={i}
              className={`p-0 pb-1 sn${active === i ? ' on' : ''}`}
              onClick={() => setActive(i)}
            >
              <span style={{
                fontSize: '10px', display: 'block',
                color: active === i ? 'rgba(255,255,255,0.6)' : '#a0a0a0',
                // marginBottom: '2px',
              }}>
                {p.n}
              </span>
              {p.t}
            </button>
          ))}
        </div>

        {/* Phase body — reuses .step-body */}
        <div className="step-body">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="d-flex align-items-center gap-3 mb-3">
                <span className="sb-num">{phase.n}</span>
                <span className="sb-dur-pill">{phase.duration}</span>
              </div>
              <div className="sb-t mb-3">{phase.t} — {phase.d}</div>

              <div className="sb-out-lbl mb-3">WHAT WE DO</div>
              <div className="d-flex flex-column gap-2">
                {phase.acts.map((a, i) => (
                  <div key={i} className="d-flex align-items-start gap-3">
                    <span className="sb-check-icon">
                      <i className="bi bi-check-circle-fill" />
                    </span>
                    <span className="sb-out-item">{a}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="sb-out-lbl mb-3">TOOLS &amp; METHODS</div>
              <div className="d-flex flex-column gap-2">
                {phase.tools.map((t, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '12px 16px',
                      background: '#fafbfc',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '14px',
                      color: '#4b5563',
                      fontWeight: '500',
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
