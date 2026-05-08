'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import DynamicFormModal from '../Common/DynamicFormModal';

/* ─── Data ───────────────────────────────────────────────────────── */
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
const scopes = [
  {
    key: 'replatform',
    badge: 'Quick win',
    title: 'Infrastructure re-platform',
    desc: 'Move to cloud and modernise your pipeline without touching the codebase.',
    cta: 'Scope this',
    ctaLink: '/contact?scope=replatform',
    featured: false,
  },
  {
    key: 'strangler',
    badge: 'Most chosen',
    title: 'Strangler fig modernisation',
    desc: 'Incrementally replace your legacy system while keeping it live throughout the migration.',
    cta: 'Scope this',
    ctaLink: '/contact?scope=strangler-fig',
    featured: true,
  },
  {
    key: 'greenfield',
    badge: 'Full transformation',
    title: 'Greenfield rebuild',
    desc: 'When the codebase is beyond rescue — a clean rebuild with all business logic preserved.',
    cta: 'Scope this',
    ctaLink: '/contact?scope=greenfield',
    featured: false,
  },
];

const features = [
  { label: 'Legacy audit & assessment',      replatform: true,       strangler: true,       greenfield: true },
  { label: 'Architecture design document',   replatform: false,      strangler: true,       greenfield: true },
  { label: 'Zero-downtime migration',        replatform: true,       strangler: true,       greenfield: false },
  { label: 'Code rewrite',                   replatform: false,      strangler: 'Partial',  greenfield: true },
  { label: 'Parallel-run strategy',          replatform: false,      strangler: true,       greenfield: true },
  { label: 'CI/CD pipeline setup',           replatform: true,       strangler: true,       greenfield: true },
  { label: 'Microservices decomposition',    replatform: false,      strangler: 'Optional', greenfield: true },
  { label: 'Database migration',             replatform: 'Optional', strangler: 'Optional', greenfield: true },
  { label: 'Team handover & documentation',  replatform: true,       strangler: true,       greenfield: true },
  { label: 'Post-launch SLA',                replatform: true,       strangler: true,       greenfield: true },
];

/* ─── Shared icons ───────────────────────────────────────────────── */
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

function Cell({ val }) {
  if (val === true)  return <CheckIcon />;
  if (val === false) return <span className="ams-dash" aria-label="Not included">—</span>;
  return <span className="ams-pill" aria-label={val}>{val}</span>;
}

