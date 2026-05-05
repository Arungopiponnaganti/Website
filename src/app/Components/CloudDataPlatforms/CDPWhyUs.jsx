'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const OUTCOMES = [
  {
    num: 'Single source',
    title: 'One version of every metric',
    desc: 'Finance, operations, and sales see the same numbers because they are all reading from the same transformation layer. Metric definitions are written once, tested automatically, and used everywhere.',
    caveat: 'Requires a governance layer that defines ownership for each metric.',
  },
  {
    num: '↓ 70–80%',
    title: 'Less time spent on data preparation',
    desc: 'Analysts typically spend 60–80% of their time finding, cleaning, and reconciling data before they can analyse it. A functioning platform moves that burden to the pipeline layer — automated, documented, and reliable.',
    caveat: 'Outcome depends on how fragmented the current environment is.',
  },
  {
    num: 'Days → hours',
    title: 'Faster reporting cycles',
    desc: 'Reports that require manual extraction, consolidation, and reconciliation take days. When the platform handles those steps automatically, the same report is available on a defined schedule without any manual work.',
    caveat: 'Applies to reports built on platform data. Legacy reports built outside the platform are unaffected until migrated.',
  },
  {
    num: 'Scales',
    title: 'Volume growth without rebuilding',
    desc: 'Cloud warehouses add compute and storage on demand. A platform handling 100GB of data today can handle 10TB in two years without architectural change — only cost increases proportionally with volume.',
    caveat: 'Assumes the platform was designed with scalability in mind from the start.',
  },
  {
    num: 'Full trail',
    title: 'Data lineage — every number traceable',
    desc: 'With lineage tracking, any number in any report can be traced back through every transformation to the source system that produced it. This is what internal audit, compliance teams, and regulators ask for.',
    caveat: 'Requires lineage tooling to be implemented as part of the platform — not added after the fact.',
  },
  {
    num: 'Enables AI',
    title: 'Foundation for machine learning',
    desc: 'AI and ML models require clean, consistent, versioned training data. A governed cloud data platform provides this — which is why most AI projects stall without one. The platform is not AI itself; it is the prerequisite for AI that works.',
    caveat: 'ML workloads may require additional components (Databricks, feature stores) depending on scale.',
  },
];

export default function CDPBusinessValue() {
  return (
    <section className="cd-section cd-section-light border-top border-bottom py-5">
      <div className="container py-4">
        <SectionTitle
          className="mb-4"
          SubTitle="Business outcomes"
          Title="What changes after a platform is in place"
          Content="These outcomes are based on typical production deployments. Actual results vary by organisation size, data volume, and starting state. We establish baseline measurements during the assessment phase so you have a before/after comparison."
          isDarkMode={false}
        />

        <div className="row g-3 mt-2">
          {OUTCOMES.map((o, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div style={{ padding: '22px', border: '1px solid #e5e7eb', borderRadius: '12px', background: '#fff', height: '100%', transition: 'box-shadow 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(5,10,30,0.07)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <div style={{ fontSize: '22px', fontWeight: '700', color: '#050a1e', fontFamily: 'var(--font-mono, monospace)', marginBottom: '6px' }}>{o.num}</div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#050a1e', marginBottom: '10px' }}>{o.title}</div>
                <p style={{ fontSize: '13px', color: '#4b5563', lineHeight: '1.65', marginBottom: '12px' }}>{o.desc}</p>
                <div style={{ fontSize: '11px', color: '#a0a0a0', fontStyle: 'italic', lineHeight: '1.45' }}>{o.caveat}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
