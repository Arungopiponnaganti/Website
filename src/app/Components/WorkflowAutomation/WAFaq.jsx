'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const FAQ_LIST = [
  {
    q: 'What happens when the automation breaks or something unexpected occurs?',
    a: "Every automation we build includes comprehensive error handling — retry logic for transient failures, dead-letter queues for items that fail after retries, and Slack or email alerts for anything that needs human attention. Nothing fails silently. We also build a monitoring dashboard that shows run status in real time, so your team always knows what's running, what's succeeded, and what needs review. The automation never just stops — it routes to the right person with full context.",
  },
  {
    q: 'Will automation replace our team?',
    a: "The automations we build eliminate repetitive execution, not human judgment. The invoice processing automation doesn't replace your finance team — it removes the 3-hour daily data entry so your finance team spends those 3 hours on analysis, vendor relationships, and exceptions that actually require their expertise. Every engagement includes a change management discussion: how to reframe automation as a capability upgrade for your team, not a headcount threat.",
  },
  {
    q: 'Our process has lots of exceptions and edge cases — can it still be automated?',
    a: "This is the most common concern, and the answer is almost always yes — with the right design. Exceptions don't prevent automation; they define the escalation paths. Our process mapping workshop specifically maps every exception, edge case, and \"it depends\" rule. For truly unpredictable cases, we build a human-in-the-loop gate — the automation handles the standard flow, pauses and routes for anything unusual. You get 80% automation coverage with 100% confidence that edge cases are handled properly.",
  },
  {
    q: 'Do you use no-code tools like Zapier or Make, or build custom code?',
    a: "Both — and we recommend based on what's right for your use case, not what's easiest for us to build. No-code tools (n8n, Make, Zapier) are excellent for standard integrations between common apps, and they're easier for your team to maintain. Custom code (Python, Node.js) is appropriate for complex logic, high-volume processing, or when a no-code tool's rate limits or data handling won't scale. Many of our automations combine both — no-code for orchestration, custom functions for the logic that needs it.",
  },
  {
    q: 'How long does it take to automate a process?',
    a: "A straightforward single-system automation — like routing form submissions to a CRM and sending a templated email — takes 3–5 days. A multi-system workflow with AI classification, conditional routing, and ERP integration typically takes 3–6 weeks. The biggest variable is always the process mapping phase: the more complex and exception-laden the process, the longer we need to document it before building. We give you a precise timeline after the free process audit.",
  },
];

export default function WAFaq() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => setOpenIdx(openIdx === idx ? -1 : idx);

  return (
    <section className="cd-section py-5 pb-2">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <SectionTitle
              className="text-center"
              SubTitle="Common questions"
              Title="What teams ask before automating their workflows"
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
