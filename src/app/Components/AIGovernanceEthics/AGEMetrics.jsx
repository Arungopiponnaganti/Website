'use client';
import React from 'react';

const METRICS = [
  {
    value: '6',
    desc: 'Governance dimensions we assess and build frameworks for — transparency, fairness, privacy, risk, oversight, and security',
    sub: 'Every dimension is documented and auditable',
    highlight: true,
  },
  {
    value: '4 wks',
    desc: 'From governance audit to initial framework delivered — policies, gap analysis, and remediation roadmap',
    sub: 'Written. Practical. Board-ready.',
    highlight: true,
  },
  {
    value: 'EU AI Act',
    desc: 'Every framework we build is mapped to current regulatory requirements — EU AI Act, GDPR Art. 22, India DPDPA 2023',
    sub: 'Regulatory alignment built in',
    highlight: false,
  },
  {
    value: '100%',
    desc: 'Written, documented, and auditable — not just advisory opinions. Every deliverable survives a regulator or auditor review',
    sub: 'Docs you can show anyone',
    highlight: true,
  },
];

export default function AGEMetrics() {
  return (
    <section className="cd-section cd-section-muted py-5 border-bottom">
      <div className="container py-2">
        <div className="cd-stats-row flex-wrap" style={{ marginTop: 0 }}>
          {METRICS.map((m, idx) => (
            <div key={idx} className="cd-stat-item flex-grow-1" style={{ flexBasis: '22%' }}>
              <div className="cd-stat-value" style={{ fontSize: '28px', fontFamily: 'var(--font-mono, monospace)', color: '#1a1e2d' }}>
                {m.value}
              </div>
              <p className="mt-2 text-secondary" style={{ fontSize: '14px', lineHeight: '1.5' }}>{m.desc}</p>
              <div className="mt-2" style={{ fontSize: '12px', fontWeight: '600', color: m.highlight ? '#854F0B' : '#7a7a7a' }}>
                {m.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
