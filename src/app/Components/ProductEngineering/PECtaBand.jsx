import React from 'react';
import CtaBand from '../Common/CtaBand';

const auditFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Product/Company', name: 'company', type: 'text', placeholder: 'Your product or company name', required: true, colSize: 6 },
  { label: 'Current Product Stage', name: 'stage', type: 'textarea', placeholder: 'Tell us about your current product stage, challenges, and goals...', required: false, colSize: 12 },
];

const callFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Preferred Date', name: 'preferred_date', type: 'date', placeholder: 'MM/DD/YYYY (optional)', required: false, colSize: 6 },
  { label: 'Brief Description', name: 'brief', type: 'textarea', placeholder: 'Briefly describe your product and what you\'d like to discuss...', required: false, colSize: 12 },
];

export default function PECtaBand() {
  return (
    <CtaBand
      title="Ready to build your product the right way?"
      description="Get a free 30-min product audit. We'll assess your current state and come back with a clear scoping recommendation — no pitch, no obligation."
      primaryBtn={{
        text: 'Get free product audit \u2192',
        dataCta: 'pe-cta-primary',
      }}
      secondaryBtn={{
        text: 'Book a 30-min call',
        variant: 'link',
        dataCta: 'pe-cta-secondary',
      }}
      trustText="Typically responds within 4 business hours · No sales pitch, just a clear plan"
      useModal={true}

      // Primary button modal (free product audit)
      primaryModalTitle="Get Free Product Audit"
      primaryModalDescription="Get a free 30-min product audit. We'll assess your current state and come back with a clear scoping recommendation — no pitch, no obligation."
      primaryModalFields={auditFormFields}

      // Secondary button modal (discovery call)
      secondaryModalTitle="Book Discovery Call"
      secondaryModalDescription="Schedule a 30-minute call to discuss your product engineering challenges and how our expertise can help you build the right way."
      secondaryModalFields={callFormFields}
    />
  );
}
