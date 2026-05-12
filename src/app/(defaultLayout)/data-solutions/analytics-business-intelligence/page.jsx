import React from 'react';
import '@/app/assets/custom-dev.css';
import '@/app/assets/data-insights.css';

import ABIHero from '@/app/Components/AnalyticsBI/ABIHero';
import ABIUseCases from '@/app/Components/AnalyticsBI/ABIUseCases';
import ABITools from '@/app/Components/AnalyticsBI/ABITools';
import ABIEngagement from '@/app/Components/AnalyticsBI/ABIEngagement';
import ABIFaq from '@/app/Components/AnalyticsBI/ABIFaq';
import CtaSplit from '@/app/Components/Common/CtaSplit';
import RelatedServices from '@/app/Components/Common/RelatedServices';
import { getPageMetadata } from '@/utils/seo';

const RELATED_SERVICES = [
  {
    title: 'Reporting & Visualisation',
    desc: 'Custom report templates and executive visualisations',
    href: '/data-solutions/reporting-visualisation',
  },
  {
    title: 'Data Engineering & Pipelines',
    desc: 'The data infrastructure that feeds every dashboard',
    href: '/data-solutions/data-engineering-pipelines',
  },
  {
    title: 'Data Governance & Quality',
    desc: 'Trusted data — the foundation of trusted analytics',
    href: '/data-solutions/data-governance',
  },
  {
    title: 'Data Strategy Consulting',
    desc: 'Set the analytics vision before building the platform',
    href: '/data-solutions/data-strategy-consulting',
  },
];

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
          secondaryFormTitle="Book a Call"
          secondaryFormNote="Schedule a time to speak with our analytics experts."
          secondaryFormFields={[
            { label: 'Your name', type: 'text', placeholder: 'Aditya Sharma' },
            { label: 'Work email', type: 'email', placeholder: 'aditya@company.com' },
            { label: 'Phone number', type: 'tel', placeholder: '+1 (555) 000-0000' },
            { label: 'Preferred time', type: 'select', options: ['Morning (9am-12pm)', 'Afternoon (12pm-5pm)', 'Evening (5pm-7pm)'] },
          ]}
          secondaryFormSubmitBtn="Schedule call →"
          secondarySubject="Book a call request"
        />
        
        <RelatedServices
          subTitle="What pairs with Analytics & BI"
          title="Services BI clients commonly add"
          services={RELATED_SERVICES}
        />

      </div>
    </>
  );
}
