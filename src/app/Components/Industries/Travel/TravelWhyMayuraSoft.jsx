import React from 'react';
import SectionTitle from '../../Common/SectionTitle';

const reasons = [
  {
    title: 'Travel compliance built-in',
    body: 'Every travel solution we build is designed with compliance from day one. We handle encryption, access controls, audit trails, and regulatory requirements.'
  },
  {
    title: 'Travel domain expertise',
    body: 'Our team has deep experience with booking systems, logistics management, travel workflows, and the unique challenges of travel technology development.'
  },
  {
    title: 'Security-first development',
    body: 'We implement travel-grade security including end-to-end encryption, secure authentication, regular security audits, and vulnerability management.'
  },
  {
    title: 'Smart mobility experience',
    body: 'We understand smart mobility, real-time tracking, route optimization, and the integration challenges of modern travel systems.'
  },
  {
    title: 'Customer-centered design',
    body: 'Our UX/UI design prioritizes customer experience while ensuring accessibility for all users, including those with varying technical literacy and security concerns.'
  },
  {
    title: '24/7 travel support',
    body: 'Travel systems require round-the-clock reliability. We provide 24/7 support, monitoring, and incident response for critical travel applications.'
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

export default function TravelWhyMayuraSoft() {
  return (
    <section className="cd-section cd-section-light">
      <div className="container">
        <SectionTitle
          Title="Why travel organizations <span>Choose Us </span> <br /> for technology solutions"
          SubTitle="Our travel expertise"
          className="text-center mb-5"
          Content="These aren't just claims — they're commitments we put into every travel project."
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