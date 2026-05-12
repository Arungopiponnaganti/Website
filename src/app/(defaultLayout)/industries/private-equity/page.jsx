import React from 'react';
import '@/app/assets/custom-dev.css';

import BreadCumb from '@/app/Components/Common/BreadCumb';
import { getPageMetadata } from '@/utils/seo';
import ServicesCtaBand from '@/app/Components/ctaBands/servicesCtaBand';

export const metadata = getPageMetadata('/industries/private-equity');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Private Equity',
  provider: {
    '@type': 'Organization',
    name: 'MayuraSoft',
    url: 'https://mayurasoft.com',
  },
  description:
    'Tech-driven investment insights for private equity firms and investment managers.',
  areaServed: 'Worldwide',
  serviceType: 'Private Equity',
};

export default function PrivateEquityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page">
        <BreadCumb Title="Private Equity" />
        
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h1 className="mb-4">Private Equity</h1>
              <p className="lead mb-4">
                Tech-driven investment insights for private equity firms and investment managers.
              </p>
              
              <div className="row mt-5">
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title mb-3">Deal Management</h3>
                      <p className="card-text">
                        Streamline deal flow with pipeline tracking, due diligence tools, and collaboration platforms.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title mb-3">Portfolio Analytics</h3>
                      <p className="card-text">
                        Monitor portfolio performance with real-time metrics, benchmarking, and value creation tracking.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title mb-3">Investor Relations</h3>
                      <p className="card-text">
                        Manage LP relationships with reporting portals, communication tools, and transparency dashboards.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title mb-3">Market Intelligence</h3>
                      <p className="card-text">
                        Gain insights with market research, competitive analysis, and trend identification tools.
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