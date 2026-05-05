import React from 'react';
import SectionTitle from '../Common/SectionTitle';

/* ─── Phase data ─────────────────────────────────────────────────── */
const phases = [
  {
    num: '01', title: 'Legacy audit', duration: '1–2 weeks',
    desc: 'Deep technical read of your codebase, infrastructure, database, integrations, and security posture. You get a written report with a prioritised modernisation roadmap before any build work begins.',
    deliverables: ['Technical debt inventory', 'Architecture assessment', 'Risk register', 'Modernisation roadmap'],
    tools: ['SonarQube', 'Dependency-Track', 'OWASP ZAP'],
    accent: '#ff3c00',
  },
  {
    num: '02', title: 'Architecture design', duration: '2–3 weeks',
    desc: 'Target architecture defined, migration pattern selected, and a detailed sprint plan locked. You review and approve every design decision before development begins — no surprises.',
    deliverables: ['Target architecture diagram', 'Migration pattern decision', 'Data migration plan', 'Sprint roadmap'],
    tools: ['Miro', 'C4 model', 'ADR docs'],
    accent: '#7c3aed',
  },
  {
    num: '03', title: 'Migration sprints', duration: '8–32 weeks',
    desc: 'Two-week sprints, each moving a defined slice of functionality to the new architecture. Legacy stays live throughout. Every sprint has a rollback plan and ends with a live demo to your stakeholders.',
    deliverables: ['Migrated + tested service', 'Automated test suite', 'Updated architecture', 'Sprint demo'],
    tools: ['GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
    accent: '#0077b6',
  },
  {
    num: '04', title: 'Cutover & validation', duration: '1–2 weeks',
    desc: 'Zero-downtime production cutover. Load testing, security scanning, and a formal go-live checklist. Both systems run in parallel until the new one is fully validated at real production load.',
    deliverables: ['Go-live runbook', 'Load test report', 'Rollback procedure', 'Monitoring & alerting'],
    tools: ['k6', 'Gatling', 'Datadog', 'PagerDuty'],
    accent: '#059669',
  },
  {
    num: '05', title: 'Handover & support', duration: '4 weeks+',
    desc: 'Structured knowledge transfer to your internal team — documentation, runbooks, and paired working sessions. Continue with a managed retainer or take full ownership — your choice.',
    deliverables: ['Full system documentation', 'Operational runbooks', 'Team training', '30-day post-launch SLA'],
    tools: ['Full handover', 'Managed retainer'],
    accent: '#d97706',
  },
];

/* ─── Phase icons (Lucide-style inline SVG) ──────────────────────── */
const PhaseIcon = ({ index, color }) => {
  const icons = [
    /* 01 – search/scan */
    <svg key={0} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.3-4.3"/>
      <path d="M11 8v3h3"/>
    </svg>,
    /* 02 – layers/architecture */
    <svg key={1} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 2 10 6.5v7L12 22 2 15.5v-7L12 2z"/>
      <path d="M12 22v-6.5"/>
      <path d="m22 8.5-10 7-10-7"/>
    </svg>,
    /* 03 – git-branch / sprints */
    <svg key={2} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="3"/>
      <circle cx="6" cy="6" r="3"/>
      <path d="M6 21V9a9 9 0 0 0 9 9"/>
    </svg>,
    /* 04 – shield-check */
    <svg key={3} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>,
    /* 05 – book-open / handover */
    <svg key={4} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>,
  ];
  return icons[index];
};

/* ─── Micro icons ────────────────────────────────────────────────── */
const CheckIcon = ({ color }) => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const ToolIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

/* ─── Component ──────────────────────────────────────────────────── */
export default function AMDeliveryPhases() {
  return (
    <section
      id="process"
      className="am-phases-section"
    >
      {/* Ambient glow */}
      <div className="am-glow am-glow-top" />
      <div className="am-glow am-glow-bottom" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="row align-items-center">
          <div className="col-lg-6">
            <SectionTitle
              SubTitle="How we deliver"
              Title="A structured process — nothing gets broken, nothing gets missed"
              className="text-left"
              isDarkMode={true}
            />
          </div>
          <div className="col-lg-5 offset-lg-1">
            <p className="section-title-descr" style={{ color: '#7a8499' }}>
              Every phase has defined deliverables, a client approval gate, and a rollback plan. You always know exactly where the project stands.
            </p>
          </div>
        </div>

        {/* Phase rows */}
        <div className="am-phases-list">
          {phases.map((ph, i) => (
            <div key={i} className="am-phase-row">

              {/* Left — identifier */}
              <div className="am-phase-left">
                <div className="am-phase-icon-wrap">
                  <span className="am-phase-num-bg">{ph.num}</span>
                  <div className="am-phase-icon-inner" style={{ color: ph.accent }}>
                    <PhaseIcon index={i} color={ph.accent} />
                  </div>
                </div>
                <div className="am-phase-id">
                  <h3 className="am-phase-title" style={{ color: '#f0f4ff' }}>{ph.title}</h3>
                  <span className="am-phase-duration">
                    <ClockIcon />
                    {ph.duration}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="am-phase-v-divider" />

              {/* Right — content */}
              <div className="am-phase-right">
                <p className="am-phase-desc">{ph.desc}</p>

                <div className="am-phase-bottom">
                  {/* Deliverables */}
                  <div className="am-deliverables">
                    <span className="am-meta-label">Deliverables</span>
                    <ul className="am-deliverables-list">
                      {ph.deliverables.map((d, j) => (
                        <li key={j}>
                          <CheckIcon color={ph.accent} />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  <div className="am-tools">
                    <span className="am-meta-label">Tools</span>
                    <div className="am-tools-list">
                      {ph.tools.map((t, j) => (
                        <span key={j} className="am-tool-tag">
                          <ToolIcon />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Row accent line */}
              <div className="am-phase-accent-bar" style={{ background: ph.accent }} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .am-phases-section {
          padding: 90px 0;
          background: linear-gradient(160deg, #050a1e 80%, #0d1128 100%);
          position: relative;
          overflow: hidden;
        }

        .am-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .am-glow-top {
          top: -120px; right: -80px;
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(255,60,0,0.06) 0%, transparent 70%);
        }
        .am-glow-bottom {
          bottom: -100px; left: -80px;
          width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%);
        }

        /* ─── List ─── */
        .am-phases-list {
          display: flex;
          flex-direction: column;
        }

        /* ─── Row ─── */
        .am-phase-row {
          position: relative;
          display: grid;
          grid-template-columns: 260px 1px 1fr;
          gap: 0 40px;
          align-items: stretch;
          padding: 40px 0;
          border-top: 1px solid rgba(255,255,255,0.07);
        }
        .am-phase-row:last-child {
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        /* Accent bar — left edge highlight */
        .am-phase-accent-bar {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          opacity: 0;
          transition: opacity 250ms ease;
          border-radius: 0 2px 2px 0;
        }
        .am-phase-row:hover .am-phase-accent-bar {
          opacity: 1;
        }

        /* ─── Left column ─── */
        .am-phase-left {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          padding-left: 16px;
        }

        .am-phase-icon-wrap {
          position: relative;
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .am-phase-num-bg {
          position: absolute;
          top: -8px; left: -4px;
          font-size: 38px;
          font-weight: 800;
          color: rgba(255,255,255,0.04);
          line-height: 1;
          letter-spacing: -0.04em;
          user-select: none;
          pointer-events: none;
        }
        .am-phase-icon-inner {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .am-phase-id {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 4px;
        }
        .am-phase-title {
          font-size: 17px;
          font-weight: 700;
          margin: 0;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }
        .am-phase-duration {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-weight: 600;
          color: #556070;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }

        /* ─── Vertical divider ─── */
        .am-phase-v-divider {
          width: 1px;
          background: rgba(255,255,255,0.07);
          align-self: stretch;
        }

        /* ─── Right column ─── */
        .am-phase-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding-right: 8px;
        }
        .am-phase-desc {
          font-size: 14px;
          color: #7a8499;
          line-height: 1.75;
          margin: 0;
          max-width: 680px;
        }

        .am-phase-bottom {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 24px;
          align-items: start;
        }

        /* ─── Meta label ─── */
        .am-meta-label {
          display: block;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #3a4255;
          margin-bottom: 10px;
        }

        /* ─── Deliverables ─── */
        .am-deliverables-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px 24px;
        }
        .am-deliverables-list li {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12.5px;
          color: #9baabb;
          line-height: 1.4;
        }
        .am-deliverables-list li svg {
          flex-shrink: 0;
        }

        /* ─── Tools ─── */
        .am-tools {
          flex-shrink: 0;
        }
        .am-tools-list {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .am-tool-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-weight: 500;
          color: #556070;
          white-space: nowrap;
        }
        .am-tool-tag svg {
          opacity: 0.6;
        }

        /* ─── Responsive ─── */
        @media (max-width: 991px) {
          .am-phase-row {
            grid-template-columns: 220px 1px 1fr;
            gap: 0 28px;
          }
          .am-phase-bottom {
            grid-template-columns: 1fr;
          }
          .am-tools-list {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 8px 16px;
          }
        }

        @media (max-width: 767px) {
          .am-phase-row {
            grid-template-columns: 1fr;
            gap: 20px 0;
            padding: 32px 0 32px 16px;
          }
          .am-phase-v-divider {
            display: none;
          }
          .am-phase-left {
            padding-left: 0;
          }
          .am-deliverables-list {
            grid-template-columns: 1fr;
          }
          .am-tools-list {
            flex-direction: row;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 480px) {
          .am-phase-title { font-size: 15px; }
          .am-phase-desc { font-size: 13px; }
        }
      `}</style>
    </section>
  );
}
