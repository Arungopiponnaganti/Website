import React from 'react';
import '@/app/assets/custom-dev.css';

import BreadCumb from '@/app/Components/Common/BreadCumb';
import { getPageMetadata } from '@/utils/seo';
import ServicesCtaBand from '@/app/Components/ctaBands/servicesCtaBand';

export const metadata = getPageMetadata('/industries/media-entertainment');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Media & Entertainment',
  provider: {
    '@type': 'Organization',
    name: 'Mayurasoft',
    url: 'https://mayurasoft.com',
  },
  description:
    'Digital content and streaming technology for media and entertainment companies.',
  areaServed: 'Worldwide',
  serviceType: 'Media & Entertainment',
};

export default function MediaEntertainmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page">
        <BreadCumb Title="Media & Entertainment" />
        
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h1 className="mb-4">Media & Entertainment</h1>
              <p className="lead mb-4">
                Digital content and streaming technology for media and entertainment companies.
              </p>
              
              <div className="row mt-5">
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title mb-3">Streaming Platforms</h3>
                      <p className="card-text">
                        Build scalable streaming services with video delivery, content management, and personalized recommendations.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title mb-3">Content Management</h3>
                      <p className="card-text">
                        Manage digital assets with DAM systems, metadata management, and rights tracking.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title mb-3">Audience Analytics</h3>
                      <p className="card-text">
                        Understand viewers with engagement analytics, content performance, and audience segmentation.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title mb-3">Digital Distribution</h3>
                      <p className="card-text">
                        Expand reach with multi-platform distribution, social media integration, and monetization tools.
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