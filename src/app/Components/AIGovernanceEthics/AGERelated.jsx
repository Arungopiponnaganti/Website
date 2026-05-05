import React from 'react';
import Link from 'next/link';
import SectionTitle from '../Common/SectionTitle';

const RELATED = [
  {
    title: 'AI Readiness Assessment',
    desc: 'Know your readiness gaps before building governance — our free assessment covers all six dimensions',
    href: '/ai-automations/ai-readiness',
  },
  {
    title: 'AI Integration Services',
    desc: 'Build AI systems with governance baked in from day one — not retrofitted after deployment',
    href: '/ai-automations/ai-integration',
  },
  {
    title: 'Intelligent Document Processing',
    desc: 'IDP systems handling personal data require specific data governance and privacy controls',
    href: '/ai-automations/document-processing',
  },
  {
    title: 'Conversational AI & Chatbots',
    desc: 'Customer-facing AI systems face the highest governance obligations — especially for hallucination and bias',
    href: '/ai-automations/conversational-ai',
  },
];

export default function AGERelated() {
  return (
    <section className="cd-section cd-section-light py-5 border-top">
      <div className="container py-4">
        <SectionTitle
          className="mb-5"
          SubTitle="What pairs with AI governance"
          Title="Services governance clients commonly add"
          Content=""
          isDarkMode={false}
        />
        <div className="age-rel-grid">
          {RELATED.map((r, i) => (
            <Link key={i} href={r.href} className="cd-rel-card" style={{ textDecoration: 'none' }}>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
              <div className="cd-rel-link">Explore &rarr;</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
