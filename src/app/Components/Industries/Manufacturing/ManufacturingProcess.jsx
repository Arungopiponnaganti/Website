'use client';
import React, { useState } from 'react';
import SectionTitle from '../../Common/SectionTitle';

const STEPS = [
  {
    num: '01', title: 'Discovery', dur: '1–2 weeks',
    desc: 'We assess your manufacturing technology needs, operational requirements, and existing systems. We identify opportunities for digital transformation and create a roadmap aligned with Industry 4.0 standards.',
    outputs: ['Manufacturing requirements document', 'Operational assessment', 'Technical feasibility study', 'Industry 4.0 readiness checklist'],
    cards: [
      { t: 'Factory walkthrough', d: 'With operations managers and engineers', icon: 'bi-people-fill', theme: 'bento-orange' },
      { t: 'System audit', d: 'Existing manufacturing infrastructure', icon: 'bi-gear-fill', theme: 'bento-purple' },
      { t: 'IoT assessment', d: 'Sensor and connectivity evaluation', icon: 'bi-wifi-fill', theme: 'bento-green' }
    ]
  },
  {
    num: '02', title: 'Design', dur: '2–3 weeks',
    desc: 'We design smart manufacturing interfaces, IoT architectures, and automation plans. Our designs prioritize operational efficiency while maintaining safety and reliability standards.',
    outputs: ['UX/UI wireframes for manufacturing interfaces', 'IoT architecture design', 'Automation workflow diagrams', 'Integration specifications'],
    cards: [
      { t: 'User experience design', d: 'Operator and supervisor workflows', icon: 'bi-person-fill', theme: 'bento-blue' },
      { t: 'IoT architecture', d: 'Sensor networks and data flows', icon: 'bi-diagram-3-fill', theme: 'bento-pink' },
      { t: 'Safety review', d: 'Operational safety sign-off', icon: 'bi-shield-fill', theme: 'bento-yellow' }
    ]
  },
  {
    num: '03', title: 'Build', dur: '8–16 weeks',
    desc: 'We develop smart manufacturing applications with rigorous testing. Each sprint delivers tested, reliable code with full documentation for manufacturing IT teams.',
    outputs: ['Working manufacturing application modules', 'IoT sensor integration', 'Automation system development', 'Comprehensive documentation'],
    cards: [
      { t: 'Smart development', d: 'Following manufacturing best practices', icon: 'bi-code-slash-fill', theme: 'bento-purple' },
      { t: 'IoT integration', d: 'Sensor connectivity and data collection', icon: 'bi-cpu-fill', theme: 'bento-green' },
      { t: 'Automation testing', d: 'Process validation and safety testing', icon: 'bi-robot-fill', theme: 'bento-orange' }
    ]
  },
  {
    num: '04', title: 'Validate', dur: '2–4 weeks',
    desc: 'We conduct thorough testing with manufacturing professionals, performance validation, and safety verification. User testing ensures the solution meets real production workflow needs.',
    outputs: ['User acceptance testing results', 'Performance validation report', 'Safety certification', 'Operational efficiency metrics'],
    cards: [
      { t: 'Production testing', d: 'With manufacturing professionals', icon: 'bi-person-check-fill', theme: 'bento-blue' },
      { t: 'Performance validation', d: 'Throughput and efficiency testing', icon: 'bi-graph-up-fill', theme: 'bento-yellow' },
      { t: 'Safety certification', d: 'Operational safety documentation', icon: 'bi-shield-check-fill', theme: 'bento-pink' }
    ]
  },
  {
    num: '05', title: 'Deploy', dur: '1–2 weeks',
    desc: 'We manage production deployment with manufacturing-grade reliability, monitoring, and support. Our deployment process ensures zero disruption to production operations.',
    outputs: ['Production deployment', '24/7 monitoring setup', 'Incident response procedures', 'Training and documentation'],
    cards: [
      { t: 'Reliable deployment', d: 'Following manufacturing deployment protocols', icon: 'bi-rocket-takeoff-fill', theme: 'bento-green' },
      { t: 'Monitoring setup', d: '24/7 production and equipment monitoring', icon: 'bi-activity-fill', theme: 'bento-orange' },
      { t: 'Staff training', d: 'Comprehensive training for manufacturing teams', icon: 'bi-person-video3-fill', theme: 'bento-purple' }
    ]
  }
];

export default function ManufacturingProcess({
  title = "Manufacturing technology development <br /> <span className=''>with reliability and efficiency at every step</span>",
  subTitle = "Our Manufacturing Development Process",
  content = "We follow manufacturing-specific development practices that prioritize operational efficiency, safety, and reliability.",
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