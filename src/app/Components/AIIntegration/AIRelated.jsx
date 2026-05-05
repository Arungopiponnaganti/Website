import React from 'react';
import Link from 'next/link';
import SectionTitle from '../Common/SectionTitle';

const RELATED = [
  {
    title: 'Workflow Automation',
    desc: 'Wrap your AI integration in end-to-end automated workflows',
    href: '/service/ai-automations',
  },
  {
    title: 'Cloud & DevOps',
    desc: 'The infrastructure to run, monitor, and scale your AI reliably',
    href: '/service/cloud-devops',
  },
  {
    title: 'Custom Software Development',
    desc: 'Build AI-native product features on top of our integration layer',
    href: '/service/custom-software-development',
  },
  {
    title: 'Managed App Support',
    desc: '24/7 monitoring and support for your AI-powered applications',
    href: '/service/managed-app-support',
  },
];

export default function AIRelated() {
  return (
    <section className="cd-section cd-section-light py-5 border-top">
      <div className="container py-4">
        <SectionTitle
          className="mb-5"
          SubTitle="What pairs with AI integration"
          Title="Services AI clients commonly add"
          Content=""
          isDarkMode={false}
        />

        <div className="ai-rel-grid">
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
