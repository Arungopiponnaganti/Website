import React from 'react';
import SectionTitle from '../../Common/SectionTitle';

const reasons = [
  {
    title: 'Rapid time-to-market',
    body: 'Our agile methodology and experienced team deliver MVPs in 60 days, helping you launch faster than competitors.'
  },
  {
    title: 'Startup-focused expertise',
    body: 'We understand startup dynamics - limited budgets, rapid pivots, and the need for cost-effective solutions that scale.'
  },
  {
    title: 'Cost-effective development',
    body: 'We offer competitive pricing without compromising quality, using open-source technologies and efficient processes.'
  },
  {
    title: 'Vetted developers',
    body: 'Access to our pool of Vetted Specialist Talent with expertise across web, mobile, cloud, and emerging technologies.'
  },
  {
    title: 'Innovation focus',
    body: 'We implement constant innovative strategies using cutting-edge tech to give your startup a competitive edge.'
  },
  {
    title: 'Long-term partnership',
    body: 'We don\'t just build and leave - we provide ongoing support, maintenance, and growth partnership as you scale.'
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

export default function StartupsWhyMayuraSoft() {
  return (
    <section className="cd-section cd-section-light">
      <div className="container">
        <SectionTitle
          Title="Why startups <span>Choose Us </span> <br /> for technology solutions"
          SubTitle="Our startup expertise"
          className="text-center mb-5"
          Content="These aren't just claims — they're commitments we put into every startup project."
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