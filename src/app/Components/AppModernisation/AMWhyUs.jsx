import React from 'react';
import SectionTitle from '../Common/SectionTitle';

/* ─── Data ───────────────────────────────────────────────────────── */
const reasons = [
  {
    title: 'We audit before we propose',
    body: 'We never recommend a modernisation pattern without first reading the codebase. Most vendors guess. We read the code — then tell you what\'s actually needed and why.',
    gradient: 'linear-gradient(135deg, #c084fc 0%, #818cf8 100%)',
    iconColor: '#ffffff',
    icon: (c) => (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
        <path d="M11 8v3h3"/>
      </svg>
    ),
  },
  {
    title: 'Zero-downtime as a default',
    body: 'Every migration plan we write includes a rollback procedure. We\'ve never had an engagement that required using it — but your stakeholders will sleep better knowing it exists.',
    gradient: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)',
    iconColor: '#ffffff',
    icon: (c) => (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    title: "We don't oversell rewrites",
    body: 'A full rewrite is the most expensive, highest-risk option. We only recommend it when every incremental path has been ruled out. Our incentive is your outcome, not invoice size.',
    gradient: 'linear-gradient(135deg, #f9a8d4 0%, #fb7185 100%)',
    iconColor: '#ffffff',
    icon: (c) => (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/>
        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
      </svg>
    ),
  },
  {
    title: 'Your team owns it when we leave',
    body: 'Every engagement ends with documentation, runbooks, and training. We\'re not building a dependency on MayuraSoft — we\'re building capability inside your organisation.',
    gradient: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
    iconColor: '#ffffff',
    icon: (c) => (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Dual expertise: legacy + modern',
    body: 'Modernisation requires speaking both languages. Our team has worked on .NET Framework, PHP, Java EE, and Oracle — and with Kubernetes, React, and serverless. We bridge the gap.',
    gradient: 'linear-gradient(135deg, #fb923c 0%, #ef4444 100%)',
    iconColor: '#ffffff',
    icon: (c) => (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 2 10 6.5v7L12 22 2 15.5v-7L12 2z"/>
        <path d="M12 22v-6.5"/>
        <path d="m22 8.5-10 7-10-7"/>
      </svg>
    ),
  },
  {
    title: 'Fixed scope, no billing surprises',
    body: 'Modernisation projects are notorious for scope creep. Every change is documented and priced before actioned. The number you approve is the number you pay.',
    gradient: 'linear-gradient(135deg, #22d3ee 0%, #38bdf8 100%)',
    iconColor: '#ffffff',
    icon: (c) => (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="9" y1="13" x2="15" y2="13"/>
        <line x1="9" y1="17" x2="12" y2="17"/>
      </svg>
    ),
  },
];

/* ─── Component ──────────────────────────────────────────────────── */
export default function AMWhyUs() {
  return (
    <section className="amw-section section-bg-muted">
      <div className="container">

        {/* Header */}
        <div className="row mb-2">
          <div className="col-lg-7">
            <SectionTitle
              SubTitle="Why MayuraSoft"
              Title="What makes us the right partner for legacy modernisation"
              className="text-left"
              isDarkMode={false}
            />
          </div>
        </div>

        {/* Card grid */}
        <div className="amw-grid">
          {reasons.map((r, i) => (
            <div key={i} className="amw-card">
              {/* Gradient icon tile */}
              <div className="amw-icon-wrap" style={{ background: r.gradient }}>
                {r.icon(r.iconColor)}
              </div>

              <h3 className="amw-title">{r.title}</h3>
              <p className="amw-body">{r.body}</p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .amw-section {
          padding: 90px 0;
        }
        .section-bg-muted {
          background-color: #f8f9fa;
        }
        /* ─── Grid ─── */
        .amw-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 16px;
        }

        /* ─── Card ─── */
        .amw-card {
          background: #ffffff;
          border: 1px solid #eef0f4;
          border-radius: 18px;
          padding: 32px 28px;
          transition: box-shadow 220ms ease, transform 220ms ease;
        }
        .amw-card:hover {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }

        /* ─── Icon tile ─── */
        .amw-icon-wrap {
          width: 60px;
          height: 60px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          flex-shrink: 0;
        }

        /* ─── Text ─── */
        .amw-title {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 10px;
          line-height: 1.35;
        }
        .amw-body {
          font-size: 13.5px;
          color: #6b7280;
          line-height: 1.7;
          margin: 0;
        }

        /* ─── Responsive ─── */
        @media (max-width: 991px) {
          .amw-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }
        @media (max-width: 575px) {
          .amw-section { padding: 60px 0; }
          .amw-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .amw-card { padding: 24px 20px; }
          .amw-icon-wrap { width: 52px; height: 52px; border-radius: 12px; margin-bottom: 18px; }
        }
      `}</style>
    </section>
  );
}
