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
    placeholder: 'Tell us more about your automation needs...',
    required: false,
    colSize: 12
  },
];

const PLANS = [
  {
    label: 'Single workflow',
    theme: 'essential',
    badge: 'Quick win',
    badgeStyle: { background: '#E1F5EE', color: '#085041' },
    title: 'Single workflow automation',
    desc: 'One high-impact process, fully automated end-to-end. Ideal for proving ROI quickly before a broader programme.',
    features: [
      'Process mapping workshop',
      'Full workflow build & testing',
      'Error handling & escalation paths',
      'Monitoring dashboard setup',
      'Team training & documentation',
    ],
  },
  {
    label: 'Automation programme',
    theme: 'featured',
    badge: 'Most chosen',
    badgeStyle: { background: '#ff3c00', color: '#fff' },
    title: 'Automation programme',
    desc: 'A structured programme automating 5–12 processes across one or more departments — with a clear ROI baseline before and after.',
    features: [
      'Full process audit & opportunity map',
      'Prioritised automation roadmap',
      'Sprint-based delivery (2 workflows/sprint)',
      'AI integration where high-value',
      'Unified monitoring & ROI dashboard',
    ],
  },
  {
    label: 'Automation-as-a-service',
    theme: 'enterprise',
    badge: 'Ongoing',
    badgeStyle: { background: '#EEEDFE', color: '#3C3489' },
    title: 'Automation-as-a-service',
    desc: 'An embedded automation engineer on retainer — continuously identifying, building, and improving automations as your business evolves.',
    features: [
      'Dedicated automation engineer monthly',
      'Proactive opportunity identification',
      'Maintenance & version management',
      'Monthly ROI reporting & optimisation',
    ],
  },
];

export default function WAEngagement() {
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
          Title="Three ways to start automating"
          Content="Every engagement begins with a free process audit — we map your highest-value automation opportunities before recommending a scope."
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
                    data-cta={plan.label.toLowerCase().replace(' ', '-')}
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
        description="Fill out the form below and we'll get back to you shortly about your automation engagement."
        fields={getFormFields()}
        metadata={{
          page: "Workflow Automation",
          section: "Engagement Options",
          modal: "Workflow Automation Contact Form",
          engagementModel: selectedPlan?.label,
          source: "workflow-automation",
          formType: `Workflow Automation - ${selectedPlan?.label || 'Inquiry'}`
        }}
      />
    </section>
  );
}
