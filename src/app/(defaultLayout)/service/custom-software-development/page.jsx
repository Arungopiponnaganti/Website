import React from 'react';
import '@/app/assets/custom-dev.css';
import CustomDevHero from '@/app/Components/CustomDev/CustomDevHero';
import ProblemStatement from '@/app/Components/CustomDev/ProblemStatement';
import Capabilities from '@/app/Components/CustomDev/Capabilities';
import DevProcess from '@/app/Components/CustomDev/DevProcess';
import TechStack from '@/app/Components/CustomDev/TechStack';
import EngagementModels from '@/app/Components/CustomDev/EngagementModels';
import WhyMayuraSoft from '@/app/Components/CustomDev/WhyMayuraSoft';
import RelatedServices from '@/app/Components/CustomDev/RelatedServices';
import CtaBand from '@/app/Components/CustomDev/CtaBand';
import Technologies from '@/app/Components/technologies/Technologies';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/service/custom-software-development');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom Software Development',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
    url: 'https://mayurasoft.com'
  },
  description: 'Bespoke web, mobile, and enterprise software development services delivered in agile sprints.',
  areaServed: 'Worldwide',
  serviceType: 'Software Development'
};

export default function CustomSoftwareDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page">
        <CustomDevHero />
        {/* <ProblemStatement /> */}
        <Capabilities />
        <DevProcess />
        {/* <TechStack /> */}
        <Technologies />
        <EngagementModels />
        <WhyMayuraSoft />
        {/* <RelatedServices /> */}
        <CtaBand />
      </div>
    </>
  );
}
