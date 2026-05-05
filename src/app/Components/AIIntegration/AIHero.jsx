'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import '@/app/assets/ai-integration.css';

export default function AIHero() {
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
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '600',
                    padding: '4px 12px',
                    borderRadius: '99px',
                    background: '#EEEDFE',
                    color: '#3C3489',
                    border: '1px solid #AFA9EC',
                  }}
                >
                  AI Integration Services
                </span>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '500',
                    padding: '4px 12px',
                    borderRadius: '99px',
                    background: 'rgba(255,255,255,0.1)',
                    color: '#d1d5db',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  AI &amp; Automation
                </span>
              </div>

              <h1 className="mb-4 d-block" style={{ fontSize: 'clamp(30px, 3.5vw, 44px)', lineHeight: 1.2 }}>
                Connect AI to the software your business already runs — without rebuilding anything
              </h1>

              <p
                className="subheadline text-white"
                style={{ fontSize: '17px', lineHeight: '1.65', maxWidth: '580px', marginBottom: '32px' }}
              >
                MayuraSoft integrates GPT-4, Claude, Gemini, and open-source LLMs directly into your
                existing systems and workflows. Your stack stays intact. Intelligence gets added on top.
              </p>

              <div className="d-flex flex-wrap align-items-center gap-4 mb-5">
                <div className="solutek-btn">
                  <Link href="/contact" className="btn-2">
                    Get a free AI audit &rarr;
                  </Link>
                </div>
                <div className="hero-btn-3">
                  <div className="hero-btn-profile">
                    <Link
                      href="#ai-builder"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('ai-builder')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      style={{ textDecoration: 'none' }}
                    >
                      <div style={{ color: '#ff3c00', cursor: 'pointer', fontSize: '16px', fontWeight: '600' }}>
                        Build your integration &rarr;
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Stat strip */}
              <div
                className="d-flex flex-wrap gap-4"
                style={{
                  padding: '20px 0',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {[
                  { value: '48 hrs', label: 'To first working AI integration prototype' },
                  { value: '15+', label: 'AI models and providers we work with' },
                  { value: 'Zero', label: 'Rebuild of your existing systems required' },
                  { value: '100%', label: 'Data stays in your infrastructure' },
                ].map((s, i) => (
                  <div key={i} style={{ minWidth: '120px' }}>
                    <div
                      style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#ffffff',
                        fontFamily: 'var(--font-mono, monospace)',
                        lineHeight: 1,
                        marginBottom: '4px',
                      }}
                    >
                      {s.value}
                    </div>
                    <div style={{ fontSize: '12px', color: '#a0a0a0', lineHeight: 1.35 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: AI Integration Framework image ── */}
          <div className="col-lg-6 col-md-12 mt-4 mt-lg-0 d-flex align-items-center justify-content-center">
            <div style={{ position: 'relative', width: '100%', maxWidth: '560px' }}>
              {/* Subtle ambient glow behind the image */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '70%',
                  height: '70%',
                  background: 'radial-gradient(ellipse at center, rgba(55, 138, 221, 0.18) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                  zIndex: 0,
                  pointerEvents: 'none',
                }}
              />
              <Image
                src="/assets/images/ai-integrations.png"
                alt="AI Integration — connecting CRM, Jira, Slack, and databases to an AI layer that delivers automated responses, structured data, insights, and summaries"
                width={560}
                height={560}
                priority
                style={{
                  width: '100%',
                  height: 'auto',
                  position: 'relative',
                  zIndex: 1,
                  animation: 'ai-hero-float 5s ease-in-out infinite',
                  filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.5))',
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
