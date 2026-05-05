'use client';
import React from 'react';

const metrics = [
  {
    value: '99.97%',
    desc: 'Average uptime across all managed client applications',
    sub: '↑ vs 97.x% industry avg for unmanaged',
    highlight: true
  },
  {
    value: '<15m',
    desc: 'Mean time to first response on P1 incidents — guaranteed',
    sub: 'vs. industry avg of 4+ hours',
    highlight: true
  },
  {
    value: '24 / 7',
    desc: 'Human monitoring — not just automated alerts. Engineers on-call, always.',
    sub: '365 days including public holidays',
    highlight: true
  },
  {
    value: '48 hrs',
    desc: 'From contract sign to full monitoring coverage, live runbooks, and on-call rotation active',
    sub: 'Fast onboarding, no multi-week setup',
    highlight: true
  }
];

export default function MASMetrics() {
  return (
    <section className="cd-section py-5 cd-section-light border-bottom">
      <div className="container py-2">
        <div className="cd-stats-row flex-wrap" style={{ marginTop: 0 }}>
          {metrics.map((m, idx) => (
            <div key={idx} className="cd-stat-item flex-grow-1" style={{ flexBasis: '22%' }}>
              <div className="cd-stat-value" style={{ fontSize: '32px', fontFamily: 'var(--font-mono, monospace)', color: '#1a1e2d' }}>
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
                  color: m.highlight ? '#10b981' : '#7a7a7a'
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
