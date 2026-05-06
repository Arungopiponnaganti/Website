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
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/data-solutions/data-engineering-pipelines');

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
          primaryBtn={{ text: 'Book free data audit →', dataCta: 'cta-primary-de' }}
          secondaryBtn={{ href: '/contact', variant: 'link', text: 'See reference architectures' }}
          trustText="Free 2-hour session · Written report delivered in 48 hrs · No commitment required"
          bgClass="bg-white border-top py-5"
          useModal={true}
          modalTitle="Book Free Data Audit"
          modalDescription="Fill out the form below and we'll get back to you shortly."
        />
      </div>
    </>
  );
}
