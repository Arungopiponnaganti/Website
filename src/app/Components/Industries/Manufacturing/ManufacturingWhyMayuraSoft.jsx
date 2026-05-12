import React from 'react';
import SectionTitle from '../../Common/SectionTitle';

const reasons = [
  {
    title: 'Industry 4.0 expertise',
    body: 'Our team has deep experience with smart manufacturing, IoT integration, and the unique challenges of Industry 4.0 transformation.'
  },
  {
    title: 'Operational efficiency focus',
    body: 'We design solutions that optimize production, reduce downtime, and improve overall operational efficiency for manufacturing environments.'
  },
  {
    title: 'Safety-first development',
    body: 'We implement manufacturing-grade safety protocols, fail-safe systems, and comprehensive risk assessment for all production environments.'
  },
  {
    title: 'IoT integration experience',
    body: 'We understand IoT sensor networks, real-time data collection, and the integration challenges of connected manufacturing systems.'
  },
  {
    title: 'Predictive maintenance capabilities',
    body: 'Our solutions include AI-powered predictive analytics, equipment monitoring, and automated maintenance scheduling to reduce downtime.'
  },
  {
    title: '24/7 production support',
    body: 'Manufacturing systems require continuous operation. We provide 24/7 support, monitoring, and incident response for critical production applications.'
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

export default function ManufacturingWhyMayuraSoft() {
  return (
    <section className="cd-section cd-section-light">
      <div className="container">
        <SectionTitle
          Title="Why manufacturing organizations <span>Choose Us </span> <br /> for technology solutions"
          SubTitle="Our manufacturing expertise"
          className="text-center mb-5"
          Content="These aren't just claims — they're commitments we put into every manufacturing project."
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