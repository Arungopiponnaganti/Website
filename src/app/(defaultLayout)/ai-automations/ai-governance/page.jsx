import React from 'react';
import '@/app/assets/custom-dev.css';
import '@/app/assets/ai-governance-ethics.css';

import AGEHero from '@/app/Components/AIGovernanceEthics/AGEHero';
import AGEMetrics from '@/app/Components/AIGovernanceEthics/AGEMetrics';
import AGEFramework from '@/app/Components/AIGovernanceEthics/AGEFramework';
import AGERiskRadar from '@/app/Components/AIGovernanceEthics/AGERiskRadar';
import AGEDeliverables from '@/app/Components/AIGovernanceEthics/AGEDeliverables';
import AGEEngagement from '@/app/Components/AIGovernanceEthics/AGEEngagement';
import AGEFaq from '@/app/Components/AIGovernanceEthics/AGEFaq';
import AGERelated from '@/app/Components/AIGovernanceEthics/AGERelated';
import CtaBand from '@/app/Components/Common/CtaBand';

export const metadata = {
  title: 'AI Governance & Ethics | MayuraSoft',
  description:
    'MayuraSoft builds AI governance frameworks that make your AI systems transparent, fair, auditable, and compliant — EU AI Act, GDPR, and India DPDPA aligned. Free governance review.',
  alternates: {
    canonical: 'https://mayurasoft.com/ai-automations/ai-governance',
  },
  openGraph: {
    images: [{ url: '/assets/og-ai-governance-ethics.png', width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Governance & Ethics',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
    url: 'https://mayurasoft.com',
  },
  description:
    'End-to-end AI governance framework — covering transparency, fairness, data privacy, model risk, human oversight, and adversarial security. EU AI Act aligned. Free governance audit to start.',
  areaServed: 'Worldwide',
  serviceType: 'AI Governance, Ethics & Responsible AI Consulting',
};

export default function AIGovernanceEthicsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page age-page">
        <AGEHero />
        <AGEMetrics />
        <AGEFramework />
        <AGERiskRadar />
        <AGEDeliverables />
        <AGEEngagement />
        <AGEFaq />
        <AGERelated />
        <CtaBand
          title="Know your AI governance gaps before a regulator or customer finds them"
          description="We assess your current AI systems against our six-domain framework and return a written gap analysis — no commitment required. Response within 4 hours."
          primaryBtn={{ href: '/contact', text: 'Start free governance review →', dataCta: 'cta-primary-age' }}
          secondaryBtn={{ href: '/contact', variant: 'link', text: 'Download ethics framework' }}
          trustText="Written gap analysis · EU AI Act alignment check included · Response within 4 hours"
          bgClass="bg-white border-top py-5"
        />
      </div>
    </>
  );
}
