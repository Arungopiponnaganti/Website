import React from 'react';
import SectionTitle from '../../Common/SectionTitle';

const reasons = [
  {
    title: 'Professional services compliance built-in',
    body: 'Every professional services solution we build is designed with compliance from day one. We handle encryption, access controls, audit trails, and regulatory requirements.'
  },
  {
    title: 'Professional services domain expertise',
    body: 'Our team has deep experience with client management, practice automation, professional services workflows, and the unique challenges of professional services technology development.'
  },
  {
    title: 'Security-first development',
    body: 'We implement professional services-grade security including end-to-end encryption, secure authentication, regular security audits, and vulnerability management.'
  },
  {
    title: 'Regulatory experience',
    body: 'We understand professional services regulations including industry requirements, data protection laws, and regional professional services compliance requirements.'
  },
  {
    title: 'Client-centered design',
    body: 'Our UX/UI design prioritizes client experience while ensuring accessibility for all users, including those with varying technical literacy and security concerns.'
  },
  {
    title: '24/7 critical support',
    body: 'Professional services systems require round-the-clock reliability. We provide 24/7 support, monitoring, and incident response for critical professional services applications.'
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

export default function ProfessionalServicesWhyMayuraSoft() {
  return (
    <section className="cd-section cd-section-light">
      <div className="container">
        <SectionTitle
          Title="Why professional services organizations <span>Choose Us </span> <br /> for technology solutions"
          SubTitle="Our professional services expertise"
          className="text-center mb-5"
          Content="These aren't just claims — they're commitments we put into every professional services project."
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