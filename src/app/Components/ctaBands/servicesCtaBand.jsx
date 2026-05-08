import React from 'react';
import CtaBand from '../Common/CtaBand';

export default function ServicesCtaBand() {
  return (
    <CtaBand
      title="Need the right team to build and scale your software?"
      description="From custom development to AI and data solutions, we help you move faster with clear scope, reliable delivery, and no unnecessary complexity."
      primaryBtn={{
        text: 'Get a free consultation →',
        dataCta: 'cta-services-primary',
      }}
      secondaryBtn={{
        text: 'View our process',
        href: '/process',
        variant: 'secondary',
      }}
      useModal={true}
      modalTitle="Start Your Project"
      modalDescription="Tell us what you're building — we’ll guide you with the next steps."
    />
  );
}