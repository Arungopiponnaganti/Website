'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const PLANS = [
  {
    theme: 'essential',
    badge: 'Assessment',
    badgeStyle: { background: '#FAEEDA', color: '#633806' },
    title: 'AI governance audit',
    desc: 'A structured assessment of your current AI systems against our six-domain framework — with a gap analysis and prioritised remediation roadmap.',
    features: [
      'Six-domain readiness assessment',
      'Bias and fairness audit on live models',
      'EU AI Act gap analysis',
      'Prioritised remediation roadmap',
    ],
  },
  {
    theme: 'featured',
    badge: 'Most chosen',
    badgeStyle: { background: '#ff3c00', color: '#fff' },
    title: 'Full governance framework build',
    desc: 'Complete AI governance framework — policies, processes, monitoring, and training — designed for your organisation and compliant with EU AI Act.',
    features: [
      'AI ethics policy documentation',
      'Model risk management framework',
      'Bias testing & monitoring pipeline',
      'Explainability implementation',
      'Staff training programme',
      'Board-ready governance report',
    ],
  },
  {
    theme: 'enterprise',
    badge: 'Ongoing',
    badgeStyle: { background: '#E1F5EE', color: '#085041' },
    title: 'Continuous governance monitoring',
    desc: 'Quarterly governance health reviews — monitoring model drift, bias, and compliance posture as your AI systems evolve.',
    features: [
      'Quarterly model bias audit',
      'Regulatory change tracking',
      'Incident response for AI failures',
      'Annual governance board report',
    ],
  },
];

export default function AGEEngagement() {
  return (
    <section className="cd-section py-5 cd-section-muted border-top border-bottom">
      <div className="container py-4">
        <SectionTitle
          className="text-center"
          SubTitle="Engagement types"
          Title="Three governance engagement models"
          Content="Every engagement begins with a free governance review — we assess your AI systems against our six-domain framework before recommending a scope."
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
