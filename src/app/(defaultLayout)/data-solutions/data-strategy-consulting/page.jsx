import React from 'react';
import '@/app/assets/custom-dev.css';
import '@/app/assets/data-insights.css';

import DSHero from '@/app/Components/DataStrategyConsulting/DSHero';
import DSMaturity from '@/app/Components/DataStrategyConsulting/DSMaturity';
import DSValue from '@/app/Components/DataStrategyConsulting/DSValue';
import DSDeliverables from '@/app/Components/DataStrategyConsulting/DSDeliverables';
import DSEngagement from '@/app/Components/DataStrategyConsulting/DSEngagement';
import DSFaq from '@/app/Components/DataStrategyConsulting/DSFaq';
import CtaSplit from '@/app/Components/Common/CtaSplit';
import RelatedServices from '@/app/Components/Common/RelatedServices';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/data-solutions/data-strategy-consulting');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Data Strategy Consulting',
  provider: {
    '@type': 'Organization',
    name: 'Mayurasoft',
    url: 'https://mayurasoft.com',
  },
  description: 'Data value mapping, capability gap analysis, and sequenced 12-24 month roadmaps for CDOs and data leaders.',
  areaServed: 'Worldwide',
  serviceType: 'Data Solutions',
};

export default function DataStrategyConsultingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page di-page">
        <DSHero />
        <DSMaturity />
        <DSValue />
        <DSDeliverables />
        <DSEngagement />
        <DSFaq />
        
        <CtaSplit 
          tag="Free strategy session · 90 minutes"
          title="One conversation to clarify your data priorities for the next 12 months"
          description="A senior Mayurasoft data strategist will review your current data landscape, your business goals, and return a prioritised view of where data can move the needle most — in writing, within 48 hours."
          items={['Written summary delivered within 48 hours', 'Independent view — not a sales pitch for our services', 'No commitment required to attend']}
          primaryBtn={{ text: 'Book free strategy session →', href: '/contact' }}
          secondaryBtn={{ text: 'Download framework', href: '/contact' }}
          formTitle="Book your free strategy session"
          formNote="Confirmed within 4 hours. Senior strategist, not a sales representative."
          formFields={[
            { label: 'Your name & title', type: 'text', placeholder: 'Sunil Verma, CDO' },
            { label: 'Work email', type: 'email', placeholder: 'sunil@company.com' },
            { label: 'Biggest data strategy challenge', type: 'select', options: ['No clear data investment prioritisation', 'Board asking for a data strategy', 'Multiple competing data initiatives, unclear sequencing', 'Data investments not delivering expected ROI', 'Need to justify a large data budget request', 'Scaling fast, need a data foundation plan'] },
          ]}
          formSubmitBtn="Book free session →"
          subject="Free strategy session request"
        />

        <RelatedServices
          subTitle="What pairs with data strategy"
          title="Services data strategy clients commonly add"
          services={[
            {
              title: 'Data Engineering & Pipelines',
              desc: 'Execute the infrastructure decisions the strategy defines',
              href: '/data-solutions/data-engineering-pipelines',
            },
            {
              title: 'Cloud Data Platforms',
              desc: 'Implement the platform your strategy recommends',
              href: '/data-solutions/cloud-data-platforms',
            },
            {
              title: 'Analytics & Business Intelligence',
              desc: 'Build the analytics capabilities the strategy prioritises',
              href: '/data-solutions/analytics-business-intelligence',
            },
            {
              title: 'Data Governance & Quality',
              desc: 'The foundation layer every data strategy starts with',
              href: '/data-solutions/data-governance',
            },
          ]}
          sectionClassName="cd-section cd-section-light py-5 border-top"
        />

      </div>
    </>
  );
}
