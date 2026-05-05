import React from 'react';
import Link from 'next/link';
import SectionTitle from '../Common/SectionTitle';

const RELATED = [
  {
    title: 'Workflow Automation',
    desc: 'Connect your chatbot to automated workflows that act on what users say',
    href: '/ai-automations/workflow-automation',
  },
  {
    title: 'AI Integration Services',
    desc: 'The LLM integration layer that powers every bot we build',
    href: '/ai-automations/ai-integration',
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Infrastructure to run your conversational AI reliably at scale',
    href: '/service/cloud-devops',
  },
  {
    title: 'Managed App Support',
    desc: '24/7 monitoring and support for your deployed AI assistants',
    href: '/service/managed-app-support',
  },
];

export default function CAIRelated() {
  return (
    <section className="cd-section cd-section-light py-5 pb-3 border-top">
      <div className="container py-4">
        <SectionTitle
          className="text-center"
          SubTitle="What pairs with conversational AI"
          Title="Services chatbot clients commonly add"
          Content=""
          isDarkMode={false}
        />

        <div className="cai-rel-grid">
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
