'use client';
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
    badge: 'Focused',
    badgeStyle: { background: '#fef3c7', color: '#92400e' },
    title: 'Data value mapping',
    desc: 'A focused 2-week engagement to map where data creates value in your business and quantify the opportunity.',
    features: [
      'Business process → data dependency map',
      'Value opportunity quantification',
      'Top 5 priority areas identified',
    ],
  },
  {
    theme: 'featured',
    badge: 'Most chosen',
    // badgeStyle: { background: '#dbeafe', color: '#1e40af' },
    title: 'Full data strategy',
    desc: 'Complete 6-week data strategy — value map, gap analysis, and a 24-month funded roadmap ready for board presentation.',
    features: [
      'Executive interviews and discovery workshops',
      'Data value map with ROI quantification',
      'Capability gap analysis across 8 dimensions',
      '24-month sequenced & funded roadmap',
      'Board-ready presentation deck',
    ],
  },
  {
    theme: 'enterprise',
    badge: 'Advisory',
    badgeStyle: { background: '#d1fae5', color: '#065f46' },
    title: 'Fractional CDO / data advisor',
    desc: 'A senior MayuraSoft data strategist embedded as your part-time CDO — attending leadership meetings, shaping investment decisions, and mentoring your data team.',
    features: [
      '2 days per month on-site or remote',
      'Quarterly strategy review and update',
      'Investment decision support',
      'Leadership team data literacy coaching',
    ],
  },
];

export default function DSEngagement({
  pageName = "Data Strategy Consulting",
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
    <section className="cd-section py-5 pb-5 cd-section-muted border-top border-bottom">
      <div className="container py-4">
        <SectionTitle
          className="text-center"
          SubTitle="How to engage"
          Title="Three strategy engagement models"
          Content=""
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
          engagementModel: selectedPlan?.title,
          source: pageName.toLowerCase().replace(' ', '-'),
          formType: `${pageName} - ${selectedPlan?.title || 'Inquiry'}`
        }}
      />
    </section>
  );
}