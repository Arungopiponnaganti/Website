import React from 'react';
import Link from 'next/link';
import SectionTitle from '../Common/SectionTitle';

const RELATED = [
  {
    title: 'Data Engineering & Pipelines',
    desc: 'The ingestion and transformation layer that feeds the platform',
    href: '/data-solutions/data-engineering-pipelines',
  },
  {
    title: 'Analytics & Business Intelligence',
    desc: 'Dashboards and reporting built on top of the platform data',
    href: '/data-solutions/analytics-business-intelligence',
  },
  {
    title: 'Data Governance & Quality',
    desc: 'Ownership, lineage, and quality rules across the platform',
    href: '/data-solutions/data-governance',
  },
  {
    title: 'Data Strategy Consulting',
    desc: 'Platform design within a broader data roadmap',
    href: '/data-solutions/data-strategy-consulting',
  },
];

export default function CDPRelated() {
  return (
    <section className="cd-section cd-section-light py-5 border-top">
      <div className="container py-4">
        <SectionTitle
          className="mb-5"
          SubTitle="What pairs with cloud data platforms"
          Title="Services platform clients commonly add"
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
