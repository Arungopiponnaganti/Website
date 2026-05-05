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

export const metadata = {
  title: 'Product Engineering Services | MayuraSoft',
  description: 'MayuraSoft turns your product idea into a scalable, production-ready platform — from validated MVP to enterprise-grade architecture, delivered in agile sprints.',
  alternates: {
    canonical: 'https://mayurasoft.com/services/product-engineering',
  },
  openGraph: {
    images: [{ url: '/assets/og-product-engineering.png', width: 1200, height: 630 }]
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Product Engineering',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
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
        <PEHero />
        <PECapabilities />
        <PEEngagementModels />
        <PEDevProcess />
        <Technologies />
        <PEPricing />
        <PEFaq />
        <PECtaBand />
        {/* <PERelatedServices /> */}
      </div>
    </>
  );
}
