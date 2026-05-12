import React from 'react';
import SectionTitle from '../../Common/SectionTitle';

const reasons = [
  {
    title: 'Insurance compliance built-in',
    body: 'Every insurance solution we build is designed with insurance compliance from day one. We handle encryption, access controls, audit trails, and regulatory requirements.'
  },
  {
    title: 'Insurance domain expertise',
    body: 'Our team has deep experience with policy management, claims processing, insurance workflows, and the unique challenges of insurance technology development.'
  },
  {
    title: 'Security-first development',
    body: 'We implement insurance-grade security including end-to-end encryption, secure authentication, regular security audits, and vulnerability management.'
  },
  {
    title: 'Regulatory experience',
    body: 'We understand insurance regulations including state insurance requirements, data protection laws, and regional insurance compliance requirements.'
  },
  {
    title: 'Customer-centered design',
    body: 'Our UX/UI design prioritizes customer experience while ensuring accessibility for all users, including those with varying technical literacy and security concerns.'
  },
  {
    title: '24/7 critical support',
    body: 'Insurance systems require round-the-clock reliability. We provide 24/7 support, monitoring, and incident response for critical insurance applications.'
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

export default function InsuranceWhyMayuraSoft() {
  return (
    <section className="cd-section cd-section-light">
      <div className="container">
        <SectionTitle
          Title="Why insurance organizations <span>Choose Us </span> <br /> for technology solutions"
          SubTitle="Our insurance expertise"
          className="text-center mb-5"
          Content="These aren't just claims — they're commitments we put into every insurance project."
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