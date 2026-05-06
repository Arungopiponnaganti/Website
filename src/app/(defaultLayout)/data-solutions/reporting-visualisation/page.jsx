import React from 'react';
import '@/app/assets/custom-dev.css';
import '@/app/assets/data-insights.css';

import RVHero from '@/app/Components/ReportingVisualisation/RVHero';
import RVTypes from '@/app/Components/ReportingVisualisation/RVTypes';
import RVSteps from '@/app/Components/ReportingVisualisation/RVSteps';
import RVWhy from '@/app/Components/ReportingVisualisation/RVWhy';
import RVEngagement from '@/app/Components/ReportingVisualisation/RVEngagement';
import CtaSplit from '@/app/Components/Common/CtaSplit';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/data-solutions/reporting-visualisation');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Reporting & Visualisation',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
    url: 'https://mayurasoft.com',
  },
  description: 'Automated executive and operational reporting systems delivered in Power BI, Tableau, or custom portals.',
  areaServed: 'Worldwide',
  serviceType: 'Data Solutions',
};

export default function ReportingVisualisationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page di-page">
        <RVHero />
        <RVTypes />
        <RVSteps />
        <RVWhy />
        <RVEngagement />
        <CtaSplit 
          tag="Free report assessment · 1 hour"
          title="See what your board reports could look like when they're actually designed"
          description="We'll review your three most important existing reports, redesign one in our house style, and show you the improvement side-by-side. Free, no commitment."
          primaryBtn={{ text: 'Get free report redesign →', href: '/contact' }}
          secondaryBtn={{ text: 'Book a call', href: '/contact' }}
          formTitle="Request your free report assessment"
          formFields={[
            { label: 'Your name', type: 'text', placeholder: 'Riya Menon' },
            { label: 'Work email', type: 'email', placeholder: 'riya@company.com' },
            { label: 'Your most important report', type: 'select', options: ['Board / investor monthly report', 'Sales performance dashboard', 'Financial P&L report', 'Operations metrics report', 'Marketing attribution report', 'Other'] },
          ]}
          formSubmitBtn="Request free assessment →"
          subject="Free report assessment request"
        />
      </div>
    </>
  );
}
