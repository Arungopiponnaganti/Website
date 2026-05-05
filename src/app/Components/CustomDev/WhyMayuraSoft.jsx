import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const reasons = [
  {
    title: 'You own everything from day one',
    body: 'All code, repositories, architecture docs, and credentials are yours. No lock-in, no code held hostage.'
  },
  {
    title: 'QA is not optional',
    body: "Every sprint includes dedicated testing. We don't ship code that hasn't been through our QA process — regardless of timeline pressure."
  },
  {
    title: 'One team, full accountability',
    body: 'The same team that scopes your project builds it and supports it. No handoff to a cheaper offshore resource mid-project.'
  },
  {
    title: 'Transparent weekly reporting',
    body: "Every Friday, you receive a written update: what was completed, what's next, any blockers. No chasing your account manager."
  },
  {
    title: 'AI-augmented development',
    body: 'We use AI-assisted coding tools internally to improve throughput and reduce cost — savings we pass on through faster delivery, not higher margins.'
  },
  {
    title: 'No minimum contract length',
    body: 'Month-to-month on dedicated team engagements. We earn your business every sprint, not every 12 months.'
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

export default function WhyMayuraSoft() {
  return (
    <section className="cd-section cd-section-light">
      <div className="container">
        <SectionTitle
          Title="Why teams <span>Choose Us </span> <br /> over a generic agency"
          SubTitle="Our difference"
          className="text-center mb-5"
          Content="These aren't values statements. They are commitments we put in every contract."
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
                {/* <div className="cd-bento-label-wrapper">
                  <span className="cd-bento-label">LABEL</span>
                </div> */}
                <h3 className="cd-bento-title">{r.title}</h3>
                <p className="cd-bento-body">{r.body}</p>
                {/* <div className="mt-auto">
                  <a href="#contact" className="cd-bento-link">Learn more &rarr;</a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
