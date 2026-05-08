import React from 'react';
import CtaBand from '../Common/CtaBand';

const auditFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Product/Company', name: 'company', type: 'text', placeholder: 'Your company/product name', required: true, colSize: 6 },
  { label: 'Current UX Challenges', name: 'challenges', type: 'textarea', placeholder: 'Tell us about your product and current UX challenges...', required: false, colSize: 12 },
];

const callFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Preferred Date', name: 'preferred_date', type: 'date', placeholder: 'MM/DD/YYYY (optional)', required: false, colSize: 6 },
  { label: 'Brief Description', name: 'brief', type: 'textarea', placeholder: 'Briefly describe your product and what you\'d like to discuss...', required: false, colSize: 12 },
];

export default function UXUICtaBand() {
  return (
    <CtaBand
      title="Your users are telling you something. Let's find out what."
      description="A free design audit takes 48 hours and tells you the top three UX issues costing you conversions or retention right now — with specific recommendations, not generic advice."
      primaryBtn={{
        text: 'Get free design audit →',
        dataCta: 'uxui-cta-primary',
      }}
      secondaryBtn={{
        text: 'Book a discovery call',
        variant: 'link',
        dataCta: 'uxui-cta-secondary',
      }}
      trustText="No sales call required · Written audit delivered within 48 hours · Specific to your product, not generic advice"
      useModal={true}
      
      // Primary button modal (design audit)
      primaryModalTitle="Get Free Design Audit"
      primaryModalDescription="Tell us about your product and we'll send you a personalized UX audit within 48 hours highlighting the top 3 issues affecting your conversions."
      primaryModalFields={auditFormFields}
      
      // Secondary button modal (discovery call)
      secondaryModalTitle="Book Discovery Call"
      secondaryModalDescription="Schedule a 30-minute call to discuss your UX challenges and how our design expertise can help improve your product."
      secondaryModalFields={callFormFields}
    />
  );
}