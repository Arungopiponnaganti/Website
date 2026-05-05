'use client';
import React from 'react';

const METRICS = [
  {
    value: '70%',
    desc: 'Of support queries resolved without a human agent — the benchmark for a well-built, well-trained bot',
    sub: 'Industry-validated benchmark',
    highlight: false,
  },
  {
    value: '24/7',
    desc: 'Availability across every timezone — no after-hours delay, no queue, no weekend surcharge',
    sub: 'Unlimited concurrent conversations',
    highlight: true,
  },
  {
    value: '8 sec',
    desc: 'Average first response time vs. 4.2 hours for email-first support teams — the gap that wins customer loyalty',
    sub: 'vs. 4.2 hrs industry email average',
    highlight: true,
  },
  {
    value: '3 wks',
    desc: 'To first working bot — from brief and knowledge base to live on your channel of choice',
    sub: 'Free conversation design session first',
    highlight: true,
  },
];

export default function CAIMetrics() {
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
              <div
                className="mt-2"
                style={{ fontSize: '12px', fontWeight: '600', color: m.highlight ? '#15803d' : '#7a7a7a' }}
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
