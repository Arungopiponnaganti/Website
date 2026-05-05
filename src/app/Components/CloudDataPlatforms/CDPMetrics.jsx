import React from 'react';

const METRICS = [
  {
    value: '3 clouds',
    desc: 'AWS, Azure, and GCP — certified across all three major cloud providers for data platform implementation',
    sub: '↑ Platform-agnostic recommendation, not vendor-driven',
    highlight: false,
  },
  {
    value: '30 days',
    desc: 'To a production-ready platform from kickoff — with data flowing and a working dashboard delivered',
    sub: '↑ Day 30 value delivery, not month 6',
    highlight: true,
  },
  {
    value: 'Single truth',
    desc: 'One definition per metric, used everywhere — finance, operations, and sales all see the same number',
    sub: '↑ No more conflicting numbers across departments',
    highlight: true,
  },
  {
    value: '10× scale',
    desc: 'Data volume growth handled without architectural rebuild — platform designed to scale from kickoff',
    sub: '↑ Built for where you\'re going, not where you are today',
    highlight: true,
  },
];

export default function CDPMetrics() {
  return (
    <section className="cd-section py-5 cd-section-light border-bottom">
      <div className="container py-2">
        <div className="cd-stats-row flex-wrap" style={{ marginTop: 0 }}>
          {METRICS.map((m, idx) => (
            <div key={idx} className="cd-stat-item flex-grow-1" style={{ flexBasis: '22%' }}>
              <div
                className="cd-stat-value"
                style={{ fontSize: '28px', fontFamily: 'var(--font-mono, monospace)', color: '#1a1e2d' }}
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
