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
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/data-solutions/data-strategy-consulting');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Data Strategy Consulting',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
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
          description="A senior MayuraSoft data strategist will review your current data landscape, your business goals, and return a prioritised view of where data can move the needle most — in writing, within 48 hours."
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

        {/* Related Services Band */}
        <section className="py-5 bg-light border-top">
          <div className="container">
            <div className="di-section-label mb-3">What pairs with data strategy</div>
            <div className="row g-3">
              {[
                {t:'Data Engineering & Pipelines', d:'Execute the infrastructure decisions the strategy defines', link:'/data-solutions/data-engineering-pipelines'},
                {t:'Cloud Data Platforms', d:'Implement the platform your strategy recommends', link:'/data-solutions/cloud-data-platforms'},
                {t:'Analytics & Business Intelligence', d:'Build the analytics capabilities the strategy prioritises', link:'/data-solutions/analytics-business-intelligence'},
                {t:'Data Governance & Quality', d:'The foundation layer every data strategy starts with', link:'/data-solutions/data-governance'},
              ].map((rc, i) => (
                <div key={i} className="col-12 col-md-6 col-lg-3">
                  <a href={rc.link} className="d-block p-3 border rounded-3 bg-white text-decoration-none" style={{transition: 'border-color 0.15s'}}>
                    <div className="fw-semibold text-dark mb-1" style={{fontSize:'14px'}}>{rc.t}</div>
                    <div className="text-muted mb-2" style={{fontSize:'12px', lineHeight: 1.4}}>{rc.d}</div>
                    <div className="text-primary fw-medium" style={{fontSize:'12px'}}>Explore &rarr;</div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
