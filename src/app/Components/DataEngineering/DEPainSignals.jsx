'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';
import Image from 'next/image';

const capabilitiesList = [
  {
    icon: 'bi-arrow-right-circle',
    title: 'Data ingestion',
    body: 'Collect data from source systems in both batch schedules and real-time streams, with monitoring and failure recovery built in.',
  },
  {
    icon: 'bi-filter-circle',
    title: 'Transformation and processing',
    body: 'Clean, join, and reshape data into consistent formats suitable for analysis, reporting, or downstream systems.',
  },
  {
    icon: 'bi-database',
    title: 'Storage and modelling',
    body: 'Design and implement data lakes for flexible storage and data warehouses optimized for structured query workloads.',
  },
  {
    icon: 'bi-shield-check',
    title: 'Data quality and governance',
    body: 'Apply validation rules, lineage tracking, and access controls to ensure data is accurate, traceable, and appropriately managed.',
  },
  {
    icon: 'bi-gear-wide-connected',
    title: 'Platform engineering',
    body: 'Build scalable, maintainable infrastructure using infrastructure-as-code, CI/CD pipelines, and automated deployment practices.',
  }
];

export default function DECapabilities() {
  return (
    <section className="cd-section py-5 position-relative" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container py-4">
        <SectionTitle
          className="text-center mb-5"
          SubTitle="Core capabilities"
          Title="What we deliver"
          Content="End-to-end data infrastructure — from raw sources to decision-ready platforms."
          isDarkMode={false}
        />

        <div className="row g-4">
          {capabilitiesList.map((item, i) => (
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