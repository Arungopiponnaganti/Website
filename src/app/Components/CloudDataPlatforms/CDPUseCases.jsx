'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const USE_CASES = [
  {
    label: 'Data lake modernisation',
    icon: 'bi-database',
    desc: 'Data consolidation',
    beforeIcon: 'bi-server',
    afterIcon: 'bi-database-check',
    beforeHeadline: 'Fragmented, manual, unreliable',
    afterHeadline: 'Unified, automated, trusted',
    scenario: 'A manufacturing group with operations across four states has data in seven different systems — an on-premise ERP, two plant-level databases, a logistics platform, a finance system, and two SaaS tools.',
    context: 'Finance consolidates monthly reports by manually exporting from each system, reconciling in Excel, and emailing the result. The process takes four days and produces different totals depending on who runs it.',
    before: [
      { lbl: 'Reporting',   v: 'Four-day manual reconciliation process every month. Numbers differ depending on who runs the export.' },
      { lbl: 'Accuracy',    v: 'Revenue figures differ between finance, sales, and operations by up to 8% — every review meeting starts with a 20-minute debate.' },
      { lbl: 'Trust',       v: '"I don\'t trust this number" is said in every data-related meeting. Decisions are made on gut feel.' },
      { lbl: 'New sources', v: 'Two recent acquisitions added three more systems. The manual process is close to breaking point.' },
    ],
    after: [
      { lbl: 'Reporting',   v: 'Monthly report generated automatically. Delivered to the CFO on the first working day — zero manual work.' },
      { lbl: 'Accuracy',    v: 'Single, consistent definition for revenue across all seven source systems. One number, everywhere.' },
      { lbl: 'Trust',       v: 'Data trust score moves from 40% to 87% within six months of platform launch.' },
      { lbl: 'New sources', v: 'New source systems onboarded in days using the established ingestion framework.' },
    ],
  },
  {
    label: 'Customer 360',
    icon: 'bi-person-circle',
    desc: 'Unified customer view',
    beforeIcon: 'bi-person-dash',
    afterIcon: 'bi-people-fill',
    beforeHeadline: 'Scattered, disconnected, blind',
    afterHeadline: 'Single view, personalised, predictive',
    scenario: 'An e-commerce company has customer data spread across its order management system, CRM, email marketing platform, customer support tool, and website analytics. No single view of a customer exists anywhere.',
    context: 'The marketing team cannot personalise campaigns because they do not know a customer\'s full purchase history. The customer support team cannot see a customer\'s last interaction before answering a call.',
    before: [
      { lbl: 'Identity',  v: 'Customer data scattered across five systems with no shared key. No way to link order history to support tickets.' },
      { lbl: 'Marketing', v: 'Campaigns target email list segments — not actual purchase history or behaviour.' },
      { lbl: 'Analytics', v: 'Customer lifetime value cannot be calculated because data cannot be reliably joined.' },
      { lbl: 'AI / ML',   v: 'A churn model was built and validated in a spreadsheet. It has never influenced a retention decision.' },
    ],
    after: [
      { lbl: 'Identity',  v: 'Single canonical customer record created per individual, matched across all five systems using email, phone, and order ID.' },
      { lbl: 'Marketing', v: 'Personalised campaigns based on platform data — email conversion increased 22%.' },
      { lbl: 'Analytics', v: 'LTV, churn risk score, and segment membership calculated and available to all downstream tools.' },
      { lbl: 'AI / ML',   v: 'Churn model identified 340 high-risk customers in the first month — 60% responded to retention offers.' },
    ],
  },
  {
    label: 'Real-time operations',
    icon: 'bi-lightning-charge',
    desc: 'Live operational data',
    beforeIcon: 'bi-hourglass-split',
    afterIcon: 'bi-lightning',
    beforeHeadline: 'Stale data, reactive, slow',
    afterHeadline: 'Live data, proactive, responsive',
    scenario: 'A logistics company operates a fleet of 400 vehicles making 3,000 deliveries per day. Vehicle telemetry, delivery status updates, and customer notifications are generated continuously throughout the day.',
    context: 'Operations managers review a static dashboard that refreshes every four hours. By the time they see a delivery delay or vehicle breakdown, the window to intervene has often passed.',
    before: [
      { lbl: 'Freshness',  v: 'Dashboard refreshes every four hours. Managers act on data that is already hours out of date.' },
      { lbl: 'Alerting',   v: 'No automated alerting. Managers discover problems only when customers call to complain.' },
      { lbl: 'Response',   v: 'Average exception response time: 2.5 hours from event to action taken.' },
      { lbl: 'Visibility', v: 'No current view of vehicle location or delivery status without calling the depot directly.' },
    ],
    after: [
      { lbl: 'Freshness',  v: 'Vehicle telemetry arrives in the platform within 30 seconds. Dashboard shows real-time operational state.' },
      { lbl: 'Alerting',   v: 'Automated alerts fire when a vehicle is stationary 15+ minutes or a delivery window is at risk of being missed.' },
      { lbl: 'Response',   v: 'Exception response time reduced from 2.5 hours to 18 minutes.' },
      { lbl: 'Visibility', v: 'On-time delivery rate improved 8 percentage points in the first quarter after go-live.' },
    ],
  },
];

