import React from 'react';
import '@/app/assets/custom-dev.css';

import BreadCumb from '@/app/Components/Common/BreadCumb';
import { getPageMetadata } from '@/utils/seo';
import ServicesCtaBand from '@/app/Components/ctaBands/servicesCtaBand';

export const metadata = getPageMetadata('/industries/travel-transportation-logistics-hospitality');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Travel, Transportation, Logistics & Hospitality',
  provider: {
    '@type': 'Organization',
    name: 'Mayurasoft',
    url: 'https://mayurasoft.com',
  },
  description:
    'Smart mobility and logistics technology for travel, transportation, and hospitality industries.',
  areaServed: 'Worldwide',
  serviceType: 'Travel, Transportation, Logistics & Hospitality',
};

export default function TravelTransportationLogisticsHospitalityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page">
        <BreadCumb Title="Travel, Transportation, Logistics & Hospitality" />
        
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h1 className="mb-4">Travel, Transportation, Logistics & Hospitality</h1>
              <p className="lead mb-4">
                Smart mobility and logistics technology for travel, transportation, and hospitality industries.
              </p>
              
              <div className="row mt-5">
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title mb-3">Travel Booking</h3>
                      <p className="card-text">
                        Create seamless booking platforms with real-time availability, dynamic pricing, and personalized recommendations.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title mb-3">Fleet Management</h3>
                      <p className="card-text">
                        Optimize fleet operations with GPS tracking, route optimization, and maintenance scheduling.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title mb-3">Logistics & Supply Chain</h3>
                      <p className="card-text">
                        Streamline logistics with warehouse management, shipment tracking, and inventory optimization.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title mb-3">Hospitality Management</h3>
                      <p className="card-text">
                        Enhance guest experience with property management systems, booking engines, and guest engagement tools.
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