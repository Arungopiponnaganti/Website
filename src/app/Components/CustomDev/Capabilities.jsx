'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SectionTitle from '../Common/SectionTitle';
import Image from 'next/image';

const tabs = ['ALL', 'Web apps', 'Mobile', 'Enterprise', 'API design & integration', 'SaaS Platforms'];

const capabilitiesList = [
  {
    category: ['Web apps', 'Enterprise', 'SaaS Platforms'],
    icon: 'bi-window-sidebar', title: 'Web applications',
    body: 'Custom portals, dashboards, SaaS platforms, and multi-tenant applications built for performance and scale.',
  },
  {
    category: ['Mobile'],
    icon: 'bi-phone', title: 'Mobile apps',
    body: 'Native iOS and Android or cross-platform Flutter/React Native apps — with offline support and deep integrations.',
  },
  {
    category: ['Enterprise'],
    icon: 'bi-building-gear', title: 'Enterprise software',
    body: 'ERP extensions, internal tooling, workflow engines, and systems-of-record built for complex organisations.',
  },
  {
    category: ['Web apps', 'Enterprise', 'API design & integration'],
    icon: 'bi-diagram-3', title: 'API design & integration',
    body: 'RESTful and GraphQL APIs, third-party integrations, webhook systems, and middleware that connects your stack.',
  },
  {
    category: ['Enterprise', 'Web apps'],
    icon: 'bi-bar-chart-line', title: 'Data-driven products',
    body: 'Products with embedded analytics, ML-powered features, real-time dashboards, and predictive capabilities.',
  },
  {
    category: ['Mobile', 'Web apps'],
    icon: 'bi-rocket-takeoff', title: 'MVP & prototypes',
    body: 'Fast, lean builds to validate your product hypothesis before committing to full-scale engineering investment.',
  }
];

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState('ALL');

  const filteredItems = capabilitiesList.filter(item =>
    activeTab === 'ALL' || item.category.includes(activeTab)
  );

  return (
    <section className="cd-section py-5 position-relative" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container py-4">
        {/* <div className="section-title text-center mb-5">
          <span className="eyebrow d-inline-block mb-3" style={{color: '#7a7a7a', background: '#e9ecef', border: 'none', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', textTransform: 'uppercase', fontWeight: '600'}}>Capabilities</span>
          <h2 className="mb-3" style={{fontSize: '36px', fontWeight: '700'}}>What we build</h2>
          <p className="text-secondary" style={{maxWidth: '600px', margin: '0 auto', fontSize: '16px'}}>
            We cover the full spectrum of custom software delivery — from a single feature to a complete platform.
          </p>
        </div> */}
        <SectionTitle
          className="text-center mb-5"
          SubTitle="Capabilities"
          Title="What we build"
          Content="We cover the full spectrum of custom software delivery — from a single feature to a complete platform."
          isDarkMode={false}
        />

        <div className="d-flex justify-content-center flex-wrap mb-5 gap-3">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: activeTab === tab ? '#1a1e2d' : '#fff',
                color: activeTab === tab ? '#fff' : '#666',
                border: activeTab === tab ? '1px solid #1a1e2d' : '1px solid #e0e0e0',
                padding: '8px 24px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filteredItems.map((item, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div
                className="cd-cap-card"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '35px 30px',
                  position: 'relative',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.02)',
                  height: '100%',
                  minHeight: '260px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0px 15px 35px rgba(0, 0, 0, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0px 10px 30px rgba(0, 0, 0, 0.02)';
                }}
              >
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1e2d', marginBottom: '15px' }}>{item.title}</h3>
                <p style={{ fontSize: '14.5px', color: '#6c757d', lineHeight: '1.6', marginBottom: '50px' }}>{item.body}</p>

                <div style={{ position: 'absolute', bottom: '30px', left: '30px' }}>
                  <Link href="/contact" style={{ color: '#444', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>Learn more &rarr;</Link>
                </div>

                <div style={{ position: 'absolute', bottom: '20px', right: '30px', opacity: 0.15, fontSize: '46px', color: '#1a1e2d', pointerEvents: 'none' }}>
                  <i className={`bi ${item.icon}`}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="service-shape bounce-animate3">
        <Image src="/assets/images/service5.png" alt="Service feature image" width={199} height={420} />
      </div>
      <div className="service-shape2">
        <Image src="/assets/images/service7.png" alt="Service feature icon" width={100} height={100} />
      </div>
      <div className="service-shape3 bounce-animate4">
        <Image src="/assets/images/service8.png" alt="Service decorative image" width={341} height={351} />
      </div>
    </section>
  );
}
