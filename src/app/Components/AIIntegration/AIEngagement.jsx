'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import DynamicFormModal from '../Common/DynamicFormModal';

const PLANS = [
  {
    theme: 'essential',
    badge: 'Prove value fast',
    title: 'AI proof of concept',
    desc: 'A working AI integration in 2–4 weeks — real data, real system, real output. Built to prove ROI before a full investment.',
    features: [
      'One high-impact use case selected with you',
      'Working integration on your actual system',
      'Performance benchmarks vs. baseline',
      'Production-readiness assessment',
    ],
    ctaText: 'Scope this →',
    engagementType: 'proof-of-concept'
  },
  {
    theme: 'featured',
    badge: 'Most chosen',
    title: 'Full AI integration build',
    desc: 'End-to-end AI integration — designed, built, tested, and deployed to production with your team trained to operate it.',
    features: [
      'AI strategy & use case prioritisation',
      'Model selection & prompt engineering',
      'API design & system integration',
      'Safety, evaluation & monitoring setup',
      'Team training & handover documentation',
    ],
    ctaText: 'Scope this →',
    engagementType: 'full-integration'
  },
  {
    theme: 'enterprise',
    badge: 'Embedded',
    title: 'AI engineering retainer',
    desc: 'An embedded AI engineer working alongside your team — continuously building, evaluating, and improving AI integrations as your product evolves.',
    features: [
      'Dedicated AI engineer sprint-by-sprint',
      'Continuous model evaluation & fine-tuning',
      'Prompt library management & versioning',
      'Monthly AI performance reporting',
    ],
    ctaText: 'Scope this →',
    engagementType: 'retainer'
  },
];

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
    placeholder: 'Tell us more about your AI integration needs...',
    required: false,
    colSize: 12
  },
];

export default function AIEngagement({
  pageName = "AI Integration",
  sectionName = "AI Engagement Plans"
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const getBadgeStyle = (theme) => {
    switch (theme) {
      case 'essential': return { background: '#EEEDFE', color: '#3C3489' };
      case 'featured': return { background: '#ff3c00', color: '#fff' };
      case 'enterprise':return { background: '#E1F5EE', color: '#085041' };
      default: return {};
    }
  };

  const handleCtaClick = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <section className="cd-section py-5 cd-section-muted border-top border-bottom">
      <div className="container py-4">
        <SectionTitle
          className="text-center mb-5"
          SubTitle="How to engage"
          Title="Three ways to start your AI integration"
          Content="Every engagement starts with a free AI audit. We assess your systems, data, and use cases before recommending a scope."
          isDarkMode={false}
        />

        <div className="row g-4 mt-2 justify-content-center">
          {PLANS.map((plan, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className={`cd-engage-card${plan.theme === 'featured' ? ' featured' : ''}`}>
                <div className="cd-engage-badge" style={getBadgeStyle(plan.theme)}>
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
                    data-cta={plan.engagementType}
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
        title="Get Started with AI Integration"
        description={`Let's discuss your ${selectedPlan?.title || 'AI project'}. We'll respond within 24 hours.`}
        fields={defaultFormFields}
        metadata={{
          page: pageName,
          section: sectionName,
          modal: `${pageName} Contact Form`,
          engagementPlan: selectedPlan?.title,
          engagementType: selectedPlan?.engagementType,
          source: pageName.toLowerCase().replace(' ', '-'),
          formType: `${pageName} - ${selectedPlan?.title || 'AI Engagement Inquiry'}`
        }}
      />
    </section>
  );
}
