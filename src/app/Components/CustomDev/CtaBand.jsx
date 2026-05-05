import React from 'react';
import CtaBand from '../Common/CtaBand';

export default function CustomDevCtaBand() {
  return (
    <CtaBand
      title="Let's scope your project"
      description="Book a free 60-minute scoping session. We'll map out what needs to be built, how long it takes, and what it costs — with no obligation."
      primaryBtn={{
        text: 'Book a free scoping session \u2192',
        // href: '/free-audit?service=custom-dev',
        href: '/contact?service=custom-dev',
        dataCta: 'cta-band-primary',
      }}
      secondaryBtn={{
        text: 'Or email us at info@mayurasoft.com',
        href: 'mailto:info@mayurasoft.com',
        variant: 'link',
      }}
    />
  );
}
