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
    badge: 'Assessment',
    badgeStyle: { background: '#FAEEDA', color: '#633806' },
    title: 'AI ethics audit',
    desc: 'A structured assessment of your current AI systems against our six-domain framework — with a gap analysis and prioritised remediation roadmap.',
    features: [
      'Six-domain readiness assessment',
      'Bias and fairness audit on live models',
      'EU AI Act gap analysis',
      'Prioritised remediation roadmap',
    ],
    ctaText: 'Scope this →',
  },
  {
    theme: 'featured',
    badge: 'Most chosen',
    badgeStyle: { background: '#ff3c00', color: '#fff' },
    title: 'Full oversight framework build',
    desc: 'Complete AI oversight framework — policies, processes, monitoring, and training — designed for your organisation and compliant with EU AI Act.',
    features: [
      'AI ethics policy documentation',
      'Model risk management framework',
      'Bias testing & monitoring pipeline',
      'Explainability implementation',
      'Staff training programme',
      'Board-ready compliance report',
    ],
    ctaText: 'Scope this →',
  },
  {
    theme: 'enterprise',
    badge: 'Ongoing',
    badgeStyle: { background: '#E1F5EE', color: '#085041' },
    title: 'Continuous oversight monitoring',
    desc: 'Quarterly oversight health reviews — monitoring model drift, bias, and compliance posture as your AI systems evolve.',
    features: [
      'Quarterly model bias audit',
      'Regulatory change tracking',
      'Incident response for AI failures',
      'Annual compliance board report',
    ],
    ctaText: 'Scope this →',
  },
];

export default function AGEEngagement({
  pageName = "AI Governance Ethics",
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
          className="text-center"
          SubTitle="Engagement types"
          Title="Three oversight engagement models"
          Content="Every engagement begins with a free ethics review — we assess your AI systems against our six-domain framework before recommending a scope."
          isDarkMode={false}
        />

        <div className="row g-4 mt-2 justify-content-center">
          {PLANS.map((plan, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className={`cd-engage-card${plan.theme === 'featured' ? ' featured' : ''}`}>
                <div className="cd-engage-badge" style={plan.badgeStyle}>{plan.badge}</div>
                <div className="cd-engage-title" style={{ fontSize: '20px', marginTop: '10px' }}>{plan.title}</div>
                <div className="cd-engage-desc mt-3">{plan.desc}</div>
                <ul className="cd-engage-list mt-4 mb-5">
                  {plan.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
            <div className="mt-auto" style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px' }}>
              <button
                onClick={() => handleCtaClick(plan)}
                className={`cd-engage-cta ${plan.theme === 'featured' ? 'cd-cta-filled' : 'cd-cta-outline'}`}
              >
                {plan.ctaText}
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
      source: pageName.toLowerCase().replace(' ', '-'),
      formType: `${pageName} - ${selectedPlan?.title || 'Inquiry'}`
    }}
  />
</section>
  );
}
