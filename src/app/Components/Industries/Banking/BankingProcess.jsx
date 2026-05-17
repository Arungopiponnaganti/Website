'use client';
import React, { useState } from 'react';
import SectionTitle from '../../Common/SectionTitle';

const STEPS = [
  {
    num: '01', title: 'Discovery', dur: '1–2 weeks',
    desc: 'We assess your financial technology needs, regulatory requirements, and existing systems. We identify opportunities for digital transformation and create a roadmap aligned with financial standards.',
    outputs: ['Financial requirements document', 'Regulatory compliance assessment', 'Technical feasibility study', 'PCI DSS compliance checklist'],
    cards: [
      { t: 'Stakeholder workshops', d: 'With banking executives, IT teams', icon: 'bi-people-fill', theme: 'bento-orange' },
      { t: 'Regulatory review', d: 'PCI DSS, SOC 2, financial regulations', icon: 'bi-shield-fill-check', theme: 'bento-purple' },
      { t: 'System audit', d: 'Existing banking infrastructure', icon: 'bi-bank', theme: 'bento-green' }
    ]
  },
  {
    num: '02', title: 'Design', dur: '2–3 weeks',
    desc: 'We design user-centered financial interfaces, secure data architectures, and integration plans. Our designs prioritize customer experience while maintaining strict security and compliance standards.',
    outputs: ['UX/UI wireframes for banking interfaces', 'Security architecture design', 'Data flow diagrams', 'Integration specifications'],
    cards: [
      { t: 'User experience design', d: 'Customer and admin workflows', icon: 'bi-person-fill', theme: 'bento-blue' },
      { t: 'Security design', d: 'Encryption and access controls', icon: 'bi-lock-fill', theme: 'bento-pink' },
      { t: 'Compliance review', d: 'PCI DSS and regulatory sign-off', icon: 'bi-check-circle-fill', theme: 'bento-yellow' }
    ]
  },
  {
    num: '03', title: 'Build', dur: '8–16 weeks',
    desc: 'We develop secure, scalable financial applications with rigorous testing. Each sprint delivers tested, compliant code with full documentation for financial IT teams.',
    outputs: ['Working financial application modules', 'Automated security testing', 'Integration with payment systems', 'Comprehensive documentation'],
    cards: [
      { t: 'Secure development', d: 'Following financial security best practices', icon: 'bi-code-slash', theme: 'bento-purple' },
      { t: 'Payment integration', d: 'Payment gateway and processing', icon: 'bi-credit-card-fill', theme: 'bento-green' },
      { t: 'Compliance testing', d: 'PCI DSS validation and security audits', icon: 'bi-shield-check', theme: 'bento-orange' }
    ]
  },
  {
    num: '04', title: 'Validate', dur: '2–4 weeks',
    desc: 'We conduct thorough testing with financial professionals, security audits, and compliance validation. User testing ensures the solution meets real banking workflow needs.',
    outputs: ['User acceptance testing results', 'Security audit report', 'Compliance certification', 'Performance validation'],
    cards: [
      { t: 'Financial testing', d: 'With banking professionals', icon: 'bi-person-check-fill', theme: 'bento-blue' },
      { t: 'Security audit', d: 'Penetration testing and vulnerability scan', icon: 'bi-bug-fill', theme: 'bento-yellow' },
      { t: 'Compliance certification', d: 'PCI DSS and regulatory documentation', icon: 'bi-file-earmark-check-fill', theme: 'bento-pink' }
    ]
  },
  {
    num: '05', title: 'Deploy', dur: '1–2 weeks',
    desc: 'We manage production deployment with financial-grade security, monitoring, and support. Our deployment process ensures zero disruption to financial operations and maintains data integrity.',
    outputs: ['Production deployment', '24/7 monitoring setup', 'Incident response procedures', 'Training and documentation'],
    cards: [
      { t: 'Secure deployment', d: 'Following financial deployment protocols', icon: 'bi-rocket-takeoff-fill', theme: 'bento-green' },
      { t: 'Monitoring setup', d: '24/7 health and security monitoring', icon: 'bi-activity', theme: 'bento-orange' },
      { t: 'Staff training', d: 'Comprehensive training for banking teams', icon: 'bi-person-video3', theme: 'bento-purple' }
    ]
  }
];

export default function BankingProcess({
  title = "Financial technology development <br /> <span className=''>with compliance and security at every step</span>",
  subTitle = "Our Financial Development Process",
  content = "We follow financial-specific development practices that prioritize customer security, data protection, and regulatory compliance.",
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