'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const PLATS = [
  {
    name: 'Snowflake',
    icon: 'bi-snow',
    theme: '#0C447C',
    bg: '#E6F1FB',
    tag: 'Partner',
    items: [
      'Multi-cloud, diverse workloads, strong governance',
      'Credit-based compute + storage separation',
      'Cost optimisation, clustering, data sharing',
      'SnowPro Core, SnowPro Advanced: Data Engineer',
      'Enterprise analytics, data marketplace, data mesh',
    ],
  },
  {
    name: 'Google BigQuery',
    icon: 'bi-google',
    theme: '#633806',
    bg: '#FAEEDA',
    tag: 'Certified',
    items: [
      'Serverless analytics, GCP-native orgs, ML integration',
      'On-demand (per query) or flat-rate reservations',
      'BQML integration, partition/cluster optimisation',
      'Google Professional Data Engineer',
      'Marketing analytics, AI feature stores, event analytics',
    ],
  },
  {
    name: 'Databricks',
    icon: 'bi-lightning-charge',
    theme: '#712B13',
    bg: '#FAECE7',
    tag: 'Certified',
    items: [
      'Lakehouse architecture, ML/AI-heavy workloads',
      'DBU (Databricks Unit) compute + cloud storage',
      'Delta Lake implementation, MLflow, Unity Catalog',
      'Databricks Certified Associate Developer',
      'ML pipelines, large-scale ETL, real-time lakehouse',
    ],
  },
];

export default function DEPlatforms() {
  return (
    <section className="cd-section cd-section-muted border-bottom py-5">
      <div className="container py-4">
        <SectionTitle
          className="text-center mb-3"
          SubTitle="Data warehouse platforms"
          Title="We work across all major platforms — and help you choose the right one"
          Content="We're platform-agnostic. We recommend based on your workload, team, and cost profile — not partnerships."
          isDarkMode={false}
        />

        <div className="row g-4 mt-2">
          {PLATS.map((p, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div
                className="h-100"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '35px 30px',
                  position: 'relative',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.02)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
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
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className={`bi ${p.icon}`} style={{ fontSize: '20px', color: p.theme }}></i>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1e2d', margin: 0 }}>{p.name}</h3>
                  <span style={{ fontSize: '11px', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', background: p.bg, color: p.theme }}>{p.tag}</span>
                </div>

                <div className="d-flex flex-column gap-2 mt-auto">
                  {p.items.map((li, idx) => (
                    <div key={idx} className="d-flex gap-2 align-items-start" style={{
                      fontSize: '13.5px',
                      color: '#7a7a7a',
                      lineHeight: '1.4',
                      paddingBottom: '10px',
                      borderBottom: idx === p.items.length - 1 ? 'none' : '1px dashed #f0f0f0'
                    }}>
                      <i className="bi bi-check2" style={{ fontSize: '16px', color: p.theme, marginTop: '-1px', flexShrink: 0 }}></i>
                      <span>{li}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
