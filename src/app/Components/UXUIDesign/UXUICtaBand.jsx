import React from 'react';
import CtaBand from '../Common/CtaBand';

export default function UXUICtaBand() {
  return (
    <CtaBand
      title="Your users are telling you something. Let's find out what."
      description="A free design audit takes 48 hours and tells you the top three UX issues costing you conversions or retention right now — with specific recommendations, not generic advice."
      primaryBtn={{
        text: 'Get free design audit →',
        dataCta: 'uxui-cta-primary',
      }}
      secondaryBtn={{
        text: 'Book a discovery call',
        href: '/contact?type=discovery',
        variant: 'link',
      }}
      trustText="No sales call required · Written audit delivered within 48 hours · Specific to your product, not generic advice"
      useModal={true}
      modalTitle="Get Free Design Audit"
      modalDescription="Fill out the form below and we'll get back to you shortly."
    />
  );
}