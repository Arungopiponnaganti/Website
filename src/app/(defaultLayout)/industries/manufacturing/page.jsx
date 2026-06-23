import React from 'react';
import '@/app/assets/custom-dev.css';
import ManufacturingHero from '@/app/Components/Industries/Manufacturing/ManufacturingHero';
import ManufacturingCapabilities from '@/app/Components/Industries/Manufacturing/ManufacturingCapabilities';
import ManufacturingProcess from '@/app/Components/Industries/Manufacturing/ManufacturingProcess';
import ManufacturingEngagementModels from '@/app/Components/Industries/Manufacturing/ManufacturingEngagementModels';
import ManufacturingWhyMayuraSoft from '@/app/Components/Industries/Manufacturing/ManufacturingWhyMayuraSoft';
import Technologies from '@/app/Components/technologies/Technologies';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/industries/manufacturing');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Manufacturing',
  provider: {
    '@type': 'Organization',
    name: 'Mayurasoft',
    url: 'https://mayurasoft.com'
  },
  description: 'Smart factory solutions and Industry 4.0 transformation for modern manufacturing enterprises.',
  areaServed: 'Worldwide',
  serviceType: 'Manufacturing Technology'
};

export default function ManufacturingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page">
        <ManufacturingHero />
        <ManufacturingCapabilities />
        <ManufacturingProcess />
        {/* <Technologies /> */}
        <ManufacturingEngagementModels />
        <ManufacturingWhyMayuraSoft />
      </div>
    </>
  );
}