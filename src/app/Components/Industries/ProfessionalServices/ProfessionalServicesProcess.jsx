'use client';
import React, { useState } from 'react';
import SectionTitle from '../../Common/SectionTitle';

const STEPS = [
  {
    num: '01', title: 'Discovery', dur: '1–2 weeks',
    desc: 'We assess your professional services technology needs, regulatory requirements, and existing systems. We identify opportunities for digital transformation and create a roadmap aligned with professional services industry standards.',
    outputs: ['Professional services requirements document', 'Regulatory compliance assessment', 'Technical feasibility study', 'Professional services industry compliance checklist'],
    cards: [
      { t: 'Stakeholder workshops', d: 'With practice leaders, partners', icon: 'bi-people-fill', theme: 'bento-orange' },
      { t: 'Regulatory review', d: 'Professional services regulations and compliance', icon: 'bi-shield-fill-check', theme: 'bento-purple' },
      { t: 'System audit', d: 'Existing professional services infrastructure', icon: 'bi-briefcase-fill', theme: 'bento-green' }
    ]
  },
  {
    num: '02', title: 'Design', dur: '2–3 weeks',
    desc: 'We design user-centered professional services interfaces, secure data architectures, and integration plans. Our designs prioritize client experience while maintaining strict security and compliance standards.',
    outputs: ['UX/UI wireframes for professional services interfaces', 'Security architecture design', 'Data flow diagrams', 'Integration specifications'],
    cards: [
      { t: 'User experience design', d: 'Client and partner workflows', icon: 'bi-person-fill', theme: 'bento-blue' },
      { t: 'Security design', d: 'Encryption and access controls', icon: 'bi-lock-fill', theme: 'bento-pink' },
      { t: 'Compliance review', d: 'Professional services regulatory sign-off', icon: 'bi-check-circle-fill', theme: 'bento-yellow' }
    ]
  },
  {
    num: '03', title: 'Build', dur: '8–16 weeks',
    desc: 'We develop secure, scalable professional services applications with rigorous testing. Each sprint delivers tested, compliant code with full documentation for professional services IT teams.',
    outputs: ['Working professional services application modules', 'Automated security testing', 'Integration with professional services systems', 'Comprehensive documentation'],
    cards: [
      { t: 'Secure development', d: 'Following professional services security best practices', icon: 'bi-code-slash-fill', theme: 'bento-purple' },
      { t: 'Practice integration', d: 'Client management and automation', icon: 'bi-gear-fill', theme: 'bento-green' },
      { t: 'Compliance testing', d: 'Professional services validation and security audits', icon: 'bi-shield-check-fill', theme: 'bento-orange' }
    ]
  },
  {
    num: '04', title: 'Validate', dur: '2–4 weeks',
    desc: 'We conduct thorough testing with professional services professionals, security audits, and compliance validation. User testing ensures the solution meets real professional services workflow needs.',
    outputs: ['User acceptance testing results', 'Security audit report', 'Compliance certification', 'Performance validation'],
    cards: [
      { t: 'Professional services testing', d: 'With professional services professionals', icon: 'bi-person-check-fill', theme: 'bento-blue' },
      { t: 'Security audit', d: 'Penetration testing and vulnerability scan', icon: 'bi-bug-fill', theme: 'bento-yellow' },
      { t: 'Compliance certification', d: 'Professional services regulatory documentation', icon: 'bi-file-earmark-check-fill', theme: 'bento-pink' }
    ]
  },
  {
    num: '05', title: 'Deploy', dur: '1–2 weeks',
    desc: 'We manage production deployment with professional services-grade security, monitoring, and support. Our deployment process ensures zero disruption to professional services operations and maintains data integrity.',
    outputs: ['Production deployment', '24/7 monitoring setup', 'Incident response procedures', 'Training and documentation'],
    cards: [
      { t: 'Secure deployment', d: 'Following professional services deployment protocols', icon: 'bi-rocket-takeoff-fill', theme: 'bento-green' },
      { t: 'Monitoring setup', d: '24/7 health and security monitoring', icon: 'bi-activity-fill', theme: 'bento-orange' },
      { t: 'Staff training', d: 'Comprehensive training for professional services teams', icon: 'bi-person-video3-fill', theme: 'bento-purple' }
    ]
  }
];

export default function ProfessionalServicesProcess({
  title = "Professional services technology development <br /> <span className=''>with compliance and security at every step</span>",
  subTitle = "Our Professional Services Development Process",
  content = "We follow professional services-specific development practices that prioritize client security, data protection, and regulatory compliance.",
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