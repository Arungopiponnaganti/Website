'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const stats = [
  { value: '68%', label: 'of users abandon due to poor UX, not bad products' },
  { value: '3:1', label: 'ROI on every rupee invested in UX (Forrester)' },
  { value: '2 wks', label: 'Brief to first testable prototype' },
  { value: '100%', label: 'Designs tested with real users before dev' },
];

export default function UXUIHero() {
  return (
    <div className="hero-area style-three d-flex align-items-center uxui-hero-wrap">
      {/* ── Full-width animated SVG background ── */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 1,
          overflow: 'clip',
        }}
      >



        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/ux-ui-hero.svg"
          alt=""
          aria-hidden="true"
          className="uxui-hero-bg-img"
        />


        {/* Left-to-right gradient overlay — keeps text legible */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(7,9,14,1) 0%, rgba(7,9,14,0.97) 38%, rgba(7,9,14,0.75) 55%, rgba(7,9,14,0.25) 75%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
        {/* Bottom fade to blend hero into next section */}
        <div
          style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: '120px',
            background: 'linear-gradient(to bottom, transparent, rgba(7,9,14,0.6))',
            pointerEvents: 'none',
          }}
        />

</div>

    <Image
      src="/assets/images/ui-ux-hero.png"
      alt="background"
      fill
      priority
      sizes="100vw"
      className="uxui-hero-bg-png"
      style={{ zIndex: 1 }}
    />



      {/* ── Hero text content (floats on top of SVG background) ── */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row">
          <div className="col-lg-6 col-md-10 col-sm-12">
            <div className="hero-contant" style={{ paddingTop: 0 }}>

              {/* Blue service pill */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                background: 'rgba(67, 97, 238, 0.18)', color: '#7c9fff',
                fontSize: '13px', fontWeight: '700', padding: '5px 16px',
                borderRadius: '99px', marginBottom: '24px', letterSpacing: '0.03em',
              }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#7c9fff', display: 'inline-block', flexShrink: 0 }} />
                UX / UI Design
              </div>

              <h1 className="mb-4 d-block">
                Design that converts visitors into customers&nbsp;&mdash; not just looks good
              </h1>

              <p className="subheadline text-white" style={{ fontSize: '17px', lineHeight: '1.7', maxWidth: '560px', marginBottom: '36px', color: 'rgba(255,255,255,0.72)' }}>
                MayuraSoft designs interfaces grounded in user research and business data. Every pixel earns its place by serving a measurable outcome — lower bounce rates, higher conversions, faster time-to-value.
              </p>

              {/* CTAs */}
              <div className="d-flex flex-wrap align-items-center gap-4 mb-5">
                <div className="solutek-btn">
                  <Link href="/contact?service=ux-ui-design" className="btn-2" data-cta="hero-primary">
                    Get a free design audit &rarr;
                  </Link>
                </div>
                <div className="hero-btn-3">
                  <div className="hero-btn-profile">
                    <Link
                      href="#process"
                      onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
                      style={{ textTransform: 'none', textDecoration: 'none' }}
                    >
                      <span style={{ color: '#ff3c00', fontSize: '16px', fontWeight: '600' }}>See our process &darr;</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Stats strip */}
              {/* <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
                {stats.map((s, i) => (
                  <div key={i} style={{ position: 'relative' }}>
                    {i > 0 && (
                      <div style={{ position: 'absolute', left: '-14px', top: '4px', height: '32px', width: '1px', background: 'rgba(255,255,255,0.12)' }} />
                    )}
                    <div style={{ fontSize: '24px', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>{s.value}</div>
                    <div style={{ fontSize: '11px', color: '#a0a0a0', textTransform: 'uppercase', letterSpacing: '0.7px', fontWeight: '500', maxWidth: '120px', lineHeight: '1.4' }}>{s.label}</div>
                  </div>
                ))}
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
