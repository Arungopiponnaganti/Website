import React from 'react';
import SectionTitle from '../../Common/SectionTitle';

const reasons = [
  {
    title: 'HIPAA compliance built-in',
    body: 'Every healthcare solution we build is designed with HIPAA compliance from day one. We handle encryption, access controls, audit trails, and business associate agreements.'
  },
  {
    title: 'Healthcare domain expertise',
    body: 'Our team has deep experience with EHR systems, healthcare workflows, clinical terminology, and the unique challenges of healthcare technology development.'
  },
  {
    title: 'Security-first development',
    body: 'We implement healthcare-grade security including end-to-end encryption, secure authentication, regular security audits, and vulnerability management.'
  },
  {
    title: 'Regulatory experience',
    body: 'We understand healthcare regulations including HIPAA, GDPR, FDA guidelines, and regional healthcare compliance requirements across different markets.'
  },
  {
    title: 'Patient-centered design',
    body: 'Our UX/UI design prioritizes patient experience while ensuring accessibility for all users, including those with disabilities and varying technical literacy.'
  },
  {
    title: '24/7 critical support',
    body: 'Healthcare systems require round-the-clock reliability. We provide 24/7 support, monitoring, and incident response for critical healthcare applications.'
  }
];

const bentoThemes = [
  'bento-orange',
  'bento-purple',
  'bento-green',
  'bento-pink',
  'bento-blue',
  'bento-yellow'
];

export default function HealthcareWhyMayuraSoft() {
  return (
    <section className="cd-section cd-section-light">
      <div className="container">
        <SectionTitle
          Title="Why healthcare organizations <span>Choose Us </span> <br /> for technology solutions"
          SubTitle="Our healthcare expertise"
          className="text-center mb-5"
          Content="These aren't just claims — they're commitments we put into every healthcare project."
        />

        <div className="cd-bento-grid">
          {reasons.map((r, i) => (
            <div className={`cd-bento-card ${bentoThemes[i % bentoThemes.length]}`} key={i}>
              <div className="cd-bento-bg">
                <div className="cd-shape-1"></div>
                <div className="cd-shape-2"></div>
                <div className="cd-shape-3"></div>
              </div>
              <div className="cd-bento-content">
                <h3 className="cd-bento-title">{r.title}</h3>
                <p className="cd-bento-body">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}