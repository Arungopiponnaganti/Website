"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import DynamicFormModal from '../Common/DynamicFormModal';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);

  const handleCtaClick = (model) => {
    setSelectedModel(model);
    setIsModalOpen(true);
  };

  const getFormFields = () => {
    return [
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
  };

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
          page: 'Cloud & DevOps',
          section: 'Engagement Section',
          modal: 'CloudDevOps Contact Form',
          engagementModel: selectedModel?.label,
          engagementModelType: selectedModel?.ctaLink?.split('=')[1],
          source: 'cloud-devops-engagement',
          formType: `Engagement Model - ${selectedModel?.label || 'Inquiry'}`
        }}
      />
    </section>
  );
}
