"use client";
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import DynamicFormModal from '../Common/DynamicFormModal';

const defaultFormFields = [
  {
    label: 'Full Name',
    name: 'name',
    type: 'text',
    placeholder: 'John Smith',
    required: true,
    colSize: 6
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'john@company.com',
    required: true,
    colSize: 6
  },
  {
    label: 'Phone',
    name: 'phone',
    type: 'tel',
    placeholder: '+1 (555) 000-0000',
    required: true,
    colSize: 6
  },
  {
    label: 'Message',
    name: 'message',
    type: 'textarea',
    placeholder: 'Tell us more about your project...',
    required: false,
    colSize: 12
  },
];

const models = [
  {
    label: 'Design from scratch',
    badge: 'New product',
    headline: 'You\'re building something new',
    bestFor: 'New products, greenfield features',
    desc: 'For teams building a new product or feature set that needs a complete UX/UI foundation before development begins.',
    includes: [
      'User research & persona development',
      'Information architecture & user flows',
      'Lo-fi wireframes → hi-fi screens',
      'Usability testing & iteration',
      'Full design system & developer handoff',
    ],
    ctaText: 'Start with a scoping call',
    ctaLink: '/contact?model=design-scratch',
    featured: false
  },
  {
    label: 'Redesign & optimisation',
    badge: 'Most requested',
    headline: 'Your product needs a UX overhaul',
    bestFor: 'Existing products with friction or churn',
    desc: 'For existing products where UX is creating friction, churn, or a measurable support burden you want to reduce.',
    includes: [
      'UX audit with heuristic evaluation',
      'User interviews & session analysis',
      'Priority flow redesigns',
      'A/B test-ready design variants',
      'Conversion rate optimisation',
    ],
    ctaText: 'Get a free UX audit',
    ctaLink: '/contact?model=redesign',
    featured: true
  },
  {
    label: 'Embedded design partner',
    badge: 'Ongoing',
    headline: 'You need continuous design velocity',
    bestFor: 'Product teams, design-dev alignment',
    desc: 'A dedicated designer embedded in your team — working alongside your developers sprint by sprint, owning the design system.',
    includes: [
      'Sprint-aligned design delivery',
      'Design system ownership & evolution',
      'Weekly design review sessions',
      'Continuous usability testing',
      'Direct collaboration with your devs',
    ],
    ctaText: 'Talk about team fit',
    ctaLink: '/contact?model=embedded-design',
    featured: false
  }
];

export default function UXUIEngagementModels() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);

  const handleCtaClick = (model) => {
    setSelectedModel(model);
    setIsModalOpen(true);
  };

  const getFormFields = () => {
    return defaultFormFields;
  };

  return (
    <section className="cd-section cd-section-muted" data-background="/assets/images/home-3/service-bg.png">
      <div className="container">

        <div className="row align-items-center">
            <div className="section-title text-center">
              <SectionTitle
                SubTitle="How We Engage"
                Title="Choose Your Best Plan"
                Content={"Start with a free design audit — we&apos;ll tell you which model fits your situation before any commitment is made on either side."}
              ></SectionTitle>
            </div>
        </div>

        <div className="mt-2 row g-4 justify-content-center">
          {models.map((m, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className={`cd-engage-card ${m.featured ? 'featured' : ''}`}>
                {m.badge && <div className="cd-engage-badge">{m.badge}</div>}

                <span className="cd-engage-label">{m.label}</span>
                <h3 className="cd-engage-title">{m.headline}</h3>
                <span className="cd-engage-bestfor">Best for: {m.bestFor}</span>

                <p className="cd-engage-desc">{m.desc}</p>

                <ul className="cd-engage-list">
                  {m.includes.map(inc => (
                    <li key={inc}>{inc}</li>
                  ))}
                </ul>

        <button
          onClick={() => handleCtaClick(m)}
          className={`cd-engage-cta ${m.featured ? 'cd-cta-filled' : 'cd-cta-outline'}`}
          data-cta={m.label.toLowerCase().replace(' ', '-')}
        >
          {m.ctaText}
        </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    <DynamicFormModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Get in Touch"
      description="Fill out the form below and we'll get back to you shortly."
      fields={getFormFields()}
      metadata={{
        page: 'UXUI Design',
        section: 'UXUI Engagement Models',
        modal: 'UXUI Design Contact Form',
        engagementModel: selectedModel?.label,
        engagementModelType: selectedModel?.ctaLink?.split('=')[1],
        source: 'uxui-engagement-models',
        formType: `UXUI Design Model - ${selectedModel?.label || 'Inquiry'}`
      }}
    />
    </section>
  );
}
