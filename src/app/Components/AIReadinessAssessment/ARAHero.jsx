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

const READINESS_STATS = [
  { value: '6', label: 'Dimensions assessed' },
  { value: '18', label: 'Expert-designed questions' },
  { value: '5 min', label: 'Average completion time' },
  { value: '100%', label: 'Free — no signup required' },
];

const DIMENSIONS = [
  { name: 'Data Readiness', score: 72, color: '#7F77DD' },
  { name: 'Infrastructure', score: 58, color: '#53B8BB' },
  { name: 'Talent & Skills', score: 45, color: '#F59E0B' },
  { name: 'Process Maturity', score: 63, color: '#10B981' },
  { name: 'Governance', score: 38, color: '#EF4444' },
  { name: 'AI Strategy', score: 55, color: '#3B82F6' },
];

export default function ARAHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="hero-area style-three d-flex align-items-center"
      style={{
        marginTop: '0',
        position: 'relative',
        height: 'auto',
        minHeight: '100vh',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row hero align-items-center g-4">

          {/* ── Left: copy ── */}
          <div className="col-lg-6 col-md-12">
            <div className="hero-contant" style={{ paddingTop: '0' }}>

              {/* Kicker */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div className="age-kicker-line" />
                <div className="age-kicker-text">AI Readiness · Assessment · Strategy</div>
              </div>

              {/* Chips */}
              <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', flexWrap: 'wrap' }}>
                {['Free assessment', '6 dimensions', 'Instant results', 'Industry benchmarking', 'No signup'].map((c) => (
                  <span key={c} style={{
                    fontSize: '11px', padding: '3px 10px', borderRadius: '99px',
                    background: 'rgba(255,255,255,0.1)', color: '#d1d5db',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}>{c}</span>
                ))}
              </div>

              <h1 className="mb-4 d-block" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', lineHeight: 1.2 }}>
                Is your business ready to integrate AI? Find out in 5 minutes.
              </h1>

              <p className="subheadline text-white" style={{ fontSize: '16px', lineHeight: '1.65', maxWidth: '540px', marginBottom: '32px' }}>
                Answer 18 questions across six critical dimensions. Get a scored readiness report specific to
                your industry, team size, and current tech stack — delivered instantly on screen.
              </p>

              {/* Proof points */}
              <div style={{
                display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px',
                padding: '16px 18px', background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px',
              }}>
                {[
                  'Scored across 6 critical AI readiness dimensions',
                  'Personalised action plan based on your results',
                  'Industry-specific benchmarking included',
                  'No email required to see your results',
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

              <div className="d-flex flex-wrap align-items-center gap-2 mb-5">
                <div className="solutek-btn me-0">
                  <Link href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-2">Take the free assessment &rarr;</Link>
                </div>
                <div className="hero-btn-3">
                  <div className="hero-btn-profile">
                    <Link
                      href="#ara-assessment"
                      onClick={(e) => { e.preventDefault(); document.getElementById('ara-assessment')?.scrollIntoView({ behavior: 'smooth' }); }}
                      style={{ textDecoration: 'none' }}
                    >
                      <div style={{ color: '#ff3c00', cursor: 'pointer', fontSize: '16px', fontWeight: '600' }}>
                        See assessment &darr;
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ── Right: assessment visual ── */}
          <div className="col-lg-6 col-md-12 mt-4 mt-lg-0">
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '24px',
            }}>
              <div style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.07em', textTransform: 'uppercase', color: '#a0a0a0', marginBottom: '16px' }}>
                The six dimensions we assess
              </div>

              {/* Mini stats */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px',
                background: 'transparent', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px', overflow: 'hidden', marginBottom: '20px',
              }}>
                {READINESS_STATS.map((s, i) => (
                  <div key={i} style={{ padding: '14px', background: 'rgba(255,255,255,0.03)' }}>
                    <div style={{ fontSize: '20px', fontWeight: '700', color: '#fff', fontFamily: 'var(--font-mono, monospace)', marginBottom: '3px' }}>{s.value}</div>
                    <div style={{ fontSize: '11px', color: '#a0a0a0', lineHeight: 1.3 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Radar chart mockup - dimension bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {DIMENSIONS.map((d, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontSize: '12px', color: '#d1d5db' }}>{d.name}</span>
                      <span style={{ fontSize: '12px', color: d.color, fontWeight: '600' }}>{d.score}%</span>
                    </div>
                    <div style={{ height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '99px', overflow: 'hidden' }}>
                      <div style={{
                        height: '100%',
                        width: `${d.score}%`,
                        background: d.color,
                        borderRadius: '99px',
                        transition: 'width 0.5s ease',
                      }} />
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: '16px',
                padding: '12px 14px',
                background: 'rgba(127, 119, 221, 0.15)',
                border: '1px solid rgba(127, 119, 221, 0.3)',
                borderRadius: '10px',
                fontSize: '12px',
                color: '#a5b4fc',
                textAlign: 'center',
              }}>
                Sample report — your results will be personalised to your business
              </div>

            </div>
          </div>

        </div>
      </div>

      <DynamicFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Take the Free Assessment"
        description="Fill out the form below and we'll get back to you shortly."
        submitButtonText="Submit"
        fields={defaultFormFields}
        metadata={{ service: 'ai-readiness', pageTitle: 'AI Readiness Assessment' }}
      />
    </div>
  );
}