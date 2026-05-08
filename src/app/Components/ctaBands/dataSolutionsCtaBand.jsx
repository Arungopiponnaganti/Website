import React from 'react';
import CtaBand from '../Common/CtaBand';

export default function DataSolutionsCtaBand() {
  return (
    <CtaBand
      title="Turn your data into decisions that matter"
      description="We’ll analyze your data setup, identify gaps, and recommend a clear path to better reporting, automation, and insights — without overcomplicating things."
      primaryBtn={{
        text: 'Get data assessment →',
        dataCta: 'cta-data-primary',
      }}
      secondaryBtn={{
        text: 'Talk to a data expert',
        href: '/contact',
        variant: 'secondary',
      }}
      useModal={true}
      modalTitle="Get Data Assessment"
      modalDescription="Share your current data challenges — we’ll guide you forward."
    />
  );
}