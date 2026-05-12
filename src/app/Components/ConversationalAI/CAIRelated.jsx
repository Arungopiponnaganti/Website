import React from 'react';
import RelatedServices from '../Common/RelatedServices';

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
    <RelatedServices
      subTitle="What pairs with conversational AI"
      title="Services chatbot clients commonly add"
      services={RELATED}
      sectionClassName="cd-section cd-section-light py-5 pb-5 border-top"
      contentClassName="container py-4"
    />
  );
}