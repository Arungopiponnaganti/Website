'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DynamicFormModal from '../Common/DynamicFormModal';

const defaultFormFields = [
  {
    label: 'Full Name',
    name: 'name',
    type: 'text',
    placeholder: 'John Smith',
    required: true,
    colSize: 6
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'john@company.com',
    required: true,
    colSize: 6
  },
  {
    label: 'Subject',
    name: 'subject',
    type: 'text',
    placeholder: 'Your Subject Here',
    required: true,
    colSize: 6
  },
  {
    label: 'Phone',
    name: 'phone',
    type: 'tel',
    placeholder: '+1 (555) 000-0000',
    required: true,
    colSize: 6
  },
  {
    label: 'Message',
    name: 'message',
    type: 'textarea',
    placeholder: 'Tell us more about your project...',
    required: false,
    colSize: 12
  },
];

const PV_LAYERS = [
  {
    lbl: 'Sources',
    nodes: [
      { t: 'PostgreSQL', s: 'App DB', dot: '#378ADD', tip: 'Application database — order, user, and transaction data extracted via CDC (Change Data Capture) for near-real-time ingestion.' },
      { t: 'Salesforce', s: 'CRM', dot: '#1D9E75', tip: 'CRM data pulled via Salesforce Bulk API 2.0 every 15 minutes — opportunities, contacts, account metrics, and activity history.' },
      { t: 'GA4', s: 'Events', dot: '#BA7517', tip: 'Google Analytics 4 event stream ingested via BigQuery export — user behaviour, conversion events, and funnel data.' },
      { t: 'SAP', s: 'ERP', dot: '#993C1D', tip: 'SAP ERP data extracted via RFC BAPI calls — inventory, purchase orders, and financial postings synced twice daily.' },
    ],
  },
  {
    lbl: 'Ingest',
    nodes: [
      { t: 'Airbyte', s: 'Connectors', dot: '#534AB7', tip: 'Open-source EL tool with 350+ pre-built connectors. Handles schema evolution, backfill, and incremental sync automatically.' },
      { t: 'Kafka', s: 'Streams', dot: '#E24B4A', tip: 'Apache Kafka for high-throughput real-time event streams — used for click events, transaction events, and sub-second latency data.' },
    ],
  },
  {
    lbl: 'Store',
    nodes: [
      { t: 'Raw zone', s: 'Bronze', dot: '#BA7517', tip: 'Immutable raw data exactly as received from source systems. Never modified — enables full reprocessing if transformation logic changes.' },
      { t: 'Cleaned', s: 'Silver', dot: '#378ADD', tip: 'Validated, typed, and deduplicated data. PII masked. Records failing quality rules are quarantined for review.' },
      { t: 'Serving', s: 'Gold', dot: '#1D9E75', tip: 'Business-logic-applied, aggregated, analytics-ready tables. Direct source for BI tools and AI models.' },
    ],
  },
  {
    lbl: 'Transform',
    nodes: [
      { t: 'dbt Core', s: 'SQL models', dot: '#E24B4A', tip: 'dbt for all transformations — version-controlled SQL models, automated testing, documentation, and lineage graph.' },
      { t: 'Spark', s: 'Large scale', dot: '#BA7517', tip: 'Spark for large-scale transformations — ML feature engineering, complex joins across billions of rows, or historical backfills.' },
    ],
  },
  {
    lbl: 'Consume',
    nodes: [
      { t: 'Power BI', s: 'BI layer', dot: '#378ADD', tip: 'Power BI connected to Gold zone — semantic models ensure consistent metric definitions across all reports.' },
      { t: 'Notebooks', s: 'Analysis', dot: '#534AB7', tip: 'Jupyter/Python notebooks for ad-hoc analysis directly on the serving layer — data scientists work from trusted, governed data.' },
      { t: 'AI models', s: 'ML / LLM', dot: '#1D9E75', tip: 'Feature store feeding ML models and LLM RAG pipelines — clean, versioned features guarantee reproducibility.' },
    ],
  },
];

