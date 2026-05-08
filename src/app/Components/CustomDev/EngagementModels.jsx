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
    label: 'Fixed scope',
    badge: null,
    headline: 'You know what you need',
    bestFor: 'Defined requirements, fixed budget',
    desc: 'We scope the project fully upfront, agree on deliverables, timeline, and cost — and hold to it. No surprises.',
    includes: [
      'Discovery & scoping session',
      'Full technical specification',
      'Agile sprint delivery',
      'QA on every sprint',
      'Launch support'
    ],
    ctaText: 'Start with a scoping call',
    ctaLink: '/contact?model=fixed-scope',
    featured: false
  },
  {
    label: 'Dedicated team',
    badge: 'Most popular',
    headline: 'You need ongoing velocity',
    bestFor: 'Product companies, growing engineering teams',
    desc: 'A dedicated MayuraSoft squad embedded in your product cycle. Fixed monthly retainer, flexible scope, two-week sprints.',
    includes: [
      'Dedicated engineers (1–6 FTE)',
      'Sprint planning & retrospectives',
      'Dedicated QA',
      'Architecture review monthly',
      'Slack / Jira integration',
      'Monthly roadmap review'
    ],
    ctaText: 'Talk to us about team size',
    ctaLink: '/contact?model=dedicated-team',
    featured: true
  },
  {
    label: 'Staff augmentation',
    badge: null,
    headline: 'You need to fill a skills gap',
    bestFor: 'Teams with capacity constraints',
    desc: 'Embed senior MayuraSoft engineers directly in your existing team. Your processes, your tools, our talent.',
    includes: [
      'Senior engineers only (5+ years)',
      '2-week trial period',
      'Immediate onboarding',
      'Flexible contract length',
      'Skills: full-stack, data, DevOps, QA'
    ],
    ctaText: 'Find your fit',
    ctaLink: '/contact?model=staff-aug',
    featured: false
  }
];

export default function EngagementModels() {
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
          <div className="col-lg-7">
            <div className="section-title text-left">
              <SectionTitle
                SubTitle="How We Engage"
                Title="Choose Your Best Plan"
              ></SectionTitle>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="section-title text-left">
              <p className="section-descr">No single engagement model works for every business. We offer three structures — and help you decide which is right during the discovery call.</p>
            </div>
          </div>
        </div>

        {/* <SectionTitle
          SubTitle="How We Engage"
          Title="Choose the model that fits your situation"
          Content="No single engagement model works for every business. We offer three structures — and help you decide which is right during the discovery call."
          className="text-center"
          isDarkMode={false}
        /> */}

        <div className=" row g-4 justify-content-center">
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
                    // <li key={inc}><i className="bi bi-check-circle-fill"></i>{inc}</li>
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
          page: 'Engagement Models',
          section: 'Engagement Models Section',
          modal: 'Engagement Models Contact Form',
          engagementModel: selectedModel?.label,
          engagementModelType: selectedModel?.ctaLink?.split('=')[1],
          source: 'engagement-models',
          formType: `Engagement Model - ${selectedModel?.label || 'Inquiry'}`
        }}
      />
    </section>
  );
}
