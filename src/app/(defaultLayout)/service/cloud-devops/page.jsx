import React from 'react';
import '@/app/assets/custom-dev.css';
import '@/app/assets/cloud-devops.css';

import CDHero from '@/app/Components/CloudDevOps/CDHero';
import CDMetrics from '@/app/Components/CloudDevOps/CDMetrics';
import CDArchitecture from '@/app/Components/CloudDevOps/CDArchitecture';
import CDServices from '@/app/Components/CloudDevOps/CDServices';
import CDMaturityModel from '@/app/Components/CloudDevOps/CDMaturityModel';
import CDCloudProviders from '@/app/Components/CloudDevOps/CDCloudProviders';
import CDEngagementModels from '@/app/Components/CloudDevOps/CDEngagementModels';
import CDFaq from '@/app/Components/CloudDevOps/CDFaq';
import CDCtaBand from '@/app/Components/CloudDevOps/CDCtaBand';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/service/cloud-devops');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cloud & DevOps Services',
  provider: {
    '@type': 'Organization',
    name: 'Mayurasoft',
    url: 'https://mayurasoft.com',
  },
  description:
    'Cloud migration, CI/CD pipelines, Kubernetes orchestration, infrastructure as code, observability, and cloud security — delivered by engineers who own cloud infrastructure day-to-day.',
  areaServed: 'Worldwide',
  serviceType: 'Cloud & DevOps Engineering',
};

export default function CloudDevOpsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page cd-devops-page">
        <CDHero />
        <CDMetrics />
        <CDArchitecture />
        <CDServices />
        <CDMaturityModel />
        <CDCloudProviders />
        <CDEngagementModels />
        <CDFaq />
        <CDCtaBand />
      </div>
    </>
  );
}
