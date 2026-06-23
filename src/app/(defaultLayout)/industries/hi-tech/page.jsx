import React from 'react';
import '@/app/assets/custom-dev.css';
import HiTechHero from '@/app/Components/Industries/HiTech/HiTechHero';
import HiTechCapabilities from '@/app/Components/Industries/HiTech/HiTechCapabilities';
import HiTechProcess from '@/app/Components/Industries/HiTech/HiTechProcess';
import HiTechEngagementModels from '@/app/Components/Industries/HiTech/HiTechEngagementModels';
import HiTechWhyMayuraSoft from '@/app/Components/Industries/HiTech/HiTechWhyMayuraSoft';
import Technologies from '@/app/Components/technologies/Technologies';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/industries/hi-tech');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hi Tech',
  provider: {
    '@type': 'Organization',
    name: 'Mayurasoft',
    url: 'https://mayurasoft.com'
  },
  description: 'Innovative enterprise technology solutions for the digital age with cloud-native, AI/ML, and microservices architecture.',
  areaServed: 'Worldwide',
  serviceType: 'Hi-Tech Solutions'
};

export default function HiTechPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page">
        <HiTechHero />
        <HiTechCapabilities />
        <HiTechProcess />
        {/* <Technologies /> */}
        <HiTechEngagementModels />
        <HiTechWhyMayuraSoft />
      </div>
    </>
  );
}