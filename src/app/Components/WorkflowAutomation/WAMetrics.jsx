'use client';
import React from 'react';

const METRICS = [
  {
    value: '90 min',
    desc: 'Free process audit — we map your highest-value manual processes and hand back a ranked opportunity list',
    sub: 'No commitment, no cost — ever',
    highlight: true,
  },
  {
    value: '3–5',
    desc: 'Automations identified per audit session on average — ranked by ROI potential and implementation effort',
    sub: 'Effort + impact score for each',
    highlight: true,
  },
  {
    value: '75%',
    desc: 'Average automation coverage achieved across client processes — the rest handled by human-in-the-loop gates',
    sub: '80% automation, 100% edge case coverage',
    highlight: false,
  },
  {
    value: '48 hrs',
    desc: 'Written opportunity map delivered after the audit — specific workflows, tools, and estimated ROI for each',
    sub: 'Written. Specific. Actionable.',
    highlight: true,
  },
];

export default function WAMetrics() {
  return (
    <section className="cd-section py-5 cd-section-muted border-bottom">
      <div className="container py-2">
        <div className="cd-stats-row flex-wrap" style={{ marginTop: 0 }}>
          {METRICS.map((m, idx) => (
            <div key={idx} className="cd-stat-item flex-grow-1" style={{ flexBasis: '22%' }}>
              <div
                className="cd-stat-value"
                style={{
                  fontSize: '32px',
                  fontFamily: 'var(--font-mono, monospace)',
                  color: '#1a1e2d',
                }}
              >
                {m.value}
              </div>
              <p className="mt-2 text-secondary" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                {m.desc}
              </p>
              <div
                className="mt-2"
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: m.highlight ? '#15803d' : '#7a7a7a',
                }}
              >
                {m.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
