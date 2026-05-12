import React from 'react';
import '@/app/assets/custom-dev.css';
import ProfessionalServicesHero from '@/app/Components/Industries/ProfessionalServices/ProfessionalServicesHero';
import ProfessionalServicesCapabilities from '@/app/Components/Industries/ProfessionalServices/ProfessionalServicesCapabilities';
import ProfessionalServicesProcess from '@/app/Components/Industries/ProfessionalServices/ProfessionalServicesProcess';
import ProfessionalServicesEngagementModels from '@/app/Components/Industries/ProfessionalServices/ProfessionalServicesEngagementModels';
import ProfessionalServicesWhyMayuraSoft from '@/app/Components/Industries/ProfessionalServices/ProfessionalServicesWhyMayuraSoft';
import Technologies from '@/app/Components/technologies/Technologies';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/industries/professional-services');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Professional Services',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
    url: 'https://mayurasoft.com'
  },
  description: 'Digital-first service operations for modern professional firms with compliance and security focus.',
  areaServed: 'Worldwide',
  serviceType: 'Professional Services Technology'
};

export default function ProfessionalServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page">
        <ProfessionalServicesHero />
        <ProfessionalServicesCapabilities />
        <ProfessionalServicesProcess />
        <Technologies />
        <ProfessionalServicesEngagementModels />
        <ProfessionalServicesWhyMayuraSoft />
      </div>
    </>
  );
}