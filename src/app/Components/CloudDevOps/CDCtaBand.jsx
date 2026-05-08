import React from 'react';
import CtaBand from '../Common/CtaBand';

const auditFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Company', name: 'company', type: 'text', placeholder: 'Your company name', required: true, colSize: 6 },
  { label: 'Current Infrastructure', name: 'infrastructure', type: 'textarea', placeholder: 'Tell us about your current cloud infrastructure and challenges...', required: false, colSize: 12 },
];

const callFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Preferred Date', name: 'preferred_date', type: 'date', placeholder: 'MM/DD/YYYY (optional)', required: false, colSize: 6 },
  { label: 'Brief Description', name: 'brief', type: 'textarea', placeholder: 'Briefly describe your cloud infrastructure and what you\'d like to discuss...', required: false, colSize: 12 },
];

export default function CDCtaBand() {
  return (
    <CtaBand
      bgClass="bg-white"
      title="Start with a free cloud audit. Know exactly where you stand in 5 days."
      description="We'll review your current infrastructure, identify cost savings, security gaps, and deployment bottlenecks — and deliver a written report with a prioritised action plan. No commitment required."
      primaryBtn={{
        text: 'Get free cloud audit \u2192',
        dataCta: 'cta-band-primary',
      }}
      secondaryBtn={{
        text: 'Book a technical call',
        href: '/contact?service=cloud-devops',
        variant: 'secondary',
        dataCta: 'cta-band-secondary',
      }}
      trustText="Typically responds within 4 business hours · No sales pitch, just a clear infrastructure report"
      useModal={true}
      
      // Primary button modal (cloud audit)
      primaryModalTitle="Get Free Cloud Audit"
      primaryModalDescription="Tell us about your cloud infrastructure and we'll send you a personalized audit within 5 days highlighting cost savings, security gaps, and deployment bottlenecks."
      primaryModalFields={auditFormFields}
      
      // Secondary button modal (technical call)
      secondaryModalTitle="Book Technical Call"
      secondaryModalDescription="Schedule a 30-minute call to discuss your cloud infrastructure challenges and how our DevOps expertise can help optimize your systems."
      secondaryModalFields={callFormFields}
    />
  );
}