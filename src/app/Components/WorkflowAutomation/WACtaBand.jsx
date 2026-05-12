import React from 'react';
import CtaBand from '../Common/CtaBand';

const processAuditFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Company/Process', name: 'company', type: 'text', placeholder: 'Your company or process name', required: true, colSize: 6 },
  { label: 'Current Process Description', name: 'process_description', type: 'textarea', placeholder: 'Describe the manual processes you\'d like to automate or improve...', required: false, colSize: 12 },
];

const expertCallFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Preferred Date', name: 'preferred_date', type: 'date', placeholder: 'MM/DD/YYYY (optional)', required: false, colSize: 6 },
  { label: 'Current Tools & Challenges', name: 'tools_challenges', type: 'textarea', placeholder: 'What tools do you currently use? What automation challenges are you facing?', required: false, colSize: 12 },
];

export default function WACtaBand() {
  return (
    <CtaBand
      title="Find out which of your processes should be running themselves"
      description="We'll map your highest-value manual processes, estimate the automation coverage possible, and hand you back a ranked list of opportunities — with effort and impact scores. All free, in one 90-minute session."
      primaryBtn={{ 
        text: 'Book free process audit →', 
        dataCta: 'wa-cta-primary' 
      }}
      secondaryBtn={{ 
        text: 'Talk to an automation expert', 
        variant: 'link', 
        dataCta: 'wa-cta-secondary' 
      }}
      trustText="Free 90-minute session · Written opportunity map delivered in 48 hrs · No commitment required"
      bgClass="bg-white border-top py-5"
      useModal={true}

      // Primary button modal (process audit)
      primaryModalTitle="Book Free Process Audit"
      primaryModalDescription="Tell us about your current processes and we'll map your highest-value automation opportunities with effort and impact scores."
      primaryModalFields={processAuditFormFields}

      // Secondary button modal (expert call)
      secondaryModalTitle="Talk to Automation Expert"
      secondaryModalDescription="Schedule a call with our automation expert to discuss your specific workflow challenges and get personalized recommendations."
      secondaryModalFields={expertCallFormFields}
    />
  );
}