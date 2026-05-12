import React from 'react';
import SectionTitle from '../../Common/SectionTitle';

const reasons = [
  {
    title: 'Enterprise technology expertise',
    body: 'Our team has deep experience with cloud-native applications, AI/ML systems, and the unique challenges of enterprise technology development.'
  },
  {
    title: 'Innovation-first approach',
    body: 'We design solutions that leverage cutting-edge technologies, drive innovation, and create competitive advantage for your organization.'
  },
  {
    title: 'Scalability priority',
    body: 'We implement cloud-native architectures, microservices, and scalable systems that can grow with your business needs.'
  },
  {
    title: 'AI/ML integration experience',
    body: 'We understand machine learning, predictive analytics, natural language processing, and the integration challenges of intelligent systems.'
  },
  {
    title: 'DevOps automation capabilities',
    body: 'Our solutions include CI/CD pipelines, infrastructure as code, automated testing, and continuous delivery for rapid innovation cycles.'
  },
  {
    title: '24/7 technology support',
    body: 'Enterprise technology systems require continuous operation. We provide 24/7 support, monitoring, and incident response for critical applications.'
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

export default function HiTechWhyMayuraSoft() {
  return (
    <section className="cd-section cd-section-light">
      <div className="container">
        <SectionTitle
          Title="Why technology organizations <span>Choose Us </span> <br /> for enterprise solutions"
          SubTitle="Our hi-tech expertise"
          className="text-center mb-5"
          Content="These aren't just claims — they're commitments we put into every technology project."
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