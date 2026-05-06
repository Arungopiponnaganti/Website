import React from 'react';
import CommonServices from '../Services/CommonServices';

const RELATED = [
  {
    title: 'Analytics & Business Intelligence',
    desc: 'Build dashboards and BI layers on top of the clean data we engineer',
    href: '/data-solutions/analytics-business-intelligence',
    icon: '/assets/images/service1.png',
  },
  {
    title: 'AI Integration Services',
    desc: 'Clean, pipeline-ready data is the foundation of every AI integration',
    href: '/ai-automations/ai-integration',
    icon: '/assets/images/ai-integrations.png',
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Infrastructure to run your data platform reliably and cost-efficiently',
    href: '/service/cloud-devops',
    icon: '/assets/images/service2.png',
  },
  {
    title: 'AI Governance & Ethics',
    desc: 'Cataloguing, lineage, and stewardship on top of your new platform',
    href: '/ai-automations/ai-governance',
    icon: '/assets/images/service3.png',
  },
];

export default function DERelated() {
  return (
    <section className="cd-section cd-section-light">
      <CommonServices
        subtitle="What pairs with data infrastructure"
        title="Services data engineering clients commonly add"
        services={RELATED}
        variant="related"
        showShapes={false}
      />
    </section>
  );
}
