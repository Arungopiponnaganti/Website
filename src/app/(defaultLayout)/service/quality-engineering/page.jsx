import React from 'react';
import '@/app/assets/custom-dev.css';
import '@/app/assets/quality-engineering.css';

import QEHero from '@/app/Components/QualityEngineering/QEHero';
import QEMetrics from '@/app/Components/QualityEngineering/QEMetrics';
import QEBugCost from '@/app/Components/QualityEngineering/QEBugCost';
import QEServices from '@/app/Components/QualityEngineering/QEServices';
import QECoverage from '@/app/Components/QualityEngineering/QECoverage';
import QEApproach from '@/app/Components/QualityEngineering/QEApproach';
import QEWhyUs from '@/app/Components/QualityEngineering/QEWhyUs';
import QEEngagementModels from '@/app/Components/QualityEngineering/QEEngagementModels';
import QEFaq from '@/app/Components/QualityEngineering/QEFaq';
import QECtaBand from '@/app/Components/QualityEngineering/QECtaBand';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/service/quality-engineering');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Quality Engineering Services',
  provider: {
    '@type': 'Organization',
    name: 'Mayurasoft',
    url: 'https://mayurasoft.com',
  },
  description:
    'Functional testing, test automation, performance testing, API testing, security scanning, and mobile testing — delivered as a shift-left QA practice embedded in your engineering sprints.',
  areaServed: 'Worldwide',
  serviceType: 'Quality Engineering & Test Automation',
};

export default function QualityEngineeringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page qe-page">
        <QEHero />
        <QEMetrics />
        <QEBugCost />
        <QEServices />
        <QECoverage />
        <QEApproach />
        <QEWhyUs />
        <QEEngagementModels />
        <QEFaq />
        <QECtaBand />
      </div>
    </>
  );
}
