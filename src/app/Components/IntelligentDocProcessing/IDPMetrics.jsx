'use client';
import React from 'react';

const METRICS = [
  {
    value: '95%',
    desc: 'Extraction accuracy on well-structured invoices, purchase orders, and forms',
    sub: 'Validated across 50+ document types',
    highlight: true,
  },
  {
    value: '90%',
    desc: 'Reduction in manual data entry time after a full document pipeline goes live',
    sub: '10× faster than human keying',
    highlight: true,
  },
  {
    value: '4 sec',
    desc: 'Average end-to-end processing time per document — from ingest to structured output',
    sub: 'Including OCR, extraction, and validation',
    highlight: false,
  },
  {
    value: '3 wks',
    desc: 'To your first working pipeline from kickoff — one document type, end-to-end',
    sub: 'Free doc audit → pipeline in 3 weeks',
    highlight: true,
  },
];

export default function IDPMetrics() {
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
              <p className="mt-2 text-secondary" style={{ fontSize: '14px', lineHeight: '1.5' }}>{m.desc}</p>
              <div className="mt-2" style={{ fontSize: '12px', fontWeight: '600', color: m.highlight ? '#3730a3' : '#7a7a7a' }}>
                {m.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
