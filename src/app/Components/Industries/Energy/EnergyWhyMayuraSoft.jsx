import React from 'react';
import SectionTitle from '../../Common/SectionTitle';

const reasons = [
  {
    title: 'Energy industry expertise',
    body: 'Our team has deep experience with smart grids, renewable energy systems, and the unique challenges of energy technology development.'
  },
  {
    title: 'Sustainability focus',
    body: 'We design solutions that optimize energy consumption, reduce environmental impact, and promote sustainable energy practices.'
  },
  {
    title: 'Grid reliability priority',
    body: 'We implement energy-grade reliability protocols, fail-safe systems, and comprehensive risk assessment for all energy infrastructure.'
  },
  {
    title: 'IoT integration experience',
    body: 'We understand IoT sensor networks, real-time energy monitoring, and the integration challenges of smart energy systems.'
  },
  {
    title: 'Renewable energy capabilities',
    body: 'Our solutions include solar, wind, and renewable energy integration with forecasting, storage management, and grid optimization.'
  },
  {
    title: '24/7 energy support',
    body: 'Energy systems require continuous operation. We provide 24/7 support, monitoring, and incident response for critical energy infrastructure.'
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

export default function EnergyWhyMayuraSoft() {
  return (
    <section className="cd-section cd-section-light">
      <div className="container">
        <SectionTitle
          Title="Why energy organizations <span>Choose Us </span> <br /> for technology solutions"
          SubTitle="Our energy expertise"
          className="text-center mb-5"
          Content="These aren't just claims — they're commitments we put into every energy project."
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