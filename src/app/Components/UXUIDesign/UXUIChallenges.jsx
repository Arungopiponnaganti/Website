'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

/*
  illus[] — 3-disc composition per card, styled like the reference (circular platforms
  with 3D cylinder-shadow depth).
  role: 'main' (large, center) | 'secondary' (medium, top-left) | 'tertiary' (small, bottom-right)
  variant: 'primary' | 'gray' | 'danger' | 'warning'
*/
const challenges = [
  {
    num: '01',
    title: 'Users drop off without saying why',
    body: 'Your analytics show traffic but your conversion rate flatlines. Sessions end mid-flow and heatmaps show clicks on non-clickable elements — a classic UX diagnosis hiding in plain sight.',
    tag: 'Conversion risk',
    tagType: 'danger',
    illus: [
      { icon: 'bi-funnel-fill',         role: 'main',      variant: 'primary' },
      { icon: 'bi-person-fill',          role: 'secondary', variant: 'gray'    },
      { icon: 'bi-graph-down-arrow',     role: 'tertiary',  variant: 'danger'  },
    ],
  },
  {
    num: '02',
    title: 'Support tickets are UX complaints',
    body: '"How do I find X?" "Where does Y go?" When users raise tickets for navigation questions, the interface has failed. Every support interaction is a UX cost your team is absorbing silently.',
    tag: 'Efficiency drain',
    tagType: 'warning',
    illus: [
      { icon: 'bi-headset',              role: 'main',      variant: 'primary' },
      { icon: 'bi-chat-dots-fill',       role: 'secondary', variant: 'gray'    },
      { icon: 'bi-chat-right-dots',      role: 'tertiary',  variant: 'gray'    },
    ],
  },
  {
    num: '03',
    title: 'Every new feature slows the product down',
    body: 'No design system means every feature gets custom-built from scratch. Inconsistent components multiply technical debt and increase QA time. Onboarding new engineers takes longer with every sprint.',
    tag: 'Delivery bottleneck',
    tagType: 'warning',
    illus: [
      { icon: 'bi-layers-fill',          role: 'main',      variant: 'primary' },
      { icon: 'bi-hourglass-split',      role: 'secondary', variant: 'warning' },
      { icon: 'bi-tools',                role: 'tertiary',  variant: 'gray'    },
    ],
  },
  {
    num: '04',
    title: 'Enterprise buyers reject on UX maturity',
    body: "B2B procurement evaluates your product's interface as a proxy for engineering quality. A dated or inconsistent UI signals risk. Deals are lost before the demo ends — and you won't know why.",
    tag: 'Revenue risk',
    tagType: 'danger',
    illus: [
      { icon: 'bi-building',             role: 'main',      variant: 'primary' },
      { icon: 'bi-x-circle-fill',        role: 'secondary', variant: 'danger'  },
      { icon: 'bi-briefcase-fill',       role: 'tertiary',  variant: 'gray'    },
    ],
  },
  {
    num: '05',
    title: 'No design system — devs rebuild everything',
    body: 'Without a component library, developers implement the same button five different ways across five screens. Inconsistency erodes trust. Visual debt compounds until a full redesign becomes inevitable.',
    tag: 'Quality risk',
    tagType: 'danger',
    illus: [
      { icon: 'bi-grid-3x3-gap-fill',    role: 'main',      variant: 'primary' },
      { icon: 'bi-puzzle',               role: 'secondary', variant: 'gray'    },
      { icon: 'bi-arrow-repeat',         role: 'tertiary',  variant: 'warning' },
    ],
  },
  {
    num: '06',
    title: 'Design and dev conflict every sprint',
    body: "Vague wireframes, missing edge cases, and last-minute design changes create friction between designers and developers. Without annotated specs and a shared system, every handoff becomes a negotiation.",
    tag: 'Org risk',
    tagType: 'warning',
    illus: [
      { icon: 'bi-people-fill',          role: 'main',      variant: 'gray'    },
      { icon: 'bi-palette-fill',         role: 'secondary', variant: 'primary' },
      { icon: 'bi-code-slash',           role: 'tertiary',  variant: 'danger'  },
    ],
  },
];