/* ─── Component ──────────────────────────────────────────────────── */
export default function AMEngagementScopes() {
  const [activeKey, setActiveKey] = useState('strangler');
  const active = scopes.find(s => s.key === activeKey);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedScope, setSelectedScope] = useState(null);

  const handleCtaClick = (scope) => {
    setSelectedScope(scope);
    setIsModalOpen(true);
  };

  const getFormFields = () => {
    return defaultFormFields;
  };

  return (
    <section className="ams-section">
      <div className="container">

        {/* Header */}
        <div className="row align-items-center">
            <SectionTitle
              SubTitle="How to engage"
              Title="Three scopes — matched to your situation"
              className="text-center"
              isDarkMode={false}
              Content={" We help you choose the right starting point during the free legacy audit — before any commitment is required."}
            />
          </div>

        {/* ── DESKTOP: full comparison table ── */}
        <div className="ams-desktop mt-4">
          <div className="ams-table-wrap">
            <table className="ams-table" role="table">
              <thead>
                <tr>
                  <th className="ams-th ams-th-label" scope="col">
                    <span className="ams-col-label">Feature</span>
                  </th>
                  {scopes.map(s => (
                    <th key={s.key} className={`ams-th ams-th-scope${s.featured ? ' ams-th-featured' : ''}`} scope="col">
                      {s.featured && <div className="ams-featured-bar" aria-hidden="true" />}
                      <div className="ams-scope-inner">
                        <span className={`ams-badge${s.featured ? ' ams-badge-featured' : ''}`}>{s.badge}</span>
                        <strong className="ams-scope-title">{s.title}</strong>
                        <p className="ams-scope-desc">{s.desc}</p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <tr key={i} className="ams-row">
                    <td className="ams-td ams-td-label">{f.label}</td>
                    {scopes.map(s => (
                      <td key={s.key} className={`ams-td ams-td-cell${s.featured ? ' ams-td-featured' : ''}`}>
                        <Cell val={f[s.key]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="ams-td ams-td-label ams-td-cta-empty" />
                  {scopes.map(s => (
                    <td key={s.key} className={`ams-td ams-td-cell ams-td-cta${s.featured ? ' ams-td-featured' : ''}`}>
                      <button onClick={() => handleCtaClick(s)} className={`ams-cta${s.featured ? ' ams-cta-primary' : ' ams-cta-ghost'}`}>
                        {s.cta} <ArrowIcon />
                      </button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* ── MOBILE: tab switcher ── */}
        <div className="ams-mobile">

          {/* Scope selector tabs */}
          <div className="ams-tabs" role="tablist">
            {scopes.map(s => (
              <button
                key={s.key}
                role="tab"
                aria-selected={s.key === activeKey}
                onClick={() => setActiveKey(s.key)}
                className={`ams-tab${s.key === activeKey ? ' ams-tab-active' : ''}${s.featured && s.key === activeKey ? ' ams-tab-featured-active' : ''}`}
              >
                {s.badge}
              </button>
            ))}
          </div>

          {/* Active scope card */}
          <div className="ams-mobile-card">
            {active.featured && <div className="ams-featured-bar" />}
            <div className="ams-mobile-header">
              <strong className="ams-mobile-title">{active.title}</strong>
              <p className="ams-mobile-desc">{active.desc}</p>
            </div>

            {/* Feature rows */}
            <div className="ams-mobile-features" role="tabpanel">
              {features.map((f, i) => (
                <div key={i} className="ams-mobile-row">
                  <span className="ams-mobile-label">{f.label}</span>
                  <span className="ams-mobile-val">
                    <Cell val={f[active.key]} />
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="ams-mobile-cta">
              <button onClick={() => handleCtaClick(active)} className={`ams-cta ams-cta-full${active.featured ? ' ams-cta-primary' : ' ams-cta-ghost'}`}>
                {active.cta} <ArrowIcon />
              </button>
            </div>
          </div>

        </div>

      </div>

      <DynamicFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get in Touch"
        description="Fill out the form below and we'll get back to you shortly."
        fields={getFormFields()}
        metadata={{
          page: 'App Modernisation',
          section: 'Engagement Scopes',
          modal: 'App Modernisation Contact Form',
          engagementScope: selectedScope?.title,
          engagementScopeType: selectedScope?.ctaLink?.split('=')[1],
          source: 'app-modernisation',
          formType: `App Modernisation - ${selectedScope?.title || 'Inquiry'}`
        }}
      />

      <style>{`
        /* ─── Section ─── */
        .ams-section {
          padding: 90px 0;
          background: #f8f9fb;
        }

        /* ─── Desktop / Mobile visibility ─── */
        .ams-desktop { display: block; }
        .ams-mobile  { display: none; }

        /* ─── Table wrapper ─── */
        .ams-table-wrap {
          border-radius: 16px;
          border: 1px solid #e8eaed;
          background: #ffffff;
          box-shadow: 0 2px 16px rgba(0,0,0,0.05);
          overflow: hidden;
        }
        .ams-table {
          width: 100%;
          border-collapse: collapse;
        }

        /* Column widths */
        .ams-th-label { width: 35%; }
        .ams-th-scope { width: 21.66%; }

        /* Header cells */
        .ams-th {
          padding: 0;
          text-align: center;
          vertical-align: top;
          border-bottom: 1px solid #eeeff1;
          position: relative;
        }
        .ams-th-label {
          text-align: left;
          padding: 28px;
          border-right: 1px solid #eeeff1;
          background: #fafbfc;
          vertical-align: middle;
        }
        .ams-col-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #b0b7c3;
        }
        .ams-th-scope {
          border-right: 1px solid #eeeff1;
          background: #ffffff;
        }
        .ams-th-scope:last-child { border-right: none; }
        .ams-th-featured { background: #fffaf8; }

        .ams-featured-bar {
          height: 2px;
          background: #ff3c00;
          width: 100%;
        }
        .ams-scope-inner {
          padding: 24px 20px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        /* Badges */
        .ams-badge {
          display: inline-block;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 3px 10px;
          border-radius: 99px;
          background: #f3f4f6;
          color: #6b7280;
          border: 1px solid #e5e7eb;
        }
        .ams-badge-featured {
          background: rgba(255,60,0,0.07);
          color: #cc3000;
          border-color: rgba(255,60,0,0.18);
        }

        /* Scope title / desc */
        .ams-scope-title {
          display: block;
          font-size: 14px;
          font-weight: 700;
          color: #111827;
          line-height: 1.3;
          text-align: center;
        }
        .ams-scope-desc {
          font-size: 12px;
          color: #9ca3af;
          line-height: 1.5;
          text-align: center;
          margin: 0;
        }

        /* Feature rows */
        .ams-row:hover .ams-td-label,
        .ams-row:hover .ams-td-cell:not(.ams-td-featured) {
          background: #f9fafb;
        }
        .ams-td {
          padding: 13px 20px;
          border-bottom: 1px solid #f3f4f6;
          vertical-align: middle;
          transition: background 150ms ease;
        }
        .ams-td-label {
          font-size: 13.5px;
          color: #374151;
          font-weight: 500;
          text-align: left;
          border-right: 1px solid #eeeff1;
          background: #fafbfc;
          padding-left: 28px;
        }
        .ams-td-cell {
          text-align: center;
          border-right: 1px solid #f3f4f6;
        }
        .ams-td-cell:last-child { border-right: none; }
        .ams-td-featured { background: #fffaf8; }
        .ams-row:hover .ams-td-featured { background: #fff5f0; }

        /* Cell values */
        .ams-dash {
          color: #d1d5db;
          font-size: 16px;
          line-height: 1;
        }
        .ams-pill {
          display: inline-block;
          font-size: 10.5px;
          font-weight: 600;
          color: #92400e;
          background: #fffbeb;
          border: 1px solid #fde68a;
          padding: 2px 9px;
          border-radius: 99px;
          white-space: nowrap;
        }

        /* CTA row */
        .ams-td-cta-empty {
          background: #fafbfc;
          border-bottom: none;
          border-right: 1px solid #eeeff1;
        }
        .ams-td-cta {
          padding: 20px;
          border-bottom: none;
          border-right: 1px solid #f3f4f6;
        }
        .ams-td-cta:last-child { border-right: none; }

        /* CTAs */
        .ams-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          padding: 14px 24px;
          border-radius: 8px;
          text-decoration: none;
          cursor: pointer;
          transition: all 200ms ease;
          white-space: nowrap;
          min-height: 48px;
        }
        .ams-cta-full { width: 100%; justify-content: center; }
        .ams-cta-primary {
          background: rgb(255, 59, 0);
          color: #ffffff;
          border: 2px solid rgb(255, 59, 0);
        }
        .ams-cta-primary:hover {
          background: #a93226;
          border-color: #a93226;
          color: #ffffff;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(204,41,0,0.28);
        }
        .ams-cta-ghost {
          background: transparent;
          color: #374151;
          border: 2px solid #d1d5db;
        }
        .ams-cta-ghost:hover {
          background: #f9fafb;
          border-color: #9ca3af;
          color: #111827;
        }

        /* ════════════════════════════════════
           MOBILE — tab switcher
        ════════════════════════════════════ */
        @media (max-width: 767px) {
          .ams-section  { padding: 60px 0; }
          .ams-desktop  { display: none; }
          .ams-mobile   { display: block; }

          /* Tabs */
          .ams-tabs {
            display: flex;
            gap: 8px;
            margin-bottom: 16px;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding-bottom: 2px;
          }
          .ams-tabs::-webkit-scrollbar { display: none; }

          .ams-tab {
            flex-shrink: 0;
            font-size: 13px;
            font-weight: 600;
            padding: 10px 20px;
            border-radius: 99px;
            border: 1px solid #e5e7eb;
            background: #ffffff;
            color: #6b7280;
            cursor: pointer;
            transition: all 180ms ease;
            white-space: nowrap;
            min-height: 44px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
          .ams-tab-active {
            background: #111827;
            color: #ffffff;
            border-color: #111827;
          }
          .ams-tab-featured-active {
            background: rgb(255, 59, 0);
            border-color: rgb(255, 59, 0);
          }

          /* Mobile card */
          .ams-mobile-card {
            border-radius: 14px;
            border: 1px solid #e8eaed;
            background: #ffffff;
            box-shadow: 0 2px 12px rgba(0,0,0,0.05);
            overflow: hidden;
          }

          /* Selected scope header */
          .ams-mobile-header {
            padding: 20px 20px 18px;
            border-bottom: 1px solid #f3f4f6;
          }
          .ams-mobile-title {
            display: block;
            font-size: 15px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 4px;
            line-height: 1.3;
          }
          .ams-mobile-desc {
            font-size: 12.5px;
            color: #9ca3af;
            margin: 0;
            line-height: 1.5;
          }

          /* Feature rows */
          .ams-mobile-features { padding: 0; }
          .ams-mobile-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 12px 20px;
            border-bottom: 1px solid #f3f4f6;
          }
          .ams-mobile-row:last-child { border-bottom: none; }
          .ams-mobile-label {
            font-size: 13px;
            color: #374151;
            font-weight: 500;
            line-height: 1.3;
          }
          .ams-mobile-val {
            flex-shrink: 0;
            display: flex;
            align-items: center;
          }

          /* CTA */
          .ams-mobile-cta {
            padding: 16px 20px;
            border-top: 1px solid #f3f4f6;
          }
        }
      `}</style>
    </section>
  );
}
