import React from 'react';
import '@/app/assets/custom-dev.css';
import '@/app/assets/workflow-automation.css';
import '@/app/assets/data-engineering.css';
import '@/app/assets/data-governance.css';

import DGHero from '@/app/Components/DataGovernance/DGHero';
import DGMetrics from '@/app/Components/DataGovernance/DGMetrics';
import DGPillars from '@/app/Components/DataGovernance/DGPillars';
import DGLineage from '@/app/Components/DataGovernance/DGLineage';
import DGPolicies from '@/app/Components/DataGovernance/DGPolicies';
import DGDeliverables from '@/app/Components/DataGovernance/DGDeliverables';
import DGEngagement from '@/app/Components/DataGovernance/DGEngagement';
import DGFaq from '@/app/Components/DataGovernance/DGFaq';
import DGRelated from '@/app/Components/DataGovernance/DGRelated';
import CtaBand from '@/app/Components/Common/CtaBand';

export const metadata = {
  title: 'Data Governance & Quality | MayuraSoft',
  description:
    'MayuraSoft builds end-to-end data governance frameworks — cataloguing, lineage, quality rules, ownership models, and access controls — that turn ungoverned data into a trusted, compliant organisational asset. Free governance audit to start.',
  alternates: {
    canonical: 'https://mayurasoft.com/data-solutions/data-governance',
  },
  openGraph: {
    images: [{ url: '/assets/og-data-governance.png', width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Data Governance & Quality',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
    url: 'https://mayurasoft.com',
  },
  description:
    'End-to-end data governance — data catalogue, lineage, quality rules, ownership operating model, access controls, and DPDPA/GDPR compliance alignment. Free governance audit included.',
  areaServed: 'Worldwide',
  serviceType: 'Data Governance & Data Quality',
};

export default function DataGovernancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page dg-page">
        <DGHero />
        {/* <DGMetrics /> */}
        <DGPillars />
        <DGLineage />
        <DGPolicies />
        <DGDeliverables />
        <DGEngagement />
        <DGFaq />
        <DGRelated />
        <CtaBand
          title="Know exactly where your governance gaps are — and the cost of leaving them unfixed"
          description="We assess your current data governance posture across six dimensions and deliver a written scorecard with dimension-level scores, a gap analysis, and a prioritised remediation roadmap. Free, with no commitment required."
          primaryBtn={{ href: '/contact', text: 'Book free governance audit →', dataCta: 'cta-primary-dg' }}
          secondaryBtn={{ href: '#', variant: 'link', text: 'Take the governance scanner' }}
          trustText="Free 2-hour session · Written scorecard delivered in 48 hrs · DPDPA & GDPR gap analysis included · No commitment required"
          bgClass="bg-white border-top py-5"
        />
      </div>
    </>
  );
}
