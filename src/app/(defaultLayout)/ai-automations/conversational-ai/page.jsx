import React from 'react';
import '@/app/assets/custom-dev.css';
import '@/app/assets/conversational-ai.css';

import CAIHero from '@/app/Components/ConversationalAI/CAIHero';
import CAIMetrics from '@/app/Components/ConversationalAI/CAIMetrics';
import CAIBotExplorer from '@/app/Components/ConversationalAI/CAIBotExplorer';
import CAIBotConfigurator from '@/app/Components/ConversationalAI/CAIBotConfigurator';
import CAIChannels from '@/app/Components/ConversationalAI/CAIChannels';
import CAIProcess from '@/app/Components/ConversationalAI/CAIProcess';
import CAIComparison from '@/app/Components/ConversationalAI/CAIComparison';
import CAIEngagement from '@/app/Components/ConversationalAI/CAIEngagement';
import CAIFaq from '@/app/Components/ConversationalAI/CAIFaq';
import CAIRelated from '@/app/Components/ConversationalAI/CAIRelated';
import CtaBand from '@/app/Components/Common/CtaBand';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/ai-automations/conversational-ai');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Conversational AI & Chatbots',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
    url: 'https://mayurasoft.com',
  },
  description:
    'Custom LLM-powered chatbots and conversational AI agents — RAG knowledge base, human handoff, CRM integration, and multi-channel deployment (website, WhatsApp, Slack, Teams). Free conversation design session to start.',
  areaServed: 'Worldwide',
  serviceType: 'Conversational AI & Chatbot Development',
};

export default function ConversationalAIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page cai-page">
        <CAIHero />
        <CAIMetrics />
        <CAIChannels />
        <CAIBotExplorer />
        <CAIBotConfigurator />
        <CAIProcess />
        <CAIComparison />
        <CAIEngagement />
        <CAIFaq />
        <CAIRelated />
        <CtaBand
          title="See what a custom AI assistant would do for your team"
          description="We'll map your top three support or operational use cases, sketch the conversation flows, and estimate the resolution rate you can expect. In 60 minutes. Free."
          primaryBtn={{ text: 'Book free design session →', dataCta: 'cta-primary-cai' }}
          secondaryBtn={{ href: '/contact', variant: 'link', text: 'Talk to a conversational AI expert' }}
          trustText="Free 60-minute session · Conversation map delivered within 48 hrs · No commitment required"
          bgClass="bg-white border-top py-5"
          useModal={true}
          modalTitle="Book Free Design Session"
          modalDescription="Fill out the form below and we'll get back to you shortly."
        />
      </div>
    </>
  );
}
