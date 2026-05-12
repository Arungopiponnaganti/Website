import React from 'react';
import '@/app/assets/custom-dev.css';
import '@/app/assets/workflow-automation.css';
import '@/app/assets/data-engineering.css';
import '@/app/assets/cloud-data-platforms.css';

import CDPHero from '@/app/Components/CloudDataPlatforms/CDPHero';
import CDPMetrics from '@/app/Components/CloudDataPlatforms/CDPMetrics';
import CDPArchitecture from '@/app/Components/CloudDataPlatforms/CDPArchitecture';
import CDPMigrationPaths from '@/app/Components/CloudDataPlatforms/CDPCloudEcosystems';
import CDPWhyUs from '@/app/Components/CloudDataPlatforms/CDPWhyUs';
import CDPEngagement from '@/app/Components/CloudDataPlatforms/CDPEngagement';
import CDPFaq from '@/app/Components/CloudDataPlatforms/CDPFaq';
import CDPRelated from '@/app/Components/CloudDataPlatforms/CDPRelated';
import CtaBand from '@/app/Components/Common/CtaBand';
import CDPCapabilities from '@/app/Components/CloudDataPlatforms/CDPCapabilities';
import CDPUseCases from '@/app/Components/CloudDataPlatforms/CDPUseCases';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/data-solutions/cloud-data-platforms');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cloud Data Platforms',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
    url: 'https://mayurasoft.com',
  },
  description:
    'Cloud data platform implementation across AWS, Azure, and Google Cloud Platform. Ingestion, storage, transformation, governance, and analytics enablement — delivered in 30 days.',
  areaServed: 'Worldwide',
  serviceType: 'Cloud Data Platform Implementation',
};

export default function CloudDataPlatformsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page cdp-page">
        {/* 01 Hero — definition + before/after state */}
        <CDPHero />
        {/* 02 Metrics strip */}
        {/* <CDPMetrics /> */}

        {/* 04 Core capabilities — 5-item accordion */}
        <CDPCapabilities />
        {/* 05 Architecture — clickable layer diagram */}
        <CDPArchitecture />
        {/* 06 Cloud ecosystems — AWS / Azure / GCP */}
        <CDPMigrationPaths />
        {/* 07 Use cases — 3 tabbed before/after scenarios */}
        <CDPUseCases />
        {/* 08 Business value — 6 outcome cards */}
        <CDPWhyUs />
        {/* 09 Engagement — 3 engagement types */}
        <CDPEngagement />
        {/* 10 FAQ */}
        <CDPFaq />
        {/* 11 Related services */}
        <CDPRelated />
      {/* 12 CTA band */}
      <CtaBand
        title="Understand your current data infrastructure gaps — before committing to any platform"
        description="We review your existing data sources, current reporting setup, and team capability — and return a written assessment covering your gaps, a recommended platform approach, and an indicative scope. This is not a sales presentation. It is a structured technical opinion on your situation."
        primaryBtn={{ text: 'Book free assessment →', dataCta: 'cta-primary-cdp' }}
        secondaryBtn={{ href: '#', variant: 'link', text: 'Send us a question first', dataCta: 'cta-secondary-cdp-question' }}
        trustText="Written assessment delivered within 48 hours · No commitment required · You keep the assessment regardless"
        bgClass="bg-white border-top py-5"
        useModal={true}
        
        // Primary button modal (free assessment)
        primaryModalTitle="Book Free Data Platform Assessment"
        primaryModalDescription="Tell us about your current data infrastructure, reporting setup, and team capabilities. We'll deliver a written assessment covering gaps, recommended platform approach, and indicative scope within 48 hours."
        
        // Secondary button modal (ask a question)
        secondaryModalTitle="Send Us a Question"
        secondaryModalDescription="Have a question about your data infrastructure or our services? Send it here and we'll get back to you with a thoughtful response."
      />
      </div>
    </>
  );
}