export default function DEHero() {
  const [activeTip, setActiveTip] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNodeClick = (key, tip) => {
    setActiveTip(activeTip === key ? null : { key, tip, label: key.split('|')[0] });
  };

  return (
    <div
      className="hero-area style-three d-flex align-items-center"
      style={{ marginTop: '0', paddingTop: '200px', paddingBottom: '100px', position: 'relative', height: 'auto', minHeight: '100vh' }}
    >
      {/* Background shape */}
      {/* <div className="hero-left-shape" style={{ position: 'absolute', top: '20%', transform: 'translateY(-50%)', left: '10%', zIndex: 0, opacity: 0.8 }}>
        <Image src="/assets/images/home-3/hero-geo.png" alt="" width={680} height={680} priority />
      </div> */}

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row align-items-center g-4 ">

          {/* ── Left: copy ── */}
          <div className="col-lg-6 col-md-12 mt-0 p-0">
            <div className="hero-contant" style={{ paddingTop: '0' }}>

              {/* Category chips */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '11px', fontWeight: '600', padding: '4px 12px', borderRadius: '99px', background: '#dbeafe', color: '#1d4ed8', border: '1px solid #93c5fd' }}>
                  Data Engineering & Pipelines
                </span>
                <span style={{ fontSize: '11px', fontWeight: '500', padding: '4px 12px', borderRadius: '99px', background: 'rgba(255,255,255,0.1)', color: '#d1d5db', border: '1px solid rgba(255,255,255,0.12)' }}>
                  Data Solutions
                </span>
              </div>

              <h1 className="mb-4 d-block" style={{ fontSize: 'clamp(30px, 3.5vw, 44px)', lineHeight: 1.2 }}>
                Your data is already valuable. The problem is you can&apos;t access it reliably.
              </h1>

              <p className="subheadline text-white" style={{ fontSize: '17px', lineHeight: '1.65', maxWidth: '560px', marginBottom: '28px' }}>
                MayuraSoft builds and delivers data infrastructure that turns raw, scattered, unreliable information into a clean, governed,
                always-available foundation — so your analytics, AI, and reporting always work from the truth.
              </p>

              {/* Proof points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px', padding: '16px 18px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px' }}>
                {[
                  'Works across cloud warehouses, lakes, and on-premise systems',
                  'Real-time and batch pipelines — designed for your latency needs',
                  'Built to be maintained by your team — no black-box dependencies',
                  'Full data lineage, quality monitoring, and alerting included',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#d1d5db' }}>
                    <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(16,185,129,0.2)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="d-flex flex-wrap align-items-center gap-4 mb-5">
                <div className="solutek-btn">
                  <Link href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-2">Get a free data audit &rarr;</Link>
                </div>
                <div className="hero-btn-3">
                  <div className="hero-btn-profile">
                    <Link
                      href="#de-architecture"
                      className='text-decoration-none'
                      onClick={(e) => { e.preventDefault(); document.getElementById('de-architecture')?.scrollIntoView({ behavior: 'smooth' }); }}
                    >
                      <div style={{ color: '#ff3c00', cursor: 'pointer', fontSize: '16px', fontWeight: '600' }}>
                        See our architecture &darr;
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Stat strip */}

            </div>
          </div>

          {/* ── Right: pipeline canvas ── */}
          <div className="col-lg-6 col-md-12 mt-4 mt-lg-0 d-flex align-items-center justify-content-center">
            <div className="de-pipeline-canvas" style={{ width: '100%', maxWidth: '500px' }}>

              {/* Canvas header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span className="de-pipeline-label">Live data pipeline</span>
                <span className="de-pulse-badge">
                  <span className="de-pulse-dot" />
                  12,847 events / min
                </span>
              </div>

              {/* Pipeline layers */}
              {PV_LAYERS.map((layer, li) => (
                <React.Fragment key={li}>
                  {li > 0 && (
                    <div className="de-pipeline-connector">
                      <div className="de-conn-wrap">
                        <div className="de-conn-line" />
                        <div className="de-conn-head" />
                      </div>
                    </div>
                  )}
                  <div className="de-pipeline-layer">
                    <span className="de-pipeline-layer-lbl">{layer.lbl}</span>
                    <div className="de-pipeline-nodes">
                      {layer.nodes.map((node, ni) => {
                        const key = `${node.t}|${li}-${ni}`;
                        const isActive = activeTip?.key === key;
                        return (
                          <div
                            key={ni}
                            className={`de-pipeline-node${isActive ? ' active' : ''}`}
                            onClick={() => handleNodeClick(key, node.tip)}
                          >
                            <div className="de-pipeline-dot" style={{ background: node.dot }} />
                            <div>
                              <div className="de-pipeline-node-t">{node.t}</div>
                              <div className="de-pipeline-node-s">{node.s}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </React.Fragment>
              ))}

              {/* Tooltip */}
              {activeTip && (
                <div className="de-pipeline-tooltip">
                  <strong>{activeTip.label.split('|')[0]}</strong>
                  {activeTip.tip}
                </div>
              )}

            </div>
          </div>
          {/* <div className="d-flex flex-wrap gap-4 mt-0" style={{ padding: '20px 0 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              {[
                { value: '99.9%', label: 'Pipeline uptime SLA' },
                { value: '10×',   label: 'Faster query performance' },
                { value: '3 wks', label: 'To first production pipeline' },
                { value: '60%',   label: 'Less maintenance burden' },
              ].map((s, i) => (
                <div key={i} style={{ minWidth: '100px' }}>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', fontFamily: 'var(--font-mono, monospace)', lineHeight: 1, marginBottom: '4px' }}>{s.value}</div>
                  <div style={{ fontSize: '12px', color: '#a0a0a0', lineHeight: 1.35 }}>{s.label}</div>
                </div>
              ))}
            </div> */}
        </div>
      </div>

      <DynamicFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get a Free Data Audit"
        description="Fill out the form below and we'll get back to you shortly."
        submitButtonText="Submit"
        fields={defaultFormFields}
        metadata={{ service: 'data-engineering', pageTitle: 'Data Engineering & Pipelines' }}
      />
    </div>
  );
}