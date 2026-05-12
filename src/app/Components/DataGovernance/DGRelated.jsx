import React from 'react';
import RelatedServices from '../Common/RelatedServices';

const RELATED = [
  {
    title: 'Data Engineering & Pipelines',
    desc: 'Build governed pipelines that enforce the quality rules we define together',
    href: '/data-solutions/data-engineering-pipelines',
  },
  {
    title: 'Cloud Data Platforms',
    desc: 'Implement governance natively in Snowflake, BigQuery, or Databricks Unity Catalog',
    href: '/data-solutions/cloud-data-platforms',
  },
  {
    title: 'Analytics & Business Intelligence',
    desc: 'Build dashboards on top of governed, trusted data domains',
    href: '/data-solutions/analytics-business-intelligence',
  },
  {
    title: 'AI Integration Services',
    desc: 'Governed, quality-checked data is the foundation every AI model needs',
    href: '/ai-automations/ai-integration',
  },
];

export default function DGRelated() {
  return (
    <RelatedServices
      subTitle="What pairs with data governance"
      title="Services governance clients commonly add"
      services={RELATED}
      sectionClassName="cd-section cd-section-light py-5 border-top"
      contentClassName="container py-4"
    />
  );
}