function ChallengeIllustration({ nodes }) {
  return (
    <div className="uxch-stage">
      {/* Accent dots orbiting the main disc */}
      <span className="uxch-dot uxch-dot-1" />
      <span className="uxch-dot uxch-dot-2" />
      <span className="uxch-dot uxch-dot-3" />
      <span className="uxch-dot uxch-dot-4" />
      {nodes.map((n, i) => (
        <div key={i} className={`uxch-disc uxch-disc--${n.role} uxch-disc--${n.variant}`}>
          <i className={`bi ${n.icon}`} />
        </div>
      ))}
    </div>
  );
}

export default function UXUIChallenges() {
  return (
    <section className="uxch-section">
      <div className="container">

        {/* ── Section header ── */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <SectionTitle
              SubTitle="Is this you?"
              Title="Six UX problems costing you customers every day"
              className="text-left"
              isDarkMode={false}
            />
          </div>
          <div className="col-lg-5 offset-lg-1">
            <p className="section-descr">
              Three or more of these describe your product? You&apos;re already leaving measurable revenue on the table — and it compounds every quarter without a design investment.
            </p>
          </div>
        </div>

        {/* ── Challenge grid ── */}
        <div className="row gy-4 gx-0 mb-4">
          {challenges.map((s, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="uxch-card h-100">

                {/* 3-disc illustration */}
                <div className="uxch-icon-area d-flex align-items-center justify-content-center">
                  <ChallengeIllustration nodes={s.illus} />
                </div>

                {/* Text content */}
                <div className="uxch-content">
                  <span className="uxch-num">{s.num}</span>
                  <h3 className="uxch-title">{s.title}</h3>
                  <p className="uxch-body">{s.body}</p>
                  <span className={`uxch-tag uxch-tag--${s.tagType}`}>
                    <span className="uxch-tag-dot" />
                    {s.tag}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom callout bar ── */}
        <div className="uxch-callout d-flex align-items-center justify-content-between gap-3 flex-wrap">
          <div className="d-flex align-items-center gap-3">
            <div className="uxch-callout-icon d-flex align-items-center justify-content-center flex-shrink-0">
              <i className="bi bi-lightning-charge-fill uxch-callout-icon-i" />
            </div>
            <p className="mb-0 uxch-callout-text">
              <strong className="uxch-callout-strong">Recognise three or more?</strong>
              {' '}— A free design audit gives you a concrete, prioritised action plan within 48 hours. No sales call required.
            </p>
          </div>
          <a href="/contact?service=ux-ui-design" className="uxch-callout-btn flex-shrink-0">
            Book free audit &rarr;
          </a>
        </div>

      </div>

      <style>{`
        /* ── Section ──────────────────────────────────────── */
        .uxch-section {
          background-color: #f0f2f7;
          padding: 90px 0;
        }

        /* ── Individual card ──────────────────────────────── */
        .uxch-card {
          border: 1.5px solid #e2e5ec;
          border-radius: 0;
          overflow: hidden;
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
          /* collapse shared borders so adjacent cards share one 1.5px line */
          margin-right: -1.5px;
        }
        .uxch-card:hover {
          box-shadow: 0 0 0 1.5px rgba(67, 97, 238, 0.35) inset;
          z-index: 1;
        }

        /* Rounded corners only on the outer edges of each row */
        /* lg — 3 col: col 1 left corners, col 3 right corners */
        @media (min-width: 992px) {
          .col-lg-4:nth-child(3n+1) .uxch-card { border-radius: 14px 0 0 14px; }
          .col-lg-4:nth-child(3n)   .uxch-card { border-radius: 0 14px 14px 0; margin-right: 0; }
        }
        /* md — 2 col */
        @media (min-width: 768px) and (max-width: 991px) {
          .col-md-6:nth-child(2n+1) .uxch-card { border-radius: 14px 0 0 14px; }
          .col-md-6:nth-child(2n)   .uxch-card { border-radius: 0 14px 14px 0; margin-right: 0; }
        }
        /* xs — 1 col */
        @media (max-width: 767px) {
          .uxch-card { border-radius: 14px; margin-right: 0; }
        }

        /* ── Illustration area — dot-grid background ──────── */
        .uxch-icon-area {
          background-color: #f8f9fb;
          background-image: radial-gradient(circle, rgba(0, 0, 0, 0.07) 1px, transparent 1px);
          background-size: 18px 18px;
          border-bottom: 1.5px solid #e2e5ec;
          padding: 30px 24px;
          min-height: 210px;
        }

        /* ── Stage — relative canvas for the 3 discs ─────── */
        .uxch-stage {
          position: relative;
          width: 224px;
          height: 152px;
        }

        /* ── Base disc ────────────────────────────────────── */
        .uxch-disc {
          position: absolute;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translate(-50%, -50%);
          transition: box-shadow 0.25s ease, background 0.25s ease;
        }

        /* Role = size + position + z-index */
        .uxch-disc--main {
          width: 96px;
          height: 96px;
          top: 60%;
          left: 49%;
          z-index: 2;
        }
        .uxch-disc--main i      { font-size: 30px; }

        .uxch-disc--secondary {
          width: 66px;
          height: 66px;
          top: 27%;
          left: 25%;
          z-index: 3;
        }
        .uxch-disc--secondary i { font-size: 22px; }

        .uxch-disc--tertiary {
          width: 50px;
          height: 50px;
          top: 72%;
          left: 81%;
          z-index: 1;
        }
        .uxch-disc--tertiary i  { font-size: 17px; }

        /* ── Disc color variants (flat top + cylinder shadow) */
        .uxch-disc--primary {
          background: linear-gradient(155deg, #eef0fd 0%, #dde3fb 100%);
          border: 1px solid rgba(67, 97, 238, 0.20);
          box-shadow: 0 8px 0 rgba(67, 97, 238, 0.20), 0 12px 24px rgba(67, 97, 238, 0.12);
        }
        .uxch-disc--primary i { color: #4361EE; }
        .uxch-card:hover .uxch-disc--primary {
          background: linear-gradient(155deg, #e6eafc 0%, #d4daf9 100%);
          box-shadow: 0 9px 0 rgba(67, 97, 238, 0.24), 0 14px 28px rgba(67, 97, 238, 0.15);
        }

        .uxch-disc--gray {
          background: linear-gradient(155deg, #f5f5f5 0%, #ebebeb 100%);
          border: 1px solid #e0e0e0;
          box-shadow: 0 8px 0 #d4d4d4, 0 12px 24px rgba(0, 0, 0, 0.08);
        }
        .uxch-disc--gray i { color: #8a8fa0; }

        .uxch-disc--danger {
          background: linear-gradient(155deg, #fff2f2 0%, #fde8e8 100%);
          border: 1px solid rgba(192, 57, 43, 0.18);
          box-shadow: 0 8px 0 rgba(192, 57, 43, 0.16), 0 12px 24px rgba(192, 57, 43, 0.08);
        }
        .uxch-disc--danger i { color: #c0392b; }

        .uxch-disc--warning {
          background: linear-gradient(155deg, #fffbee 0%, #fff3cf 100%);
          border: 1px solid rgba(176, 122, 0, 0.18);
          box-shadow: 0 8px 0 rgba(176, 122, 0, 0.14), 0 12px 24px rgba(176, 122, 0, 0.08);
        }
        .uxch-disc--warning i { color: #b07a00; }

        /* ── Accent dots orbiting the main disc ───────────── */
        .uxch-dot {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: rgba(67, 97, 238, 0.32);
          transform: translate(-50%, -50%);
        }
        .uxch-dot-1 { top: 33%; left: 67%; }
        .uxch-dot-2 { top: 60%; left: 77%; }
        .uxch-dot-3 { top: 80%; left: 52%; }
        .uxch-dot-4 { top: 43%; left: 37%; }

        /* ── Text content ─────────────────────────────────── */
        .uxch-content {
          padding: 24px 26px 28px;
          display: flex;
          flex-direction: column;
        }
        .uxch-num {
          display: inline-block;
          width: fit-content;
          font-size: 11px;
          font-weight: 700;
          font-family: var(--heading-font);
          color: #4361EE;
          background-color: rgba(67, 97, 238, 0.08);
          border-radius: 6px;
          padding: 3px 9px;
          margin-bottom: 14px;
          letter-spacing: 0.06em;
        }
        .uxch-title {
          font-size: 15px;
          font-weight: 700;
          font-family: var(--heading-font);
          color: #1a1e2d;
          line-height: 1.4;
          margin-bottom: 10px;
        }
        .uxch-body {
          font-size: 13.5px;
          color: #6c757d;
          line-height: 1.7;
          margin-bottom: 16px;
          flex: 1;
        }

        /* ── Tag ──────────────────────────────────────────── */
        .uxch-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          font-family: var(--heading-font);
          letter-spacing: 0.04em;
          padding: 4px 10px;
          border-radius: 99px;
          width: fit-content;
        }
        .uxch-tag-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
        .uxch-tag--danger  { color: #c0392b; background-color: #fff0f0; border: 1px solid #ffd0d0; }
        .uxch-tag--danger  .uxch-tag-dot { background-color: #c0392b; }
        .uxch-tag--warning { color: #8a5f00; background-color: #fff8ec; border: 1px solid #ffe0a0; }
        .uxch-tag--warning .uxch-tag-dot { background-color: #b07a00; }

        /* ── Callout bar ──────────────────────────────────── */
        .uxch-callout {
          background-color: #ffffff;
          border: 1.5px solid #e2e5ec;
          border-radius: 12px;
          padding: 20px 24px;
        }
        .uxch-callout-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(67, 97, 238, 0.10);
        }
        .uxch-callout-icon-i { font-size: 15px; color: #4361EE; }
        .uxch-callout-text   { font-size: 14px; color: #6c757d; line-height: 1.55; }
        .uxch-callout-strong { color: #1a1e2d; }
        .uxch-callout-btn {
          display: inline-block;
          padding: 10px 22px;
          border-radius: 8px;
          background-color: #1a1e2d;
          color: #ffffff;
          font-size: 13px;
          font-weight: 700;
          font-family: var(--heading-font);
          text-decoration: none;
          white-space: nowrap;
          transition: background-color 0.2s ease;
        }
        .uxch-callout-btn:hover { background-color: #4361EE; color: #ffffff; }

        /* ── Responsive ───────────────────────────────────── */
        @media (max-width: 767px) {
          .uxch-section   { padding: 60px 0; }
          .uxch-icon-area { min-height: 180px; padding: 24px 20px; }
          .uxch-stage     { width: 200px; height: 136px; }
          .uxch-disc--main      { width: 86px; height: 86px; }
          .uxch-disc--main i    { font-size: 26px; }
          .uxch-disc--secondary { width: 58px; height: 58px; }
          .uxch-disc--secondary i { font-size: 20px; }
          .uxch-disc--tertiary  { width: 44px; height: 44px; }
          .uxch-disc--tertiary i  { font-size: 15px; }
          .uxch-content   { padding: 20px 20px 24px; }
          .uxch-callout   { flex-direction: column; align-items: flex-start; gap: 14px; }
        }
      `}</style>
    </section>
  );
}
