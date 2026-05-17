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

export default function IDPHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="hero-area style-three d-flex align-items-center"
      style={{
        marginTop: '0',
        // paddingTop: '220px',
        // paddingBottom: '100px',
        position: 'relative',
        height: 'auto',
        minHeight: '100vh',
      }}
    >
      {/* Background shape */}
      {/* <div
        className="hero-left-shape"
        style={{ position: 'absolute', top: '20%', transform: 'translateY(-50%)', left: '10%', zIndex: 0, opacity: 0.8 }}
      >
        <Image src="/assets/images/home-3/hero-geo.png" alt="" width={680} height={680} priority />
      </div> */}

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row hero align-items-center g-4">

          {/* ── Left: copy ── */}
          <div className="col-lg-6 col-md-12">
            <div className="hero-contant" style={{ paddingTop: '0' }}>

              {/* Chips */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: '11px', fontWeight: '600', padding: '4px 12px', borderRadius: '99px',
                  background: '#e0e7ff', color: '#3730a3', border: '1px solid #a5b4fc',
                }}>
                  Intelligent Document Processing
                </span>
                <span style={{
                  fontSize: '11px', fontWeight: '500', padding: '4px 12px', borderRadius: '99px',
                  background: 'rgba(255,255,255,0.1)', color: '#d1d5db', border: '1px solid rgba(255,255,255,0.12)',
                }}>
                  AI &amp; Automation
                </span>
              </div>

              <h1 className="mb-4 d-block" style={{ fontSize: 'clamp(30px, 3.5vw, 44px)', lineHeight: 1.2 }}>
                Reduce manual document entry with AI-assisted extraction, validation, and routing.
              </h1>

              <p className="subheadline text-white" style={{ fontSize: '17px', lineHeight: '1.65', maxWidth: '560px', marginBottom: '32px' }}>
                MayuraSoft builds document processing workflows that extract structured data from invoices, contracts, forms, and reports, then route it to the right system or review queue.
              </p>

              {/* Proof points */}
              <div style={{
                display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px',
                padding: '16px 18px', background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px',
              }}>
                {[
                  'Per-field confidence scoring for extracted data',
                  'Works with PDFs, scanned images, emails, and web forms',
                  'Connects to ERP, CRM, document management, or internal systems',
                  'Human review queue for low-confidence extractions',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#d1d5db' }}>
                    <span style={{
                      width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(83,74,183,0.25)',
                      color: '#a5b4fc', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '10px', fontWeight: '700', flexShrink: 0, marginTop: '1px',
                    }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="d-flex flex-wrap align-items-center gap-4 mb-5">
                <div className="solutek-btn">
                  <Link href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-2">Get a free doc audit &rarr;</Link>
                </div>
                <div className="hero-btn-3">
                  <div className="hero-btn-profile">
                    <Link
                      href="#idp-doc-types"
                      onClick={(e) => { e.preventDefault(); document.getElementById('idp-doc-types')?.scrollIntoView({ behavior: 'smooth' }); }}
                      style={{ textDecoration: 'none' }}
                    >
                      <div style={{ color: '#ff3c00', cursor: 'pointer', fontSize: '16px', fontWeight: '600' }}>
                        See document types &darr;
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Stat strip */}
              {/* <div className="d-flex flex-wrap gap-4" style={{ padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                {[
                  { value: '95%', label: 'Extraction accuracy on structured docs' },
                  { value: '90%', label: 'Reduction in manual data entry time' },
                  { value: '4 sec', label: 'Avg. processing time per document' },
                  { value: '3 wks', label: 'To first working pipeline from kickoff' },
                ].map((s, i) => (
                  <div key={i} style={{ minWidth: '100px' }}>
                    <div style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', fontFamily: 'var(--font-mono, monospace)', lineHeight: 1, marginBottom: '4px' }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: '12px', color: '#a0a0a0', lineHeight: 1.35 }}>{s.label}</div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>

          {/* ── Right: scanner visual ── */}
          <div className="col-lg-6 col-md-12 mt-4 mt-lg-0 d-flex align-items-center justify-content-center">
            <div className="idp-scanner-canvas">
              <div className="idp-scanner-header">
                <span className="idp-scanner-lbl">AI extraction engine</span>
                <span className="idp-scan-badge">
                  <span className="idp-scan-dot" />
                  Scanning
                </span>
              </div>

              {/* Mock document */}
              <div className="idp-mock-doc">
                <div className="idp-mock-doc-lbl">invoice_nov_2024.pdf</div>
                <div className="idp-doc-line" style={{ width: '70%' }} />
                <div className="idp-doc-row">
                  <div className="idp-doc-line hi" style={{ width: '40%', flex: 'none' }} />
                  <div className="idp-doc-line" style={{ flex: 1 }} />
                </div>
                <div className="idp-doc-line" style={{ width: '85%' }} />
                <div className="idp-doc-row">
                  <div className="idp-doc-line" style={{ flex: 1 }} />
                  <div className="idp-doc-line hi2" style={{ width: '35%', flex: 'none' }} />
                </div>
                <div className="idp-doc-line" style={{ width: '60%' }} />
                <div className="idp-doc-row">
                  <div className="idp-doc-line hi" style={{ width: '55%', flex: 'none' }} />
                  <div className="idp-doc-line" style={{ flex: 1 }} />
                </div>
              </div>

              {/* Arrow */}
              <div className="idp-arrow-down">↓</div>

              {/* Extracted fields */}
              <div className="idp-extracted-box">
                <div className="idp-ex-label">Extracted fields</div>
                {[
                  { key: 'Vendor', val: 'Tata Consultancy' },
                  { key: 'Invoice no.', val: 'INV-2024-0847' },
                  { key: 'Amount', val: '₹1,24,500' },
                  { key: 'Due date', val: '2024-12-15' },
                  { key: 'Category', val: 'IT Services' },
                  { key: 'Confidence', val: '98.4%', green: true },
                ].map((r) => (
                  <div className="idp-ex-row" key={r.key}>
                    <span className="idp-ex-key">{r.key}</span>
                    <span className="idp-ex-val" style={r.green ? { color: '#4ade80' } : {}}>{r.val}</span>
                  </div>
                ))}
              </div>

              {/* Routing indicator */}
              <div className="idp-routed-row">
                <div className="idp-routed-dot" />
                <div className="idp-routed-text">Routed to: Finance approval queue → SAP posting</div>
              </div>

              {/* Legend */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                {[
                  { color: '#7F77DD', label: 'Highlighted field' },
                  { color: '#4ade80', label: 'Extracted' },
                  { color: '#1D9E75', label: 'Routed' },
                ].map((l) => (
                  <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#a0a0a0' }}>
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: l.color }} />
                    {l.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <DynamicFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get a Free Doc Audit"
        description="Fill out the form below and we'll get back to you shortly."
        submitButtonText="Submit"
        fields={defaultFormFields}
        metadata={{ service: 'document-processing', pageTitle: 'Intelligent Document Processing' }}
      />
    </div>
  );
}
