import React from 'react';
import CtaBand from '../Common/CtaBand';

export default function AMCtaBand() {
  return (
    <CtaBand
      title="Start with a free legacy audit"
      description="We'll read your codebase, assess your infrastructure, and come back with a prioritised modernisation roadmap — in writing, within 5 business days. No commitment required."
      primaryBtn={{
        text: 'Get free legacy audit \u2192',
        href: '/contact?service=application-modernisation',
        dataCta: 'cta-band-primary',
      }}
      secondaryBtn={{
        text: 'Book a 30-min call',
        href: '/contact',
        variant: 'secondary',
      }}
      trustText="Typically responds within 4 business hours · No sales pitch, just a clear modernisation plan"
    />
  );
}
