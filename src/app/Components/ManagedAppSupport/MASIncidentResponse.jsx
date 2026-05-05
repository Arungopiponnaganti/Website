'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const INC_STEPS = [
  {
    num: '01', title: 'Detect', dur: '< 2 mins', durColor: '#ef4444', durBg: 'rgba(239, 68, 68, 0.1)',
    desc: 'Monitoring thresholds are breached. Alerts fire automatically to the on-call engineer via PagerDuty based on the severity of the alert.',
    outputs: ['Automated alert generation', 'Severity classification', 'Page sent to primary on-call'],
    cards: [
      { t: 'Automated paging', d: 'No waiting for user reports', icon: 'bi-bell-fill', theme: 'bento-orange' },
      { t: 'Context included', d: 'Logs and traces attached to alert', icon: 'bi-card-text', theme: 'bento-blue' }
    ]
  },
  {
    num: '02', title: 'Assess', dur: '< 15 mins (for P1)', durColor: '#f59e0b', durBg: 'rgba(245, 158, 11, 0.1)',
    desc: 'The engineer acknowledges the page, logs into the environment, and begins assessing the impact boundary and identifying the root system.',
    outputs: ['Alert acknowledged', 'Status page updated to "Investigating"', 'Secondary engineer paged if needed'],
    cards: [
      { t: 'Rapid triage', d: 'Pinpointing the failing component', icon: 'bi-search', theme: 'bento-purple' },
      { t: 'Stakeholder comms', d: 'Status page / Slack update', icon: 'bi-megaphone-fill', theme: 'bento-pink' }
    ]
  },
  {
    num: '03', title: 'Mitigate', dur: 'SLA backed', durColor: '#10b981', durBg: 'rgba(16, 185, 129, 0.1)',
    desc: 'Immediate action to stop the bleeding. This might mean rolling back a deployment, scaling up infrastructure, or restarting a degraded service.',
    outputs: ['Runbook executed', 'Service restored to functional state', 'Customer impact halted'],
    cards: [
      { t: 'Runbook execution', d: 'Documented mitigation steps', icon: 'bi-journal-check', theme: 'bento-green' },
      { t: 'System recovery', d: 'Prioritizing uptime over full fix', icon: 'bi-arrow-clockwise', theme: 'bento-blue' }
    ]
  },
  {
    num: '04', title: 'Resolve', dur: 'Same day', durColor: '#3b82f6', durBg: 'rgba(59, 130, 246, 0.1)',
    desc: 'With the immediate impact stopped, the team implements the permanent fix to the underlying issue that caused the incident.',
    outputs: ['Root cause identified', 'Permanent patch deployed', 'Status page resolved'],
    cards: [
      { t: 'Code/Infra fix', d: 'Permanent resolution deployed', icon: 'bi-tools', theme: 'bento-yellow' },
      { t: 'All clear given', d: 'Monitoring confirmed stable', icon: 'bi-check-circle-fill', theme: 'bento-green' }
    ]
  },
  {
    num: '05', title: 'Review', dur: 'Within 24 hrs', durColor: '#8b5cf6', durBg: 'rgba(139, 92, 246, 0.1)',
    desc: 'We conduct a blameless post-mortem and deliver a Root Cause Analysis (RCA) report outlining what happened, why, and how we prevent it from happening again.',
    outputs: ['RCA document delivered', 'Runbooks updated with new learnings', 'Monitoring alerts refined'],
    cards: [
      { t: 'RCA delivery', d: 'Transparent post-mortem report', icon: 'bi-file-earmark-text-fill', theme: 'bento-purple' },
      { t: 'Process improvement', d: 'Preventing the exact same failure', icon: 'bi-graph-up-arrow', theme: 'bento-orange' }
    ]
  }
];

export default function MASIncidentResponse() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="cd-section py-5 cd-section-muted">
      <div className="container py-4">
        <SectionTitle
          className="text-center mb-5"
          SubTitle="How we respond"
          Title="Every incident follows the same structured playbook"
          Content="Click each phase to see exactly what happens — and who does what — when something goes wrong in production."
          isDarkMode={false}
        />

        <div className="stepper-wrapper mt-4">
          <div className="step-nav mb-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
            {INC_STEPS.map((s, idx) => (
              <button
                key={idx}
                className={`sn${activeStep === idx ? ' on' : ''}`}
                onClick={() => setActiveStep(idx)}
                style={{ flex: 'none', width: '100%' }}
              >
                {s.num} · {s.title}
              </button>
            ))}
          </div>

          <div className="step-body">
            <div className="row g-4 g-lg-5 align-items-start">

              <div className="col-12 col-lg-7">
                <div className="sb-num text-uppercase mb-2">Phase {INC_STEPS[activeStep].num}</div>
                <h3 className="sb-t mb-3">{INC_STEPS[activeStep].title}</h3>
                <p className="sb-desc mb-4">{INC_STEPS[activeStep].desc}</p>

                <div className="sb-out-lbl text-uppercase mb-3">Key Actions</div>
                <div className="d-flex flex-column gap-2 mb-4">
                  {INC_STEPS[activeStep].outputs.map((out, jdx) => (
                    <div key={jdx} className="sb-out-item d-flex align-items-center gap-2">
                      <i className="bi bi-check-circle sb-check-icon flex-shrink-0" style={{ color: INC_STEPS[activeStep].durColor }}></i>
                      {out}
                    </div>
                  ))}
                </div>

                <div className="d-flex align-items-center gap-2 mt-4 pt-4 border-top">
                  <span className="sb-dur-pill" style={{ background: INC_STEPS[activeStep].durBg, color: INC_STEPS[activeStep].durColor }}>Target</span>
                  <span className="sb-dur-text">{INC_STEPS[activeStep].dur}</span>
                </div>
              </div>

              <div className="col-12 col-lg-5 d-flex flex-column gap-3">
                {INC_STEPS[activeStep].cards.map((card, cdx) => (
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
