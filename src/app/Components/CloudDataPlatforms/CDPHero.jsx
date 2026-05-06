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

const BEFORE_ITEMS = [
  'Each team keeps data in separate systems — no shared view',
  'Reports take days and often contradict each other',
  'Analysts spend most time finding and cleaning data',
  'No audit trail — can\'t trace where a number came from',
];

const AFTER_ITEMS = [
  'All data sources connected — one version of every metric',
  'Reports refresh automatically — stakeholders see current data',
  'Analysts work with clean, trusted data — less prep, more insight',
  'Full lineage — every number traceable to its source',
];

const STATS = [
  { value: '3 clouds',     label: 'AWS, Azure, GCP — certified across all three major providers' },
  { value: '30 days',      label: 'To production-ready platform with data flowing and a working dashboard' },
  { value: 'Single truth', label: 'One definition per metric — no more conflicting numbers' },
  { value: '10× scale',    label: 'Data volume growth handled without architectural rebuild' },
];

export default function CDPHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div
      className="hero-area style-three d-flex align-items-center"
      style={{ marginTop: '0', paddingTop: '200px', paddingBottom: '100px', position: 'relative', height: 'auto', minHeight: '100vh' }}
    >
      {/* Background shape */}
      {/* <div
        className="hero-left-shape"
        style={{ position: 'absolute', top: '20%', transform: 'translateY(-50%)', left: '10%', zIndex: 0, opacity: 0.8 }}
      >
        <Image src="/assets/images/home-3/hero-geo.png" alt="" width={680} height={680} priority />
      </div> */}

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row align-items-center g-4">

          {/* ── Left: copy ── */}
          <div className="col-lg-6 col-md-12">
            <div className="hero-contant" style={{ paddingTop: '0' }}>

              {/* Category chips */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '11px', fontWeight: '600', padding: '4px 12px', borderRadius: '99px', background: '#dbeafe', color: '#1d4ed8', border: '1px solid #93c5fd' }}>
                  Cloud Data Platforms
                </span>
                <span style={{ fontSize: '11px', fontWeight: '500', padding: '4px 12px', borderRadius: '99px', background: 'rgba(255,255,255,0.1)', color: '#d1d5db', border: '1px solid rgba(255,255,255,0.12)' }}>
                  Data Solutions
                </span>
              </div>

              <h1 className="mb-4 d-block" style={{ fontSize: 'clamp(30px, 3.5vw, 44px)', lineHeight: 1.2 }}>
                A single, reliable place for all your organisation&apos;s data
              </h1>

              {/* Definition box */}
              <div style={{ fontSize: '14px', lineHeight: '1.72', maxWidth: '520px', marginBottom: '28px', padding: '14px 16px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderLeft: '3px solid rgba(255,255,255,0.35)', borderRadius: '8px', color: '#d1d5db' }}>
                <strong style={{ color: '#fff' }}>What it is:</strong> A cloud data platform is a managed environment where data from multiple sources is collected, organised, and made available for analysis and reporting — replacing fragmented systems and manual data movement with a governed foundation your teams can trust.
              </div>

              <div className="d-flex flex-wrap align-items-center gap-4 mb-5">
                <div className="solutek-btn">
                  <Link href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-2">Free platform assessment &rarr;</Link>
                </div>
                <div className="hero-btn-3">
                  <div className="hero-btn-profile">
                    <div style={{ color: '#ff3c00', cursor: 'pointer', fontSize: '16px', fontWeight: '600' }}>
                      See the architecture &rarr;
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat strip */}
              <div className="d-flex flex-wrap gap-4" style={{ padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                {STATS.map((s, i) => (
                  <div key={i} style={{ minWidth: '90px' }}>
                    <div style={{ fontSize: '20px', fontWeight: '700', color: '#ffffff', fontFamily: 'var(--font-mono, monospace)', lineHeight: 1, marginBottom: '4px' }}>{s.value}</div>
                    <div style={{ fontSize: '11px', color: '#a0a0a0', lineHeight: 1.35 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: before/after state comparison ── */}
          <div className="col-lg-6 col-md-12 mt-4 mt-lg-0 d-flex align-items-center justify-content-center">
            <div className="cdp-hero-canvas" style={{ width: '100%', maxWidth: '500px' }}>

              <div className="cdp-canvas-label">What changes when you have one</div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 28px 1fr', gap: '0', alignItems: 'start' }}>

                {/* Before column */}
                <div>
                  <div style={{ fontSize: '10px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f87171', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '8px' }}>
                    Without a platform
                  </div>
                  {BEFORE_ITEMS.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', marginBottom: '6px', padding: '7px 9px', borderRadius: '7px', border: '1px solid rgba(239,68,68,0.3)', background: 'rgba(239,68,68,0.08)' }}>
                      <span style={{ fontSize: '10px', color: '#f87171', flexShrink: 0, marginTop: '1px', fontWeight: '700' }}>✕</span>
                      <span style={{ fontSize: '11px', color: '#fca5a5', lineHeight: 1.35 }}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Arrow divider */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '28px', color: '#6b7280', fontSize: '14px' }}>
                  &rarr;
                </div>

                {/* After column */}
                <div>
                  <div style={{ fontSize: '10px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#34d399', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '8px' }}>
                    With a platform
                  </div>
                  {AFTER_ITEMS.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', marginBottom: '6px', padding: '7px 9px', borderRadius: '7px', border: '1px solid rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.08)' }}>
                      <span style={{ fontSize: '10px', color: '#34d399', flexShrink: 0, marginTop: '1px', fontWeight: '700' }}>✓</span>
                      <span style={{ fontSize: '11px', color: '#6ee7b7', lineHeight: 1.35 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <DynamicFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Free platform assessment"
        description="Fill out the form below and we'll get back to you shortly."
        submitButtonText="Submit"
        fields={defaultFormFields}
        metadata={{ service: 'cloud-data-platforms', pageTitle: 'Cloud Data Platforms' }}
      />
    </div>
  );
}
