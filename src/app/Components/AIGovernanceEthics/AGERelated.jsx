import React from 'react';
import RelatedServices from '../Common/RelatedServices';

const RELATED = [
{ title: 'AI Readiness Assessment', desc: 'Know your readiness gaps before building governance — our free assessment covers all six dimensions', href: '/ai-automations/ai-readiness' },
{ title: 'AI Integration Services', desc: 'Build AI systems with governance baked in from day one — not retrofitted after deployment', href: '/ai-automations/ai-integration' },
{ title: 'Intelligent Document Processing', desc: 'IDP systems handling personal data require specific data governance and privacy controls', href: '/ai-automations/document-processing' },
{ title: 'Conversational AI & Chatbots', desc: 'Customer-facing AI systems face the highest governance obligations — especially for hallucination and bias', href: '/ai-automations/conversational-ai' },
];

export default function AGERelated() {
  return (
    <RelatedServices
      subTitle="What pairs with AI governance"
      title="Services governance clients commonly add"
      services={RELATED}
      sectionClassName="cd-section cd-section-light py-5 pb-5 border-top"
      contentClassName="container py-4"
    />
  );
}