function BeforeIconDisplay({ icon }) {
  return (
    <div className="am-ba-icon-stage">
      <div className="am-ba-ring-spin" />
      <div className="am-ba-ring-static am-ba-ring-static--before" />
      <div className="am-ba-icon-circle am-ba-icon-circle--before">
        <i className={`bi ${icon} am-ba-main-icon am-ba-main-icon--before`} />
      </div>
      <div className="am-ba-badge-pin am-ba-badge-pin--before">
        <i className="bi bi-exclamation-lg" style={{ fontSize: '10px', fontWeight: '900' }} />
      </div>
    </div>
  );
}

function AfterIconDisplay({ icon }) {
  return (
    <div className="am-ba-icon-stage">
      <div className="am-ba-ping am-ba-ping--1" />
      <div className="am-ba-ping am-ba-ping--2" />
      <div className="am-ba-ring-static am-ba-ring-static--after" />
      <div className="am-ba-icon-circle am-ba-icon-circle--after">
        <i className={`bi ${icon} am-ba-main-icon am-ba-main-icon--after`} />
      </div>
      <div className="am-ba-badge-pin am-ba-badge-pin--after">
        <i className="bi bi-check2" style={{ fontSize: '10px', fontWeight: '900' }} />
      </div>
    </div>
  );
}

export default function CDPUseCases() {
  const [active, setActive] = useState(0);
  const d = USE_CASES[active];

  return (
    <section className="am-ba-section cd-section-muted border-top border-bottom">
      <div className="am-ba-bg-blob am-ba-bg-blob--left" aria-hidden="true" />
      <div className="am-ba-bg-blob am-ba-bg-blob--right" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        {/* Header */}
        <div className="am-ba-header">
          <SectionTitle
            SubTitle="Use cases"
            Title="Three examples — in plain terms"
            Content="These represent common scenarios, not fixed templates. Every implementation is designed around the specific data sources, systems, and reporting needs of the organisation."
            isDarkMode={false}
          />
        </div>

        {/* Tab cards */}
        <div className="am-ba-tabrow">
          {USE_CASES.map((uc, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`am-ba-tabcard${active === i ? ' am-ba-tabcard--active' : ''}`}
            >
              <div className={`am-ba-tabcard-icon${active === i ? ' am-ba-tabcard-icon--active' : ''}`}>
                <i className={`bi ${uc.icon}`} style={{ fontSize: '18px' }} />
              </div>
              <div>
                <div className="am-ba-tabcard-label">{uc.label}</div>
                <div className="am-ba-tabcard-desc">{uc.desc}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Scenario context box */}
        <div className="am-ba-scenario">
          <div className="am-ba-scenario-label">Scenario</div>
          <p className="am-ba-scenario-title">{d.scenario}</p>
          <p className="am-ba-scenario-body">{d.context}</p>
        </div>

        {/* Before / After compare */}
        <div className="am-ba-compare">

          {/* BEFORE panel */}
          <div className="am-ba-panel am-ba-panel--before">
            <div className="am-ba-panel-inner">
              <BeforeIconDisplay icon={d.beforeIcon} />
              <div className="am-ba-state-label am-ba-state-label--before">
                <span className="am-ba-state-dot am-ba-state-dot--before" />
                Current state
              </div>
              <h3 className="am-ba-headline am-ba-headline--before">{d.beforeHeadline}</h3>
              <ul className="am-ba-points">
                {d.before.map((row, i) => (
                  <li key={i} className="am-ba-point am-ba-point--before" style={{ animationDelay: `${i * 60}ms` }}>
                    <span className="am-ba-point-icon am-ba-point-icon--before">
                      <i className="bi bi-x" />
                    </span>
                    <span>
                      <strong className="am-ba-kv-label">{row.lbl}</strong>
                      {row.v}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Centre divider */}
          <div className="am-ba-centre">
            <div className="am-ba-centre-line" />
            <div className="am-ba-centre-arrow">
              <i className="bi bi-arrow-right" style={{ fontSize: '16px', color: '#1a1e2d' }} />
            </div>
            <div className="am-ba-centre-line" />
          </div>

          {/* AFTER panel */}
          <div className="am-ba-panel am-ba-panel--after">
            <div className="am-ba-panel-inner">
              <AfterIconDisplay icon={d.afterIcon} />
              <div className="am-ba-state-label am-ba-state-label--after">
                <span className="am-ba-state-dot am-ba-state-dot--after" />
                With Mayurasoft platform
              </div>
              <h3 className="am-ba-headline am-ba-headline--after">{d.afterHeadline}</h3>
              <ul className="am-ba-points">
                {d.after.map((row, i) => (
                  <li key={i} className="am-ba-point am-ba-point--after" style={{ animationDelay: `${i * 60}ms` }}>
                    <span className="am-ba-point-icon am-ba-point-icon--after">
                      <i className="bi bi-check2" />
                    </span>
                    <span>
                      <strong className="am-ba-kv-label">{row.lbl}</strong>
                      {row.v}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
