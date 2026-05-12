import React from 'react';
import RelatedServices from '../Common/RelatedServices';

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
    <RelatedServices
      subTitle="What pairs with workflow automation"
      title="Services automation clients commonly add"
      services={RELATED}
      sectionClassName="cd-section cd-section-light py-5 pb-5 border-top"
      contentClassName="container py-4"
    />
  );
}
