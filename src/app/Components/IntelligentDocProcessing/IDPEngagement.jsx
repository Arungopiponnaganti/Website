'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const PLANS = [
  {
    theme: 'essential',
    badge: 'Single type',
    badgeStyle: { background: '#e0e7ff', color: '#3730a3' },
    title: 'One document pipeline',
    desc: 'One document type, end-to-end — from ingestion to extraction to downstream routing. Ideal for proving ROI quickly.',
    features: [
      'Extraction model configuration',
      'Validation & confidence scoring',
      'One downstream integration',
      'Exception handling & review queue',
      'Team training & documentation',
    ],
  },
  {
    theme: 'featured',
    badge: 'Most chosen',
    badgeStyle: { background: '#ff3c00', color: '#fff' },
    title: 'Multi-type document platform',
    desc: 'Multiple document types, unified platform, shared extraction engine and review UI. Scales across departments.',
    features: [
      '3–10 document types',
      'Unified admin and review portal',
      'Multiple ERP / system integrations',
      'Analytics dashboard',
      'Monthly accuracy reporting',
    ],
  },
  {
    theme: 'enterprise',
    badge: 'Managed',
    badgeStyle: { background: '#EEEDFE', color: '#3C3489' },
    title: 'Managed doc intelligence',
    desc: 'We run, monitor, and continuously improve your extraction pipelines month to month — with SLA guarantees.',
    features: [
      'Model accuracy monitoring',
      'Monthly retraining on new samples',
      'New document type onboarding',
      'SLA on extraction accuracy',
    ],
  },
];

export default function IDPEngagement() {
  return (
    <section className="cd-section py-5 cd-section-muted border-top border-bottom">
      <div className="container py-4">
        <SectionTitle
          className="text-center mb-5"
          SubTitle="Engagement types"
          Title="Three scopes — matched to your document volume"
          Content="Every engagement begins with a free document audit — we assess your samples for extraction complexity before recommending a scope."
          isDarkMode={false}
        />

        <div className="row g-4 mt-2 justify-content-center">
          {PLANS.map((plan, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className={`cd-engage-card${plan.theme === 'featured' ? ' featured' : ''}`}>
                <div className="cd-engage-badge" style={plan.badgeStyle}>{plan.badge}</div>
                <div className="cd-engage-title" style={{ fontSize: '20px', marginTop: '10px' }}>{plan.title}</div>
                <div className="cd-engage-desc mt-3">{plan.desc}</div>
                <ul className="cd-engage-list mt-4 mb-5">
                  {plan.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <div className="mt-auto" style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px' }}>
                  <a href="/contact" className={`cd-engage-cta ${plan.theme === 'featured' ? 'cd-cta-filled' : 'cd-cta-outline'}`}>
                    Scope this &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
