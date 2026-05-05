import Link from 'next/link';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const models = [
  {
    badge: null,
    badgeStyle: null,
    label: 'Quick start',
    labelStyle: { background: '#E1F5EE', color: '#065F46' },
    headline: 'QA audit & strategy',
    desc: 'A structured assessment of your current quality posture — what\'s covered, what\'s not, and what to fix first.',
    includes: [
      'Test coverage audit & gap analysis',
      'Defect escape rate analysis',
      'Toolchain evaluation',
      'Prioritised test strategy roadmap',
    ],
    ctaText: 'Scope this engagement',
    ctaLink: '/contact?model=qa-audit',
    featured: false,
  },
  {
    badge: 'Most chosen',
    badgeStyle: null,
    label: 'Embedded',
    labelStyle: { background: '#DBEAFE', color: '#1E40AF' },
    headline: 'Embedded QA team',
    desc: 'A dedicated QA squad embedded in your engineering team — owning the full quality function sprint by sprint.',
    includes: [
      'QA engineers in your sprint ceremonies',
      'Test automation framework build-out',
      'CI/CD pipeline integration',
      'Performance & security testing',
      'Monthly quality metrics reporting',
    ],
    ctaText: 'Scope this engagement',
    ctaLink: '/contact?model=embedded-qa',
    featured: true,
  },
  {
    badge: null,
    badgeStyle: null,
    label: 'One-time',
    labelStyle: { background: '#FAEEDA', color: '#92400E' },
    headline: 'Release certification',
    desc: 'Pre-launch quality gate — comprehensive testing of a specific release before it goes to production.',
    includes: [
      'Full regression test execution',
      'Exploratory & edge case testing',
      'Performance load test',
      'Security vulnerability scan',
      'Go / no-go certification report',
    ],
    ctaText: 'Scope this engagement',
    ctaLink: '/contact?model=release-certification',
    featured: false,
  },
];

export default function QEEngagementModels() {
  return (
    <section className="cd-section cd-section-muted">
      <div className="container">

        <div className="row align-items-center mb-4">
          <div className="col-lg-12">
            <SectionTitle
              className="text-center"
              SubTitle="How to engage"
              Title="Three ways to work with us on quality"
              Content="Start with a free QA audit — we assess your current test coverage and pipeline before recommending a scope."
            />
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {models.map((m, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className={`cd-engage-card${m.featured ? ' featured' : ''}`}>
                {m.badge && <div className="cd-engage-badge">{m.badge}</div>}

                <span className="cd-engage-label" style={m.labelStyle}>
                  {m.label}
                </span>

                <h3 className="cd-engage-title">{m.headline}</h3>
                <p className="cd-engage-desc mt-2">{m.desc}</p>

                <ul className="cd-engage-list mt-4 mb-4">
                  {m.includes.map((inc) => (
                    <li key={inc}>{inc}</li>
                  ))}
                </ul>

                <Link
                  href={m.ctaLink}
                  className={`cd-engage-cta${m.featured ? ' cd-cta-filled' : ' cd-cta-outline'}`}
                  data-cta={m.label.toLowerCase().replace(' ', '-')}
                >
                  {m.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
