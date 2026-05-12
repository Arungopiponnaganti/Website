import React from 'react';
import '@/app/assets/custom-dev.css';

import BreadCumb from '@/app/Components/Common/BreadCumb';
import { getPageMetadata } from '@/utils/seo';
import ServicesCtaBand from '@/app/Components/ctaBands/servicesCtaBand';

export const metadata = getPageMetadata('/industries/oil-gas');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Oil & Gas',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
    url: 'https://mayurasoft.com',
  },
  description:
    'Operational intelligence platforms for oil and gas industry operations.',
  areaServed: 'Worldwide',
  serviceType: 'Oil & Gas',
};

export default function OilGasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page">
        <BreadCumb Title="Oil & Gas" />
        
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h1 className="mb-4">Oil & Gas</h1>
              <p className="lead mb-4">
                Operational intelligence platforms for oil and gas industry operations.
              </p>
              
              <div className="row mt-5">
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title mb-3">Exploration & Production</h3>
                      <p className="card-text">
                        Optimize E&P with seismic analysis, reservoir modeling, and drilling automation.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title mb-3">Pipeline Management</h3>
                      <p className="card-text">
                        Monitor pipelines with IoT sensors, leak detection, and predictive maintenance.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title mb-3">Refining Operations</h3>
                      <p className="card-text">
                        Enhance refining with process optimization, quality control, and emissions monitoring.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title mb-3">Safety & Compliance</h3>
                      <p className="card-text">
                        Ensure safety with real-time monitoring, compliance tracking, and emergency response systems.
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