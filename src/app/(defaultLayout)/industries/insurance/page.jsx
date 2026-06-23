import React from 'react';
import '@/app/assets/custom-dev.css';
import InsuranceHero from '@/app/Components/Industries/Insurance/InsuranceHero';
import InsuranceCapabilities from '@/app/Components/Industries/Insurance/InsuranceCapabilities';
import InsuranceProcess from '@/app/Components/Industries/Insurance/InsuranceProcess';
import InsuranceEngagementModels from '@/app/Components/Industries/Insurance/InsuranceEngagementModels';
import InsuranceWhyMayuraSoft from '@/app/Components/Industries/Insurance/InsuranceWhyMayuraSoft';
import Technologies from '@/app/Components/technologies/Technologies';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/industries/insurance');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Insurance',
  provider: {
    '@type': 'Organization',
    name: 'Mayurasoft',
    url: 'https://mayurasoft.com'
  },
  description: 'Digital insurance transformation for modern carriers with compliance and security focus.',
  areaServed: 'Worldwide',
  serviceType: 'Insurance Technology'
};

export default function InsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page">
        <InsuranceHero />
        <InsuranceCapabilities />
        <InsuranceProcess />
        {/* <Technologies /> */}
        <InsuranceEngagementModels />
        <InsuranceWhyMayuraSoft />
      </div>
    </>
  );
}