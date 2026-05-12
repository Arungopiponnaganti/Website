import React from 'react';
import RelatedServices from '../Common/RelatedServices';

const RELATED = [
  {
    title: 'Analytics & Business Intelligence',
    desc: 'Build dashboards and BI layers on top of the clean data we engineer. Turn raw data into actionable insights with interactive visualizations and self-service analytics.',
    href: '/data-solutions/analytics-business-intelligence',
  },
  {
    title: 'AI Integration Services',
    desc: 'Clean, pipeline-ready data is the foundation of every AI integration. Prepare your data infrastructure to power machine learning models and AI applications.',
    href: '/ai-automations/ai-integration',
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Infrastructure to run your data platform reliably and cost-efficiently. Ensure 24/7 availability, security, and performance at scale.',
    href: '/service/cloud-devops',
  },
  {
    title: 'AI Governance & Ethics',
    desc: 'Cataloguing, lineage, and stewardship on top of your new platform. Establish data governance frameworks that ensure compliance and trust.',
    href: '/ai-automations/ai-governance',
  },
];

export default function DERelated() {
  return (
    <RelatedServices
      subTitle="What pairs with data infrastructure"
      title="Services data engineering clients commonly add"
      services={RELATED}
      sectionClassName="cd-section cd-section-light py-5 border-top"
    />
  );
}
