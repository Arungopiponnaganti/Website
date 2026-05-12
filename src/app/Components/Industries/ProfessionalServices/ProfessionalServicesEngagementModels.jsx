"use client";
import React, { useState } from 'react';
import SectionTitle from '../../Common/SectionTitle';
import DynamicFormModal from '../../Common/DynamicFormModal';

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
    placeholder: 'Tell us more about your professional services needs...',
    required: false,
    colSize: 12
  },
];

const models = [
  {
    label: 'Idea stage',
    badge: null,
    headline: 'Professional Services MVP Development',
    desc: 'Validate your professional services technology idea with a secure, compliant MVP that demonstrates value to clients and partners.',
    includes: [
      'Regulatory compliance assessment',
      'Secure architecture design',
      'Core feature development',
      'Professional services compliance infrastructure',
      'User testing with professional services professionals'
    ],
    ctaText: 'Start professional services MVP',
    ctaLink: '/contact?model=professional-services-mvp',
    featured: false
  },
  {
    label: 'Most chosen',
    badge: 'Most chosen',
    headline: 'Digital Practice Platform Development',
    desc: 'Build comprehensive digital practice platforms with full client management, practice automation, and business analytics features.',
    includes: [
      'Dedicated professional services development team',
      'Client management integration',
      'Practice automation capabilities',
      'Business analytics systems',
      'Ongoing compliance monitoring'
    ],
    ctaText: 'Build digital practice platform',
    ctaLink: '/contact?model=digital-practice-platform',
    featured: true
  },
  {
    label: 'Enterprise',
    badge: null,
    headline: 'Professional Services System Modernization',
    desc: 'Transform legacy professional services systems into modern, secure, and compliant digital platforms that improve client experience and operational efficiency.',
    includes: [
      'Legacy system assessment',
      'Migration strategy development',
      'Zero-downtime modernization',
      'Security and compliance upgrades',
      'Staff training and support'
    ],
    ctaText: 'Modernize professional services systems',
    ctaLink: '/contact?model=professional-services-modernization',
    featured: false
  }
];

export default function ProfessionalServicesEngagementModels({
  subTitle = "How to work with us",
  title = "Professional services engagement models",
  desc = "Choose the engagement model that fits your professional services organization's needs and timeline.",
  engagementModels = models,
  pageName = "Professional Services",
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
    <section className="cd-section " data-background="/assets/images/home-3/service-bg.png">
      <div className="container">

        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="section-title text-left">
              <SectionTitle
                SubTitle={subTitle}
                Title={title}
              ></SectionTitle>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="section-title text-left">
              <p className="section-descr">{desc}</p>
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {engagementModels.map((m, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className={`cd-engage-card ${m.featured ? 'featured' : ''}`}>
                {m.badge && <div className="cd-engage-badge">{m.badge}</div>}

                <span className="cd-engage-label">{m.label}</span>
                <h3 className="cd-engage-title">{m.headline}</h3>

                <p className="cd-engage-desc mt-2">{m.desc}</p>

                <ul className="cd-engage-list mt-4 mb-4">
                  {m.includes.map(inc => (
                    <li key={inc}>{inc}</li>
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