import React from 'react';
import CtaBand from '../Common/CtaBand';

export default function AICtaBand() {
  return (
    <CtaBand
      title="Ready to automate what’s slowing you down?"
      description="We’ll review your current workflows and identify where AI can reduce manual work, improve speed, and unlock smarter operations — with a clear, practical plan."
      primaryBtn={{
        text: 'Get AI automation audit →',
        dataCta: 'cta-ai-primary',
      }}
      secondaryBtn={{
        text: 'Book a strategy call',
        href: '/contact',
        variant: 'secondary',
      }}
      useModal={true}
      modalTitle="Get AI Automation Audit"
      modalDescription="Tell us about your workflows — we’ll map where AI can help."
    />
  );
}