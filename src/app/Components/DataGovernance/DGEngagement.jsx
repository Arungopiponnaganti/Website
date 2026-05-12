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

const ENGAGEMENTS = [
  {
    badge: 'Assessment',
    badgeBg: '#FAEEDA',
    badgeColor: '#633806',
    title: 'Governance audit & roadmap',
    desc: 'A structured assessment of your current governance posture — where you are, where the risks are, and what to fix first.',
    items: [
      'Six-dimension governance scorecard',
      'Data catalogue & lineage gap analysis',
      'Data quality assessment on key datasets',
      'Prioritised 12-week implementation roadmap',
      'Regulatory compliance gap analysis (DPDPA, GDPR)',
    ],
    featured: false,
  },
  {
    badge: 'Most chosen',
    badgeBg: '#dbeafe',
    badgeColor: '#1d4ed8',
    title: 'Full governance programme',
    desc: 'End-to-end governance framework — catalogue, lineage, quality rules, policies, roles, and tooling — implemented in 12 weeks.',
    items: [
      'Data catalogue build (Apache Atlas / Collibra / Atlan)',
      'End-to-end lineage implementation',
      'Data quality rule engine setup',
      'Eight policy documents authored and adopted',
      'Roles & RACI matrix defined and activated',
      'Training programme for all data owners',
    ],
    featured: true,
  },
  {
    badge: 'Ongoing',
    badgeBg: '#E1F5EE',
    badgeColor: '#085041',
    title: 'Managed governance operations',
    desc: 'Quarterly governance health reviews — tracking catalogue completeness, quality score trends, and compliance posture as your data estate evolves.',
    items: [
      'Quarterly governance health scorecard',
      'New dataset onboarding to catalogue',
      'Quality rule updates as business changes',
      'Annual policy review and refresh',
    ],
    featured: false,
  },
];

export default function DGEngagement({
  subTitle = "How to engage",
  title = "Three governance engagement models",
  desc = "Every engagement starts with a free governance audit — we assess your current state across six dimensions before recommending a scope.",
  engagements = ENGAGEMENTS,
  pageName = "Data Governance",
  sectionName = "Engagement Models"
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEngagement, setSelectedEngagement] = useState(null);

  const handleCtaClick = (engagement) => {
    setSelectedEngagement(engagement);
    setIsModalOpen(true);
  };

  const getFormFields = () => {
    return defaultFormFields;
  };
  return (
    <section className="cd-section cd-section-light border-top border-bottom py-5">
      <div className="container py-2">
        <SectionTitle
          className="mb-4"
          SubTitle={subTitle}
          Title={title}
          Content={desc}
          isDarkMode={false}
        />

        <div className="row g-4">
          {engagements.map((eng, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className={`cd-engage-card h-100${eng.featured ? ' featured' : ''}`}>
                {eng.featured && <div className="cd-engage-badge">Most chosen</div>}
                <span className="cd-engage-label" style={{ display: 'inline-block', padding: '3px 12px', borderRadius: '99px', background: eng.badgeBg, color: eng.badgeColor, fontSize: '12px', fontWeight: '600', marginBottom: '16px' }}>
                  {eng.badge}
                </span>
                <div className="cd-engage-title">{eng.title}</div>
                <p className="cd-engage-desc">{eng.desc}</p>
                <ul className="cd-engage-list">
                  {eng.items.map((item, ii) => (
                    <li key={ii}>{item}</li>
                  ))}
                </ul>
                <button
                  onClick={() => handleCtaClick(eng)}
                  className={`cd-engage-cta ${eng.featured ? 'cd-cta-filled' : 'cd-cta-outline'}`}
                >
                  Scope this engagement &rarr;
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
          engagementType: selectedEngagement?.title,
          engagementBadge: selectedEngagement?.badge,
          source: pageName.toLowerCase().replace(' ', '-'),
          formType: `${pageName} - ${selectedEngagement?.title || 'Inquiry'}`
        }}
      />
    </section>
  );
}
