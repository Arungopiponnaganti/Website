'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const TABS = [
  {
    id: 'architecture',
    label: 'Architecture',
    icon: 'bi-diagram-3',
    desc: 'System structure',
    beforeIcon: 'bi-bricks',
    afterIcon: 'bi-diagram-3',
    before: {
      headline: 'One big monolith',
      points: [
        'Single codebase — one change risks the whole app',
        'Scale everything or nothing at all',
        'Full redeploy required for every change',
        'One failure takes down the entire system',
      ],
    },
    after: {
      headline: 'Independent services',
      points: [
        'Clear service boundaries — changes are isolated',
        'Scale only the services under load',
        'Deploy individual services independently',
        'Failures contained — the rest keeps running',
      ],
    },
  },
  {
    id: 'deployments',
    label: 'Deployments',
    icon: 'bi-rocket-takeoff',
    desc: 'Release cadence',
    beforeIcon: 'bi-hourglass-split',
    afterIcon: 'bi-rocket-takeoff',
    before: {
      headline: 'Monthly release events',
      points: [
        'Monthly or quarterly — each release is a major event',
        'Manual steps, manual testing, manual rollback',
        '4–8 hour deployment window with planned downtime',
        'High anxiety — something always breaks',
      ],
    },
    after: {
      headline: 'Daily, low-ceremony deploys',
      points: [
        'Deploy multiple times per day — no ceremony needed',
        'Fully automated CI/CD with regression testing',
        'Under 15 minutes, zero downtime, auto rollback',
        'Low-stakes, reversible, monitored automatically',
      ],
    },
  },
  {
    id: 'team',
    label: 'Team velocity',
    icon: 'bi-people',
    desc: 'Engineering output',
    beforeIcon: 'bi-person-dash',
    afterIcon: 'bi-people-fill',
    before: {
      headline: 'Frustrated engineers',
      points: [
        'New developers take months to become productive',
        'Afraid to refactor — nothing is tested',
        'Strong candidates reject offers — legacy stack',
        '1–2 people understand the whole system',
      ],
    },
    after: {
      headline: 'Confident, growing team',
      points: [
        'New engineers ship code in their first week',
        'Tests catch regressions — refactoring is safe',
        'Modern stack is a hiring advantage',
        'Distributed knowledge, documented architecture',
      ],
    },
  },
];

function BeforeIconDisplay({ icon }) {
  return (
    <div className="am-ba-icon-stage">
      {/* Spinning dashed ring */}
      <div className="am-ba-ring-spin" />
      {/* Static outer ring */}
      <div className="am-ba-ring-static am-ba-ring-static--before" />
      {/* Icon circle */}
      <div className="am-ba-icon-circle am-ba-icon-circle--before">
        <i className={`bi ${icon} am-ba-main-icon am-ba-main-icon--before`} />
      </div>
      {/* Warning badge */}
      <div className="am-ba-badge-pin am-ba-badge-pin--before">
        <i className="bi bi-exclamation-lg" style={{ fontSize: '10px', fontWeight: '900' }} />
      </div>
    </div>
  );
}

function AfterIconDisplay({ icon }) {
  return (
    <div className="am-ba-icon-stage">
      {/* Ping rings */}
      <div className="am-ba-ping am-ba-ping--1" />
      <div className="am-ba-ping am-ba-ping--2" />
      {/* Outer glow ring */}
      <div className="am-ba-ring-static am-ba-ring-static--after" />
      {/* Icon circle */}
      <div className="am-ba-icon-circle am-ba-icon-circle--after">
        <i className={`bi ${icon} am-ba-main-icon am-ba-main-icon--after`} />
      </div>
      {/* Check badge */}
      <div className="am-ba-badge-pin am-ba-badge-pin--after">
        <i className="bi bi-check2" style={{ fontSize: '10px', fontWeight: '900' }} />
      </div>
    </div>
  );
}

export default function AMBeforeAfter() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="am-ba-section">

      {/* Subtle background decoration */}
      <div className="am-ba-bg-blob am-ba-bg-blob--left"  aria-hidden="true" />
      <div className="am-ba-bg-blob am-ba-bg-blob--right" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        {/* ── Header ── */}
        <div className="am-ba-header">
          <SectionTitle
            SubTitle="The transformation"
            Title="What changes after modernisation"
            isDarkMode={false}
          />
          <p style={{ color: '#888', fontSize: '15px', maxWidth: '480px', margin: '0 auto', lineHeight: '1.65' }}>
            Select a dimension to see exactly what your engineers, operations team, and business will experience after modernisation.
          </p>
        </div>

        {/* ── Tab cards ── */}
        <div className="am-ba-tabrow">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`am-ba-tabcard${active === i ? ' am-ba-tabcard--active' : ''}`}
            >
              <div className={`am-ba-tabcard-icon${active === i ? ' am-ba-tabcard-icon--active' : ''}`}>
                <i className={`bi ${t.icon}`} style={{ fontSize: '18px' }} />
              </div>
              <div>
                <div className="am-ba-tabcard-label">{t.label}</div>
                <div className="am-ba-tabcard-desc">{t.desc}</div>
              </div>
            </button>
          ))}
        </div>

        {/* ── Comparison area ── */}
        <div className="am-ba-compare">

          {/* ── BEFORE panel ── */}
          <div className="am-ba-panel am-ba-panel--before">

            <div className="am-ba-panel-inner">
              {/* Animated icon */}
              <BeforeIconDisplay icon={tab.beforeIcon} />

              {/* State label */}
              <div className="am-ba-state-label am-ba-state-label--before">
                <span className="am-ba-state-dot am-ba-state-dot--before" />
                Current state
              </div>

              {/* Headline */}
              <h3 className="am-ba-headline am-ba-headline--before">{tab.before.headline}</h3>

              {/* Points */}
              <ul className="am-ba-points">
                {tab.before.points.map((pt, j) => (
                  <li key={j} className="am-ba-point am-ba-point--before" style={{ animationDelay: `${j * 60}ms` }}>
                    <span className="am-ba-point-icon am-ba-point-icon--before">
                      <i className="bi bi-x" />
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Centre ── */}
          <div className="am-ba-centre">
            <div className="am-ba-centre-line" />
            <div className="am-ba-centre-arrow">
              <i className="bi bi-arrow-right" style={{ fontSize: '16px', color: '#1a1e2d' }} />
            </div>
            <div className="am-ba-centre-line" />
          </div>

          {/* ── AFTER panel ── */}
          <div className="am-ba-panel am-ba-panel--after">
            <div className="am-ba-panel-inner">
              {/* Animated icon */}
              <AfterIconDisplay icon={tab.afterIcon} />

              {/* State label */}
              <div className="am-ba-state-label am-ba-state-label--after">
                <span className="am-ba-state-dot am-ba-state-dot--after" />
                Modernised state
              </div>

              {/* Headline */}
              <h3 className="am-ba-headline am-ba-headline--after">{tab.after.headline}</h3>

              {/* Points */}
              <ul className="am-ba-points">
                {tab.after.points.map((pt, j) => (
                  <li key={j} className="am-ba-point am-ba-point--after" style={{ animationDelay: `${j * 60}ms` }}>
                    <span className="am-ba-point-icon am-ba-point-icon--after">
                      <i className="bi bi-check2" />
                    </span>
                    <span>{pt}</span>
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
