import React from 'react';
import CtaBand from '../Common/CtaBand';

export default function QECtaBand() {
  return (
    <CtaBand
      title="Start with a free QA audit. Know your test coverage gaps before your next release does."
      description="A free QA audit takes 48 hours. We review your test coverage, CI pipeline, and defect escape rate — and return a written report with specific, prioritised recommendations. No commitment required."
      primaryBtn={{
        text: 'Get free QA audit \u2192',
        // href: '/free-audit?service=quality-engineering',
        href: '/contact?service=quality-engineering',
        dataCta: 'cta-band-primary',
      }}
      secondaryBtn={{
        text: 'Book a discovery call',
        href: '/contact?service=quality-engineering',
        variant: 'secondary',
      }}
      trustText="Typically responds within 48 hours \u00B7 Written audit, not a sales call"
    />
  );
}
