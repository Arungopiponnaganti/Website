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
    placeholder: 'Tell us more about your quality engineering needs...',
    required: false,
    colSize: 12
  },
];

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

export default function QEEngagementModels({
  subTitle = "How to engage",
  title = "Three ways to work with us on quality",
  desc = "Start with a free QA audit — we assess your current test coverage and pipeline before recommending a scope.",
  engagementModels = models,
  pageName = "Quality Engineering",
  sectionName = "Engagement Models"
}) {
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
    <section className="cd-section cd-section-muted">
      <div className="container">

        <div className="row align-items-center mb-4">
          <div className="col-lg-12">
            <SectionTitle
              className="text-center"
              SubTitle={subTitle}
              Title={title}
              Content={desc}
            />
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {engagementModels.map((m, i) => (
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

                <button
                  onClick={() => handleCtaClick(m)}
                  className={`cd-engage-cta${m.featured ? ' cd-cta-filled' : ' cd-cta-outline'}`}
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
          page: pageName,
          section: sectionName,
          modal: `${pageName} Contact Form`,
          engagementModel: selectedModel?.label,
          engagementModelType: selectedModel?.ctaLink?.split('=')[1],
          source: pageName.toLowerCase().replace(' ', '-'),
          formType: `${pageName} - ${selectedModel?.label || 'Inquiry'}`
        }}
      />
    </section>
  );
}
