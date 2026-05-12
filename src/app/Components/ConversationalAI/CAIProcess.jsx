'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const PHASES = [
  {
    n: 'Phase 01',
    t: 'Discover',
    d: 'Conversation design',
    duration: 'Week 1',
    acts: [
      'Map every user intent and expected question',
      'Define bot persona, tone, and escalation rules',
      'Identify knowledge sources: docs, FAQs, CRM, APIs',
      'Set resolution rate and CSAT success targets',
    ],
    tools: [
      'Intent mapping workshop',
      'Conversation flow diagrams',
      'Knowledge audit',
      'Success metric definition',
    ],
  },
  {
    n: 'Phase 02',
    t: 'Design',
    d: 'Architecture & flows',
    duration: 'Week 2',
    acts: [
      'Design full conversation architecture',
      'Map every intent to a handler (RAG / rule / API / human)',
      'Write persona and tone guidelines',
      'Design human handoff trigger logic and context payload',
    ],
    tools: [
      'Conversation flow tool',
      'Prompt design document',
      'Persona style guide',
      'Handoff trigger spec',
    ],
  },
  {
    n: 'Phase 03',
    t: 'Build',
    d: 'Bot development',
    duration: 'Weeks 3–4',
    acts: [
      'Build knowledge base and RAG pipeline',
      'Develop LLM integration with prompt library',
      'Integrate all APIs (CRM, ticketing, OMS, HRMS)',
      'Build admin console for knowledge management',
    ],
    tools: [
      'LangChain / LlamaIndex',
      'Pinecone / pgvector',
      'FastAPI integration layer',
      'Admin UI (React)',
    ],
  },
  {
    n: 'Phase 04',
    t: 'Evaluate',
    d: 'Test & safety audit',
    duration: 'Week 5',
    acts: [
      'Red-team evaluation — actively try to break the bot',
      'User acceptance testing with 10–20 real users',
      'Measure resolution rate against baseline',
      'Prompt optimisation based on test results',
    ],
    tools: [
      'Red-team test suite',
      'UAT session recordings',
      'Resolution rate dashboard',
      'Prompt versioning',
    ],
  },
  {
    n: 'Phase 05',
    t: 'Launch',
    d: 'Deploy & monitor',
    duration: 'Week 6+',
    acts: [
      'Production deployment to your channel(s)',
      'Live monitoring for first 30 days',
      'Team training on bot admin and escalation',
      'Monthly optimisation cadence established',
    ],
    tools: [
      'Channel API integration',
      'Analytics dashboard live',
      'Admin training session',
      'Optimisation runbook',
    ],
  },
];

export default function CAIProcess() {
  const [active, setActive] = useState(0);
  const phase = PHASES[active];

  return (
    <section className="cd-section cd-section-light border-bottom py-5 pb-5">
      <div className="container py-4">
        <SectionTitle
          className="text-center"
          SubTitle="How we build"
          Title="From conversation design to production — five structured phases"
          Content="Click each phase to see what we do, what you receive, and how long it takes."
          isDarkMode={false}
        />

        {/* Phase nav — reuses shared step-nav / sn / sn.on */}
        <div className="step-nav mb-4">
          {PHASES.map((p, i) => (
            <button
              key={i}
              className={`p-0 pb-1 sn${active === i ? ' on' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className='pe-2' style={{
                fontSize: '10px',
                display: 'block',
                color: active === i ? 'rgba(255,255,255,0.6)' : '#a0a0a0',
                // marginBottom: '2px',
              }}>
                {p.n}
              </span>
              {p.t}
            </button>
          ))}
        </div>

        {/* Phase body — reuses shared step-body */}
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
