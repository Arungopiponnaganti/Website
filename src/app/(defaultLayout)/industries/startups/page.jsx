import React from 'react';
import '@/app/assets/custom-dev.css';
import StartupsHero from '@/app/Components/Industries/Startups/StartupsHero';
import StartupsCapabilities from '@/app/Components/Industries/Startups/StartupsCapabilities';
import StartupsProcess from '@/app/Components/Industries/Startups/StartupsProcess';
import StartupsEngagementModels from '@/app/Components/Industries/Startups/StartupsEngagementModels';
import StartupsWhyMayuraSoft from '@/app/Components/Industries/Startups/StartupsWhyMayuraSoft';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/industries/startups');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Startups',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
    url: 'https://mayurasoft.com'
  },
  description: 'MVP to market-ready software development for startups with agile methodology and rapid time-to-market.',
  areaServed: 'Worldwide',
  serviceType: 'Startup Technology Development'
};

export default function StartupsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page">
        <StartupsHero />
        <StartupsCapabilities />
        <StartupsProcess />
        <StartupsEngagementModels />
        <StartupsWhyMayuraSoft />
      </div>
    </>
  );
}