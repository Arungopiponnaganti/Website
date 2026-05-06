'use client';
import Link from 'next/link';
import React, { useState } from 'react';
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

const warningSignals = [
  { icon: 'bi-exclamation-triangle-fill', title: 'Deployments take days',               detail: 'Manual releases, no CI/CD pipeline in sight' },
  { icon: 'bi-person-x-fill',             title: 'Only one person knows the codebase',   detail: 'Bus-factor risk with zero documentation' },
  { icon: 'bi-hourglass-split',           title: 'New features take months',             detail: 'Tightly coupled monolith, high breakage risk' },
  { icon: 'bi-graph-down-arrow',          title: 'Scaling costs are out of control',     detail: 'On-premise infra or inefficient cloud spend' },
];

const stats = [
  { value: '0',       label: 'Production outages during migration' },
  { value: '5 days',  label: 'Free legacy audit, written report' },
  { value: '6 wks',   label: 'Fastest path to modernised infra' },
];

export default function AMHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
          className="hero-area style-three align-items-center"
          style={{
            marginTop: '-120px',
            paddingTop: '280px',
            position: 'relative',
            height: 'auto',
            minHeight: '800px',
            overflow: 'hidden' // important
          }}
        >
          {/* ✅ Background Image */}
          <Image
            src="/assets/images/app-modernization-hero.png"
            alt="background"
            fill
            priority
            sizes="100vw"
            className="custom-hero-bg-layer"
          />
    
          {/* Optional overlay (for readability) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.4)', // adjust if needed
              zIndex: 1
            }}
          />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row hero align-items-center">

          {/* ── Left col ── */}
          <div className="col-lg-7 col-md-12">
            <div className="hero-contant" style={{ paddingTop: 0 }}>

              {/* Amber service pill */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                background: 'rgba(255,180,0,0.13)', color: '#ffb400',
                fontSize: '13px', fontWeight: '700', padding: '5px 16px',
                borderRadius: '99px', marginBottom: '24px', letterSpacing: '0.03em',
              }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ffb400', display: 'inline-block', flexShrink: 0 }} />
                Application Modernisation
              </div>

              <h1 className="mb-4 d-block">
                Modernize your system — without breaking what works.
                {/* Your legacy system is slowing you down. Let&apos;s fix that — without breaking what works. */}
              </h1>

              <p className="subheadline text-white" style={{ fontSize: '18px', lineHeight: '1.65', maxWidth: '640px', marginBottom: '36px' }}>
                MayuraSoft migrates ageing applications to modern, cloud-native architectures — zero downtime, full IP ownership, and a structured handover your team can own confidently.
              </p>

              {/* CTAs */}
              <div className="d-flex flex-wrap align-items-center gap-4 mb-5">
                <div className="solutek-btn">
                  <Link href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-2" data-cta="hero-primary">
                    Get a free legacy audit &rarr;
                  </Link>
                </div>
                <div className="hero-btn-3">
                  <div className="hero-btn-profile">
                    <Link
                      href="#process"
                      onClick={e => { e.preventDefault(); document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' }); }}
                      style={{ textTransform: 'none', textDecoration: 'none' }}
                    >
                      <span style={{ color: '#ff3c00', fontSize: '16px', fontWeight: '600' }}>See our process &darr;</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Stats strip */}
              <div className="cd-stats-row" style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                {stats.map((s, i) => (
                  <div key={i} className="cd-stat-item position-relative">
                    <div className="cd-stat-value text-white" style={{ fontSize: '26px', fontWeight: '700', marginBottom: '4px' }}>{s.value}</div>
                    <div className="cd-stat-label" style={{ fontSize: '12px', color: '#a0a0a0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '500' }}>{s.label}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* ── Right col — Warning signals card ── */}
          {/* <div className="col-lg-5 col-md-12 d-none d-lg-block">
            <div style={{
              background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)', borderRadius: '18px',
              padding: '28px', marginLeft: 'auto', maxWidth: '400px',
            }}> */}
              {/* Card header */}
              {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#a0a0a0' }}>
                  Warning signals
                </div>
                <div style={{
                  background: 'rgba(220,53,69,0.15)', border: '1px solid rgba(220,53,69,0.3)',
                  color: '#ff6b7a', fontSize: '10px', fontWeight: '700',
                  padding: '3px 10px', borderRadius: '6px', letterSpacing: '0.04em',
                }}>
                  HIGH RISK
                </div>
              </div> */}

              {/* Signal rows */}
              {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {warningSignals.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: '14px',
                      padding: '14px 0',
                      borderBottom: i < warningSignals.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                    }}
                  >
                    <div style={{
                      width: '34px', height: '34px', borderRadius: '8px', flexShrink: 0,
                      background: 'rgba(220,53,69,0.14)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <i className={`bi ${item.icon}`} style={{ fontSize: '14px', color: '#ff6b7a' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#fff', marginBottom: '3px' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '12px', color: '#888', lineHeight: '1.4' }}>
                        {item.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}

              {/* Card footer CTA */}
              {/* <div style={{ marginTop: '20px', paddingTop: '18px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <Link
                  href="/contact?service=application-modernisation"
                  style={{
                    display: 'block', textAlign: 'center', padding: '11px 0',
                    borderRadius: '8px', background: 'rgba(255,60,0,0.15)',
                    border: '1px solid rgba(255,60,0,0.3)', color: '#ff6b4a',
                    fontSize: '13px', fontWeight: '700', textDecoration: 'none',
                    transition: 'background 0.2s',
                  }}
                >
                  Get a free legacy audit &rarr;
                </Link>
              </div>
            </div>
          </div> */}

        </div>
      </div>
      <DynamicFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get a Free Legacy Audit"
        description="Fill out the form below and we'll get back to you shortly."
        submitButtonText="Submit"
        fields={defaultFormFields}
        metadata={{ service: 'application-modernisation', pageTitle: 'Application Modernisation' }}
      />
    </div>
  );
}
