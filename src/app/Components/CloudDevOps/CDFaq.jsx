'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const FAQ = [
  {
    q: 'Are we going to get locked into one cloud provider?',
    a: "We design for portability by default. Using Terraform for infrastructure as code, Kubernetes for container orchestration, and provider-agnostic tooling wherever possible means your infrastructure can move between clouds without a full rewrite. We'll tell you upfront when a managed service creates genuine lock-in risk — and whether that trade-off is worth it for your use case.",
  },
  {
    q: 'How do you handle cloud security and compliance requirements?',
    a: 'Security is built into every layer of the infrastructure we design — not added at the end. We implement network segmentation, least-privilege IAM policies, secrets management, encryption at rest and in transit, and audit logging as defaults. For regulated industries (BFSI, healthcare), we map infrastructure design to specific compliance requirements (PCI DSS, HIPAA, SOC 2) from day one.',
  },
  {
    q: 'Our cloud bill is unpredictable — can you fix that?',
    a: 'This is one of the most common issues we resolve. Unpredictable bills are almost always caused by over-provisioned resources, missing auto-scaling policies, untagged resources making cost allocation impossible, and underused reserved instance capacity. Our cloud audit typically identifies 30–50% cost reduction opportunities within two weeks. We implement budget alerts and anomaly detection so you\'re never surprised again.',
  },
  {
    q: 'We already have some DevOps practices — can you improve what we have?',
    a: "Yes — and this is often more valuable than starting from scratch. We start with a DevOps maturity assessment of your current pipeline, identify the highest-impact gaps, and improve incrementally. You don't need to throw away what's working. Common quick wins: adding automated test gates to an existing pipeline, improving deployment rollback procedures, and implementing proper secrets management.",
  },
  {
    q: 'What happens to our infrastructure knowledge when the engagement ends?',
    a: "Everything is documented and handed over. Every piece of infrastructure we create is defined in Terraform code your team can read, modify, and run. We write runbooks for every operational procedure. We run training sessions with your engineers before handover. The goal is to leave you more capable, not dependent on us — though most clients choose to continue with a managed operations retainer because it frees their team to ship product.",
  },
];

export default function CDFaq() {
  const [openIdx, setOpenIdx] = useState(-1);

  const toggle = (i) => setOpenIdx(openIdx === i ? -1 : i);

  return (
    <section className="cd-section cd-section-muted">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            <SectionTitle
              className="text-center mb-5"
              SubTitle="Common questions"
              Title="What engineering and IT leaders ask before starting"
              isDarkMode={false}
            />

            <div className="faq-container mt-4">
              {FAQ.map((faq, i) => (
                <div
                  key={i}
                  className="faq-item"
                  style={{
                    background: '#fff',
                    borderRadius: '10px',
                    marginBottom: '12px',
                    border: openIdx === i ? '1px solid #050a1e' : '1px solid #e5e7eb',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div
                    className="faq-question"
                    onClick={() => toggle(i)}
                    style={{
                      padding: '20px 24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '15px',
                      color: openIdx === i ? '#050a1e' : '#374151',
                      gap: '12px',
                    }}
                  >
                    {faq.q}
                    <i
                      className="bi bi-plus-lg"
                      style={{
                        transform: openIdx === i ? 'rotate(45deg)' : 'none',
                        transition: 'transform 0.25s',
                        color: openIdx === i ? '#ff3c00' : '#9ca3af',
                        flexShrink: 0,
                        fontSize: '14px',
                      }}
                    ></i>
                  </div>
                  <div
                    style={{
                      maxHeight: openIdx === i ? '500px' : '0',
                      padding: openIdx === i ? '0 24px 22px' : '0 24px',
                      opacity: openIdx === i ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      fontSize: '14px',
                      color: '#6b7280',
                      lineHeight: '1.75',
                    }}
                  >
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
