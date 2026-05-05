import React from 'react';
import Link from 'next/link';
import SectionTitle from '../Common/SectionTitle';

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
    href: '/data-solutions/analytics-bi',
  },
  {
    title: 'AI Integration Services',
    desc: 'Governed, quality-checked data is the foundation every AI model needs',
    href: '/ai-automations/ai-integration',
  },
];

export default function DGRelated() {
  return (
    <section className="cd-section cd-section-light py-5 border-top">
      <div className="container py-4">
        <SectionTitle
          className="mb-5"
          SubTitle="What pairs with data governance"
          Title="Services governance clients commonly add"
          Content=""
          isDarkMode={false}
        />

        <div className="wa-rel-grid">
          {RELATED.map((r, i) => (
            <Link key={i} href={r.href} className="cd-rel-card" style={{ textDecoration: 'none' }}>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
              <div className="cd-rel-link">Explore &rarr;</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
