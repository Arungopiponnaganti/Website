import Link from 'next/link';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const models = [
  {
    badge: null,
    badgeStyle: null,
    label: 'Quick win',
    labelStyle: { background: '#E1F5EE', color: '#065F46' },
    headline: 'Cloud & cost audit',
    desc: 'A focused 2-week engagement to find savings and security gaps in your existing infrastructure — with a written report and prioritised action plan.',
    includes: [
      'Infrastructure architecture review',
      'Cost analysis & rightsizing report',
      'Security posture assessment',
      'Prioritised improvement roadmap',
    ],
    ctaText: 'Scope this engagement',
    ctaLink: '/contact?model=cloud-audit',
    featured: false,
  },
  {
    badge: 'Most chosen',
    badgeStyle: null,
    label: 'Transformation',
    labelStyle: { background: '#DBEAFE', color: '#1E40AF' },
    headline: 'DevOps transformation',
    desc: 'Build a complete CI/CD pipeline, containerise your workloads, and migrate to cloud-native architecture. Typically 8–16 weeks from kickoff to production.',
    includes: [
      'CI/CD pipeline design & implementation',
      'Containerisation with Docker & Kubernetes',
      'Infrastructure as code (Terraform)',
      'Monitoring, alerting & observability setup',
      'Team training & knowledge transfer',
    ],
    ctaText: 'Scope this engagement',
    ctaLink: '/contact?model=devops-transformation',
    featured: true,
  },
  {
    badge: null,
    badgeStyle: null,
    label: 'Ongoing',
    labelStyle: { background: '#FAEEDA', color: '#92400E' },
    headline: 'Managed cloud operations',
    desc: "We run your cloud infrastructure — monitoring, incident response, patching, and optimisation — so your team doesn't have to.",
    includes: [
      '24/7 infrastructure monitoring',
      'Incident response with <15 min MTTR',
      'Monthly cost optimisation review',
      'Security patching & compliance',
    ],
    ctaText: 'Scope this engagement',
    ctaLink: '/contact?model=managed-cloud',
    featured: false,
  },
];

export default function CDEngagementModels() {
  return (
    <section className="cd-section cd-section-white">
      <div className="container">

        <div className="row align-items-center mb-4">
          <div className="col-lg-12">
            <SectionTitle
              className='text-center'
              SubTitle="How to engage"
              Title="Three ways to work with us on cloud & DevOps"
              Content="Every engagement starts with a free cloud audit — we assess your current state before recommending a scope."
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
                  {m.includes.map(inc => (
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
