import React from 'react';
import Link from 'next/link';
import SectionTitle from '../Common/SectionTitle';

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

export default function DGEngagement() {
  return (
    <section className="cd-section cd-section-light border-top border-bottom py-5">
      <div className="container py-2">
        <SectionTitle
          className="mb-4"
          SubTitle="How to engage"
          Title="Three governance engagement models"
          Content="Every engagement starts with a free governance audit — we assess your current state across six dimensions before recommending a scope."
          isDarkMode={false}
        />

        <div className="row g-4">
          {ENGAGEMENTS.map((eng, i) => (
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
                <Link
                  href="/contact"
                  className={`cd-engage-cta ${eng.featured ? 'cd-cta-filled' : 'cd-cta-outline'}`}
                >
                  Scope this engagement &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
