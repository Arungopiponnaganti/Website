import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function RVHero() {
  return (
    <div className="hero-area style-three d-flex align-items-center pb-4" style={{ marginTop: '-120px', paddingTop: '280px', position: 'relative', height: 'auto', minHeight: '800px' }}>
      
      {/* Background Shapes positioned relative to the full section width */}
      <div className="hero-left-shape" style={{ position: 'absolute', top: '28%', transform: 'translateY(-50%)', left: '10%', zIndex: 0 }}>
        <Image src="/assets/images/home-3/hero-geo.png" alt="img" width={680} height={680} priority />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row hero align-items-center">
          
          {/* Left Copy */}
          <div className="col-lg-7 col-md-12">
            <div className="hero-contant py-0 mb-0" style={{ paddingTop: '0' }}>
              
              {/* Category chips */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '11px', fontWeight: '600', padding: '4px 12px', borderRadius: '99px', background: '#dbeafe', color: '#1d4ed8', border: '1px solid #93c5fd' }}>
                  Reporting &amp; Visualisation
                </span>
                <span style={{ fontSize: '11px', fontWeight: '500', padding: '4px 12px', borderRadius: '99px', background: 'rgba(255,255,255,0.1)', color: '#d1d5db', border: '1px solid rgba(255,255,255,0.12)' }}>
                  Data Solutions
                </span>
              </div>

              <h1 className="mb-4 d-block" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', lineHeight: 1.25 }}>
                Reports your stakeholders actually read — and act on
              </h1>
              
              <p className="subheadline text-white" style={{ fontSize: '18px', lineHeight: '1.65', maxWidth: '650px', marginBottom: '30px' }}>
                MayuraSoft designs and builds reporting systems that deliver the right numbers to the right people at the right time — automated, accurate, and beautifully presented.
              </p>
              
              <div className="d-flex flex-wrap gap-2 mb-4">
                {['Automated delivery', 'Executive-ready design', 'Power BI · Tableau · Looker', 'Custom web portals'].map(chip => (
                  <span key={chip} className="px-3 py-1 border rounded-pill" style={{fontSize: '12px', background: 'rgba(255,255,255,0.1)', color: '#d1d5db', borderColor: 'rgba(255,255,255,0.2) !important'}}>{chip}</span>
                ))}
              </div>

              <div className="d-flex flex-wrap align-items-center gap-4 mt-4">
                <div className="solutek-btn">
                  <Link href="/contact" className="btn-2">
                    See sample reports &rarr;
                  </Link>
                </div>
                <div className="hero-btn-3">
                  <div className="hero-btn-profile">
                    <Link href="#services" style={{ textTransform: 'none', textDecoration: 'none' }}>
                      <div style={{ color: '#ff3c00', textDecoration: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: '600' }}>Book a call &darr;</div>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Builder UI */}
          <div className="col-lg-5 col-md-12 mt-5 mt-lg-0">
            <div className="rv-builder" style={{boxShadow: '0 20px 40px rgba(0,0,0,0.2)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)'}}>
              <div className="rv-builder-label">Report query — revenue by region</div>
              <div className="rv-query">
                <span className="rv-kw">SELECT</span><br />
                &nbsp;&nbsp;<span className="rv-fn">DATE_TRUNC</span>(<span className="rv-val">&apos;month&apos;</span>, order_date) <span className="rv-kw">AS</span> month,<br />
                &nbsp;&nbsp;region,<br />
                &nbsp;&nbsp;<span className="rv-fn">SUM</span>(revenue_inr) <span className="rv-kw">AS</span> total_revenue,<br />
                &nbsp;&nbsp;<span className="rv-fn">COUNT</span>(DISTINCT customer_id) <span className="rv-kw">AS</span> customers,<br />
                &nbsp;&nbsp;<span className="rv-fn">ROUND</span>(total_revenue / <span className="rv-fn">LAG</span>(total_revenue) <span className="rv-kw">OVER</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;(<span className="rv-kw">PARTITION BY</span> region <span className="rv-kw">ORDER BY</span> month) - 1, 3) <span className="rv-kw">AS</span> mom_growth<br />
                <span className="rv-kw">FROM</span> <span className="rv-table">fct_orders</span><br />
                <span className="rv-kw">WHERE</span> order_date &gt;= <span className="rv-val">&apos;2024-01-01&apos;</span><br />
                <span className="rv-kw">GROUP BY</span> 1, 2<br />
                <span className="rv-kw">ORDER BY</span> month <span className="rv-kw">DESC</span>, total_revenue <span className="rv-kw">DESC</span>
              </div>
              
              <div className="rv-output">
                <div className="rv-out-label">Output — 3 of 36 rows</div>
                <div className="rv-out-row">
                  <span className="rv-out-head">month</span>
                  <span className="rv-out-head">region</span>
                  <span className="rv-out-head">revenue</span>
                </div>
                <div className="rv-out-row">
                  <span className="rv-out-val">2024-11</span>
                  <span className="rv-out-val">South</span>
                  <span className="rv-out-val">₹1.42Cr</span>
                </div>
                <div className="rv-out-row">
                  <span className="rv-out-val">2024-11</span>
                  <span className="rv-out-val">West</span>
                  <span className="rv-out-val">₹98.4L</span>
                </div>
                <div className="rv-out-row">
                  <span className="rv-out-val">2024-11</span>
                  <span className="rv-out-val">North</span>
                  <span className="rv-out-val">₹87.2L</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
