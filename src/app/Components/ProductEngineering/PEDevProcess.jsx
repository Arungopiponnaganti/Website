'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const STEPS = [
  {
    num: '01', title: 'Discover', dur: '1–2 weeks',
    desc: 'We run a structured discovery workshop to map your vision, constraints, and success criteria. We audit existing code if any, define the scope precisely, and give you a fixed-price proposal before a single line of code is written.',
    outputs: ['Product requirements document', 'Technical feasibility assessment', 'Fixed-scope proposal with timeline', 'Risk register'],
    cards: [
      { t: 'Discovery workshop', d: 'Half-day session, remote or on-site', icon: 'bi-people-fill', theme: 'bento-orange' },
      { t: 'Codebase audit', d: 'If existing code exists', icon: 'bi-code-slash', theme: 'bento-purple' },
      { t: 'Proposal delivery', d: 'Within 5 business days', icon: 'bi-file-earmark-check-fill', theme: 'bento-green' }
    ]
  },
  {
    num: '02', title: 'Design', dur: '2–3 weeks',
    desc: 'Solution architecture, data modelling, API design, and UX wireframes — all defined before development begins. You review and sign off on every design decision. No surprises downstream.',
    outputs: ['System architecture diagram', 'Database schema', 'API contract (OpenAPI spec)', 'UX wireframes & user flows'],
    cards: [
      { t: 'Architecture review', d: 'With your technical stakeholders', icon: 'bi-diagram-3-fill', theme: 'bento-blue' },
      { t: 'Design sign-off', d: 'Your approval gates every phase', icon: 'bi-pen-fill', theme: 'bento-pink' },
      { t: 'Sprint plan locked', d: 'Full roadmap visible from day one', icon: 'bi-calendar2-check-fill', theme: 'bento-yellow' }
    ]
  },
  {
    num: '03', title: 'Build', dur: '6–16 weeks',
    desc: 'Two-week sprints, each ending with a live demo to your stakeholders. Every sprint ships tested, deployable code. You have access to the live staging environment throughout.',
    outputs: ['Working software every 2 weeks', 'Automated test suite', 'Deployment to staging', 'Weekly written status update'],
    cards: [
      { t: 'Sprint demo', d: 'Every second Friday, stakeholders invited', icon: 'bi-display-fill', theme: 'bento-purple' },
      { t: 'Continuous QA', d: 'Zero-regression policy enforced', icon: 'bi-shield-fill-check', theme: 'bento-green' },
      { t: 'Daily standups', d: 'Via Slack or your preferred tool', icon: 'bi-chat-dots-fill', theme: 'bento-orange' }
    ]
  },
  {
    num: '04', title: 'Launch', dur: '1–2 weeks',
    desc: 'Production deployment, performance validation under real load, monitoring setup, and a structured go-live checklist. We stay on-call for the first 30 days post-launch.',
    outputs: ['Production deployment', 'Load testing report', 'Monitoring & alerting configured', 'Go-live runbook'],
    cards: [
      { t: 'Launch readiness review', d: 'Formal sign-off before go-live', icon: 'bi-rocket-takeoff-fill', theme: 'bento-blue' },
      { t: '30-day on-call support', d: 'Included in every engagement', icon: 'bi-headset', theme: 'bento-yellow' },
      { t: 'Handover documentation', d: 'Codebase, infra, and runbooks', icon: 'bi-journal-bookmark-fill', theme: 'bento-pink' }
    ]
  },
  {
    num: '05', title: 'Scale', dur: 'Ongoing',
    desc: 'Post-launch, most clients continue with a scale-up retainer — adding features, improving performance, and evolving the product. We can also hand over fully to your internal team with structured knowledge transfer.',
    outputs: ['Ongoing feature sprints', 'Performance optimisation', 'Team augmentation options', 'Full knowledge transfer if needed'],
    cards: [
      { t: 'Retainer options', d: 'Flexible squad size month-to-month', icon: 'bi-arrow-repeat', theme: 'bento-green' },
      { t: 'Internal team handover', d: 'Structured 4-week transition', icon: 'bi-people-fill', theme: 'bento-orange' },
      { t: 'Long-term partnership', d: 'Average client engagement: 14 months', icon: 'bi-graph-up-arrow', theme: 'bento-purple' }
    ]
  }
];

export default function PEDevProcess({
  title = "A structured process <br /> <span className=''>no surprises, no scope drift</span>",
  subTitle = "How we deliver",
  content = "",
  steps = STEPS
}) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="cd-section py-5 cd-section-muted">
      <div className="container py-4">
        <SectionTitle
          className="text-center mb-5"
          SubTitle={subTitle}
          Title={title}
          Content={content}
          isDarkMode={false}
        />

        <div className="stepper-wrapper mt-4">
          <div className="step-nav mb-4">
            {steps.map((s, idx) => (
              <button
                key={idx}
                className={`sn${activeStep === idx ? ' on' : ''}`}
                onClick={() => setActiveStep(idx)}
              >
                {s.num} · {s.title}
              </button>
            ))}
          </div>

          <div className="step-body">
            <div className="row g-4 g-lg-5 align-items-start">

              <div className="col-12 col-lg-7">
                <div className="sb-num text-uppercase mb-2">Phase {steps[activeStep].num}</div>
                <h3 className="sb-t mb-3">{steps[activeStep].title}</h3>
                <p className="sb-desc mb-4">{steps[activeStep].desc}</p>

                <div className="sb-out-lbl text-uppercase mb-3">Deliverables</div>
                <div className="d-flex flex-column gap-2 mb-4">
                  {steps[activeStep].outputs.map((out, jdx) => (
                    <div key={jdx} className="sb-out-item d-flex align-items-center gap-2">
                      <i className="bi bi-check-circle sb-check-icon flex-shrink-0"></i>
                      {out}
                    </div>
                  ))}
                </div>

                <div className="d-flex align-items-center gap-2 mt-4 pt-4 border-top">
                  <span className="sb-dur-pill">Duration</span>
                  <span className="sb-dur-text">{steps[activeStep].dur}</span>
                </div>
              </div>

              <div className="col-12 col-lg-5 d-flex flex-column gap-3">
                {steps[activeStep].cards.map((card, cdx) => (
                  <div key={cdx} className={`sb-card cd-bento-card ${card.theme}`}>
                    <div className="cd-bento-bg">
                      <div className="cd-shape-1"></div>
                      <div className="cd-shape-2"></div>
                      <div className="cd-shape-3"></div>
                    </div>
                    <div className="sb-card-body d-flex align-items-start gap-3">
                      <div className="sb-card-icon flex-shrink-0">
                        <i className={`bi ${card.icon}`}></i>
                      </div>
                      <div>
                        <div className="sb-card-t mb-1">{card.t}</div>
                        <div className="sb-card-d">{card.d}</div>
                      </div>
                    </div>
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
