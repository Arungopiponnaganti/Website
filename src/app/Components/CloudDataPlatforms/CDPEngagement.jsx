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
    placeholder: 'Tell us about your data platform needs...',
    required: false,
    colSize: 12
  },
];

const PLANS = [
  {
    theme: 'essential',
    badge: 'Foundation',
    badgeStyle: { background: '#FAEEDA', color: '#633806' },
    title: 'First platform build',
    desc: 'For organisations with no existing cloud data platform. We design and build the core infrastructure — ingestion, storage, transformation, and a first set of dashboards — in 30 days.',
    features: [
      'Data source inventory and architecture design',
      'Cloud warehouse provisioning and security setup',
      '3–5 source systems connected with ingestion pipelines',
      'Transformation layer and first reporting layer',
      'Team training and handover documentation',
    ],
  },
  {
    theme: 'featured',
    badge: 'Most chosen',
    badgeStyle: { background: '#ff3c00', color: '#fff' },
    title: 'Platform modernisation',
    desc: 'For organisations with an existing data warehouse or pipeline setup that is unreliable, expensive, or no longer scaling. We assess what can be retained and rebuild what cannot.',
    features: [
      'Current platform audit — what works and what does not',
      'Migration plan with zero-downtime strategy',
      'Modern stack implementation (dbt, Airflow, cloud warehouse)',
      'Data quality and governance layer',
      'Cost optimisation built in from design',
      'Team capability uplift alongside delivery',
    ],
  },
  {
    theme: 'enterprise',
    badge: 'Managed',
    badgeStyle: { background: '#E1F5EE', color: '#085041' },
    title: 'Managed data platform',
    desc: 'For organisations that want the capability without building an in-house data engineering function. We operate your platform — monitoring, onboarding new sources, optimising costs, and supporting your analysts.',
    features: [
      'Pipeline monitoring and incident response',
      'Monthly cost review and optimisation',
      'New data source onboarding as needed',
      'Analyst support — query help, model changes, new metrics',
    ],
  },
];

export default function CDPEngagement({
  subTitle = "How to engage",
  title = "Three engagement types",
  desc = "Every engagement starts with a free platform assessment — we review your current data environment, identify the highest-impact gaps, and recommend a scope before any commitment is made.",
  engagementTypes = PLANS,
  pageName = "Cloud Data Platforms",
  sectionName = "Engagement"
}) {
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
          className="text-center mb-3"
          SubTitle="How to engage"
          Title="Three engagement types"
          Content="Every engagement starts with a free platform assessment — we review your current data environment, identify the highest-impact gaps, and recommend a scope before any commitment is made."
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
          page: pageName,
          section: sectionName,
          modal: `${pageName} Contact Form`,
          engagementType: selectedPlan?.title,
          engagementTheme: selectedPlan?.theme,
          source: pageName.toLowerCase().replace(' ', '-'),
          formType: `${pageName} - ${selectedPlan?.title || 'Inquiry'}`
        }}
      />
    </section>
  );
}
