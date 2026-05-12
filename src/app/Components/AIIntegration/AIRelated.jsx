import React from 'react';
import RelatedServices from '../Common/RelatedServices';

const RELATED = [
  {
    title: 'Workflow Automation',
    desc: 'Wrap your AI integration in end-to-end automated workflows that reduce manual effort and optimize business processes.',
    href: '/ai-automations',
  },
  {
    title: 'Cloud & DevOps',
    desc: 'The infrastructure to run, monitor, and scale your AI reliably with enterprise-grade security and performance.',
    href: '/service/cloud-devops',
  },
  {
    title: 'Custom Software Development',
    desc: 'Build AI-native product features on top of our integration layer with scalable, maintainable code.',
    href: '/service/custom-software-development',
  },
  {
    title: 'Managed App Support',
    desc: '24/7 monitoring and support for your AI-powered applications to ensure continuous operation and peak performance.',
    href: '/service/managed-app-support',
  },
];

export default function AIRelated() {
  return (
    <RelatedServices
      subTitle="What pairs with AI integration"
      title="Services AI clients commonly add"
      services={RELATED}
      sectionClassName="cd-section cd-section-light py-5 border-top"
    />
  );
}
