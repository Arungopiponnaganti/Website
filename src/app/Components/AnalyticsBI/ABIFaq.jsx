'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const FAQ_LIST = [
  { q: "Why do our dashboards show different numbers for the same metric?", a: "This is the most common BI pain we encounter — and it's always an infrastructure problem, not a dashboard problem. Different dashboards pull from different tables, apply different filters, and use different date range logic. The fix is a semantic layer — a single place where every business metric is defined once, with a single SQL calculation, and all dashboards pull from that definition. Once a semantic layer exists, \"revenue\" means the same thing in every dashboard, every report, and every conversation." },
  { q: "Our analysts spend most of their time building reports, not doing analysis — how do we fix that?", a: "Self-serve BI is the fix — but only when the data underneath it is trusted. The reason most self-serve BI investments fail is that business users try to use the tools, produce numbers that don't match the official dashboard, and conclude that self-serve can't be trusted. We solve this by building a governed semantic layer first, then enabling self-serve on top of it. Business users drag and drop dimensions and measures that are guaranteed to produce consistent, correct numbers — so adoption happens naturally." },
  { q: "We already have Power BI / Tableau — do we need a new tool?", a: "Almost never. The tool is rarely the problem — the data model and governance underneath it are. We work with your existing BI tool and fix the semantic layer, data model, and metric definitions. Switching tools without fixing the data model produces the same problems in a different interface." }
];

export default function ABIFaq() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleOpen = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="cd-section py-5 bg-white">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <SectionTitle
              className="text-center mb-5"
              SubTitle="Common questions"
              Title="What BI buyers ask before starting"
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
                    onClick={() => toggleOpen(idx)}
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
