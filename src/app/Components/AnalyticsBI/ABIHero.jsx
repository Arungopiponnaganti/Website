'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BAR_DATA = [28, 34, 31, 38, 42, 45, 41, 48, 52, 58, 54, 62];
const MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
const COLORS = ['#f3f4f6', '#f3f4f6', '#f3f4f6', '#fef3c7', '#fef3c7', '#d1fae5', '#d1fae5', '#d1fae5', '#d1fae5', '#ede9fe', '#ede9fe', '#2563eb'];
const MAX_BAR = Math.max(...BAR_DATA);

export default function ABIHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="hero-area style-three d-flex align-items-center pb-5" style={{ marginTop: '-120px', paddingTop: '280px', position: 'relative', height: 'auto', minHeight: '800px' }}>
      
      {/* Background Shapes positioned relative to the full section width */}
      <div className="hero-left-shape" style={{ position: 'absolute', top: '28%', transform: 'translateY(-50%)', left: '10%', zIndex: 0 }}>
        <Image src="/assets/images/home-3/hero-geo.png" alt="img" width={680} height={680} priority />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row hero align-items-center mb-5">
          {/* Left Copy */}
          <div className="col-lg-7 col-md-12">
            <div className="hero-contant py-0 mb-0" style={{ paddingTop: '0' }}>
              
              {/* Category chips */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '11px', fontWeight: '600', padding: '4px 12px', borderRadius: '99px', background: '#dbeafe', color: '#1d4ed8', border: '1px solid #93c5fd' }}>
                  Analytics &amp; Business Intelligence
                </span>
                <span style={{ fontSize: '11px', fontWeight: '500', padding: '4px 12px', borderRadius: '99px', background: 'rgba(255,255,255,0.1)', color: '#d1d5db', border: '1px solid rgba(255,255,255,0.12)' }}>
                  Data Solutions
                </span>
              </div>

              <h1 className="mb-4 d-block" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', lineHeight: 1.2 }}>
                Turn your data into decisions. Not just dashboards.
              </h1>
              
              <p className="subheadline text-white" style={{ fontSize: '18px', lineHeight: '1.65', maxWidth: '650px', marginBottom: '40px' }}>
                MayuraSoft designs and builds analytics platforms that your business users actually adopt — with consistent metrics, self-serve reporting, and insights that drive real decisions, not vanity charts.
              </p>
              
              <div className="d-flex flex-wrap align-items-center gap-4">
                <div className="solutek-btn">
                  <Link href="/contact" className="btn-2">
                    Get a free BI audit &rarr;
                  </Link>
                </div>
                <div className="hero-btn-3">
                  <div className="hero-btn-profile">
                    <Link href="#use-cases" style={{ textTransform: 'none', textDecoration: 'none' }}>
                      <div style={{ color: '#ff3c00', textDecoration: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: '600' }}>See our work &darr;</div>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Dashboard Preview */}
          <div className="col-lg-5 col-md-12 mt-5 mt-lg-0">
            <div className="abi-dashboard" style={{boxShadow: '0 20px 40px rgba(0,0,0,0.2)'}}>
              <div className="abi-db-header">Live dashboard preview — Revenue Intelligence</div>
              <div className="abi-kpis">
                <div className="abi-kpi">
                  <div className="abi-kpi-n">₹4.2Cr</div>
                  <div className="abi-kpi-l">Monthly revenue</div>
                  <div className="abi-kpi-t text-success">↑ 18.4%</div>
                </div>
                <div className="abi-kpi">
                  <div className="abi-kpi-n">2,847</div>
                  <div className="abi-kpi-l">Active customers</div>
                  <div className="abi-kpi-t text-success">↑ 12.1%</div>
                </div>
                <div className="abi-kpi">
                  <div className="abi-kpi-n">₹14,754</div>
                  <div className="abi-kpi-l">Avg order value</div>
                  <div className="abi-kpi-t text-danger">↓ 3.2%</div>
                </div>
              </div>
              <div className="abi-chart">
                <div className="abi-chart-label">Monthly revenue trend (₹ Lakhs)</div>
                {mounted && (
                  <>
                    <div className="abi-bars">
                      {BAR_DATA.map((v, i) => (
                        <div key={i} className="abi-bar" style={{ height: `${Math.round((v / MAX_BAR) * 100)}%`, background: COLORS[i] }} title={`₹${v}L`}></div>
                      ))}
                    </div>
                    <div className="abi-bar-months">
                      {MONTHS.map((m, i) => (
                        <div key={i} className="abi-bar-month">{m}</div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stat Strip at bottom of hero */}
        <div className="di-strip rounded-3 overflow-hidden mt-5" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
          <div className="di-st" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="di-st-n text-white">80%</div>
            <div className="di-st-l text-white" style={{opacity: 0.7}}>Less time on data prep after BI platform launch</div>
          </div>
          <div className="di-st" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="di-st-n text-white">1 metric</div>
            <div className="di-st-l text-white" style={{opacity: 0.7}}>Definition per business term</div>
          </div>
          <div className="di-st" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="di-st-n text-white">3 wks</div>
            <div className="di-st-l text-white" style={{opacity: 0.7}}>To first live dashboard from project kickoff</div>
          </div>
          <div className="di-st" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="di-st-n text-white">Self-serve</div>
            <div className="di-st-l text-white" style={{opacity: 0.7}}>Business users build their own reports</div>
          </div>
        </div>
      </div>
    </div>
  );
}
