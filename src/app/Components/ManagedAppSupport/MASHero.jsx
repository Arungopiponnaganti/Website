'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
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

export default function MASHero() {
  const [uptimeBars, setUptimeBars] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Generate 30 bars, mostly OK, a couple warnings/incidents just for visualization.
    const bars = Array.from({ length: 30 }).map((_, i) => ({
      status: i === 12 || i === 25 ? 'inc' : 'ok',
      id: i
    }));
    setUptimeBars(bars);
  }, []);

  return (
    <div className="hero-area style-three d-flex align-items-center" style={{ marginTop: '0', position: 'relative', height: 'auto', minHeight: '100vh' }}>

      {/* Background Shapes positioned relative to the full section width */}
      <div className="hero-left-shape" style={{ position: 'absolute', top: '20%', transform: 'translateY(-50%)', left: '10%', zIndex: 0, opacity: 0.8 }}>
        <Image src="/assets/images/home-3/hero-geo.png" alt="Managed app support hero background" width={550} height={550} priority />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row hero align-items-center g-4">

          <div className="col-lg-5 col-md-12">
            <div className="hero-contant" style={{ paddingTop: '0' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  color: '#10b981',
                  fontSize: '13px',
                  padding: '6px 14px',
                  borderRadius: '99px',
                  marginBottom: '20px',
                  fontWeight: '600'
                }}
              >
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}></div>
                All systems operational
              </div>

              <h1 className="mb-4 d-block" style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', lineHeight: 1.25 }}>
                Your application never sleeps. Neither do we.
              </h1>

              <p className="subheadline text-white" style={{ fontSize: '18px', lineHeight: '1.65', maxWidth: '650px', marginBottom: '30px' }}>
                Mayurasoft provides 24/7 managed support for production applications — monitoring, incident response, patching, and continuous optimisation — so your engineering team can focus on building, not firefighting.
              </p>

              <div className="d-flex flex-wrap align-items-center gap-4">
                <div className="solutek-btn me-0">
                  <Link href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-2">
                    Get a support plan &rarr;
                  </Link>
                </div>
                <div className="hero-btn-3">
                  <div className="hero-btn-profile">
                    <Link href="#whats-included" onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('whats-included')?.scrollIntoView({ behavior: 'smooth' });
                    }} style={{ textTransform: 'none', textDecoration: 'none' }}>
                      <div style={{ color: '#ff3c00', textDecoration: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: '600' }}>See what&apos;s included &darr;</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
            <div className="mas-uptime-panel">
              <div>
                <div className="eyebrow" style={{ marginBottom: '8px', background: 'rgba(255,255,255,0.1)', color: '#d1d5db', border: 'none' }}>Avg client uptime (90 days)</div>
                <div style={{ fontSize: '42px', fontWeight: '700', color: '#ffffff', lineHeight: 1, fontFamily: 'var(--font-mono, monospace)', marginBottom: '4px' }}>99.97%</div>
                <div style={{ fontSize: '13px', color: '#a0a0a0' }}>Across all managed applications</div>
              </div>

              <div className="mt-2">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div style={{ fontSize: '12px', fontWeight: '600', color: '#e0e0e0' }}>Daily uptime (30 days)</div>
                </div>
                <div className="d-flex gap-1">
                  {uptimeBars.map(bar => (
                    <div key={bar.id} className={`ut-bar ${bar.status === 'inc' ? 'inc' : ''}`} title={bar.status === 'ok' ? '100% Uptime' : 'Partial Outage'} />
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                  <div style={{ fontSize: '11px', color: '#888' }}>30 days ago</div>
                  <div style={{ fontSize: '11px', color: '#888' }}>Today</div>
                </div>
              </div>

              <hr style={{ margin: '8px 0', borderColor: 'rgba(255, 255, 255, 0.1)' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{ fontSize: '14px', color: '#a0a0a0' }}>Mean time to detect</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff', fontFamily: 'var(--font-mono, monospace)' }}>&lt;2 min</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{ fontSize: '14px', color: '#a0a0a0' }}>Mean time to respond</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff', fontFamily: 'var(--font-mono, monospace)' }}>&lt;15 min</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{ fontSize: '14px', color: '#a0a0a0' }}>Mean time to resolve</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff', fontFamily: 'var(--font-mono, monospace)' }}>&lt;4 hrs</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div className="mas-status-sidebar">
              <div className="eyebrow" style={{ marginBottom: '4px', background: 'rgba(255,255,255,0.1)', color: '#d1d5db', border: 'none' }}>Live Services status</div>

              {[
                { name: 'Application layer', status: 'Operational', ok: true },
                { name: 'API endpoints', status: 'Operational', ok: true },
                { name: 'Database layer', status: 'Operational', ok: true },
                { name: 'CDN & edge', status: 'Operational', ok: true },
                { name: 'Auth services', status: 'Operational', ok: true }
              ].map((sv, i) => (
                <div className="mas-status-item" key={i}>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: '#ffffff' }}>{sv.name}</span>
                  <span style={{
                    fontSize: '11px', fontWeight: '600', padding: '2px 8px', borderRadius: '99px',
                    backgroundColor: sv.ok ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                    color: sv.ok ? '#10b981' : '#ef4444'
                  }}>
                    {sv.status}
                  </span>
                </div>
              ))}

              <div className="mas-status-note mt-auto text-start">
                Status reflects a representative managed environment. Your dedicated status page is set up within 48 hrs of onboarding.
              </div>
            </div>
          </div>

        </div>
      </div>

      <DynamicFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get a Support Plan"
        description="Fill out the form below and we'll get back to you shortly."
        submitButtonText="Submit"
        fields={defaultFormFields}
        metadata={{ service: 'managed-app-support', pageTitle: 'Managed App Support' }}
      />
    </div>
  );
}
