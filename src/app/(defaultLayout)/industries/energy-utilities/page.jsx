import React from 'react';
import '@/app/assets/custom-dev.css';
import EnergyHero from '@/app/Components/Industries/Energy/EnergyHero';
import EnergyCapabilities from '@/app/Components/Industries/Energy/EnergyCapabilities';
import EnergyProcess from '@/app/Components/Industries/Energy/EnergyProcess';
import EnergyEngagementModels from '@/app/Components/Industries/Energy/EnergyEngagementModels';
import EnergyWhyMayuraSoft from '@/app/Components/Industries/Energy/EnergyWhyMayuraSoft';
import Technologies from '@/app/Components/technologies/Technologies';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/industries/energy-utilities');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Energy & Utilities',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
    url: 'https://mayurasoft.com'
  },
  description: 'Smart energy and operations technology for modern utilities with sustainability and efficiency focus.',
  areaServed: 'Worldwide',
  serviceType: 'Energy & Utilities Technology'
};

export default function EnergyUtilitiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page">
        <EnergyHero />
        <EnergyCapabilities />
        <EnergyProcess />
        {/* <Technologies /> */}
        <EnergyEngagementModels />
        <EnergyWhyMayuraSoft />
      </div>
    </>
  );
}