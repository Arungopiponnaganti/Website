import React from 'react';
import '@/app/assets/custom-dev.css';
import '@/app/assets/ai-readiness-assessment.css';

import ARAHero from '@/app/Components/AIReadinessAssessment/ARAHero';
import ARAValueProp from '@/app/Components/AIReadinessAssessment/ARAValueProp';
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

const consultationFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Company', name: 'company', type: 'text', placeholder: 'Your company name', required: true, colSize: 6 },
  { label: 'AI Challenges', name: 'challenges', type: 'textarea', placeholder: 'Tell us about your AI readiness challenges and goals...', required: false, colSize: 12 },
];

const strategistFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Preferred Date', name: 'preferred_date', type: 'date', placeholder: 'MM/DD/YYYY (optional)', required: false, colSize: 6 },
  { label: 'Brief Description', name: 'brief', type: 'textarea', placeholder: 'Briefly describe your AI challenges and what you\'d like to discuss...', required: false, colSize: 12 },
];

export default function AIReadinessAssessmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page ara-page">
        <ARAHero />
        <ARAValueProp />
        <ARAAssessment />
        <ARAFaq />
        <ARARelated />
        <CtaBand
          title="Want a more detailed AI readiness evaluation?"
          description="Our free 45-minute readiness consultation goes deeper than the assessment — we review your specific data estate, tech stack, and use case opportunities and return a written gap analysis within 48 hours."
          primaryBtn={{ text: 'Book free consultation →', dataCta: 'cta-primary-ara' }}
          secondaryBtn={{ href: '#', variant: 'link', text: 'Talk to an AI strategist', dataCta: 'cta-secondary-ara' }}
          trustText="No sales pitch · Written assessment delivered in 48 hrs · No commitment required"
          bgClass="bg-white border-top py-5"
          useModal={true}
          primaryModalTitle="Book Free Consultation"
          primaryModalDescription="Our free 45-minute readiness consultation goes deeper than the assessment — we review your specific data estate, tech stack, and use case opportunities and return a written gap analysis within 48 hours."
          primaryModalFields={consultationFormFields}
          secondaryModalTitle="Talk to an AI Strategist"
          secondaryModalDescription="Schedule a call to discuss your AI challenges and how our expertise can help you improve your AI readiness."
          secondaryModalFields={strategistFormFields}
        />
      </div>
    </>
  );
}
