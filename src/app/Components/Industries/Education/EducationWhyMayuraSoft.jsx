import React from 'react';
import SectionTitle from '../../Common/SectionTitle';

const reasons = [
  {
    title: 'Learning outcomes focus',
    body: 'Every education solution we build is designed with learning outcomes from day one. We handle engagement, accessibility, and educational effectiveness.'
  },
  {
    title: 'Education domain expertise',
    body: 'Our team has deep experience with learning management systems, educational workflows, and the unique challenges of education technology development.'
  },
  {
    title: 'Accessibility-first development',
    body: 'We implement WCAG-compliant accessibility, inclusive design, and universal learning principles for all educational applications.'
  },
  {
    title: 'EdTech standards experience',
    body: 'We understand education standards including SCORM, LTI, accessibility requirements, and regional educational compliance requirements.'
  },
  {
    title: 'Student-centered design',
    body: 'Our UX/UI design prioritizes student engagement while ensuring accessibility for all learners, including those with disabilities and diverse learning needs.'
  },
  {
    title: '24/7 learning support',
    body: 'Education systems require continuous availability. We provide 24/7 support, monitoring, and incident response for critical learning applications.'
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

export default function EducationWhyMayuraSoft() {
  return (
    <section className="cd-section cd-section-light">
      <div className="container">
        <SectionTitle
          Title="Why educational organizations <span>Choose Us </span> <br /> for technology solutions"
          SubTitle="Our education expertise"
          className="text-center mb-5"
          Content="These aren't just claims — they're commitments we put into every education project."
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