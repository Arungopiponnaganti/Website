'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const SVCS = [
  {
    id: 'functional',
    icon: 'bi-check-square-fill',
    accentColor: '#0F6E56',
    badge: null, badgeBg: null, badgeColor: null,
    title: 'Functional testing',
    sub: 'End-to-end validation of features and user journeys',
    deliverables: [
      'User story acceptance criteria verification',
      'Happy path and edge case coverage',
      'Cross-browser and cross-device testing',
      'Regression test suite execution',
    ],
    tools: ['Playwright', 'Selenium', 'Cypress', 'TestRail'],
    paired: 'Every engagement — functional testing is the foundation of any QA programme. It\'s where user journeys are validated and acceptance criteria are confirmed.',
  },
  {
    id: 'automation',
    icon: 'bi-cpu-fill',
    accentColor: '#534AB7',
    badge: 'Core', badgeBg: '#EEEDFE', badgeColor: '#3C3489',
    title: 'Test automation',
    sub: 'Automated regression suites that run on every commit',
    deliverables: [
      'Test automation framework design & build',
      'Page object model architecture',
      'CI/CD pipeline integration',
      'Parallel test execution & reporting',
    ],
    tools: ['Playwright', 'pytest', 'Jest', 'GitHub Actions'],
    paired: 'CI/CD pipeline (Cloud & DevOps). Automation without a pipeline is a script you run manually. We design automation to run automatically on every commit.',
  },
  {
    id: 'performance',
    icon: 'bi-bar-chart-fill',
    accentColor: '#854F0B',
    badge: null, badgeBg: null, badgeColor: null,
    title: 'Performance testing',
    sub: 'Load, stress, and spike testing before production',
    deliverables: [
      'Performance baseline establishment',
      'Load & stress test scenario design',
      'Bottleneck identification & reporting',
      'Scalability recommendations',
    ],
    tools: ['k6', 'Gatling', 'JMeter', 'Datadog'],
    paired: 'Product Engineering and App Modernisation. Performance testing should happen before a major release or re-architecture — not after your users start complaining.',
  },
  {
    id: 'api',
    icon: 'bi-plug-fill',
    accentColor: '#185FA5',
    badge: null, badgeBg: null, badgeColor: null,
    title: 'API testing',
    sub: 'Contract and integration testing for every API endpoint',
    deliverables: [
      'API contract definition & validation',
      'Integration and end-to-end API flows',
      'Schema validation & versioning checks',
      'Mock service setup for isolation',
    ],
    tools: ['Postman', 'REST Assured', 'Pact', 'WireMock'],
    paired: 'Functional testing and security testing. APIs are the backbone of modern software — their contracts need to be as well-tested as the UI above them.',
  },
  {
    id: 'security',
    icon: 'bi-shield-lock-fill',
    accentColor: '#993C1D',
    badge: null, badgeBg: null, badgeColor: null,
    title: 'Security testing',
    sub: 'OWASP vulnerability scanning and penetration testing',
    deliverables: [
      'OWASP Top 10 vulnerability assessment',
      'Automated SAST & DAST scanning',
      'Dependency vulnerability audit',
      'Security test cases in CI pipeline',
    ],
    tools: ['OWASP ZAP', 'Snyk', 'Burp Suite', 'Trivy'],
    paired: 'Every product handling user data. Security testing is not optional — it\'s what stands between your users\' data and a breach that ends careers.',
  },
  {
    id: 'mobile',
    icon: 'bi-phone-fill',
    accentColor: '#27500A',
    badge: null, badgeBg: null, badgeColor: null,
    title: 'Mobile app testing',
    sub: 'iOS, Android, and cross-platform testing',
    deliverables: [
      'Functional testing on real devices',
      'Network condition simulation',
      'OS version compatibility matrix',
      'App store submission readiness review',
    ],
    tools: ['Appium', 'BrowserStack', 'XCTest', 'Espresso'],
    paired: 'Mobile development engagements. Real device testing on iOS and Android with simulated network conditions catches bugs that emulators miss every time.',
  },
];

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function QEServices() {
  const [active, setActive] = useState(0);
  const s = SVCS[active];

  return (
    <section style={{ padding: '90px 0', background: `linear-gradient(90deg, rgba(255,255,255,1) 35%, ${hexToRgba(s.accentColor, 0.12)} 100%)`, transition: 'background 0.4s ease' }}>
      <div className="container">

        {/* Section header */}
        <div className="row align-items-center">
          <div className="col-lg-6">
            <SectionTitle
              SubTitle="Testing capabilities"
              Title="Six quality engineering disciplines"
              className="text-left"
              isDarkMode={false}
            />
          </div>
          <div className="col-lg-5 offset-lg-1">
            <p className="section-descr">
              Select a discipline to see what&apos;s included, what we deliver, and which tools we use.
            </p>
          </div>
        </div>

        {/* Main layout */}
        <div className="qes-layout">

          {/* Sidebar nav */}
          <nav className="qes-nav">
            <div className="qes-nav-label">Disciplines</div>
            {SVCS.map((svc, i) => (
              <button
                key={svc.id}
                onClick={() => setActive(i)}
                className={`qes-nav-item${active === i ? ' qes-nav-item--active' : ''}`}
                style={active === i ? { color: svc.accentColor, background: `${svc.accentColor}12` } : {}}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className={`bi ${svc.icon}`} style={{ fontSize: '18px', flexShrink: 0 }} />
                  {svc.title}
                </span>
                {svc.badge && active !== i && (
                  <span className="qes-nav-dot" style={{ background: svc.badgeColor }} />
                )}
              </button>
            ))}
          </nav>

          {/* Content area */}
          <div className="qes-content">

            {/* Title + meta */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '12px' }}>
                {s.badge && (
                  <span style={{
                    fontSize: '11px', fontWeight: '700', padding: '4px 13px',
                    borderRadius: '99px', background: s.badgeBg, color: s.badgeColor,
                  }}>
                    {s.badge}
                  </span>
                )}
              </div>
              <h3 style={{ fontSize: '26px', fontWeight: '800', color: '#1a1e2d', margin: '0 0 8px', lineHeight: '1.2' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '15px', color: '#888', margin: 0, lineHeight: '1.55' }}>{s.sub}</p>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: '#ebebeb', marginBottom: '32px' }} />

            {/* Two columns */}
            <div className="qes-cols">

              <div>
                <div className="qes-col-label">
                  <i className="bi bi-check2-all" style={{ color: s.accentColor, fontSize: '14px' }} />
                  Deliverables
                </div>
                <ul className="qes-list">
                  {s.deliverables.map((item, j) => (
                    <li key={j} className="qes-list-item">
                      <span className="qes-dot" style={{ background: s.accentColor }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="qes-col-label">
                  <i className="bi bi-tools" style={{ color: s.accentColor, fontSize: '14px' }} />
                  Tools & frameworks
                </div>
                <ol className="qes-steps">
                  {s.tools.map((tool, j) => (
                    <li key={j} className="qes-step">
                      <span
                        className="qes-step-num"
                        style={{ background: `${s.accentColor}15`, color: s.accentColor }}
                      >
                        {String(j + 1).padStart(2, '0')}
                      </span>
                      <span>{tool}</span>
                    </li>
                  ))}
                </ol>
              </div>

            </div>

            {/* Insight note */}
            <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #ebebeb' }}>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#666', lineHeight: '1.75' }}>
                <span style={{ fontWeight: '700', color: s.accentColor }}>Best paired with — </span>
                {s.paired}
              </p>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .qes-layout {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 0 40px;
          align-items: start;
        }

        .qes-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
          position: sticky;
          top: 100px;
          background: #fff;
          border-radius: 14px;
          padding: 14px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          height: 100%;
        }
        .qes-nav-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          color: #bbb;
          padding: 8px 12px 6px;
        }
        .qes-nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          border-radius: 9px;
          border: none;
          background: transparent;
          font-family: inherit;
          font-size: 13.5px;
          font-weight: 500;
          color: #6b7280;
          text-align: left;
          cursor: pointer;
          transition: background 0.18s, color 0.18s;
          line-height: 1.35;
          width: 100%;
        }
        .qes-nav-item:hover:not(.qes-nav-item--active) {
          background: #f5f5f5;
          color: #1a1e2d;
        }

        // .qes-nav-dot {
        //   width: 6px;
        //   height: 6px;
        //   border-radius: 50%;
        //   flex-shrink: 0;
        // }

        .qes-content {
          padding-left: 48px;
          border-left: 1px solid #ebebeb;
          min-height: 400px;
        }

        .qes-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 48px;
        }
        .qes-col-label {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          color: #aaa;
          margin-bottom: 18px;
          padding-bottom: 12px;
          border-bottom: 1px solid #f0f0f0;
        }

        .qes-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 13px; }
        .qes-list-item { display: flex; align-items: flex-start; gap: 11px; font-size: 14px; color: #444; line-height: 1.55; }
        .qes-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; margin-top: 7px; }

        .qes-steps { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 13px; }
        .qes-step { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: #444; line-height: 1.55; }
        .qes-step-num { font-size: 10px; font-weight: 800; padding: 3px 7px; border-radius: 6px; flex-shrink: 0; margin-top: 2px; }

        @media (max-width: 991px) {
          .qes-layout { grid-template-columns: 1fr; gap: 0; }
          .qes-nav {
            position: static;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 28px;
            padding: 10px;
            border-radius: 12px;
          }
          .qes-nav-label { display: none; }
          .qes-nav-item { font-size: 13px; padding: 8px 12px; width: auto; }
          .qes-content { padding-left: 0; border-left: none; }
        }
        @media (max-width: 767px) {
          .qes-cols { grid-template-columns: 1fr; gap: 28px 0; }
        }
        @media (max-width: 480px) {
          .qes-nav-item { font-size: 12px; padding: 7px 12px; }
        }
      `}</style>
    </section>
  );
}
