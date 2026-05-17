'use client';
import React, { useState } from 'react';
import SectionTitle from '../../Common/SectionTitle';

const STEPS = [
  {
    num: '01', title: 'Discovery', dur: '1–2 weeks',
    desc: 'We assess your education technology needs, learning objectives, and existing systems. We identify opportunities for digital transformation and create a roadmap aligned with educational standards.',
    outputs: ['Education requirements document', 'Learning objectives assessment', 'Technical feasibility study', 'EdTech standards compliance checklist'],
    cards: [
      { t: 'Stakeholder workshops', d: 'With educators, administrators, IT teams', icon: 'bi-people-fill', theme: 'bento-orange' },
      { t: 'Learning audit', d: 'Existing educational infrastructure', icon: 'bi-mortarboard-fill', theme: 'bento-purple' },
      { t: 'Standards review', d: 'SCORM, LTI, accessibility standards', icon: 'bi-check-circle-fill', theme: 'bento-green' }
    ]
  },
  {
    num: '02', title: 'Design', dur: '2–3 weeks',
    desc: 'We design user-centered educational interfaces, learning architectures, and integration plans. Our designs prioritize learning outcomes while maintaining accessibility and engagement standards.',
    outputs: ['UX/UI wireframes for educational interfaces', 'Learning architecture design', 'Course structure diagrams', 'Integration specifications'],
    cards: [
      { t: 'User experience design', d: 'Student and instructor workflows', icon: 'bi-person-fill', theme: 'bento-blue' },
      { t: 'Learning design', d: 'Course structure and learning paths', icon: 'bi-book-fill', theme: 'bento-pink' },
      { t: 'Accessibility review', d: 'WCAG and educational accessibility', icon: 'bi-eye', theme: 'bento-yellow' }
    ]
  },
  {
    num: '03', title: 'Build', dur: '8–16 weeks',
    desc: 'We develop engaging educational applications with rigorous testing. Each sprint delivers tested, accessible code with full documentation for educational IT teams.',
    outputs: ['Working educational application modules', 'LMS integration', 'Content management systems', 'Comprehensive documentation'],
    cards: [
      { t: 'Engaging development', d: 'Following educational best practices', icon: 'bi-code-slash', theme: 'bento-purple' },
      { t: 'LMS integration', d: 'SCORM, LTI standards implementation', icon: 'bi-diagram-3-fill', theme: 'bento-green' },
      { t: 'Accessibility testing', d: 'WCAG validation and usability testing', icon: 'bi-eye-fill', theme: 'bento-orange' }
    ]
  },
  {
    num: '04', title: 'Validate', dur: '2–4 weeks',
    desc: 'We conduct thorough testing with educators and students, usability validation, and learning outcome verification. User testing ensures the solution meets real educational workflow needs.',
    outputs: ['User acceptance testing results', 'Learning outcome validation', 'Accessibility certification', 'Performance metrics'],
    cards: [
      { t: 'Educational testing', d: 'With educators and students', icon: 'bi-person-check-fill', theme: 'bento-blue' },
      { t: 'Learning validation', d: 'Outcome and engagement testing', icon: 'bi-graph-up', theme: 'bento-yellow' },
      { t: 'Accessibility certification', d: 'WCAG and educational documentation', icon: 'bi-file-earmark-check-fill', theme: 'bento-pink' }
    ]
  },
  {
    num: '05', title: 'Deploy', dur: '1–2 weeks',
    desc: 'We manage production deployment with educational-grade reliability, monitoring, and support. Our deployment process ensures zero disruption to learning operations.',
    outputs: ['Production deployment', '24/7 monitoring setup', 'Incident response procedures', 'Training and documentation'],
    cards: [
      { t: 'Reliable deployment', d: 'Following educational deployment protocols', icon: 'bi-rocket-takeoff-fill', theme: 'bento-green' },
      { t: 'Monitoring setup', d: '24/7 learning platform monitoring', icon: 'bi-activity', theme: 'bento-orange' },
      { t: 'Staff training', d: 'Comprehensive training for educational teams', icon: 'bi-person-video3', theme: 'bento-purple' }
    ]
  }
];

export default function EducationProcess({
  title = "Education technology development <br /> <span className=''>with learning outcomes at every step</span>",
  subTitle = "Our Education Development Process",
  content = "We follow education-specific development practices that prioritize learning outcomes, accessibility, and engagement.",
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