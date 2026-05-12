import React from 'react';
import CtaBand from '../Common/CtaBand';

const designSessionFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Company', name: 'company', type: 'text', placeholder: 'Your company name', required: true, colSize: 6 },
  { label: 'Current AI/Chatbot Setup', name: 'current_setup', type: 'textarea', placeholder: 'Describe your current chatbot or AI assistant setup, if any...', required: false, colSize: 12 },
  { label: 'Primary Use Cases', name: 'use_cases', type: 'textarea', placeholder: 'What are your top 3 support or operational use cases?', required: false, colSize: 12 },
];

const expertConsultationFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Preferred Date', name: 'preferred_date', type: 'date', placeholder: 'MM/DD/YYYY (optional)', required: false, colSize: 6 },
  { label: 'Project Description', name: 'project_description', type: 'textarea', placeholder: 'Tell us about your conversational AI project and what you\'d like to discuss...', required: false, colSize: 12 },
];

export default function CAICtaBand() {
  return (
    <CtaBand
      title="See what a custom AI assistant would do for your team"
      description="We'll map your top three support or operational use cases, sketch the conversation flows, and estimate the resolution rate you can expect. In 60 minutes. Free."
      primaryBtn={{
        text: 'Book free design session →',
        dataCta: 'cta-primary-cai',
      }}
      secondaryBtn={{
        text: 'Talk to a conversational AI expert',
        variant: 'link',
        dataCta: 'cta-secondary-cai',
      }}
      trustText="Free 60-minute session · Conversation map delivered within 48 hrs · No commitment required"
      bgClass="bg-white border-top py-5"
      useModal={true}

      // Primary button modal (design session)
      primaryModalTitle="Book Free Design Session"
      primaryModalDescription="We'll map your top three support or operational use cases, sketch the conversation flows, and estimate the resolution rate you can expect. Fill out the form below and we'll get back to you shortly."
      primaryModalFields={designSessionFormFields}

      // Secondary button modal (expert consultation)
      secondaryModalTitle="Talk to a Conversational AI Expert"
      secondaryModalDescription="Schedule a call with our conversational AI expert to discuss your specific requirements and get personalized recommendations."
      secondaryModalFields={expertConsultationFormFields}
    />
  );
}