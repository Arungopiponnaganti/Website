'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import Image from 'next/image';
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

const capabilitiesList = [
  {
    icon: 'bi-rocket-takeoff', title: 'MVP development',
    body: "A working, testable product in 6–10 weeks. Core user journeys only — enough to validate your market and attract your first customers.",
  },
  {
    icon: 'bi-diagram-3', title: 'Scalable architecture design',
    body: 'System design built to handle 10× growth. Microservices, API strategy, database design, and cloud infrastructure — defined before a line of code is written.',
  },
  {
    icon: 'bi-stack', title: 'Full-stack web & mobile',
    body: 'React, Next.js, Node.js, Python, Flutter, React Native — we build across the full stack with the tech that fits your product, not our convenience.',
  },
  {
    icon: 'bi-check2-circle', title: 'Continuous QA & testing',
    body: "Quality isn't a phase — it's built in. Every sprint ships with automated test coverage, performance benchmarks, and a zero-regression policy.",
  },
  {
    icon: 'bi-plugin', title: 'API design & integrations',
    body: 'RESTful and GraphQL APIs, third-party integrations, payment gateways, CRM connectors, and AI model APIs — built to be maintainable and documented.',
  },
  {
    icon: 'bi-infinity', title: 'DevOps & CI/CD pipeline',
    body: 'Automated deployments, environment management, monitoring, and alerting — so your product ships faster and recovers from incidents in minutes, not hours.',
  }
];

export default function PECapabilities({
  title = "What you get from a Mayurasoft product engagement",
  subTitle = "Capabilities",
  content = "Every engagement is scoped to your stage — whether you're at idea, MVP, or scaling to enterprise.",
  capabilities = capabilitiesList
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCapability, setSelectedCapability] = useState(null);

  const handleLearnMoreClick = (capability) => {
    setSelectedCapability(capability);
    setIsModalOpen(true);
  };

  const getFormFields = () => {
    return defaultFormFields;
  };

  return (
    <section className="cd-section py-5 position-relative" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container pt-4">
        <SectionTitle
          className="text-center"
          SubTitle={subTitle}
          Title={title}
          Content={content}
          isDarkMode={false}
        />

        <div className="row g-4 mt-2">
          {capabilities.map((item, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div
                className="cd-cap-card"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '35px 30px',
                  position: 'relative',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.02)',
                  height: '100%',
                  minHeight: '260px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0px 15px 35px rgba(0, 0, 0, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0px 10px 30px rgba(0, 0, 0, 0.02)';
                }}
              >
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1e2d', marginBottom: '15px' }}>{item.title}</h3>
                <p style={{ fontSize: '14.5px', color: '#6c757d', lineHeight: '1.6', marginBottom: '50px' }}>{item.body}</p>

                <div style={{ position: 'absolute', bottom: '30px', left: '30px' }}>
                  <button
                    onClick={() => handleLearnMoreClick(item)}
                    className='p-0'
                    style={{
                      color: '#444',
                      fontSize: '14px',
                      fontWeight: '600',
                      textDecoration: 'none',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Learn more &rarr;
                  </button>
                </div>

                <div style={{ position: 'absolute', bottom: '20px', right: '30px', opacity: 0.15, fontSize: '46px', color: '#1a1e2d', pointerEvents: 'none' }}>
                  <i className={`bi ${item.icon}`}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="service-shape bounce-animate3">
        <Image src="/assets/images/service5.png" alt="Service feature image" width={199} height={420} />
      </div>
      <div className="service-shape2">
        <Image src="/assets/images/service7.png" alt="Service feature icon" width={100} height={100} />
      </div>
      <div className="service-shape3 bounce-animate4">
        <Image src="/assets/images/service8.png" alt="Service decorative image" width={341} height={351} />
      </div>

      <DynamicFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Learn More"
        description={`Tell us about your interest in ${selectedCapability?.title || 'our capabilities'}. We'll get back to you shortly.`}
        fields={getFormFields()}
        metadata={{
          page: 'Product Engineering',
          section: 'PE Capabilities',
          modal: 'PE Capabilities Contact Form',
          capability: selectedCapability?.title,
          capabilityType: selectedCapability?.icon,
          source: 'pe-capabilities',
          formType: `PE Capability - ${selectedCapability?.title || 'Inquiry'}`
        }}
      />
    </section>
  );
}
