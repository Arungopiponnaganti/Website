import React from 'react';
import '@/app/assets/custom-dev.css';
import TravelHero from '@/app/Components/Industries/Travel/TravelHero';
import TravelCapabilities from '@/app/Components/Industries/Travel/TravelCapabilities';
import TravelProcess from '@/app/Components/Industries/Travel/TravelProcess';
import TravelEngagementModels from '@/app/Components/Industries/Travel/TravelEngagementModels';
import TravelWhyMayuraSoft from '@/app/Components/Industries/Travel/TravelWhyMayuraSoft';
import Technologies from '@/app/Components/technologies/Technologies';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/industries/travel-logistics-hospitality');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Travel, Logistics & Hospitality',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
    url: 'https://mayurasoft.com'
  },
  description: 'Smart mobility and logistics technology for modern travel with customer experience and operational efficiency focus.',
  areaServed: 'Worldwide',
  serviceType: 'Travel, Logistics & Hospitality Technology'
};

export default function TravelLogisticsHospitalityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page">
        <TravelHero />
        <TravelCapabilities />
        <TravelProcess />
        {/* <Technologies /> */}
        <TravelEngagementModels />
        <TravelWhyMayuraSoft />
      </div>
    </>
  );
}