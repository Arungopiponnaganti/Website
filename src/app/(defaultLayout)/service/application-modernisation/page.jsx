import React from 'react';
import '@/app/assets/custom-dev.css';
import AMHero from '@/app/Components/AppModernisation/AMHero';
import AMPainPoints from '@/app/Components/AppModernisation/AMPainPoints';
import AMPatterns from '@/app/Components/AppModernisation/AMPatterns';
import AMBeforeAfter from '@/app/Components/AppModernisation/AMBeforeAfter';
import AMDeliveryPhases from '@/app/Components/AppModernisation/AMDeliveryPhases';
import AMEngagementScopes from '@/app/Components/AppModernisation/AMEngagementScopes';
import AMWhyUs from '@/app/Components/AppModernisation/AMWhyUs';
import AMFaq from '@/app/Components/AppModernisation/AMFaq';
import AMCtaBand from '@/app/Components/AppModernisation/AMCtaBand';
import Technologies from '@/app/Components/technologies/Technologies';

export const metadata = {
  title: 'Application Modernisation Services | MayuraSoft',
  description:
    'MayuraSoft migrates legacy applications to modern, cloud-native architectures — zero downtime, full IP ownership, and a structured handover your team can own confidently.',
  alternates: {
    canonical: 'https://mayurasoft.com/services/application-modernisation',
  },
  openGraph: {
    images: [{ url: '/assets/og-application-modernisation.png', width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Application Modernisation',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
    url: 'https://mayurasoft.com',
  },
  description:
    'Legacy application migration to cloud-native architectures — strangler fig, re-platforming, microservices decomposition, and full greenfield rebuilds — delivered with zero downtime.',
  areaServed: 'Worldwide',
  serviceType: 'Application Modernisation',
};

export default function ApplicationModernisationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page">
        <AMHero />
        <AMPainPoints />
        <AMPatterns />
        <AMBeforeAfter />
        <AMDeliveryPhases />
        <AMEngagementScopes />
        <Technologies />
        <AMWhyUs />
        <AMFaq />
        <AMCtaBand />
      </div>
    </>
  );
}
