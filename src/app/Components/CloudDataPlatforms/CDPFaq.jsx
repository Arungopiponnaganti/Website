'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const FAQ_LIST = [
  {
    q: "We're not a large company — do we need a cloud data platform?",
    a: "It depends on how many data sources you have and how often you need to combine them for decisions. If you have three or more systems — a CRM, an accounting tool, and an operational database, for example — and you're currently reconciling them manually in spreadsheets, a platform will save significant time. The entry-level cost on cloud providers like BigQuery or Snowflake is low enough that organisations with 50–100 employees commonly benefit. The honest answer: if your reporting is manual and unreliable, and it's affecting decisions, the platform cost is likely lower than the cost of the problem.",
  },
  {
    q: 'We already have Snowflake / BigQuery / Redshift. Why do we still have problems?',
    a: "Having a cloud warehouse is not the same as having a functioning data platform. The warehouse is one component. The problems most organisations face are in the layers around it: pipelines that are fragile and undocumented, transformation logic that lives in spreadsheets rather than the warehouse, no governance on how metrics are defined, and no monitoring that catches data quality issues before stakeholders do. We assess the full stack — not just the warehouse product — and typically find that the warehouse itself is not the issue.",
  },
  {
    q: 'How does this relate to tools like Snowflake, Databricks, or dbt?',
    a: "These are the components we use to build the platform, not the platform itself. Snowflake and BigQuery are cloud warehouses — the storage and query engine. Databricks is a platform for large-scale data processing and machine learning workloads. dbt (data build tool) is used to write, test, document, and version the transformation logic that turns raw data into structured, analysis-ready tables. The platform is the combination of these tools, configured together, with the ingestion pipelines and governance layers that make them work reliably. We select the right combination for your workload and team.",
  },
  {
    q: 'What happens to the platform when your engagement ends?',
    a: "Everything we build is documented and designed to be operated by your team. Transformation models are written in dbt — version-controlled SQL that any analyst or engineer can read and modify. Infrastructure is defined as code (Terraform) so changes are reviewable and reversible. We write runbooks for every pipeline and run paired working sessions with your engineers during delivery, not just at the end. The goal is for your team to own and extend the platform independently. If you prefer us to continue operating it, we offer a managed service — but it is a choice, not a dependency.",
  },
  {
    q: 'Our data quality is poor. Should we clean it before building a platform?',
    a: "No — and this is a common misconception. Cleaning data without a platform is temporary. The same processes that produced poor-quality data will continue producing it. The platform is where you define and enforce quality rules — what constitutes a valid record, what thresholds trigger alerts, what data fails validation and why. We build the data quality layer as part of the platform, not as a prerequisite for it. That said, we do a data profiling exercise early in the engagement so you understand the current state and can set realistic expectations for what the platform will surface.",
  },
];

export default function CDPFaq() {
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
              Title="What we hear before most platform engagements"
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
