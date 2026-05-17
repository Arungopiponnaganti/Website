'use client';
import React, { useState } from 'react';
import SectionTitle from '../../Common/SectionTitle';

const STEPS = [
  {
    num: '01', title: 'Discovery', dur: '1 week',
    desc: 'We assess your startup idea, target market, and core requirements. We identify the fastest path to validating your concept with minimum viable features.',
    outputs: ['Product requirements document', 'Market analysis', 'Technical feasibility study', 'MVP feature prioritization'],
    cards: [
      { t: 'Idea assessment', d: 'Validating your concept and market fit', icon: 'bi-lightbulb-fill', theme: 'bento-orange' },
      { t: 'Feature prioritization', d: 'Identifying must-have vs nice-to-have', icon: 'bi-list-check', theme: 'bento-purple' },
      { t: 'Tech stack selection', d: 'Choosing the right tools for speed', icon: 'bi-code-slash', theme: 'bento-green' }
    ]
  },
  {
    num: '02', title: 'Design', dur: '1 week',
    desc: 'We design intuitive user experiences and scalable architectures. Our designs focus on user adoption and growth potential from day one.',
    outputs: ['UX/UI wireframes', 'User flow diagrams', 'API architecture', 'Technical specifications'],
    cards: [
      { t: 'UX design', d: 'User-centered interface design', icon: 'bi-palette-fill', theme: 'bento-blue' },
      { t: 'Architecture', d: 'Scalable system design', icon: 'bi-diagram-3-fill', theme: 'bento-pink' },
      { t: 'Prototype', d: 'Clickable prototype for feedback', icon: 'bi-cursor-fill', theme: 'bento-yellow' }
    ]
  },
  {
    num: '03', title: 'Build', dur: '4–8 weeks',
    desc: 'We develop your MVP with agile sprints and continuous integration. Each sprint delivers working features ready for user testing.',
    outputs: ['Working MVP', 'Core feature modules', 'API integrations', 'CI/CD pipeline'],
    cards: [
      { t: 'Agile development', d: '2-week sprints with demos', icon: 'bi-arrow-repeat', theme: 'bento-purple' },
      { t: 'Cloud infrastructure', d: 'Scalable deployment setup', icon: 'bi-cloud-fill', theme: 'bento-green' },
      { t: 'Quality assurance', d: 'Automated testing throughout', icon: 'bi-check-circle-fill', theme: 'bento-orange' }
    ]
  },
  {
    num: '04', title: 'Validate', dur: '1–2 weeks',
    desc: 'We conduct user testing with real target users, gather feedback, and iterate rapidly. Your early users validate the product direction.',
    outputs: ['User testing results', 'Feedback analysis', 'Iteration plan', 'Performance metrics'],
    cards: [
      { t: 'User testing', d: 'Real user feedback collection', icon: 'bi-people-fill', theme: 'bento-blue' },
      { t: 'Analytics setup', d: 'Tracking key metrics', icon: 'bi-graph-up', theme: 'bento-yellow' },
      { t: 'Iteration', d: 'Rapid improvements based on feedback', icon: 'bi-arrow-clockwise', theme: 'bento-pink' }
    ]
  },
  {
    num: '05', title: 'Launch', dur: '1 week',
    desc: 'We deploy to production with monitoring, analytics, and support. Your startup is ready to acquire users and scale.',
    outputs: ['Production deployment', 'Monitoring setup', 'Launch documentation', 'Ongoing support plan'],
    cards: [
      { t: 'Launch deployment', d: 'Production-ready infrastructure', icon: 'bi-rocket-takeoff-fill', theme: 'bento-green' },
      { t: 'Monitoring', d: 'Real-time performance tracking', icon: 'bi-activity', theme: 'bento-orange' },
      { t: 'Support', d: 'Post-launch assistance', icon: 'bi-life-preserver', theme: 'bento-purple' }
    ]
  }
];

export default function StartupsProcess({
  title = "Startup development <br /> <span className=''>with agility and speed at every step</span>",
  subTitle = "Our Startup Development Process",
  content = "We follow lean startup principles combined with agile methodology to get your product to market fast.",
  steps = STEPS
}) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="cd-section py-5 cd-section-muted" id="process">
      <div className="container py-4">
        <SectionTitle
          className="text-center mb-5"
          SubTitle={subTitle}
          Title={title}
          Content={content}
          isDarkMode={false}
        />

        <div className="stepper-wrapper mt-4">
          <div className="step-nav mb-4">
            {steps.map((s, idx) => (
              <button
                key={idx}
                className={`sn${activeStep === idx ? ' on' : ''}`}
                onClick={() => setActiveStep(idx)}
              >
                {s.num} · {s.title}
              </button>
            ))}
          </div>

          <div className="step-body">
            <div className="row g-4 g-lg-5 align-items-start">

              <div className="col-12 col-lg-7">
                <div className="sb-num text-uppercase mb-2">Phase {steps[activeStep].num}</div>
                <h3 className="sb-t mb-3">{steps[activeStep].title}</h3>
                <p className="sb-desc mb-4">{steps[activeStep].desc}</p>

                <div className="sb-out-lbl text-uppercase mb-3">Deliverables</div>
                <div className="d-flex flex-column gap-2 mb-4">
                  {steps[activeStep].outputs.map((out, jdx) => (
                    <div key={jdx} className="sb-out-item d-flex align-items-center gap-2">
                      <i className="bi bi-check-circle sb-check-icon flex-shrink-0"></i>
                      {out}
                    </div>
                  ))}
                </div>

                <div className="d-flex align-items-center gap-2 mt-4 pt-4 border-top">
                  <span className="sb-dur-pill">Duration</span>
                  <span className="sb-dur-text">{steps[activeStep].dur}</span>
                </div>
              </div>

              <div className="col-12 col-lg-5 d-flex flex-column gap-3">
                {steps[activeStep].cards.map((card, cdx) => (
                  <div key={cdx} className={`sb-card cd-bento-card ${card.theme}`}>
                    <div className="cd-bento-bg">
                      <div className="cd-shape-1"></div>
                      <div className="cd-shape-2"></div>
                      <div className="cd-shape-3"></div>
                    </div>
                    <div className="sb-card-body d-flex align-items-start gap-3">
                      <div className="sb-card-icon flex-shrink-0">
                        <i className={`bi ${card.icon}`}></i>
                      </div>
                      <div>
                        <div className="sb-card-t mb-1">{card.t}</div>
                        <div className="sb-card-d">{card.d}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}