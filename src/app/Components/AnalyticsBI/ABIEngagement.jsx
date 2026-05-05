import Link from 'next/link';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const models = [
  {
    label: 'BI audit & quick wins',
    badge: 'Starter',
    badgeStyle: { background: '#E1F5EE', color: '#085041' },
    headline: 'Assess and act fast',
    bestFor: 'Teams needing a quick BI health check',
    desc: 'Assess your current BI state and deliver 3 high-impact dashboards fast.',
    includes: [
      'Current BI health assessment',
      '3 priority dashboard builds',
      'Semantic layer foundations',
    ],
    ctaText: 'Scope this',
    ctaLink: '/contact',
    featured: false
  },
  {
    label: 'Full BI platform build',
    badge: 'Most chosen',
    badgeStyle: { background: '#ff3c00', color: '#fff' },
    headline: 'End-to-end analytics platform',
    bestFor: 'Organizations ready to scale data culture',
    desc: 'End-to-end analytics platform with semantic layer, self-serve reporting, and team training.',
    includes: [
      'Data modelling & semantic layer',
      '10–20 executive & operational dashboards',
      'Self-serve reporting enablement',
      'Business user training programme',
    ],
    ctaText: 'Scope this',
    ctaLink: '/contact',
    featured: true
  },
  {
    label: 'Managed BI operations',
    badge: 'Ongoing',
    badgeStyle: { background: '#EEEDFE', color: '#3C3489' },
    headline: 'Continuous BI optimization',
    bestFor: 'Teams with existing BI platforms',
    desc: 'We maintain, optimise, and evolve your BI platform as your business changes.',
    includes: [
      'Monthly dashboard refresh & additions',
      'Metric definition governance',
      'User adoption tracking & training',
    ],
    ctaText: 'Scope this',
    ctaLink: '/contact',
    featured: false
  }
];

export default function ABIEngagement() {
  return (
    <section className="cd-section cd-section-muted">
      <div className="container">

        <div className="row align-items-center">
          <div className="section-title">
            <SectionTitle
              className="mb-2 text-center"
              SubTitle="How to engage"
              Title="Three BI engagement models"
              Content={"Start with a free BI audit — we'll tell you which model fits your situation before any commitment is made on either side."}
            ></SectionTitle>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {models.map((m, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className={`cd-engage-card ${m.featured ? 'featured' : ''}`}>
                {m.badge && <div className="cd-engage-badge" style={m.badgeStyle}>
                  {m.badge}
                </div>}

                <span className="cd-engage-label">{m.label}</span>
                <h3 className="cd-engage-title">{m.headline}</h3>
                <span className="cd-engage-bestfor">Best for: {m.bestFor}</span>

                <p className="cd-engage-desc">{m.desc}</p>

                <ul className="cd-engage-list">
                  {m.includes.map(inc => (
                    <li key={inc}>{inc}</li>
                  ))}
                </ul>

                <Link
                  href={m.ctaLink}
                  className={`cd-engage-cta ${m.featured ? 'cd-cta-filled' : 'cd-cta-outline'}`}
                  data-cta={m.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                >
                  {m.ctaText} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}