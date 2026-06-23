import React from 'react';
import '@/app/assets/custom-dev.css';
import RetailHero from '@/app/Components/Industries/Retail/RetailHero';
import RetailCapabilities from '@/app/Components/Industries/Retail/RetailCapabilities';
import RetailProcess from '@/app/Components/Industries/Retail/RetailProcess';
import RetailEngagementModels from '@/app/Components/Industries/Retail/RetailEngagementModels';
import RetailWhyMayuraSoft from '@/app/Components/Industries/Retail/RetailWhyMayuraSoft';
import Technologies from '@/app/Components/technologies/Technologies';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/industries/retail-consumer-goods');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Retail & Consumer Goods',
  provider: {
    '@type': 'Organization',
    name: 'Mayurasoft',
    url: 'https://mayurasoft.com'
  },
  description: 'Omnichannel commerce platforms for modern retailers with customer experience and operational efficiency focus.',
  areaServed: 'Worldwide',
  serviceType: 'Retail & Consumer Goods Technology'
};

export default function RetailConsumerGoodsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page">
        <RetailHero />
        <RetailCapabilities />
        <RetailProcess />
        {/* <Technologies /> */}
        <RetailEngagementModels />
        <RetailWhyMayuraSoft />
      </div>
    </>
  );
}