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
          <div className="col-lg-5">
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
    </section>
  );
}
