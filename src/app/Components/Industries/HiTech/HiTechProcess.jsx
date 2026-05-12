'use client';
import React, { useState } from 'react';
import SectionTitle from '../../Common/SectionTitle';

const STEPS = [
  {
    num: '01', title: 'Discovery', dur: '1–2 weeks',
    desc: 'We assess your technology needs, innovation requirements, and existing systems. We identify opportunities for digital transformation and create a roadmap aligned with enterprise technology standards.',
    outputs: ['Technology requirements document', 'Innovation assessment', 'Technical feasibility study', 'Enterprise technology compliance checklist'],
    cards: [
      { t: 'Stakeholder workshops', d: 'With technology leaders, engineers', icon: 'bi-people-fill', theme: 'bento-orange' },
      { t: 'Technology audit', d: 'Existing technology infrastructure', icon: 'bi-cpu-fill', theme: 'bento-purple' },
      { t: 'Innovation review', d: 'Emerging technology evaluation', icon: 'bi-lightbulb-fill', theme: 'bento-green' }
    ]
  },
  {
    num: '02', title: 'Design', dur: '2–3 weeks',
    desc: 'We design user-centered technology interfaces, cloud architectures, and integration plans. Our designs prioritize innovation while maintaining security and reliability standards.',
    outputs: ['UX/UI wireframes for technology interfaces', 'Cloud architecture design', 'System workflow diagrams', 'Integration specifications'],
    cards: [
      { t: 'User experience design', d: 'Developer and user workflows', icon: 'bi-person-fill', theme: 'bento-blue' },
      { t: 'Cloud architecture', d: 'Cloud-native and microservices design', icon: 'bi-cloud-fill', theme: 'bento-pink' },
      { t: 'Security review', d: 'Enterprise security sign-off', icon: 'bi-shield-fill', theme: 'bento-yellow' }
    ]
  },
  {
    num: '03', title: 'Build', dur: '8–16 weeks',
    desc: 'We develop innovative technology applications with rigorous testing. Each sprint delivers tested, scalable code with full documentation for enterprise IT teams.',
    outputs: ['Working technology application modules', 'Cloud infrastructure deployment', 'AI/ML model integration', 'Comprehensive documentation'],
    cards: [
      { t: 'Innovative development', d: 'Following enterprise technology best practices', icon: 'bi-code-slash-fill', theme: 'bento-purple' },
      { t: 'Cloud integration', d: 'Cloud-native deployment and scaling', icon: 'bi-cloud-fill', theme: 'bento-green' },
      { t: 'AI/ML testing', d: 'Model validation and performance testing', icon: 'bi-robot-fill', theme: 'bento-orange' }
    ]
  },
  {
    num: '04', title: 'Validate', dur: '2–4 weeks',
    desc: 'We conduct thorough testing with technology professionals, performance validation, and security verification. User testing ensures the solution meets real enterprise workflow needs.',
    outputs: ['User acceptance testing results', 'Performance validation report', 'Security certification', 'Innovation metrics'],
    cards: [
      { t: 'Technology testing', d: 'With technology professionals', icon: 'bi-person-check-fill', theme: 'bento-blue' },
      { t: 'Performance validation', d: 'Scalability and performance testing', icon: 'bi-graph-up-fill', theme: 'bento-yellow' },
      { t: 'Security certification', d: 'Enterprise security documentation', icon: 'bi-shield-check-fill', theme: 'bento-pink' }
    ]
  },
  {
    num: '05', title: 'Deploy', dur: '1–2 weeks',
    desc: 'We manage production deployment with enterprise-grade reliability, monitoring, and support. Our deployment process ensures zero disruption to technology operations.',
    outputs: ['Production deployment', '24/7 monitoring setup', 'Incident response procedures', 'Training and documentation'],
    cards: [
      { t: 'Reliable deployment', d: 'Following enterprise deployment protocols', icon: 'bi-rocket-takeoff-fill', theme: 'bento-green' },
      { t: 'Monitoring setup', d: '24/7 technology infrastructure monitoring', icon: 'bi-activity-fill', theme: 'bento-orange' },
      { t: 'Staff training', d: 'Comprehensive training for technology teams', icon: 'bi-person-video3-fill', theme: 'bento-purple' }
    ]
  }
];

export default function HiTechProcess({
  title = "Enterprise technology development <br /> <span className=''>with innovation and scalability at every step</span>",
  subTitle = "Our Hi-Tech Development Process",
  content = "We follow enterprise technology development practices that prioritize innovation, scalability, and reliability.",
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