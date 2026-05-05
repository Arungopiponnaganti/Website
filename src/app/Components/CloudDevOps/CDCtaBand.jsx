import React from 'react';
import CtaBand from '../Common/CtaBand';

export default function CDCtaBand() {
  return (
    <CtaBand
      bgClass="bg-white"
      title="Start with a free cloud audit. Know exactly where you stand in 5 days."
      description="We'll review your current infrastructure, identify cost savings, security gaps, and deployment bottlenecks — and deliver a written report with a prioritised action plan. No commitment required."
      primaryBtn={{
        text: 'Get free cloud audit \u2192',
        // href: '/free-audit?service=cloud-devops',
        href: '/contact?service=cloud-devops',
        dataCta: 'cta-band-primary',
      }}
      secondaryBtn={{
        text: 'Book a technical call',
        href: '/contact?service=cloud-devops',
        variant: 'secondary',
      }}
      trustText="Typically responds within 4 business hours · No sales pitch, just a clear infrastructure report"
    />
  );
}
