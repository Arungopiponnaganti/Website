'use client';
import React from 'react';

const metrics = [
  {
    value: '48 hrs',
    desc: 'From first conversation to a working AI integration prototype — using your actual data',
    sub: 'Validated with real system + real output',
    highlight: true,
  },
  {
    value: '15+',
    desc: 'AI models and providers we integrate: OpenAI, Anthropic, Google, Meta, Mistral, and custom fine-tuned',
    sub: "Model-agnostic — we pick what's right for you",
    highlight: true,
  },
  {
    value: 'Zero',
    desc: 'Rebuilds of your existing systems required — our integration layer wraps what you already have',
    sub: 'Additive, not destructive architecture',
    highlight: false,
  },
  {
    value: '100%',
    desc: 'Data stays in your infrastructure — we design for full data residency by default',
    sub: 'Private deployment available for regulated industries',
    highlight: true,
  },
];

export default function AIMetrics() {
  return (
    <section className="cd-section py-5 cd-section-light border-bottom">
      <div className="container py-2">
        <div className="cd-stats-row flex-wrap" style={{ marginTop: 0 }}>
          {metrics.map((m, idx) => (
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
                  color: m.highlight ? '#534AB7' : '#7a7a7a',
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
