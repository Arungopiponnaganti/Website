import React from 'react';
import '@/app/assets/custom-dev.css';
import '@/app/assets/ai-integration.css';

import AIHero from '@/app/Components/AIIntegration/AIHero';
import AIMetrics from '@/app/Components/AIIntegration/AIMetrics';
import AIIntegrationBuilder from '@/app/Components/AIIntegration/AIIntegrationBuilder';
import AIUseCases from '@/app/Components/AIIntegration/AIUseCases';
import AIProcess from '@/app/Components/AIIntegration/AIProcess';
import AIReadinessQuiz from '@/app/Components/AIIntegration/AIReadinessQuiz';
import AIModelStack from '@/app/Components/AIIntegration/AIModelStack';
import AIEngagement from '@/app/Components/AIIntegration/AIEngagement';
import AIFaq from '@/app/Components/AIIntegration/AIFaq';
import AIRelated from '@/app/Components/AIIntegration/AIRelated';
import CtaBand from '@/app/Components/Common/CtaBand';
import { getPageMetadata } from '@/utils/seo';

const auditFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Product/Company', name: 'company', type: 'text', placeholder: 'Your product or company name', required: true, colSize: 6 },
  { label: 'Current Systems', name: 'systems', type: 'textarea', placeholder: 'Tell us about your current systems, workflows, and data sources...', required: false, colSize: 12 },
];

const callFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Preferred Date', name: 'preferred_date', type: 'date', placeholder: 'MM/DD/YYYY (optional)', required: false, colSize: 6 },
  { label: 'Brief Description', name: 'brief', type: 'textarea', placeholder: 'Briefly describe your product and what you\'d like to discuss...', required: false, colSize: 12 },
];

export const metadata = getPageMetadata('/ai-automations/ai-integration');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Integration Services',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
    url: 'https://mayurasoft.com',
  },
  description:
    'End-to-end AI integration — GPT-4, Claude, Gemini, and open-source LLMs connected to your CRM, ERP, ticketing system, or custom web app. Proof-of-concept in 48 hours, production deployment in 2–12 weeks.',
  areaServed: 'Worldwide',
  serviceType: 'AI Integration & Automation',
};

export default function AIIntegrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page ai-page">
        <AIHero />
        {/* <AIMetrics /> */}
        <AIIntegrationBuilder />
        <AIUseCases />
        <AIProcess />
        <AIReadinessQuiz />
        <AIModelStack />
        <AIEngagement />
        <AIFaq />
        <AIRelated />
        <CtaBand
          title="Find out where AI will move your business metrics — in 48 hours"
          description="We review your systems, workflows, and data — and deliver three specific AI integration opportunities ranked by impact and implementation effort. Written. Actionable. Free."
          primaryBtn={{
            text: 'Get free AI audit →',
            dataCta: 'cta-primary-ai'
          }}
          secondaryBtn={{
            variant: 'link',
            text: 'Book a discovery call',
            dataCta: 'cta-secondary-ai'
          }}
          trustText="No sales pitch · Written opportunity assessment · Delivered within 48 business hours"
          bgClass="bg-white border-top py-5"
          useModal={true}

          // Primary button modal (AI audit)
          primaryModalTitle="Get Free AI Audit"
          primaryModalDescription="We review your systems, workflows, and data — and deliver three specific AI integration opportunities ranked by impact and implementation effort."
          primaryModalFields={auditFormFields}

          // Secondary button modal (discovery call)
          secondaryModalTitle="Book Discovery Call"
          secondaryModalDescription="Schedule a 30-minute call to discuss your AI integration needs and how we can help you leverage AI to improve your business metrics."
          secondaryModalFields={callFormFields}
        />
      </div>
    </>
  );
}
