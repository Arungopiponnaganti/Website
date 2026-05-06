import React from 'react';
import Link from 'next/link';
import SectionTitle from '../Common/SectionTitle';

const RELATED = [
  {
    title: 'Workflow Automation',
    desc: 'Route extracted document data into broader process automation — approvals, notifications, and system updates',
    href: '/ai-automations/workflow-automation',
  },
  {
    title: 'AI Integration Services',
    desc: 'Add LLM reasoning and generation on top of extracted document data for richer downstream automation',
    href: '/ai-automations/ai-integration',
  },
  {
    title: 'Conversational AI & Chatbots',
    desc: 'Let users query your processed document data through a natural-language interface',
    href: '/ai-automations/conversational-ai',
  },
  {
    title: 'Managed App Support',
    desc: '24/7 monitoring and support for your document processing pipelines in production',
    href: '/service/managed-app-support',
  },
];

export default function IDPRelated() {
  return (
    <section className="cd-section cd-section-light py-5 border-top">
      <div className="container py-4">
        <SectionTitle
          className="text-center"
          SubTitle="What pairs with document processing"
          Title="Services IDP clients commonly add"
          Content=""
          isDarkMode={false}
        />
        <div className="idp-rel-grid">
          {RELATED.map((r, i) => (
            <Link key={i} href={r.href} className="cd-rel-card" style={{ textDecoration: 'none' }}>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
              <div className="cd-rel-link">View workflow automation service &rarr;</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
