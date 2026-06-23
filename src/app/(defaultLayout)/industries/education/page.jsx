import React from 'react';
import '@/app/assets/custom-dev.css';
import EducationHero from '@/app/Components/Industries/Education/EducationHero';
import EducationCapabilities from '@/app/Components/Industries/Education/EducationCapabilities';
import EducationProcess from '@/app/Components/Industries/Education/EducationProcess';
import EducationEngagementModels from '@/app/Components/Industries/Education/EducationEngagementModels';
import EducationWhyMayuraSoft from '@/app/Components/Industries/Education/EducationWhyMayuraSoft';
import Technologies from '@/app/Components/technologies/Technologies';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/industries/education');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Education',
  provider: {
    '@type': 'Organization',
    name: 'Mayurasoft',
    url: 'https://mayurasoft.com'
  },
  description: 'Modern digital learning systems and education technology solutions that enhance teaching and learning experiences.',
  areaServed: 'Worldwide',
  serviceType: 'Education Technology'
};

export default function EducationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page">
        <EducationHero />
        <EducationCapabilities />
        <EducationProcess />
        {/* <Technologies /> */}
        <EducationEngagementModels />
        <EducationWhyMayuraSoft />
      </div>
    </>
  );
}