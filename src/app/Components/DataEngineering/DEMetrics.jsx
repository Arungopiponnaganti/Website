import React from 'react';

const METRICS = [
  {
    value: '99.9%',
    desc: 'Pipeline uptime SLA on managed infrastructure — vs. typical 94% on DIY pipelines',
    sub: '↑ vs. typical 94% on self-built pipelines',
    highlight: true,
  },
  {
    value: '10×',
    desc: 'Faster query performance after warehouse optimisation — from hours to seconds on common queries',
    sub: 'From hours to seconds on common queries',
    highlight: true,
  },
  {
    value: '3 wks',
    desc: 'To first production-grade data pipeline from kickoff — Day 21 value, not month 6',
    sub: 'Day 21 value, not month 6',
    highlight: false,
  },
  {
    value: '60%',
    desc: "Reduction in data team's pipeline maintenance burden — more time for analytics and product work",
    sub: '↑ More time for insights, less for fixes',
    highlight: true,
  },
];

export default function DEMetrics() {
  return (
    <section className="cd-section py-5 cd-section-light border-bottom">
      <div className="container py-2">
        <div className="cd-stats-row flex-wrap" style={{ marginTop: 0 }}>
          {METRICS.map((m, idx) => (
            <div key={idx} className="cd-stat-item flex-grow-1" style={{ flexBasis: '22%' }}>
              <div
                className="cd-stat-value"
                style={{ fontSize: '32px', fontFamily: 'var(--font-mono, monospace)', color: '#1a1e2d' }}
              >
                {m.value}
              </div>
              <p className="mt-2 text-secondary" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                {m.desc}
              </p>
              <div className="mt-2" style={{ fontSize: '12px', fontWeight: '600', color: m.highlight ? '#15803d' : '#7a7a7a' }}>
                {m.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
