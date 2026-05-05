'use client';
import Image from 'next/image';
import React from 'react';

export default function ARAHero() {
  return (
    <section className="ara-hero text-center pb-3" >
      {/* <div
        className="hero-left-shape"
        style={{ position: 'absolute', top: '20%', transform: 'translateY(-50%)', left: '10%', zIndex: 0, opacity: 0.8 }}
      >
        <Image src="/assets/images/home-3/hero-geo.png" alt="" width={680} height={680} priority />
      </div> */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">

            {/* Pills row */}
            <div className="d-flex align-items-center justify-content-center gap-2 mb-4 flex-wrap">
              <span className="ara-pill-free">Free · No signup required</span>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#d1d5db', display: 'inline-block' }} />
              <span className="ara-pill-tag">Instant results · Personalised recommendations</span>
            </div>

            <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: '700', color: '#fff', lineHeight: 1.2, marginBottom: '16px' }}>
              Is your business ready to integrate AI? Find out in 5 minutes.
            </h1>

            <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: '1.65', maxWidth: '520px', margin: '0 auto 28px' }}>
              Answer 18 questions across six dimensions. Get a scored readiness report — specific to your industry,
              team size, and current tech stack — delivered instantly on screen.
            </p>

            <div className="ara-meta-row justify-content-center">
              {[
                '18 questions · 5–7 minutes',
                'Scored across 6 dimensions',
                'Personalised action plan included',
                'No email required to see results',
              ].map((m, i) => (
                <div className="ara-meta-item" key={i}>
                  <div className="ara-meta-dot" />
                  {m}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
