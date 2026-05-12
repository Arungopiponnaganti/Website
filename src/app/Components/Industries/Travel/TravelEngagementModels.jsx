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
    placeholder: 'Tell us more about your travel technology needs...',
    required: false,
    colSize: 12
  },
];

const models = [
  {
    label: 'Idea stage',
    badge: null,
    headline: 'Travel Tech MVP Development',
    desc: 'Validate your travel technology idea with a secure, compliant MVP that demonstrates value to customers and stakeholders.',
    includes: [
      'Customer requirements assessment',
      'Secure architecture design',
      'Core feature development',
      'Travel compliance infrastructure',
      'User testing with travel professionals'
    ],
    ctaText: 'Start travel tech MVP',
    ctaLink: '/contact?model=travel-tech-mvp',
    featured: false
  },
  {
    label: 'Most chosen',
    badge: 'Most chosen',
    headline: 'Smart Mobility Platform Development',
    desc: 'Build comprehensive smart mobility platforms with full booking systems, logistics management, and customer experience features.',
    includes: [
      'Dedicated travel development team',
      'Booking system integration',
      'Logistics management capabilities',
      'Customer experience systems',
      'Ongoing compliance monitoring'
    ],
    ctaText: 'Build smart mobility platform',
    ctaLink: '/contact?model=smart-mobility-platform',
    featured: true
  },
  {
    label: 'Enterprise',
    badge: null,
    headline: 'Travel System Modernization',
    desc: 'Transform legacy travel systems into modern, secure, and compliant digital platforms that improve customer experience and operational efficiency.',
    includes: [
      'Legacy system assessment',
      'Migration strategy development',
      'Zero-downtime modernization',
      'Security and compliance upgrades',
      'Staff training and support'
    ],
    ctaText: 'Modernize travel systems',
    ctaLink: '/contact?model=travel-modernization',
    featured: false
  }
];

export default function TravelEngagementModels({
  subTitle = "How to work with us",
  title = "Travel engagement models",
  desc: "Choose the engagement model that fits your travel organization's needs and timeline.",
  engagementModels = models,
  pageName = "Travel, Logistics & Hospitality",
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