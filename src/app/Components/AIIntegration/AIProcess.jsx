'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const PHASES = [
  {
    n: 'Phase 01',
    t: 'Discovery',
    d: 'AI audit',
    duration: '1–2 days',
    acts: [
      'Map your existing systems & data sources',
      'Identify highest-ROI integration opportunities',
      'Assess data quality & AI readiness',
      'Define success metrics & evaluation criteria',
    ],
    tools: ['System interviews', 'Data profiling', 'Feasibility scoring', 'Opportunity matrix'],
  },
  {
    n: 'Phase 02',
    t: 'Design',
    d: 'Architecture',
    duration: '3–5 days',
    acts: [
      'Select the right model(s) for your use case',
      'Design the integration architecture & data flow',
      'Define prompt structure & output schema',
      'Plan evaluation, monitoring & safety guardrails',
    ],
    tools: ['Model benchmarking', 'Architecture doc', 'Prompt design', 'Safety framework'],
  },
  {
    n: 'Phase 03',
    t: 'Build',
    d: 'Integration',
    duration: '2–6 weeks',
    acts: [
      'Build the integration layer & API connectors',
      'Implement RAG pipeline if needed',
      'Develop evaluation test suite',
      'Integrate monitoring & cost tracking dashboard',
    ],
    tools: ['Python / TypeScript', 'LangChain / LlamaIndex', 'Pinecone / pgvector', 'Datadog / custom dashboards'],
  },
  {
    n: 'Phase 04',
    t: 'Evaluate',
    d: 'Test & tune',
    duration: '1–2 weeks',
    acts: [
      'Run evaluation suite against golden dataset',
      'Measure accuracy, latency, cost per query',
      'Prompt optimisation iterations',
      'User acceptance testing with your team',
    ],
    tools: ['Eval framework', 'A/B testing', 'Human feedback loops', 'Performance benchmarks'],
  },
  {
    n: 'Phase 05',
    t: 'Deploy',
    d: 'Handover',
    duration: '2–3 days',
    acts: [
      'Production deployment with monitoring',
      'Team training on prompt management',
      'Documentation: architecture, runbooks, FAQs',
      'Optional: ongoing optimisation retainer',
    ],
    tools: ['CI/CD integration', 'Prompt version control', 'Runbook delivery', 'Training sessions'],
  },
];

export default function AIProcess() {
  const [active, setActive] = useState(0);

  const phase = PHASES[active];

  return (
    <section className="cd-section cd-section-muted border-bottom py-5">
      <div className="container py-4">
        <SectionTitle
          className="text-center mb-5"
          SubTitle="Our delivery process"
          Title="From first conversation to production AI integration — in five phases"
          Content="Click each phase to see what we do, what you receive, and how long it takes."
          isDarkMode={false}
        />

        {/* Tab nav — reuses step-nav / sn / on from custom-dev.css */}
        <div className="step-nav mb-4">
          {PHASES.map((p, i) => (
            <button
              key={i}
              className={`p-0 pb-1 sn${active === i ? ' on' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className='pe-2' style={{ fontSize: '10px', display: 'block', color: active === i ? 'rgba(255,255,255,0.6)' : '#a0a0a0' }}>
                {p.n}
              </span>
              {p.t}
            </button>
          ))}
        </div>

        {/* Step body — reuses step-body from custom-dev.css */}
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
              <div className="sb-out-lbl mb-3">TOOLS & METHODS</div>
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
