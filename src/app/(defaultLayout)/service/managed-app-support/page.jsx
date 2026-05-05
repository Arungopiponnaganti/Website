import React from 'react';
import '@/app/assets/custom-dev.css';
import '@/app/assets/managed-app-support.css';

import MASHero from '@/app/Components/ManagedAppSupport/MASHero';
import MASMetrics from '@/app/Components/ManagedAppSupport/MASMetrics';
import MASWhatsIncluded from '@/app/Components/ManagedAppSupport/MASWhatsIncluded';
import MASSlaTiers from '@/app/Components/ManagedAppSupport/MASSlaTiers';
import MASIncidentResponse from '@/app/Components/ManagedAppSupport/MASIncidentResponse';
import MASMonitorTabs from '@/app/Components/ManagedAppSupport/MASMonitorTabs';
import MASHandover from '@/app/Components/ManagedAppSupport/MASHandover';
import MASEngagement from '@/app/Components/ManagedAppSupport/MASEngagement';
import MASFaq from '@/app/Components/ManagedAppSupport/MASFaq';
import CtaBand from '@/app/Components/Common/CtaBand';

export const metadata = {
  title: 'Managed App Support & 24/7 Monitoring | MayuraSoft',
  description: 'MayuraSoft provides 24/7 managed support for production applications — monitoring, incident response, patching, and continuous optimisation.',
  alternates: {
    canonical: 'https://mayurasoft.com/services/managed-app-support',
  },
  openGraph: {
    images: [{ url: '/assets/og-managed-app-support.png', width: 1200, height: 630 }]
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Managed App Support',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
    url: 'https://mayurasoft.com'
  },
  description: '24/7 managed support for production applications including monitoring, incident response, SLA-backed uptime, and continuous optimization.',
  areaServed: 'Worldwide',
  serviceType: 'Managed Support'
};

export default function ManagedAppSupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page">
        <MASHero />
        <MASMetrics />
        <MASWhatsIncluded />
        <MASSlaTiers />
        <MASIncidentResponse />
        <MASMonitorTabs />
        <MASHandover />
        <MASEngagement />
        <MASFaq />
        <CtaBand 
          title="Ready to end the 2 AM pager alarms?"
          description="Get full-stack monitoring, guaranteed response times, and a dedicated engineering team watching over your production application 24/7."
          primaryBtn={{ href: '/contact', text: 'Get a support plan', dataCta: 'cta-primary' }}
          secondaryBtn={{ href: '#whats-included', variant: 'link', text: 'Review what\'s included' }}
          bgClass="bg-white border-top py-5"
        />
      </div>
    </>
  );
}
