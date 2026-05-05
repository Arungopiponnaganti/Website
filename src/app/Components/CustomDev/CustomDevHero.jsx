'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function CustomDevHero() {
  return (
//     <div className="hero-area style-three align-items-center" style={{ marginTop: '-120px', paddingTop: '280px', position: 'relative', height: 'auto', minHeight: '800px' }}>

//  <Image src="/assets/images/custom-dev-hero.png" alt="img" width={680} height={680} priority />
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
        src="/assets/images/custom-dev-hero.png"
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
          <div className="col-lg-7 col-md-12">
            <div className="hero-contant" style={{ paddingTop: '0' }}>
              <h5 style={{ marginBottom: '25px' }}>Service</h5>

              <h1 className="mb-4 d-block">Custom software built exactly for your business</h1>

              <p className="subheadline text-white" style={{ fontSize: '18px', lineHeight: '1.65', maxWidth: '650px', marginBottom: '40px' }}>
                From internal tools to customer-facing platforms, we design and engineer software that fits your workflows — not the other way around. Web, mobile, API, or enterprise-grade. Delivered in agile sprints.
              </p>

              <div className="d-flex flex-wrap align-items-center gap-4">
                <div className="solutek-btn">
                  {/* <Link href="/free-audit?service=custom-dev" className="btn-2" data-cta="hero-primary"> */}
                  <Link href="/contact?service=custom-dev" className="btn-2" data-cta="hero-primary">
                    Get a free scoping session
                  </Link>
                </div>
                <div className="hero-btn-3">
                  <div className="hero-btn-profile">
                    <Link href="#process" onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
                    }} style={{ textTransform: 'none', textDecoration: 'none' }}>
                      <div style={{ color: '#ff3c00', textDecoration: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: '600' }}>See how we work &darr;</div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="cd-stats-row mt-5 pt-3" style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                <div className="cd-stat-item position-relative">
                  <div className="cd-stat-value text-white" style={{ fontSize: '28px', fontWeight: '700', marginBottom: '4px' }}>2-week</div>
                  <div className="cd-stat-label" style={{ fontSize: '12px', color: '#a0a0a0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '500' }}>sprint cycles</div>
                </div>
                <div className="cd-stat-item position-relative">
                  <div className="cd-stat-value text-white" style={{ fontSize: '28px', fontWeight: '700', marginBottom: '4px' }}>Fixed-scope</div>
                  <div className="cd-stat-label" style={{ fontSize: '12px', color: '#a0a0a0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '500' }}>transparent pricing</div>
                </div>
                <div className="cd-stat-item position-relative">
                  <div className="cd-stat-value text-white" style={{ fontSize: '28px', fontWeight: '700', marginBottom: '4px' }}>Full-stack</div>
                  <div className="cd-stat-label" style={{ fontSize: '12px', color: '#a0a0a0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '500' }}>one team, end to end</div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-5 col-md-12 d-none d-lg-block">
            <div className="hero-thumb-3">
              <div className="hero-img hero_image_3">
                <Image src="/assets/images/home-3/hero-thum.png" alt="img" width={1065} height={800} style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
