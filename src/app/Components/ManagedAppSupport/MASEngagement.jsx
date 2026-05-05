'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const plans = [
  {
    theme: 'essential',
    badge: 'Essential',
    title: 'Business-hours support',
    desc: 'For internal tools, staging environments, and non-critical applications that need structured support without 24/7 coverage.',
    features: [
      'Business hours monitoring & response',
      '4-hour P1 response SLA',
      'Weekly patch & dependency updates',
      'Monthly SLA report'
    ]
  },
  {
    theme: 'featured',
    badge: 'Most chosen',
    title: 'Professional 24/7 support',
    desc: 'For production applications with real users — dedicated engineer, 1-hour P1 response, and proactive performance optimisation.',
    features: [
      '18/7 monitoring, 24/7 critical coverage',
      '1-hour P1 response SLA',
      'Dedicated named support engineer',
      'Post-incident RCA reports',
      'Bi-weekly team sync'
    ]
  },
  {
    theme: 'enterprise',
    badge: 'Enterprise',
    title: 'Mission-critical support',
    desc: 'For high-traffic, revenue-critical platforms where every minute of downtime has measurable business impact.',
    features: [
      '24/7/365 full coverage',
      '<15-minute P1 response SLA',
      '99.95% uptime SLA with credits',
      'Monthly performance review',
      'Quarterly business review'
    ]
  }
];

export default function MASEngagement() {
  const getBadgeStyle = (theme) => {
    switch (theme) {
      case 'essential': return { background: '#E1F5EE', color: '#085041' };
      case 'featured': return { background: '#ff3c00', color: '#FFF' };
      case 'enterprise': return { background: '#EEEDFE', color: '#3C3489' };
      default: return {};
    }
  };

  return (
    <section className="cd-section py-5 cd-section-muted border-top border-bottom">
      <div className="container py-4">
        <SectionTitle
          className="text-center mb-5"
          SubTitle="Support plans"
          Title="Three tiers of managed support"
          Content="Every plan starts with a free application health assessment. We scope the right tier based on your criticality, team size, and SLA requirements."
          isDarkMode={false}
        />

        <div className="row g-4 mt-2 justify-content-center">
          {plans.map((plan, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className={`cd-engage-card ${plan.theme === 'featured' ? 'featured' : ''}`}>
                <div className="cd-engage-badge" style={getBadgeStyle(plan.theme)}>
                  {plan.badge}
                </div>

                <div className="cd-engage-title" style={{ fontSize: '20px', marginTop: '10px' }}>{plan.title}</div>
                <div className="cd-engage-desc mt-3">{plan.desc}</div>

                <ul className="cd-engage-list mt-4 mb-5">
                  {plan.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <div className="mt-auto" style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px' }}>
                  <a href="/contact" className={`cd-engage-cta ${plan.theme === 'featured' ? 'cd-cta-filled' : 'cd-cta-outline'}`}>
                    Scope this plan &rarr;
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
