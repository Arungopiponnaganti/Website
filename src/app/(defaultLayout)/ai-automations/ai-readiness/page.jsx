import React from 'react';
import '@/app/assets/custom-dev.css';
import '@/app/assets/ai-readiness-assessment.css';

import ARAHero from '@/app/Components/AIReadinessAssessment/ARAHero';
import ARAAssessment from '@/app/Components/AIReadinessAssessment/ARAAssessment';
import ARAFaq from '@/app/Components/AIReadinessAssessment/ARAFaq';
import ARARelated from '@/app/Components/AIReadinessAssessment/ARARelated';
import CtaBand from '@/app/Components/Common/CtaBand';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/ai-automations/ai-readiness');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Readiness Assessment',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
    url: 'https://mayurasoft.com',
  },
  description:
    'Free interactive AI readiness assessment across six dimensions: data, infrastructure, use case clarity, team skills, governance, and executive alignment. Instant scored report with prioritised recommendations.',
  areaServed: 'Worldwide',
  serviceType: 'AI Strategy & Readiness Assessment',
};

export default function AIReadinessAssessmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page ara-page">
        <ARAHero />
        <ARAAssessment />
        <ARAFaq />
        <ARARelated />
        <CtaBand
          title="Want a more detailed AI readiness evaluation?"
          description="Our free 45-minute readiness consultation goes deeper than the assessment — we review your specific data estate, tech stack, and use case opportunities and return a written gap analysis within 48 hours."
          primaryBtn={{ text: 'Book free consultation →', dataCta: 'cta-primary-ara' }}
          secondaryBtn={{ href: '/contact', variant: 'link', text: 'Talk to an AI strategist' }}
          trustText="No sales pitch · Written assessment delivered in 48 hrs · No commitment required"
          bgClass="bg-white border-top py-5"
          useModal={true}
          modalTitle="Book Free Consultation"
          modalDescription="Fill out the form below and we'll get back to you shortly."
        />
      </div>
    </>
  );
}
