import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const PLANS = [
  {
    theme: 'essential',
    badge: 'Starter',
    badgeStyle: { background: '#E1F5EE', color: '#085041' },
    title: 'Single-use-case bot',
    desc: 'One focused conversational AI — FAQ bot, support triage, or lead qualifier — built, tested, and deployed to one channel.',
    features: [
      'Conversation design & intent mapping',
      'Knowledge base build & RAG pipeline',
      'LLM integration & prompt engineering',
      'One channel deployment (web or WhatsApp)',
      'Analytics dashboard & handoff logic',
    ],
  },
  {
    theme: 'featured',
    badge: 'Most chosen',
    badgeStyle: { background: '#ff3c00', color: '#fff' },
    title: 'Full conversational AI platform',
    desc: 'A multi-use-case AI assistant deployed across all your channels — with a shared knowledge base, agent handoff, and analytics.',
    features: [
      'Multi-intent conversation architecture',
      'Unified knowledge base (docs + CRM + FAQs)',
      'Multi-channel deployment (web, WhatsApp, Slack)',
      'CRM & ticketing system integration',
      'Human handoff with full context transfer',
      'Multilingual support & voice interface option',
    ],
  },
  {
    theme: 'enterprise',
    badge: 'Ongoing',
    badgeStyle: { background: '#EEEDFE', color: '#3C3489' },
    title: 'Managed AI assistant',
    desc: "We run, monitor, and continuously improve your conversational AI — updating the knowledge base, tuning prompts, and reporting on resolution rates monthly.",
    features: [
      'Monthly knowledge base refresh',
      'Conversation quality audit & prompt tuning',
      'Resolution rate & CSAT reporting',
      'New intent identification & build',
    ],
  },
];

export default function CAIEngagement() {
  return (
    <section className="cd-section py-5 pb-5 cd-section-light border-top border-bottom">
      <div className="container py-4">
        <SectionTitle
          className="text-center"
          SubTitle="How to engage"
          Title="Three ways to build your conversational AI"
          Content="Every engagement begins with a free conversation design session — we map your use case, data sources, and success metrics before scoping."
          isDarkMode={false}
        />

        <div className="row g-4 mt-2 justify-content-center">
          {PLANS.map((plan, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className={`cd-engage-card${plan.theme === 'featured' ? ' featured' : ''}`}>
                <div className="cd-engage-badge" style={plan.badgeStyle}>
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
                    Scope this engagement &rarr;
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
