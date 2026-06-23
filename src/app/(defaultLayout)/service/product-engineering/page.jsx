import React from 'react';
import '@/app/assets/custom-dev.css';
import PEHero from '@/app/Components/ProductEngineering/PEHero';
import PECapabilities from '@/app/Components/ProductEngineering/PECapabilities';
import PEEngagementModels from '@/app/Components/ProductEngineering/PEEngagementModels';
import PEDevProcess from '@/app/Components/ProductEngineering/PEDevProcess';
import PEPricing from '@/app/Components/ProductEngineering/PEPricing';
import PEFaq from '@/app/Components/ProductEngineering/PEFaq';
import PECtaBand from '@/app/Components/ProductEngineering/PECtaBand';
import PERelatedServices from '@/app/Components/ProductEngineering/PERelatedServices';
import Technologies from '@/app/Components/technologies/Technologies';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/service/product-engineering');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Product Engineering',
  provider: {
    '@type': 'Organization',
    name: 'Mayurasoft',
    url: 'https://mayurasoft.com'
  },
  description: 'Full product lifecycle engineering — from MVP to enterprise-grade platform — delivered in agile sprints with fixed-scope transparent pricing.',
  areaServed: 'Worldwide',
  serviceType: 'Product Engineering'
};

export default function ProductEngineeringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page">
        <PEHero secondaryCta={{ text: "See how we deliver", href: "#process" }}/>
        <PECapabilities />
        <PEEngagementModels />
        <PEDevProcess />
        {/* <Technologies /> */}
        <PEPricing />
        <PEFaq />
        <PECtaBand />
        {/* <PERelatedServices /> */}
      </div>
    </>
  );
}
