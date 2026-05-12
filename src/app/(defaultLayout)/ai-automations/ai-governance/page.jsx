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
import { getPageMetadata } from '@/utils/seo';

const governanceReviewFields = [
{ label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
{ label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
{ label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
{ label: 'Company', name: 'company', type: 'text', placeholder: 'Your company name', required: true, colSize: 6 },
{ label: 'AI Systems Description', name: 'ai_description', type: 'textarea', placeholder: 'Briefly describe your current AI systems and governance concerns...', required: false, colSize: 12 },
];

const ethicsFrameworkFields = [
{ label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
{ label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
{ label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: false, colSize: 6 },
{ label: 'Company', name: 'company', type: 'text', placeholder: 'Your company name', required: true, colSize: 6 },
{ label: 'Framework Needs', name: 'framework_needs', type: 'textarea', placeholder: 'Tell us what specific ethics framework components you need...', required: false, colSize: 12 },
];

export const metadata = getPageMetadata('/ai-automations/ai-governance');

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
        primaryBtn={{ text: 'Start free governance review →', dataCta: 'cta-primary-age' }}
        secondaryBtn={{ text: 'Download ethics framework', variant: 'link', dataCta: 'age-cta-secondary' }}
        trustText="Written gap analysis · EU AI Act alignment check included · Response within 4 hours"
        bgClass="bg-white border-top py-5"
        useModal={true}
        
        // Primary button modal (governance review)
        primaryModalTitle="Start Free Governance Review"
        primaryModalDescription="We assess your current AI systems against our six-domain framework and return a written gap analysis — response within 4 hours."
        primaryModalFields={governanceReviewFields}
        
        // Secondary button modal (ethics framework)
        secondaryModalTitle="Download Ethics Framework"
        secondaryModalDescription="Tell us about your needs and we'll send you our comprehensive AI ethics framework template."
        secondaryModalFields={ethicsFrameworkFields}
      />
      </div>
    </>
  );
}
