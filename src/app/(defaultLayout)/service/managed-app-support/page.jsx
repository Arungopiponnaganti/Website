import React from 'react';
import '@/app/assets/custom-dev.css';
import '@/app/assets/managed-app-support.css';

import MASHero from '@/app/Components/ManagedAppSupport/MASHero';
import MASMetrics from '@/app/Components/ManagedAppSupport/MASMetrics';
import MASWhatsIncluded from '@/app/Components/ManagedAppSupport/MASWhatsIncluded';
import MASSlaTiers from '@/app/Components/ManagedAppSupport/MASSlaTiers';
import MASIncidentResponse from '@/app/Components/ManagedAppSupport/MASIncidentResponse';
import MASMonitorTabs from '@/app/Components/ManagedAppSupport/MASMonitorTabs';
import MASHandover from '@/app/Components/ManagedAppSupport/MASHandover';
import MASEngagement from '@/app/Components/ManagedAppSupport/MASEngagement';
import MASFaq from '@/app/Components/ManagedAppSupport/MASFaq';
import CtaBand from '@/app/Components/Common/CtaBand';
import { getPageMetadata } from '@/utils/seo';

const supportPlanFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Company', name: 'company', type: 'text', placeholder: 'Your company name', required: true, colSize: 6 },
  { label: 'Current Support Challenges', name: 'challenges', type: 'textarea', placeholder: 'Describe your current support challenges and requirements...', required: false, colSize: 12 },
];

const consultationFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Preferred Date', name: 'preferred_date', type: 'date', placeholder: 'MM/DD/YYYY (optional)', required: false, colSize: 6 },
  { label: 'Current Infrastructure', name: 'infrastructure', type: 'textarea', placeholder: 'Briefly describe your application and current support setup...', required: false, colSize: 12 },
];

export const metadata = getPageMetadata('/service/managed-app-support');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Managed App Support',
  provider: {
    '@type': 'Organization',
    name: 'Mayurasoft',
    url: 'https://mayurasoft.com'
  },
  description: '24/7 managed support for production applications including monitoring, incident response, SLA-backed uptime, and continuous optimization.',
  areaServed: 'Worldwide',
  serviceType: 'Managed Support'
};

export default function ManagedAppSupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page">
        <MASHero />
        <MASMetrics />
        <MASWhatsIncluded />
        <MASSlaTiers />
        <MASIncidentResponse />
        <MASMonitorTabs />
        <MASHandover />
        <MASEngagement />
        <MASFaq />
      <CtaBand
        title="Ready to end the 2 AM pager alarms?"
        description="Get full-stack monitoring, guaranteed response times, and a dedicated engineering team watching over your production application 24/7."
        primaryBtn={{ text: 'Get a support plan', dataCta: 'mas-cta-primary' }}
        secondaryBtn={{ text: 'Book a consultation call', variant: 'link', dataCta: 'mas-cta-secondary' }}
        bgClass="bg-white border-top py-5"
        useModal={true}
        trustText="Typically responds within 4 business hours · No sales pitch, just a clear plan"
        
        // Primary button modal (support plan)
        primaryModalTitle="Get a Support Plan"
        primaryModalDescription="Tell us about your application and support requirements, and we'll recommend the right plan for your needs."
        primaryModalFields={supportPlanFormFields}
        
        // Secondary button modal (consultation call)
        secondaryModalTitle="Book Consultation Call"
        secondaryModalDescription="Schedule a 30-minute call to discuss your managed support needs and how we can help protect your production applications."
        secondaryModalFields={consultationFormFields}
      />
      </div>
    </>
  );
}
