import React from 'react';

const METRICS = [
  {
    value: '$12.9M',
    desc: 'Average annual cost of poor data quality per Gartner — governance is the protection, not the cost',
    sub: '↑ The risk ungoverned data creates every year',
    highlight: true,
  },
  {
    value: '12 wks',
    desc: 'From audit to a working governance framework in production — not a document, a practice',
    sub: 'Catalogue, lineage, policies, and roles live',
    highlight: false,
  },
  {
    value: '75+',
    desc: 'Governance health score across all six dimensions after a MayuraSoft engagement — up from a typical 20',
    sub: '↑ From critical to strong in one programme',
    highlight: true,
  },
  {
    value: '100%',
    desc: 'Written policies, runbooks, and training delivered — everything your team needs to run governance independently',
    sub: 'No slide decks, no abstract advice',
    highlight: false,
  },
];

export default function DGMetrics() {
  return (
    <section className="cd-section py-5 cd-section-light border-bottom">
      <div className="container py-2">
        <div className="cd-stats-row flex-wrap" style={{ marginTop: 0 }}>
          {METRICS.map((m, idx) => (
            <div key={idx} className="cd-stat-item flex-grow-1" style={{ flexBasis: '22%' }}>
              <div
                className="cd-stat-value"
                style={{ fontSize: '30px', fontFamily: 'var(--font-mono, monospace)', color: '#1a1e2d' }}
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
