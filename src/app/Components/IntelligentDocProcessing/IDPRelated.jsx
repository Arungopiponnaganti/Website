import React from 'react';
import RelatedServices from '../Common/RelatedServices';

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
    <RelatedServices
      subTitle="What pairs with document processing"
      title="Services IDP clients commonly add"
      services={RELATED}
      sectionClassName="cd-section cd-section-light py-5 pb-5 border-top"
      contentClassName="container py-4"
    />
  );
}
