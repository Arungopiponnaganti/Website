'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const FAQ_LIST = [
  {
    q: "Isn't data governance just building a data catalogue?",
    a: "A catalogue is one tool in a governance framework — and it's often the last thing we build, not the first. Starting with a catalogue without defining ownership, quality rules, and policies produces a catalogue that nobody updates and everyone ignores within six months. We start with ownership (who is accountable for each data domain), then define quality standards (what 'good' looks like for each dataset), then build the processes to enforce them — and then the catalogue becomes useful because there's living, accurate information to put in it. Governance is an operating model, not a software installation.",
  },
  {
    q: 'Our data is in terrible shape — should we fix it before starting governance?',
    a: "No. Cleaning data without governance is like tidying your room without deciding where things belong — it gets messy again immediately. Governance and data quality must be implemented together because governance defines the rules and ownership that prevent data quality from degrading. In practice, we run a parallel track: establish governance policies and ownership in the first four weeks, then implement automated data quality rules in weeks five through eight. The quality rules enforce the governance decisions — and new data that enters the system is governed from day one rather than needing to be cleaned retroactively.",
  },
  {
    q: 'Who should own governance in our organisation — IT or business?',
    a: "The single most common reason data governance programmes fail is IT owning it entirely. IT can build the tooling and implement the technical controls — but data ownership must sit with the business domains that produce and consume the data. A finance dataset should be owned by finance leadership, not the data engineering team. Our governance operating model creates a federated structure: data owners in each business domain are accountable for quality and policy within their domain, while a central data governance council sets standards and arbitrates cross-domain decisions. We design this structure and run the change management programme to activate it — the technology is the easy part.",
  },
  {
    q: 'How does data governance help with DPDPA and GDPR compliance?',
    a: "Both DPDPA (India's Digital Personal Data Protection Act) and GDPR impose obligations that are impossible to meet without governance infrastructure: you must know what personal data you hold, where it came from, where it flows, how long you retain it, and who can access it. A data catalogue with lineage maps your personal data holdings. A data classification policy identifies which datasets contain PII. A data retention policy ensures data is deleted when obligations require. Access controls enforce need-to-know principles. Every one of these requirements is a governance deliverable. We map our framework explicitly to DPDPA Articles and GDPR obligations so you have a documented compliance trail — not just a framework that might comply.",
  },
  {
    q: "We've tried governance before and it didn't stick — what's different here?",
    a: "Failed governance programmes share three root causes: too much tooling and too little process, no real ownership (a governance committee with no teeth), and no connection to a business problem that stakeholders feel urgently. Our approach addresses all three. We don't start with tool selection — we start with the business problems governance will solve (bad report numbers, compliance exposure, AI readiness) and design the programme around those outcomes. We ensure every data owner has a specific, measurable accountability rather than a general responsibility. And we build governance into existing workflows (dbt tests, pipeline monitoring, PR reviews) rather than creating a parallel governance process that competes with delivery work for attention.",
  },
];

export default function DGFaq() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => setOpenIdx(openIdx === idx ? -1 : idx);

  return (
    <section className="cd-section py-5 cd-section-muted">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <SectionTitle
              className="text-center mb-5"
              SubTitle="Common questions"
              Title="What data teams ask before starting a governance programme"
              Content=""
              isDarkMode={false}
            />

            <div className="faq-container mt-4">
              {FAQ_LIST.map((faq, idx) => (
                <div
                  key={idx}
                  className="faq-item"
                  style={{
                    background: '#fff',
                    borderRadius: '10px',
                    marginBottom: '15px',
                    border: openIdx === idx ? '1px solid #1a1e2d' : '1px solid #e0e0e0',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    className="faq-question"
                    onClick={() => toggle(idx)}
                    style={{
                      padding: '20px 25px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '16px',
                      color: openIdx === idx ? '#1a1e2d' : '#444',
                    }}
                  >
                    <span style={{ paddingRight: '20px' }}>{faq.q}</span>
                    <i
                      className="bi bi-plus-lg"
                      style={{
                        transform: openIdx === idx ? 'rotate(45deg)' : 'none',
                        transition: 'transform 0.3s ease',
                        color: openIdx === idx ? '#ff3c00' : '#888',
                        flexShrink: 0,
                      }}
                    />
                  </div>

                  <div
                    className="faq-answer"
                    style={{
                      maxHeight: openIdx === idx ? '600px' : '0',
                      padding: openIdx === idx ? '0 25px 25px 25px' : '0 25px',
                      opacity: openIdx === idx ? 1 : 0,
                      transition: 'all 0.3s ease',
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.7',
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
