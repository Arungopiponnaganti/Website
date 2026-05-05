import React from 'react';
import '@/app/assets/custom-dev.css';
import '@/app/assets/workflow-automation.css';
import '@/app/assets/data-engineering.css';

import DEHero from '@/app/Components/DataEngineering/DEHero';
import DEMetrics from '@/app/Components/DataEngineering/DEMetrics';
import DEPainSignals from '@/app/Components/DataEngineering/DEPainSignals';
import DEArchitecture from '@/app/Components/DataEngineering/DEArchitecture';
import DEPlatforms from '@/app/Components/DataEngineering/DEPlatforms';
import DEMaturity from '@/app/Components/DataEngineering/DEMaturity';
import DEServices from '@/app/Components/DataEngineering/DEServices';
import DEBeforeAfter from '@/app/Components/DataEngineering/DEBeforeAfter';
import DEEngagement from '@/app/Components/DataEngineering/DEEngagement';
import DEFaq from '@/app/Components/DataEngineering/DEFaq';
import DERelated from '@/app/Components/DataEngineering/DERelated';
import CtaBand from '@/app/Components/Common/CtaBand';

export const metadata = {
  title: 'Data Engineering & Pipelines | MayuraSoft',
  description:
    'MayuraSoft designs and builds data infrastructure that turns raw, scattered, unreliable data into a clean, governed, always-available foundation — so your analytics, AI, and reporting always work from the truth. Free data audit to start.',
  alternates: {
    canonical: 'https://mayurasoft.com/data-solutions/data-engineering-pipelines',
  },
  openGraph: {
    images: [{ url: '/assets/og-data-engineering.png', width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Data Engineering & Pipelines',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
    url: 'https://mayurasoft.com',
  },
  description:
    'End-to-end data infrastructure — pipelines, warehouses, lakehouses, real-time streaming, and data quality observability. Free data audit included.',
  areaServed: 'Worldwide',
  serviceType: 'Data Engineering & Data Infrastructure',
};

export default function DataEngineeringPipelinesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page de-page">
        <DEHero />
        <DEMetrics />
        <DEPainSignals />
        <DEArchitecture />
        <DEPlatforms />
        <DEMaturity />
        <DEServices />
        <DEBeforeAfter />
        <DEEngagement />
        <DEFaq />
        <DERelated />
        <CtaBand
          title="Know exactly what's broken in your data infrastructure — and what to fix first"
          description="We'll review your current pipelines, warehouse, and data quality posture — and return a written audit with a prioritised improvement roadmap. All free, with no commitment required."
          primaryBtn={{ href: '/contact', text: 'Book free data audit →', dataCta: 'cta-primary-de' }}
          secondaryBtn={{ href: '/contact', variant: 'link', text: 'See reference architectures' }}
          trustText="Free 2-hour session · Written report delivered in 48 hrs · No commitment required"
          bgClass="bg-white border-top py-5"
        />
      </div>
    </>
  );
}
