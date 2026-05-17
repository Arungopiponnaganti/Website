import React from 'react';
import '@/app/assets/custom-dev.css';
import BankingHero from '@/app/Components/Industries/Banking/BankingHero';
import BankingCapabilities from '@/app/Components/Industries/Banking/BankingCapabilities';
import BankingProcess from '@/app/Components/Industries/Banking/BankingProcess';
import BankingEngagementModels from '@/app/Components/Industries/Banking/BankingEngagementModels';
import BankingWhyMayuraSoft from '@/app/Components/Industries/Banking/BankingWhyMayuraSoft';
import Technologies from '@/app/Components/technologies/Technologies';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/industries/banking-fintech');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Banking & Fintech',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
    url: 'https://mayurasoft.com'
  },
  description: 'Secure, scalable fintech solutions for modern banking and financial institutions with compliance and security.',
  areaServed: 'Worldwide',
  serviceType: 'Banking & Fintech'
};

export default function BankingFinancialServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page">
        <BankingHero />
        <BankingCapabilities />
        <BankingProcess />
        {/* <Technologies /> */}
        <BankingEngagementModels />
        <BankingWhyMayuraSoft />
      </div>
    </>
  );
}