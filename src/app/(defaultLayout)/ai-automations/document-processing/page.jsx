import React from 'react';
import '@/app/assets/custom-dev.css';
import '@/app/assets/intelligent-document-processing.css';

import IDPHero from '@/app/Components/IntelligentDocProcessing/IDPHero';
import IDPMetrics from '@/app/Components/IntelligentDocProcessing/IDPMetrics';
import IDPDocTypes from '@/app/Components/IntelligentDocProcessing/IDPDocTypes';
import IDPPipeline from '@/app/Components/IntelligentDocProcessing/IDPPipeline';
import IDPEngagement from '@/app/Components/IntelligentDocProcessing/IDPEngagement';
import IDPFaq from '@/app/Components/IntelligentDocProcessing/IDPFaq';
import IDPRelated from '@/app/Components/IntelligentDocProcessing/IDPRelated';
import CtaBand from '@/app/Components/Common/CtaBand';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/ai-automations/document-processing');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Intelligent Document Processing',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
    url: 'https://mayurasoft.com',
  },
  description:
    'End-to-end document intelligence — AI extraction, classification, validation, and downstream routing for invoices, contracts, KYC forms, medical records, and logistics documents. 95%+ extraction accuracy, 4-second processing, 3-week delivery.',
  areaServed: 'Worldwide',
  serviceType: 'Intelligent Document Processing & AI Data Extraction',
};

export default function IntelligentDocumentProcessingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page idp-page">
        <IDPHero />
        <IDPMetrics />
        <IDPDocTypes />
        <IDPPipeline />
        <IDPEngagement />
        <IDPFaq />
        <IDPRelated />
        <CtaBand
          title="Start with a free document processing audit"
          description="Send us three sample documents. We'll assess extraction complexity, recommend the right approach, and give you an accuracy estimate — within 48 hours. No commitment required."
          primaryBtn={{ text: 'Get free doc audit →', dataCta: 'cta-primary-idp' }}
          secondaryBtn={{ href: '/contact', variant: 'link', text: 'Book a discovery call' }}
          trustText="Free audit · Written accuracy estimate in 48 hrs · No commitment required"
          bgClass="bg-white border-top py-5"
          useModal={true}
          modalTitle="Get Free Doc Audit"
          modalDescription="Fill out the form below and we'll get back to you shortly."
        />
      </div>
    </>
  );
}
