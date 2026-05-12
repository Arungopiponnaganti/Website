import React from 'react';
import CtaBand from '../Common/CtaBand';

const auditFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Product/Company', name: 'company', type: 'text', placeholder: 'Your company/product name', required: true, colSize: 6 },
  { label: 'Current QA Challenges', name: 'challenges', type: 'textarea', placeholder: 'Tell us about your current QA challenges, testing setup, and goals...', required: false, colSize: 12 },
];

const callFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Preferred Date', name: 'preferred_date', type: 'date', placeholder: 'MM/DD/YYYY (optional)', required: false, colSize: 6 },
  { label: 'Brief Description', name: 'brief', type: 'textarea', placeholder: 'Briefly describe your testing needs and what you\'d like to discuss...', required: false, colSize: 12 },
];

export default function QECtaBand() {
  return (
    <CtaBand
      title="Start with a free QA audit. Know your test coverage gaps before your next release does."
      description="A free QA audit takes 48 hours. We review your test coverage, CI pipeline, and defect escape rate — and return a written report with specific, prioritised recommendations. No commitment required."
      primaryBtn={{
        text: 'Get free QA audit \u2192',
        dataCta: 'cta-band-primary',
      }}
      secondaryBtn={{
        text: 'Book a discovery call',
        variant: 'link',
        dataCta: 'qe-cta-secondary',
      }}
      trustText="Typically responds within 48 hours \u00B7 Written audit, not a sales call"
      useModal={true}

      // Primary button modal (QA audit)
      primaryModalTitle="Get Free QA Audit"
      primaryModalDescription="Tell us about your product and we'll send you a personalized QA audit within 48 hours highlighting your test coverage gaps and specific recommendations."
      primaryModalFields={auditFormFields}

      // Secondary button modal (discovery call)
      secondaryModalTitle="Book Discovery Call"
      secondaryModalDescription="Schedule a 30-minute call to discuss your QA challenges and how our testing expertise can help improve your product quality."
      secondaryModalFields={callFormFields}
    />
  );
}