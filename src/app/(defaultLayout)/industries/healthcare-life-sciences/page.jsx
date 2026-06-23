import React from 'react';
import '@/app/assets/custom-dev.css';
import HealthcareHero from '@/app/Components/Industries/Healthcare/HealthcareHero';
import HealthcareCapabilities from '@/app/Components/Industries/Healthcare/HealthcareCapabilities';
import HealthcareProcess from '@/app/Components/Industries/Healthcare/HealthcareProcess';
import HealthcareEngagementModels from '@/app/Components/Industries/Healthcare/HealthcareEngagementModels';
import HealthcareWhyMayuraSoft from '@/app/Components/Industries/Healthcare/HealthcareWhyMayuraSoft';
import Technologies from '@/app/Components/technologies/Technologies';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/industries/healthcare-life-sciences');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare & Life Sciences',
  provider: {
    '@type': 'Organization',
    name: 'Mayurasoft',
    url: 'https://mayurasoft.com'
  },
  description: 'Patient-centric digital platforms and healthcare technology solutions that improve patient outcomes and operational efficiency.',
  areaServed: 'Worldwide',
  serviceType: 'Healthcare Technology'
};

export default function HealthcareLifeSciencesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page">
        <HealthcareHero />
        <HealthcareCapabilities />
        <HealthcareProcess />
        {/* <Technologies /> */}
        <HealthcareEngagementModels />
        <HealthcareWhyMayuraSoft />
      </div>
    </>
  );
}