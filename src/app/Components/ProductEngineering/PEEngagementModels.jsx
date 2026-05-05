import Link from 'next/link';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const models = [
  {
    label: 'Idea stage',
    badge: null,
    headline: 'Discovery & MVP',
    desc: 'You have an idea or early spec. We validate, architect, and ship a working MVP fast.',
    includes: [
      'Product discovery workshop',
      'Wireframes & prototype',
      'Architecture scoping',
      '6–10 week MVP delivery',
      'Go-to-market readiness review'
    ],
    ctaText: 'Start with discovery',
    ctaLink: '/contact?model=discovery',
    featured: false
  },
  {
    label: 'Most chosen',
    badge: 'Most chosen',
    headline: 'Scale-up engineering',
    desc: 'You have a product. We extend the team, add features, and harden the architecture for growth.',
    includes: [
      'Dedicated engineering squad',
      'Sprint-based feature delivery',
      'Performance & security hardening',
      'API & integration expansion',
      'Ongoing QA and monitoring'
    ],
    ctaText: 'Scale your team',
    ctaLink: '/contact?model=scale-up',
    featured: true
  },
  {
    label: 'Enterprise',
    badge: null,
    headline: 'Platform transformation',
    desc: 'Your legacy system is holding you back. We re-architect and modernise while keeping you live.',
    includes: [
      'Legacy codebase audit',
      'Strangler-fig migration strategy',
      'Zero-downtime re-platforming',
      'Microservices decomposition',
      'Handover to internal team'
    ],
    ctaText: 'Discuss transformation',
    ctaLink: '/contact?model=enterprise',
    featured: false
  }
];

export default function PEEngagementModels({
  subTitle = "How to work with us",
  title = "Three engagement models",
  desc = "No single engagement model works for every business. We offer three structures — and help you decide which is right during the discovery call.",
  engagementModels = models
}) {
  return (
    <section className="cd-section " data-background="/assets/images/home-3/service-bg.png">
      <div className="container">

        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="section-title text-left">
              <SectionTitle
                SubTitle={subTitle}
                Title={title}
              ></SectionTitle>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="section-title text-left">
              <p className="section-descr">{desc}</p>
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {engagementModels.map((m, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className={`cd-engage-card ${m.featured ? 'featured' : ''}`}>
                {m.badge && <div className="cd-engage-badge">{m.badge}</div>}

                <span className="cd-engage-label">{m.label}</span>
                <h3 className="cd-engage-title">{m.headline}</h3>

                <p className="cd-engage-desc mt-2">{m.desc}</p>

                <ul className="cd-engage-list mt-4 mb-4">
                  {m.includes.map(inc => (
                    <li key={inc}>{inc}</li>
                  ))}
                </ul>

                <Link
                  href={m.ctaLink}
                  className={`cd-engage-cta ${m.featured ? 'cd-cta-filled' : 'cd-cta-outline'}`}
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
