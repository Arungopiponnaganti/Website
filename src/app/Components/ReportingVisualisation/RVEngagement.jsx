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

const PLANS = [
  {
    theme: 'essential',
    badge: 'One-time',
    badgeStyle: { background: '#e0f2fe', color: '#0369a1' },
    title: 'Report design & build',
    desc: 'A specific set of reports, built, automated, and handed over — ready to publish immediately.',
    features: [
      'Requirements workshop',
      'Design mockup approval',
      'Build, test, and automate delivery',
      'Handover training session',
    ],
  },
  {
    theme: 'featured',
    badge: 'Most chosen',
    // badgeStyle: { background: '#dbeafe', color: '#1d4ed8' },
    title: 'Reporting system build',
    desc: 'A complete reporting system — from data layer to executive portal — designed around your calendar.',
    features: [
      'Reporting needs assessment',
      'Semantic layer & data model build',
      'Full report library (10–30 reports)',
      'Automated delivery & distribution',
    ],
  },
  {
    theme: 'enterprise',
    badge: 'Ongoing',
    badgeStyle: { background: '#ecfccb', color: '#4d7c0f' },
    title: 'Reporting retainer',
    desc: 'Monthly report maintenance, new report requests, and continuous improvement.',
    features: [
      'Monthly new report delivery',
      'Ad-hoc analysis requests',
      'Data refresh troubleshooting',
    ],
  },
];

export default function RVEngagement({
  pageName = "Reporting Visualisation",
  sectionName = "Engagement Models"
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
    <section className="cd-section py-3 cd-section-muted border-top border-bottom">
      <div className="container py-4">
        <SectionTitle
          className="text-center"
          SubTitle="How to engage"
          Title="Three reporting engagement models"
          Content="Every engagement begins with a free reporting needs assessment — we map your data sources, stakeholder requirements, and delivery cadence before scoping."
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
                    Scope this engagement &rarr;
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
          engagementModel: selectedPlan?.title,
          source: pageName.toLowerCase().replace(' ', '-'),
          formType: `${pageName} - ${selectedPlan?.title || 'Inquiry'}`
        }}
      />
    </section>
  );
}
