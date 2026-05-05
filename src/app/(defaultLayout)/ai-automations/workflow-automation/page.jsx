import React from 'react';
import '@/app/assets/custom-dev.css';
import '@/app/assets/workflow-automation.css';

import WAHero from '@/app/Components/WorkflowAutomation/WAHero';
import WAMetrics from '@/app/Components/WorkflowAutomation/WAMetrics';
import WAROICalculator from '@/app/Components/WorkflowAutomation/WAROICalculator';
import WAAutomationFinder from '@/app/Components/WorkflowAutomation/WAAutomationFinder';
import WAPlatforms from '@/app/Components/WorkflowAutomation/WAPlatforms';
import WAProcess from '@/app/Components/WorkflowAutomation/WAProcess';
import WABeforeAfter from '@/app/Components/WorkflowAutomation/WABeforeAfter';
import WAWhyUs from '@/app/Components/WorkflowAutomation/WAWhyUs';
import WAEngagement from '@/app/Components/WorkflowAutomation/WAEngagement';
import WAFaq from '@/app/Components/WorkflowAutomation/WAFaq';
import WARelated from '@/app/Components/WorkflowAutomation/WARelated';
import CtaBand from '@/app/Components/Common/CtaBand';

export const metadata = {
  title: 'Workflow Automation Services | MayuraSoft',
  description:
    'MayuraSoft maps, designs, and builds end-to-end workflow automations — connecting your apps, data, and teams so that work moves forward without anyone pushing it. Free 90-min process audit.',
  alternates: {
    canonical: 'https://mayurasoft.com/ai-automations/workflow-automation',
  },
  openGraph: {
    images: [{ url: '/assets/og-workflow-automation.png', width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Workflow Automation Services',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
    url: 'https://mayurasoft.com',
  },
  description:
    'End-to-end workflow automation — mapping, designing, and building automations that connect your apps, data, and teams. Uses n8n, Make, Zapier, and custom code with AI where it adds value. Free process audit to start.',
  areaServed: 'Worldwide',
  serviceType: 'Workflow Automation & AI-Augmented Process Automation',
};

export default function WorkflowAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page wa-page">
        <WAHero />
        <WAMetrics />
        {/* <WAROICalculator /> */}
        <WAAutomationFinder />
        <WAPlatforms />
        <WAProcess />
        <WABeforeAfter />
        <WAWhyUs />
        <WAEngagement />
        <WAFaq />
        <WARelated />
        <CtaBand
          title="Find out which of your processes should be running themselves"
          description="We'll map your highest-value manual processes, estimate the automation coverage possible, and hand you back a ranked list of opportunities — with effort and impact scores. All free, in one 90-minute session."
          primaryBtn={{ href: '/contact', text: 'Book free process audit →', dataCta: 'cta-primary-wa' }}
          secondaryBtn={{ href: '/contact', variant: 'link', text: 'Talk to an automation expert' }}
          trustText="Free 90-minute session · Written opportunity map delivered in 48 hrs · No commitment required"
          bgClass="bg-white border-top py-5"
        />
      </div>
    </>
  );
}
