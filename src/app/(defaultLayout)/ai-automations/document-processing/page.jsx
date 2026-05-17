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
    'End-to-end document processing workflows for invoices, contracts, KYC forms, medical records, and logistics documents, with extraction, validation, review queues, and downstream system integration.',
  areaServed: 'Worldwide',
  serviceType: 'Intelligent Document Processing & AI Data Extraction',
};

// Form fields for document audit modal
const auditFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Company', name: 'company', type: 'text', placeholder: 'Your company name', required: true, colSize: 6 },
  { label: 'Document Types', name: 'document_types', type: 'text', placeholder: 'e.g., invoices, contracts, medical records', required: false, colSize: 12 },
  { label: 'Current Volume', name: 'volume', type: 'text', placeholder: 'Approximate monthly document volume', required: false, colSize: 6 },
  { label: 'Message', name: 'message', type: 'textarea', placeholder: 'Tell us about your document processing challenges and goals...', required: false, colSize: 12 },
];

// Form fields for discovery call modal
const callFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Preferred Date', name: 'preferred_date', type: 'date', placeholder: 'MM/DD/YYYY (optional)', required: false, colSize: 6 },
  { label: 'Brief Description', name: 'brief', type: 'textarea', placeholder: 'Briefly describe your document processing needs and what you\'d like to discuss...', required: false, colSize: 12 },
];

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
          description="Send us a few sample documents. We'll assess extraction complexity, recommend the right approach, and outline a practical implementation path. No commitment required."
          primaryBtn={{ 
            text: 'Get free doc audit →', 
            dataCta: 'idp-cta-primary' 
          }}
          secondaryBtn={{ 
            text: 'Book a discovery call',
            variant: 'link', 
            dataCta: 'idp-cta-secondary' 
          }}
          trustText="Free audit · Written accuracy estimate in 48 hrs · No commitment required"
          bgClass="bg-white border-top py-5"
          useModal={true}
          
          // Primary button modal (document audit)
          primaryModalTitle="Get Free Doc Audit"
          primaryModalDescription="Send us three sample documents. We'll assess extraction complexity, recommend the right approach, and give you an accuracy estimate — within 48 hours. No commitment required."
          primaryModalFields={auditFormFields}
          
          // Secondary button modal (discovery call)
          secondaryModalTitle="Book Discovery Call"
          secondaryModalDescription="Schedule a 30-minute call to discuss your document processing challenges and how our AI expertise can help automate your workflows."
          secondaryModalFields={callFormFields}
        />
      </div>
    </>
  );
}
