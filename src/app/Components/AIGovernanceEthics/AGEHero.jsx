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

const SIGNALS = [
  {
    bg: '#FAECE7',
    icon: '⚠️',
    title: 'EU AI Act — in force 2025',
    desc: 'High-risk AI systems face mandatory conformity assessments, documentation, and human oversight requirements',
  },
  {
    bg: '#FAEEDA',
    icon: '📰',
    title: 'Reputational risk is growing',
    desc: 'AI bias and hallucination incidents now regularly make national news — the cost of a public failure exceeds the cost of governance',
  },
  {
    bg: '#E1F5EE',
    icon: '✅',
    title: 'Enterprise buyers demand it',
    desc: '70% of enterprise procurement teams now require an AI ethics policy before signing AI-related vendor contracts',
  },
];

export default function AGEHero() {
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
        <Image src="/assets/images/home-3/hero-geo.png" alt="" width={600} height={600} priority />
      </div> */}

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row hero align-items-center g-4">

          {/* ── Left: copy ── */}
          <div className="col-lg-6 col-md-12">
            <div className="hero-contant" style={{ paddingTop: '0' }}>

              {/* Kicker */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div className="age-kicker-line" />
                <div className="age-kicker-text">Responsible AI · Governance · Risk Management</div>
              </div>

              {/* Chips */}
              <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', flexWrap: 'wrap' }}>
                {['EU AI Act readiness', 'Bias auditing', 'Explainability', 'Model risk management', 'Data ethics'].map((c) => (
                  <span key={c} style={{
                    fontSize: '11px', padding: '3px 10px', borderRadius: '99px',
                    background: 'rgba(255,255,255,0.1)', color: '#d1d5db',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}>{c}</span>
                ))}
              </div>

              <h1 className="mb-4 d-block" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', lineHeight: 1.2 }}>
                Deploy AI your board, legal team, and customers can trust
              </h1>

              <p className="subheadline text-white" style={{ fontSize: '16px', lineHeight: '1.65', maxWidth: '540px', marginBottom: '32px' }}>
                Mayurasoft builds oversight frameworks that make your AI systems transparent, fair, auditable,
                and compliant — before regulators, journalists, or users find the gaps first.
              </p>

              <div className="d-flex flex-wrap align-items-center gap-4 mb-5">
                <div className="solutek-btn">
                  <Link href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-2">Start governance review &rarr;</Link>
                </div>
                <div className="hero-btn-3">
                  <div className="hero-btn-profile">
                    <Link
                      href="#age-framework"
                      onClick={(e) => { e.preventDefault(); document.getElementById('age-framework')?.scrollIntoView({ behavior: 'smooth' }); }}
                      style={{ textDecoration: 'none' }}
                    >
                      <div style={{ color: '#ff3c00', cursor: 'pointer', fontSize: '16px', fontWeight: '600' }}>
                        See the framework &darr;
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Stat strip */}
              {/* <div className="d-flex flex-wrap gap-4" style={{ padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                {[
                  { value: '6', label: 'Governance dimensions we assess and build for' },
                  { value: '4 wks', label: 'From audit to initial framework delivered' },
                  { value: 'EU AI Act', label: 'Aligned — every framework mapped to current regs' },
                  { value: '100%', label: 'Written, documented, and auditable outputs' },
                ].map((s, i) => (
                  <div key={i} style={{ minWidth: '100px' }}>
                    <div style={{ fontSize: '22px', fontWeight: '700', color: '#ffffff', fontFamily: 'var(--font-mono, monospace)', lineHeight: 1, marginBottom: '4px' }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: '11px', color: '#a0a0a0', lineHeight: 1.35 }}>{s.label}</div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>

          {/* ── Right: ethics signals ── */}
          <div className="col-lg-6 col-md-12 mt-4 mt-lg-0">
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
              <div style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.07em', textTransform: 'uppercase', color: '#a0a0a0' }}>
                Why governance is urgent
              </div>
              {SIGNALS.map((s, i) => (
                <div className="age-signal" key={i}>
                  <div className="age-sig-ic" style={{ background: s.bg }}>{s.icon}</div>
                  <div>
                    <div className="age-sig-title"style={{ color: s.bg }}>{s.title}</div>
                    <div className="age-sig-sub">{s.desc}</div>
                  </div>
                </div>
              ))}

              {/* Mini stat grid */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px',
                background: 'transparent', border: '1px solid #f3f4f6',
                borderRadius: '10px', overflow: 'hidden', marginTop: '4px',
              }}>
                {[
                  { n: '€35M', l: 'Max EU AI Act fine for non-compliance' },
                  { n: '7%', l: 'Of global turnover — the alternative penalty' },
                  { n: '2025', l: 'Full EU AI Act enforcement deadline' },
                  { n: '72 hrs', l: 'AI incident reporting window under new rules' },
                ].map((m, i) => (
                  <div key={i} style={{ padding: '14px', background: 'transparent' }}>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#fff', fontFamily: 'var(--font-mono, monospace)', marginBottom: '3px' }}>{m.n}</div>
                    <div style={{ fontSize: '11px', color: '#a0a0a0', lineHeight: 1.3 }}>{m.l}</div>
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
        title="Start governance review"
        description="Fill out the form below and we'll get back to you shortly."
        submitButtonText="Submit"
        fields={defaultFormFields}
        metadata={{ service: 'ai-governance', pageTitle: 'AI Governance & Ethics' }}
      />
    </div>
  );
}
