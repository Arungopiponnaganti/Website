import React from 'react';
import Link from 'next/link';
import SectionTitle from '../Common/SectionTitle';

const RELATED = [
  {
    title: 'AI Integration Services',
    desc: 'Add AI classification, generation, and decision logic to your automations',
    href: '/ai-automations/ai-integration',
  },
  {
    title: 'Conversational AI & Chatbots',
    desc: 'Automate customer conversations as part of your workflow chain',
    href: '/ai-automations/conversational-ai',
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Infrastructure to run your automations reliably at scale',
    href: '/service/cloud-devops',
  },
  {
    title: 'Managed App Support',
    desc: '24/7 monitoring and support for your automated processes',
    href: '/service/managed-app-support',
  },
];

export default function WARelated() {
  return (
    <section className="cd-section cd-section-light py-5 pb-5 border-top">
      <div className="container py-4">
        <SectionTitle
          className="text-center"
          SubTitle="What pairs with workflow automation"
          Title="Services automation clients commonly add"
          Content=""
          isDarkMode={false}
        />

        <div className="wa-rel-grid">
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
