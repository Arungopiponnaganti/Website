'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const PLANS = [
  {
    theme: 'essential',
    badge: 'Prove value fast',
    title: 'AI proof of concept',
    desc: 'A working AI integration in 2–4 weeks — real data, real system, real output. Built to prove ROI before a full investment.',
    features: [
      'One high-impact use case selected with you',
      'Working integration on your actual system',
      'Performance benchmarks vs. baseline',
      'Production-readiness assessment',
    ],
  },
  {
    theme: 'featured',
    badge: 'Most chosen',
    title: 'Full AI integration build',
    desc: 'End-to-end AI integration — designed, built, tested, and deployed to production with your team trained to operate it.',
    features: [
      'AI strategy & use case prioritisation',
      'Model selection & prompt engineering',
      'API design & system integration',
      'Safety, evaluation & monitoring setup',
      'Team training & handover documentation',
    ],
  },
  {
    theme: 'enterprise',
    badge: 'Embedded',
    title: 'AI engineering retainer',
    desc: 'An embedded AI engineer working alongside your team — continuously building, evaluating, and improving AI integrations as your product evolves.',
    features: [
      'Dedicated AI engineer sprint-by-sprint',
      'Continuous model evaluation & fine-tuning',
      'Prompt library management & versioning',
      'Monthly AI performance reporting',
    ],
  },
];

export default function AIEngagement() {
  const getBadgeStyle = (theme) => {
    switch (theme) {
      case 'essential': return { background: '#EEEDFE', color: '#3C3489' };
      case 'featured':  return { background: '#ff3c00', color: '#fff'    };
      case 'enterprise':return { background: '#E1F5EE', color: '#085041' };
      default:          return {};
    }
  };

  return (
    <section className="cd-section py-5 cd-section-muted border-top border-bottom">
      <div className="container py-4">
        <SectionTitle
          className="text-center mb-5"
          SubTitle="How to engage"
          Title="Three ways to start your AI integration"
          Content="Every engagement starts with a free AI audit. We assess your systems, data, and use cases before recommending a scope."
          isDarkMode={false}
        />

        <div className="row g-4 mt-2 justify-content-center">
          {PLANS.map((plan, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className={`cd-engage-card${plan.theme === 'featured' ? ' featured' : ''}`}>
                <div className="cd-engage-badge" style={getBadgeStyle(plan.theme)}>
                  {plan.badge}
                </div>

                <div className="cd-engage-title" style={{ fontSize: '20px', marginTop: '10px' }}>
                  {plan.title}
                </div>
                <div className="cd-engage-desc mt-3">{plan.desc}</div>

                <ul className="cd-engage-list mt-4 mb-5">
                  {plan.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <div className="mt-auto" style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px' }}>
                  <a
                    href="/contact"
                    className={`cd-engage-cta ${plan.theme === 'featured' ? 'cd-cta-filled' : 'cd-cta-outline'}`}
                  >
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
