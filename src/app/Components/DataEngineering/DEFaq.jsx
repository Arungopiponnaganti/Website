'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const FAQ_LIST = [
  {
    q: 'Our data is too messy — is it even worth building infrastructure on top of it?',
    a: "This is the most common thing we hear — and the answer is always the same: messy data is not a blocker, it's the problem we solve. Every data infrastructure engagement starts with a data profiling phase where we inventory what you have, assess quality dimensions (completeness, accuracy, consistency, timeliness), and design the transformation layer to produce clean, governed data downstream. You don't need clean data to start — you need an infrastructure that produces clean data. That's what we build.",
  },
  {
    q: 'Will cloud data warehouse costs spiral out of control?',
    a: "Only if the infrastructure isn't designed with cost in mind from the start. We build cost controls into every platform we deliver: query optimisation to reduce compute costs, intelligent clustering and partitioning so scans read less data, automated warehouse suspension during inactivity, and a cost monitoring dashboard with budget alerts. We also size the platform to your actual query patterns — not a spec sheet guess. Most clients see cloud data warehouse costs 30–50% lower than their naive self-build estimates after our architecture review.",
  },
  {
    q: 'We have critical data in legacy on-premise systems — how do you handle that?',
    a: "Legacy source systems are the most common starting point for our engagements. We connect to Oracle, SQL Server, SAP, IBM Db2, and any legacy system with a JDBC or ODBC connection — or via CDC (Change Data Capture) for high-frequency updates. We don't require you to modernise the source system before we can extract from it. The ingestion layer we build is independent of the source system's age or architecture. The source stays untouched; we only read from it.",
  },
  {
    q: 'What happens if a pipeline breaks after you hand over?',
    a: "Every pipeline we deliver includes: automated alerting (Slack and email) when a pipeline fails or produces data quality violations, a documented runbook explaining exactly what each pipeline does and how to debug common failures, and 30 days of post-handover support included in every engagement. We also offer a managed operations retainer where we remain on-call for pipeline incidents with a defined SLA. Most clients choose the retainer for their most critical pipelines and manage the lower-priority ones internally.",
  },
  {
    q: 'We already have some pipelines — do we need to rebuild everything?',
    a: "Almost never. We start with a pipeline audit — assessing what you have, what's reliable, and what's causing problems. Existing pipelines that work well get documented and incorporated into the new architecture. Only pipelines with structural problems (no error handling, no monitoring, unreliable scheduling, undocumented logic) get rebuilt. The goal is to improve your infrastructure incrementally, not to replace everything at once and create unnecessary risk and cost.",
  },
];

export default function DEFaq() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => setOpenIdx(openIdx === idx ? -1 : idx);

  return (
    <section className="cd-section py-5">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <SectionTitle
              className="text-center mb-5"
              SubTitle="Common questions"
              Title="What data and engineering teams ask before starting"
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
                      maxHeight: openIdx === idx ? '500px' : '0',
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
