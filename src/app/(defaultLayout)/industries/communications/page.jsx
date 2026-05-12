import React from 'react';
import '@/app/assets/custom-dev.css';

import BreadCumb from '@/app/Components/Common/BreadCumb';
import { getPageMetadata } from '@/utils/seo';
import ServicesCtaBand from '@/app/Components/ctaBands/servicesCtaBand';

export const metadata = getPageMetadata('/industries/communications');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Communications',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
    url: 'https://mayurasoft.com',
  },
  description:
    'Telecom and connectivity platforms for modern communications infrastructure.',
  areaServed: 'Worldwide',
  serviceType: 'Communications',
};

export default function CommunicationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page">
        <BreadCumb Title="Communications" />
        
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h1 className="mb-4">Communications</h1>
              <p className="lead mb-4">
                Telecom and connectivity platforms for modern communications infrastructure.
              </p>
              
              <div className="row mt-5">
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title mb-3">5G Networks</h3>
                      <p className="card-text">
                        Deploy next-generation 5G infrastructure with network slicing, edge computing, and ultra-low latency applications.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title mb-3">IoT Connectivity</h3>
                      <p className="card-text">
                        Build scalable IoT platforms with device management, data analytics, and secure communication protocols.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title mb-3">Network Operations</h3>
                      <p className="card-text">
                        Optimize network performance with AI-driven monitoring, predictive maintenance, and automated incident response.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title mb-3">Customer Experience</h3>
                      <p className="card-text">
                        Enhance customer engagement with digital self-service, personalized offers, and omnichannel support platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <ServicesCtaBand />
      </div>
    </>
  );
}