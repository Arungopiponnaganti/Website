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
import WACtaBand from '@/app/Components/WorkflowAutomation/WACtaBand';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/ai-automations/workflow-automation');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Workflow Automation Services',
  provider: {
    '@type': 'Organization',
    name: 'Mayurasoft',
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
        <WACtaBand />
      </div>
    </>
  );
}
