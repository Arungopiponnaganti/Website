'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const timeline = [
  {
    days: 'Day 1–2',
    phase: 'Kickoff',
    items: [
      'Kickoff call with your team and ours',
      'Access provisioning: cloud, codebase, deployment pipeline',
      'Basic uptime monitoring live within 48 hours'
    ],
    delivered: ['Monitoring dashboard live', 'Escalation contacts confirmed']
  },
  {
    days: 'Day 3–5',
    phase: 'Deep dive',
    items: [
      'Architecture walkthrough with your lead engineer',
      'Critical paths, failure modes, and past incidents reviewed',
      'Custom alert thresholds configured per service'
    ],
    delivered: ['Alert rules configured', 'Runbooks v1 drafted']
  },
  {
    days: 'Day 6–8',
    phase: 'Hardening',
    items: [
      'Runbooks written and reviewed with your team',
      'Incident simulation exercise (tabletop or live)',
      'On-call rotation and escalation paths verified'
    ],
    delivered: ['Full runbook library', 'On-call rotation active']
  },
  {
    days: 'Day 9–10',
    phase: 'Handover',
    items: [
      'Full handover review with your stakeholders',
      'Status page live and branded for your product',
      'First monthly reporting cycle starts'
    ],
    delivered: ['Status page live', 'SLA clock starts']
  }
];

export default function MASHandover() {
  return (
    <section className="cd-section py-5 cd-section-light border-bottom border-top">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <SectionTitle
              className="text-center mb-5"
              SubTitle="Getting started"
              Title="From contract signed to fully managed in 2 weeks"
              Content="Our structured onboarding means your application is under full monitoring coverage in 48 hours and completely handed over within 10 business days."
              isDarkMode={false}
            />

            <div className="ho-timeline mt-5">
              {timeline.map((row, idx) => (
                <div className="ho-row" key={idx}>
                  <div className="ho-week">
                    <div style={{ fontSize: '13px', fontWeight: '500', color: '#a0a0a0', fontFamily: 'var(--font-mono, monospace)' }}>{row.days}</div>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: '#1a1e2d' }}>{row.phase}</div>
                  </div>
                  <div className="ho-right">
                    <div className="d-flex flex-column gap-3 justify-content-center">
                      {row.items.map((item, i) => (
                        <div key={i} className="d-flex gap-2">
                          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#ff3c00', marginTop: '7px', flexShrink: 0 }}></div>
                          <span style={{ fontSize: '14px', color: '#555', lineHeight: '1.5' }}>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="ho-out justify-content-center">
                      <div style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#a0a0a0', marginBottom: '4px' }}>Delivered</div>
                      {row.delivered.map((del, di) => (
                        <div key={di} style={{ fontSize: '13px', color: '#10b981', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <i className="bi bi-check-circle-fill" style={{ fontSize: '12px' }}></i>
                          {del}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
