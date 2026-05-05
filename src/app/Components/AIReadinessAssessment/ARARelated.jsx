import React from 'react';
import Link from 'next/link';
import SectionTitle from '../Common/SectionTitle';

const RELATED = [
  {
    title: 'AI Integration Services',
    desc: 'Once you know you\'re ready, we integrate GPT-4, Claude, or open-source LLMs into your existing systems',
    href: '/ai-automations/ai-integration',
  },
  {
    title: 'AI Governance & Ethics',
    desc: 'Build the governance framework that makes your AI systems auditable, fair, and compliant before deployment',
    href: '/ai-automations/ai-governance',
  },
  {
    title: 'Workflow Automation',
    desc: 'If AI isn\'t the right first step, workflow automation often is — faster wins, same foundation',
    href: '/ai-automations/workflow-automation',
  },
  {
    title: 'Conversational AI & Chatbots',
    desc: 'A frequent first production AI deployment — measurable ROI and low governance risk',
    href: '/ai-automations/conversational-ai',
  },
];

export default function ARARelated() {
  return (
    <section className="cd-section cd-section-light py-5 border-top">
      <div className="container py-4">
        <SectionTitle
          className="text-center"
          SubTitle="Next steps after your assessment"
          Title="Where readiness leads"
          Content=""
          isDarkMode={false}
        />
        <div className="row g-3">
          {RELATED.map((r, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Link
                href={r.href}
                className="cd-rel-card d-block h-100"
                style={{ textDecoration: 'none' }}
              >
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
                <div className="cd-rel-link">Explore →</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
