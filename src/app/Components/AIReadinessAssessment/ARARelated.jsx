import React from 'react';
import RelatedServices from '../Common/RelatedServices';

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
    <RelatedServices
      subTitle="Next steps after your assessment"
      title="Where readiness leads"
      services={RELATED}
      sectionClassName="cd-section cd-section-light py-5 pb-5 border-top"
      contentClassName="container py-4"
    />
  );
}
