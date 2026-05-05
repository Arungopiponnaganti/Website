import React from 'react';
import CtaBand from '../Common/CtaBand';

export default function PECtaBand() {
  return (
    <CtaBand
      title="Ready to build your product the right way?"
      description="Get a free 30-min product audit. We'll assess your current state and come back with a clear scoping recommendation — no pitch, no obligation."
      primaryBtn={{
        text: 'Get free product audit \u2192',
        href: '/contact',
        dataCta: 'cta-band-primary',
      }}
      secondaryBtn={{
        text: 'Book a 30-min call',
        href: '/contact',
        variant: 'secondary',
      }}
    />
  );
}
