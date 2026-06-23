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

const HEALTH_ROWS = [
  { domain: 'Data catalogue',    pct: 12, color: '#E24B4A', status: 'Critical',  statusBg: 'rgba(226,75,74,0.18)',  statusColor: '#E24B4A' },
  { domain: 'Data lineage',      pct: 8,  color: '#E24B4A', status: 'Critical',  statusBg: 'rgba(226,75,74,0.18)',  statusColor: '#E24B4A' },
  { domain: 'Data quality',      pct: 31, color: '#D85A30', status: 'High risk', statusBg: 'rgba(216,90,48,0.15)',  statusColor: '#D85A30' },
  { domain: 'Access control',    pct: 45, color: '#BA7517', status: 'Medium',    statusBg: 'rgba(186,117,23,0.15)', statusColor: '#BA7517' },
  { domain: 'Data ownership',    pct: 18, color: '#E24B4A', status: 'Critical',  statusBg: 'rgba(226,75,74,0.18)',  statusColor: '#E24B4A' },
  { domain: 'Compliance posture',pct: 22, color: '#D85A30', status: 'High risk', statusBg: 'rgba(216,90,48,0.15)',  statusColor: '#D85A30' },
];

export default function DGHero() {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="hero-area style-three d-flex align-items-center"
      style={{ marginTop: '0', paddingTop: '200px', paddingBottom: '60px', position: 'relative', height: 'auto', minHeight: '100vh' }}
    >
      {/* Background shape */}
      {/* <div className="hero-left-shape" style={{ position: 'absolute', top: '20%', transform: 'translateY(-50%)', left: '10%', zIndex: 0, opacity: 0.8 }}>
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
                  Data Governance &amp; Quality
                </span>
                <span style={{ fontSize: '11px', fontWeight: '500', padding: '4px 12px', borderRadius: '99px', background: 'rgba(255,255,255,0.1)', color: '#d1d5db', border: '1px solid rgba(255,255,255,0.12)' }}>
                  Data Solutions
                </span>
              </div>

              <h1 className="mb-4 d-block" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', lineHeight: 1.22 }}>
                Bad data costs more than you think. Ungoverned data costs even more.
              </h1>

              <p className="subheadline text-white" style={{ fontSize: '17px', lineHeight: '1.65', maxWidth: '560px', marginBottom: '28px' }}>
                Mayurasoft builds the data governance frameworks — cataloguing, lineage, quality rules,
                ownership, and access controls — that turn your data from a liability into a trusted
                organisational asset.
              </p>

              {/* Urgency callout */}
              <div style={{ padding: '14px 16px', background: 'rgba(226,75,74,0.12)', border: '1px solid rgba(226,75,74,0.25)', borderLeft: '3px solid #E24B4A', borderRadius: '10px', marginBottom: '24px' }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#ffffff', marginBottom: '4px' }}>The cost of ungoverned data</div>
                <div style={{ fontSize: '13px', color: '#d1d5db', lineHeight: '1.55' }}>
                  Gartner estimates poor data quality costs organisations an average of $12.9M per year.
                  Data governance is not a cost — it is the protection against a much larger one.
                </div>
              </div>

              {/* Proof points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px', padding: '16px 18px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px' }}>
                {[
                  'Catalogue, lineage, quality rules, and policies in one programme',
                  'DPDPA & GDPR compliance alignment built into every framework',
                  'Written policies and runbooks — not slide decks with advice',
                  'Working governance in production within 12 weeks',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#d1d5db' }}>
                    <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(16,185,129,0.2)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="d-flex flex-wrap align-items-center gap-0 mb-5">
                <div className="solutek-btn">
                  <Link href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-2">Get a free governance audit &rarr;</Link>
                </div>
                <div className="hero-btn-3">
                  <div className="hero-btn-profile">
                    <Link
                      href="#deliverables"
                      className='text-decoration-none'
                      onClick={(e) => { e.preventDefault(); document.getElementById('deliverables')?.scrollIntoView({ behavior: 'smooth' }); }}
                    >
                      <div style={{ color: '#ff3c00', cursor: 'pointer', fontSize: '16px', fontWeight: '600' }}>
                        See What you receive &darr;
                      </div>
                    </Link>
                  </div>
                </div>
              </div>


            </div>
          </div>

          {/* ── Right: governance health dashboard ── */}
          <div className="col-lg-6 col-md-12 mt-4 mt-lg-0 d-flex align-items-center justify-content-center">
            <div className="dg-health-canvas" style={{ width: '100%', maxWidth: '500px' }}>
              <div className="dg-health-label">Governance health dashboard — before Mayurasoft</div>
              <div className="dg-health-card">
                <div className="dg-health-card-title">Typical client state at engagement start</div>
                {HEALTH_ROWS.map((row, i) => (
                  <div
                    key={i}
                    className="dg-health-row"
                    onMouseEnter={() => setHoveredRow(i)}
                    onMouseLeave={() => setHoveredRow(null)}
                    style={{ opacity: hoveredRow !== null && hoveredRow !== i ? 0.55 : 1, transition: 'opacity 0.15s' }}
                  >
                    <div className="dg-health-domain">{row.domain}</div>
                    <div className="dg-health-bar">
                      <div className="dg-health-fill" style={{ width: `${row.pct}%`, background: row.color }} />
                    </div>
                    <div className="dg-health-score" style={{ color: row.color }}>{row.pct}</div>
                    <div className="dg-health-status" style={{ background: row.statusBg, color: row.statusColor }}>{row.status}</div>
                  </div>
                ))}
              </div>
              <div className="dg-health-note">
                After a 12-week Mayurasoft governance engagement, every metric above typically moves to 75+.
                Take the free scanner below to see where your organisation sits today.
              </div>
            </div>
          </div>
              {/* Stat strip */}
              <div className="d-flex flex-wrap gap-5 mt-0" style={{ padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                {[
                  { value: '6',      label: 'Governance pillars assessed in every engagement' },
                  { value: '12 wks', label: 'From audit to working governance framework' },
                  { value: 'DPDPA',  label: 'India & EU GDPR alignment included' },
                  { value: '100%',   label: 'Written policies, runbooks, and training' },
                ].map((s, i) => (
                  <div className="ps-3" key={i} style={{ minWidth: '100px' }}>
                    <div style={{ fontSize: '22px', fontWeight: '700', color: '#ffffff', fontFamily: 'var(--font-mono, monospace)', lineHeight: 1, marginBottom: '4px' }}>{s.value}</div>
                    <div style={{ fontSize: '12px', color: '#a0a0a0', lineHeight: 1.35 }}>{s.label}</div>
                  </div>
                ))}
              </div>
        </div>
      </div>

      <DynamicFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get a Free Governance Audit"
        description="Fill out the form below and we'll get back to you shortly."
        submitButtonText="Submit"
        fields={defaultFormFields}
        metadata={{ service: 'data-governance', pageTitle: 'Data Governance & Quality' }}
      />
    </div>
  );
}
