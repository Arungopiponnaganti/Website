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
    placeholder: 'Tell us more about your data needs...',
    required: false,
    colSize: 12
  },
];

const PLANS = [
  {
    theme: 'essential',
    badge: 'Quick foundation',
    badgeStyle: { background: '#FAEEDA', color: '#633806' },
    title: 'Pipeline build & fix',
    desc: 'Specific pipeline work — fixing broken pipelines, adding new sources, or migrating from legacy ETL to modern tooling.',
    features: [
      'Source-to-target pipeline design',
      'Data quality rules & monitoring',
      'Error alerting & retry logic',
      'Documentation & runbook handover',
    ],
  },
  {
    theme: 'featured',
    badge: 'Most chosen',
    badgeStyle: { background: '#ff3c00', color: '#fff' },
    title: 'Modern data platform build',
    desc: 'End-to-end data infrastructure — lakehouse architecture, transformation layer, governance framework, and analytics-ready warehouse.',
    features: [
      'Data architecture design & platform selection',
      'Ingestion layer across all your sources',
      'dbt transformation model build',
      'Data governance & cataloguing setup',
      'BI-ready semantic layer delivery',
      'Team training & knowledge transfer',
    ],
  },
  {
    theme: 'enterprise',
    badge: 'Managed',
    badgeStyle: { background: '#E1F5EE', color: '#085041' },
    title: 'Managed data platform',
    desc: 'We run your data infrastructure — pipeline monitoring, incident response, optimisation, and new source onboarding — month to month.',
    features: [
      '24/7 pipeline monitoring & alerting',
      'Monthly performance & cost review',
      'New source onboarding (included)',
      'Quarterly architecture review',
    ],
  },
];

export default function DEEngagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleCtaClick = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const getFormFields = () => {
    return defaultFormFields;
  };

  return (
    <section className="cd-section py-5 cd-section-muted border-top border-bottom">
      <div className="container py-4">
        <SectionTitle
          className="text-center mb-5"
          SubTitle="How to engage"
          Title="Three ways to build your data foundation"
          Content="Every engagement starts with a free data audit — we assess your current state before recommending a scope."
          isDarkMode={false}
        />

        <div className="row g-4 mt-2 justify-content-center">
          {PLANS.map((plan, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className={`cd-engage-card${plan.theme === 'featured' ? ' featured' : ''}`}>
                <div className="cd-engage-badge" style={plan.badgeStyle}>
                  {plan.badge}
                </div>

                <div className="cd-engage-title" style={{ fontSize: '20px', marginTop: '10px' }}>
                  {plan.title}
                </div>
                <div className="cd-engage-desc mt-3">{plan.desc}</div>

                <ul className="cd-engage-list mt-4 mb-5">
                  {plan.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <div className="mt-auto" style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px' }}>
                  <button
                    onClick={() => handleCtaClick(plan)}
                    className={`cd-engage-cta ${plan.theme === 'featured' ? 'cd-cta-filled' : 'cd-cta-outline'}`}
                  >
                    Scope this &rarr;
                  </button>
                </div>
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
          page: "Data Engineering",
          section: "Engagement",
          modal: "Data Engineering Contact Form",
          engagementPlan: selectedPlan?.title,
          engagementPlanType: selectedPlan?.theme,
          source: "data-engineering",
          formType: `Data Engineering - ${selectedPlan?.title || 'Inquiry'}`
        }}
      />
    </section>
  );
}
