import React from 'react';
import '@/app/assets/custom-dev.css';
import UXUIHero from '@/app/Components/UXUIDesign/UXUIHero';
import UXUIChallenges from '@/app/Components/UXUIDesign/UXUIChallenges';
import UXUIProcess from '@/app/Components/UXUIDesign/UXUIProcess';
import UXUIPrinciples from '@/app/Components/UXUIDesign/UXUIPrinciples';
import UXUIComparison from '@/app/Components/UXUIDesign/UXUIComparison';
import UXUITechnologies from '@/app/Components/UXUIDesign/UXUITechnologies';
import UXUIEngagementModels from '@/app/Components/UXUIDesign/UXUIEngagementModels';
import UXUIFaq from '@/app/Components/UXUIDesign/UXUIFaq';
import UXUICtaBand from '@/app/Components/UXUIDesign/UXUICtaBand';

export const metadata = {
  title: 'UX / UI Design Services | MayuraSoft',
  description:
    'MayuraSoft designs interfaces grounded in user research and business data. UX research, wireframing, prototyping, design systems, and conversion-rate optimisation — tested with real users before development begins.',
  alternates: {
    canonical: 'https://mayurasoft.com/services/ux-ui-design',
  },
  openGraph: {
    images: [{ url: '/assets/og-ux-ui-design.png', width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'UX / UI Design',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
    url: 'https://mayurasoft.com',
  },
  description:
    'End-to-end UX/UI design services — user research, information architecture, wireframing, prototyping, visual design, design systems, usability testing, and conversion rate optimisation.',
  areaServed: 'Worldwide',
  serviceType: 'UX UI Design',
};

export default function UXUIDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page">
        <UXUIHero />
        <UXUIChallenges />
        <UXUIProcess />
        <UXUITechnologies />
        <UXUIPrinciples />
        <UXUIComparison />
        <UXUIEngagementModels />
        <UXUIFaq />
        <UXUICtaBand />
      </div>
    </>
  );
}
