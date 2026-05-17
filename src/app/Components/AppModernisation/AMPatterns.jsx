'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const patterns = [
  {
    id: 'strangler',
    risk: 'Low risk', riskColor: '#085041', riskBg: '#E1F5EE',
    title: 'Strangler fig migration',
    sub: 'Incrementally replace legacy — no big-bang rewrite',
    icon: 'bi-arrow-left-right', timeline: '6–18 months',
    accentColor: '#028a4a',
    bestFor: [
      'Large monoliths that can\'t be taken offline',
      'High-traffic apps where zero downtime is non-negotiable',
      'Teams that need to keep shipping features during migration',
    ],
    how: [
      'New services built alongside the existing legacy system',
      'Traffic routed incrementally via API gateway',
      'Legacy components retired one by one as new ones stabilise',
    ],
    note: 'Our most recommended approach for production systems. Continuous delivery throughout — your users never notice the migration happening.',
    recommended: true,
  },
  {
    id: 'replatform',
    risk: 'Quick win', riskColor: '#0C447C', riskBg: '#E6F1FB',
    title: 'Re-platforming',
    sub: 'Move to cloud with targeted optimisations',
    icon: 'bi-cloud-arrow-up-fill', timeline: '2–4 months',
    accentColor: '#0C447C',
    bestFor: [
      'Apps that run well but sit on expensive on-premise infra',
      'Teams wanting quick infrastructure cost savings',
      'Applications with clean architecture but outdated runtime',
    ],
    how: [
      'Move to managed cloud services (RDS, ECS, S3)',
      'Containerise workloads with Docker + Kubernetes',
      'Introduce CI/CD pipeline and automated testing',
    ],
    note: 'Immediate infrastructure cost reduction of 30–60% without a full code rewrite. Fastest path to cloud.',
    recommended: false,
  },
  {
    id: 'microservices',
    risk: 'Moderate', riskColor: '#633806', riskBg: '#FAEEDA',
    title: 'Microservices decomposition',
    sub: 'Break the monolith into independently deployable services',
    icon: 'bi-diagram-3-fill', timeline: '4–12 months',
    accentColor: '#d17a00',
    bestFor: [
      'Monoliths where different modules need to scale independently',
      'Teams moving to independent deployment cycles per service',
      'Products planning significant feature growth',
    ],
    how: [
      'Domain-driven design workshop to identify service boundaries',
      'API contract design and event-driven architecture',
      'Phased service extraction with feature-flag routing',
    ],
    note: 'Only recommended when scaling pain is severe — microservices add operational complexity that must be justified.',
    recommended: false,
  },
  {
    id: 'api',
    risk: 'Low effort', riskColor: '#27500A', riskBg: '#EAF3DE',
    title: 'API modernisation',
    sub: 'Wrap legacy with modern APIs without touching the core',
    icon: 'bi-plug-fill', timeline: '4–8 weeks',
    accentColor: '#3a7d0a',
    bestFor: [
      'Stable legacy systems that need to integrate with modern tools',
      'Companies building a new frontend over an old backend',
      'Quick modernisation before a full rewrite is funded',
    ],
    how: [
      'REST/GraphQL API layer built over the legacy system',
      'Authentication modernisation (OAuth 2.0, SSO)',
      'Integration middleware for third-party connections',
    ],
    note: 'Fastest path to unlocking a legacy system for modern integrations — often the first step in a larger migration.',
    recommended: false,
  },
  {
    id: 'database',
    risk: 'Database', riskColor: '#3C3489', riskBg: '#EEEDFE',
    title: 'Database modernisation',
    sub: 'Move off Oracle, SQL Server, or ageing schemas',
    icon: 'bi-database-fill', timeline: '4–10 weeks',
    accentColor: '#3C3489',
    bestFor: [
      'Apps locked into expensive licensed databases',
      'Schemas that haven\'t evolved in 10+ years',
      'Performance bottlenecks at the data layer',
    ],
    how: [
      'Schema analysis, data profiling and cleanup',
      'Migration to PostgreSQL, Aurora, or managed cloud DB',
      'Zero-data-loss cutover with full rollback plan',
    ],
    note: 'Migrating from Oracle to PostgreSQL alone can eliminate 60–80% of database licensing costs. Often combined with re-platforming.',
    recommended: false,
  },
  {
    id: 'greenfield',
    risk: 'High risk', riskColor: '#712B13', riskBg: '#FAECE7',
    title: 'Greenfield rebuild',
    sub: 'When the existing codebase is genuinely beyond salvage',
    icon: 'bi-building-fill', timeline: '9–18 months',
    accentColor: '#c0392b',
    bestFor: [
      'Codebases with zero documentation and no original developers',
      'Technical debt that has made incremental change impossible',
      'Business model has fundamentally changed — old app is wrong-shaped',
    ],
    how: [
      'Extensive reverse-engineering of current business logic',
      'Parallel-run strategy — old and new systems run simultaneously',
      'Data migration with validation checkpoints at every stage',
    ],
    note: 'We only recommend this when every other pattern has been ruled out. A full rewrite that isn\'t justified will cost more and deliver less.',
    recommended: false,
  },
];

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function AMPatterns() {
  const [active, setActive] = useState(0);
  const p = patterns[active];

  return (
    <section style={{ padding: '90px 0', background: `linear-gradient(90deg, rgba(255,255,255,1) 35%, ${hexToRgba(p.accentColor, 0.12)} 100%)`, transition: 'background 0.4s ease' }}>
      <div className="container">

        {/* Section header */}
        <div className="row align-items-center">
          <div className="col-lg-6">
            <SectionTitle
              SubTitle="Our approaches"
              Title="Six proven patterns — matched to your situation"
              className="text-left"
              isDarkMode={false}
            />
          </div>
          <div className="col-lg-5 offset-lg-1">
            <p className="section-descr">
              Not every legacy app needs a full rewrite. Select a pattern to understand when it applies and exactly what it involves.
            </p>
          </div>
        </div>

        {/* ── Main layout ── */}
        <div className="am-pat-layout">

          {/* Sidebar nav */}
          <nav className="am-pat-nav">
            <div className="am-pat-nav-label">Patterns</div>
            {patterns.map((pat, i) => (
              <button
                key={pat.id}
                onClick={() => setActive(i)}
                className={`am-pat-nav-item${active === i ? ' am-pat-nav-item--active' : ''}`}
                style={active === i ? { color: pat.accentColor, background: `${pat.accentColor}12` } : {}}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className={`bi ${pat.icon}`} style={{ fontSize: '18px', flexShrink: 0 }} />
                  {pat.title}
                </span>
                {pat.recommended && active !== i && (
                  <span className="am-pat-nav-star">★</span>
                )}
              </button>
            ))}
          </nav>

          {/* Content area */}
          <div className="am-pat-content">

            {/* Title + meta */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '12px' }}>
                <span
                  style={{
                    fontSize: '11px', fontWeight: '700', padding: '4px 13px',
                    borderRadius: '99px', background: p.riskBg, color: p.riskColor,
                  }}
                >
                  {p.risk}
                </span>
                <span style={{ fontSize: '12px', color: '#aaa', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <i className="bi bi-clock" style={{ fontSize: '11px' }} />
                  {p.timeline}
                </span>
                {p.recommended && (
                  <span style={{ fontSize: '11px', fontWeight: '700', padding: '4px 13px', borderRadius: '99px', background: '#fff8ec', color: '#b07a00', border: '1px solid #ffe0a0' }}>
                    Most recommended
                  </span>
                )}
              </div>
              <h3 style={{ fontSize: '26px', fontWeight: '800', color: '#1a1e2d', margin: '0 0 8px', lineHeight: '1.2' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: '15px', color: '#888', margin: 0, lineHeight: '1.55' }}>{p.sub}</p>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: '#ebebeb', marginBottom: '32px' }} />

            {/* Two columns */}
            <div className="am-pat-cols">

              <div>
                <div className="am-pat-col-label">
                  <i className="bi bi-check2-all" style={{ color: p.accentColor, fontSize: '14px' }} />
                  Best for
                </div>
                <ul className="am-pat-list">
                  {p.bestFor.map((item, j) => (
                    <li key={j} className="am-pat-list-item">
                      <span className="am-pat-dot" style={{ background: p.accentColor }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="am-pat-col-label">
                  <i className="bi bi-list-ol" style={{ color: p.accentColor, fontSize: '14px' }} />
                  How it works
                </div>
                <ol className="am-pat-steps">
                  {p.how.map((item, j) => (
                    <li key={j} className="am-pat-step">
                      <span
                        className="am-pat-step-num"
                        style={{ background: `${p.accentColor}15`, color: p.accentColor }}
                      >
                        {String(j + 1).padStart(2, '0')}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

            </div>

            {/* Insight note */}
            <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #ebebeb' }}>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#666', lineHeight: '1.75' }}>
                <span style={{ fontWeight: '700', color: p.accentColor }}>Insight — </span>
                {p.note}
              </p>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        /* Layout */
        .am-pat-layout {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 0 20px;
          align-items: start;
        }

        /* Sidebar nav */
        .am-pat-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
          position: sticky;
          top: 100px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .am-pat-nav-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          color: #bbb;
          padding: 8px 12px 6px;
        }
        .am-pat-nav-item {
          padding: 12px 14px;
          border-radius: 9px;
          border: none;
          background: transparent;
          font-family: inherit;
          font-size: 13.5px;
          font-weight: 500;
          color: #6b7280;
          text-align: left;
          justify-content: flex-start;
          cursor: pointer;
          transition: background 0.18s, color 0.18s;
          line-height: 1.35;
          width: 100%;
        }
        .am-pat-nav-item:hover:not(.am-pat-nav-item--active) {
          background: #f5f5f5;
          color: #1a1e2d;
        }
        .am-pat-nav-item--active {
          font-weight: 600;
        }
        .am-pat-nav-star {
          font-size: 10px;
          color: #b07a00;
          flex-shrink: 0;
        }

        /* Content */
        .am-pat-content {
          padding-left: 48px;
          border-left: 1px solid #ebebeb;
          min-height: 400px;
        }

        /* Two-col */
        .am-pat-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 48px;
        }
        .am-pat-col-label {
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

        /* Lists */
        .am-pat-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 13px; }
        .am-pat-list-item { display: flex; align-items: flex-start; gap: 11px; font-size: 14px; color: #444; line-height: 1.55; }
        .am-pat-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; margin-top: 7px; }

        .am-pat-steps { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 13px; }
        .am-pat-step { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: #444; line-height: 1.55; }
        .am-pat-step-num { font-size: 10px; font-weight: 800; padding: 3px 7px; border-radius: 6px; flex-shrink: 0; margin-top: 2px; }

        /* Responsive */
        @media (max-width: 991px) {
          .am-pat-layout { grid-template-columns: 1fr; gap: 0; }
          .am-pat-nav {
            position: static;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 28px;
            padding: 10px;
            border-radius: 12px;
          }
          .am-pat-nav-label { display: none; }
          .am-pat-nav-item { font-size: 13px; padding: 8px 12px; width: auto; }
          .am-pat-content { padding-left: 0; border-left: none; }
        }
        @media (max-width: 767px) {
          .am-pat-cols { grid-template-columns: 1fr; gap: 28px 0; }
        }
        @media (max-width: 480px) {
          .am-pat-nav-item { font-size: 12px; padding: 7px 12px; }
        }
      `}</style>
    </section>
  );
}
