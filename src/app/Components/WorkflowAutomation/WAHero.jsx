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

export default function WAHero() {
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
      {/* Background decorative shape */}
      {/* <div
        className="hero-left-shape"
        style={{
          position: 'absolute',
          top: '20%',
          transform: 'translateY(-50%)',
          left: '10%',
          zIndex: 0,
          opacity: 0.8,
        }}
      >
        <Image
          src="/assets/images/home-3/hero-geo.png"
          alt=""
          width={680}
          height={680}
          priority
        />
      </div> */}

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row hero align-items-center g-4">

          {/* ── Left: copy ── */}
          <div className="col-lg-6 col-md-12">
            <div className="hero-contant" style={{ paddingTop: '0' }}>

              {/* Chips */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: '11px', fontWeight: '600', padding: '4px 12px',
                  borderRadius: '99px', background: '#dcfce7', color: '#15803d',
                  border: '1px solid #86efac',
                }}>
                  Workflow Automation
                </span>
                <span style={{
                  fontSize: '11px', fontWeight: '500', padding: '4px 12px',
                  borderRadius: '99px', background: 'rgba(255,255,255,0.1)',
                  color: '#d1d5db', border: '1px solid rgba(255,255,255,0.12)',
                }}>
                  AI &amp; Automation
                </span>
              </div>

              <h1 className="mb-4 d-block" style={{ fontSize: 'clamp(30px, 3.5vw, 44px)', lineHeight: 1.2 }}>
                Turn your most repetitive processes into self-running machines
              </h1>

              <p
                className="subheadline text-white"
                style={{ fontSize: '17px', lineHeight: '1.65', maxWidth: '580px', marginBottom: '32px' }}
              >
                Mayurasoft maps, designs, and builds end-to-end workflow automations — connecting
                your apps, data, and teams so that work moves forward without anyone pushing it.
              </p>

              {/* Proof points */}
              <div style={{
                display: 'flex', flexDirection: 'column', gap: '10px',
                marginBottom: '32px', padding: '16px 18px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
              }}>
                {[
                  'Works with your existing tools — no rip-and-replace',
                  'AI-augmented routing, classification, and decision logic',
                  'Human oversight built in — escalation gates everywhere',
                  'Fully documented, handed over, and maintainable by your team',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#d1d5db' }}>
                    <span style={{
                      width: '18px', height: '18px', borderRadius: '50%',
                      background: 'rgba(16,185,129,0.2)', color: '#10b981',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '10px', fontWeight: '700', flexShrink: 0, marginTop: '1px',
                    }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="d-flex flex-wrap align-items-center gap-2 mb-5">
                <div className="solutek-btn">
                  <Link href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-2">
                    Find my automations &rarr;
                  </Link>
                </div>
                <div className="hero-btn-3">
                  <div className="hero-btn-profile">
                    <Link
                      href="#wa-finder"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('wa-finder')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      style={{ textDecoration: 'none' }}
                    >
                      <div style={{ color: '#ff3c00', cursor: 'pointer', fontSize: '16px', fontWeight: '600' }}>
                        See What can be automated &darr;
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Stat strip */}
              {/* <div className="d-flex flex-wrap gap-4" style={{ padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                {[
                  { value: '90 min', label: 'Free process audit — no commitment' },
                  { value: '3–5', label: 'Automations identified per session' },
                  { value: '4 min', label: 'Typical cycle time after automation' },
                  { value: '75%', label: 'Average automation coverage achieved' },
                ].map((s, i) => (
                  <div key={i} style={{ minWidth: '110px' }}>
                    <div style={{
                      fontSize: '24px', fontWeight: '700', color: '#ffffff',
                      fontFamily: 'var(--font-mono, monospace)', lineHeight: 1, marginBottom: '4px',
                    }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: '12px', color: '#a0a0a0', lineHeight: 1.35 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>

          {/* ── Right: Animated workflow canvas ── */}
          <div className="col-lg-6 col-md-12 mt-4 mt-lg-0 d-flex align-items-center justify-content-center">
            <div className="wa-hero-canvas" style={{ width: '100%', maxWidth: '540px' }}>
              <div className="wa-canvas-header">
                <span className="wa-canvas-label">Live workflow</span>
                <span className="wa-pulse-badge">
                  <span className="wa-pulse-dot" />
                  Running
                </span>
              </div>

              {/* Row 1: Trigger → Extract data → AI validation */}
              <div className="wa-flow-row">
                <div className="wa-node done">
                  <div className="wa-node-status" style={{ background: '#10b981' }} />
                  <div className="wa-node-title">Trigger</div>
                  <div className="wa-node-sub">New invoice received</div>
                </div>
                <div className="wa-conn"><div className="wa-conn-line" /><div className="wa-conn-head" /></div>
                <div className="wa-node done">
                  <div className="wa-node-status" style={{ background: '#10b981' }} />
                  <div className="wa-node-title">Extract data</div>
                  <div className="wa-node-sub">PDF → structured fields</div>
                </div>
                <div className="wa-conn"><div className="wa-conn-line" /><div className="wa-conn-head" /></div>
                <div className="wa-node ai-node">
                  <div className="wa-node-status" style={{
                    background: '#a78bfa',
                    animation: 'wa-pulse 0.9s ease-in-out infinite',
                  }} />
                  <div className="wa-node-title">AI validation</div>
                  <div className="wa-node-sub">Verify &amp; classify</div>
                </div>
              </div>

              {/* Vertical connector (right-aligned) */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '8px' }}>
                <div className="wa-vert-conn">
                  <div className="wa-vert-line" />
                  <div className="wa-vert-head" />
                </div>
              </div>

              {/* Row 2: right-aligned — Route & approve → ERP → Notify */}
              <div className="wa-flow-row" style={{ justifyContent: 'flex-end' }}>
                <div className="wa-node running">
                  <div className="wa-node-status" style={{
                    background: '#3b82f6',
                    animation: 'wa-pulse 1s ease-in-out infinite',
                  }} />
                  <div className="wa-node-title">Route &amp; approve</div>
                  <div className="wa-node-sub">&gt;₹50k → CFO queue</div>
                </div>
                <div className="wa-conn" style={{ flex: '0', width: '20px' }}>
                  <div className="wa-conn-line" style={{ flex: 1 }} />
                </div>
                <div className="wa-node" style={{ opacity: 0.4 }}>
                  <div className="wa-node-title">Post to ERP</div>
                  <div className="wa-node-sub">SAP / Tally entry</div>
                </div>
                <div className="wa-conn" style={{ flex: '0', width: '20px' }}>
                  <div className="wa-conn-line" style={{ flex: 1 }} />
                </div>
                <div className="wa-node" style={{ opacity: 0.4 }}>
                  <div className="wa-node-title">Notify &amp; archive</div>
                  <div className="wa-node-sub">Slack + Drive</div>
                </div>
              </div>

              {/* Impact callout */}
              <div style={{
                padding: '12px 14px',
                background: 'rgba(0,0,0,0.25)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '8px',
                marginTop: '4px',
              }}>
                <div style={{ fontSize: '10px', fontWeight: '600', color: '#a0a0a0', marginBottom: '4px' }}>
                  This workflow used to take
                </div>
                <div style={{ fontSize: '13px' }}>
                  <span style={{ color: '#f87171', fontWeight: '600', textDecoration: 'line-through', marginRight: '6px' }}>
                    2 days, 3 people, 11 manual steps
                  </span>
                  <span style={{ color: '#10b981', fontWeight: '600' }}>
                    → 4 minutes, fully automated
                  </span>
                </div>
              </div>

              {/* Legend */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '4px' }}>
                {[
                  { color: '#10b981', label: 'Complete' },
                  { color: '#a78bfa', label: 'AI processing' },
                  { color: '#3b82f6', label: 'Running' },
                  { color: 'rgba(255,255,255,0.2)', label: 'Pending' },
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
        title="Find my automations"
        description="Fill out the form below and we'll get back to you shortly."
        submitButtonText="Submit"
        fields={defaultFormFields}
        metadata={{ service: 'workflow-automation', pageTitle: 'Workflow Automation' }}
      />
    </div>
  );
}
