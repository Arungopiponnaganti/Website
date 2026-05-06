import React from 'react';
import '@/app/assets/custom-dev.css';
import '@/app/assets/data-insights.css';

import ABIHero from '@/app/Components/AnalyticsBI/ABIHero';
import ABIUseCases from '@/app/Components/AnalyticsBI/ABIUseCases';
import ABITools from '@/app/Components/AnalyticsBI/ABITools';
import ABIEngagement from '@/app/Components/AnalyticsBI/ABIEngagement';
import ABIFaq from '@/app/Components/AnalyticsBI/ABIFaq';
import CtaSplit from '@/app/Components/Common/CtaSplit';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/data-solutions/analytics-business-intelligence');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Analytics & Business Intelligence',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
    url: 'https://mayurasoft.com',
  },
  description: 'End-to-end analytics platforms with semantic layer, self-serve reporting, and team training.',
  areaServed: 'Worldwide',
  serviceType: 'Data Solutions',
};

export default function AnalyticsBIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page di-page">
        <ABIHero />
        <ABIUseCases />
        <ABITools />
        <ABIEngagement />
        <ABIFaq />
        <CtaSplit 
          tag="Free BI audit · 2 hours"
          title="Know why your dashboards aren't trusted — and what to fix first"
          description="We review your current BI environment, identify the root cause of inconsistent metrics, and deliver a written improvement roadmap within 48 hours."
          primaryBtn={{ text: 'Get free BI audit →', href: '/contact' }}
          secondaryBtn={{ text: 'Book a call', href: '/contact' }}
          formTitle="Request your free BI audit"
          formNote="We'll review your dashboards and data model and respond within 48 hours."
          formFields={[
            { label: 'Your name', type: 'text', placeholder: 'Aditya Sharma' },
            { label: 'Work email', type: 'email', placeholder: 'aditya@company.com' },
            { label: 'Current BI tool', type: 'select', options: ['Power BI', 'Tableau', 'Looker / LookML', 'Metabase', 'No formal BI tool yet'] },
          ]}
          formSubmitBtn="Send audit request →"
          subject="Free BI audit request"
        />
        
        {/* Related Services Band */}
        <section className="py-5 bg-light border-top">
          <div className="container">
            <div className="di-section-label mb-3">What pairs with Analytics & BI</div>
            <div className="row g-3">
              {[
                {t:'Reporting & Visualisation', d:'Custom report templates and executive visualisations', link:'/data-solutions/reporting-visualisation'},
                {t:'Data Engineering & Pipelines', d:'The data infrastructure that feeds every dashboard', link:'/data-solutions/data-engineering-pipelines'},
                {t:'Data Governance & Quality', d:'Trusted data — the foundation of trusted analytics', link:'/data-solutions/data-governance'},
                {t:'Data Strategy Consulting', d:'Set the analytics vision before building the platform', link:'/data-solutions/data-strategy-consulting'},
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
