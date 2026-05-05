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

export const metadata = {
  title: 'AI Integration Services | MayuraSoft',
  description:
    'MayuraSoft integrates GPT-4, Claude, Gemini, and open-source LLMs into your existing systems — without rebuilding anything. Get a free AI audit within 48 hours.',
  alternates: {
    canonical: 'https://mayurasoft.com/ai-automations/ai-integration',
  },
  openGraph: {
    images: [{ url: '/assets/og-ai-integration.png', width: 1200, height: 630 }],
  },
};

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
          primaryBtn={{ href: '/contact', text: 'Get free AI audit →', dataCta: 'cta-primary-ai' }}
          secondaryBtn={{ href: '/contact', variant: 'link', text: 'Book a discovery call' }}
          trustText="No sales pitch · Written opportunity assessment · Delivered within 48 business hours"
          bgClass="bg-white border-top py-5"
        />
      </div>
    </>
  );
}
