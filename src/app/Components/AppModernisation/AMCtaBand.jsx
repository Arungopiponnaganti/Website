import React from 'react';
import CtaBand from '../Common/CtaBand';

const auditFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Company', name: 'company', type: 'text', placeholder: 'Your company name', required: true, colSize: 6 },
  { label: 'Legacy System Details', name: 'legacy_details', type: 'textarea', placeholder: 'Tell us about your legacy system and what you\'d like to modernize...', required: false, colSize: 12 },
];

const callFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Preferred Date', name: 'preferred_date', type: 'date', placeholder: 'MM/DD/YYYY (optional)', required: false, colSize: 6 },
  { label: 'Brief Description', name: 'brief', type: 'textarea', placeholder: 'Briefly describe your legacy system and modernization goals...', required: false, colSize: 12 },
];

export default function AMCtaBand() {
  return (
    <CtaBand
      title="Start with a free legacy audit"
      description="We'll read your codebase, assess your infrastructure, and come back with a prioritised modernisation roadmap — in writing, within 5 business days. No commitment required."
      primaryBtn={{
        text: 'Get free legacy audit \u2192',
        dataCta: 'cta-band-primary',
      }}
      secondaryBtn={{
        text: 'Book a 30-min call',
        dataCta: 'cta-band-secondary',
      }}
      trustText="Typically responds within 4 business hours · No sales pitch, just a clear modernisation plan"
      useModal={true}
      
      // Primary button modal (legacy audit)
      primaryModalTitle="Get Free Legacy Audit"
      primaryModalDescription="Tell us about your legacy system and we'll provide a comprehensive audit with a prioritised modernisation roadmap within 5 business days."
      primaryModalFields={auditFormFields}
      
      // Secondary button modal (discovery call)
      secondaryModalTitle="Book 30-min Discovery Call"
      secondaryModalDescription="Schedule a 30-minute call to discuss your legacy modernisation needs and get expert advice on the best approach."
      secondaryModalFields={callFormFields}
    />
  );
}