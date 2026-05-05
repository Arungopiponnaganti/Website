'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const faqList = [
  {
    q: 'Do we retain ownership of the code and IP?',
    a: 'Yes — 100%. All source code, documentation, and intellectual property transfers to you at the end of the engagement. We sign an IP assignment agreement before work begins, not as an afterthought.'
  },
  {
    q: 'How do you handle scope changes mid-project?',
    a: 'Scope changes are normal in product development. We handle them via a formal change request process — you see the impact on timeline and cost before we act on anything. No scope creep, no hidden charges.'
  },
  {
    q: 'Can you work with our existing in-house team?',
    a: 'Absolutely — this is our most common setup. We embed as an extended team within your workflows, using your existing tools (Jira, Slack, GitHub, Notion) and reporting to your product lead. No new processes forced on your team.'
  },
  {
    q: 'What happens after launch? Do you disappear?',
    a: "No. Every engagement includes a structured handover and a post-launch period. Most clients continue with us on a managed support or scale-up retainer. We're built for long-term partnerships, not one-off deliveries."
  },
  {
    q: 'How quickly can you start?',
    a: "We can typically begin within 2 weeks of contract signing — including running a discovery workshop in week one and delivering your first sprint demo in week three. We maintain a ready talent bench so there's no hiring delay on our end."
  }
];

export default function PEFaq() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleOpen = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="cd-section py-5">
      <div className="container pt-4">

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <SectionTitle
              className="text-center mb-5"
              SubTitle="Common questions"
              Title="What clients ask before signing"
              Content=""
              isDarkMode={false}
            />

            <div className="faq-container mt-4">
              {faqList.map((faq, idx) => (
                <div
                  key={idx}
                  className="faq-item"
                  style={{
                    background: '#fff',
                    borderRadius: '10px',
                    marginBottom: '15px',
                    border: openIdx === idx ? '1px solid #1a1e2d' : '1px solid #e0e0e0',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden'
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
                      color: openIdx === idx ? '#1a1e2d' : '#444'
                    }}
                  >
                    {faq.q}
                    <i
                      className="bi bi-plus-lg"
                      style={{
                        transform: openIdx === idx ? 'rotate(45deg)' : 'none',
                        transition: 'transform 0.3s ease',
                        color: openIdx === idx ? '#ff3c00' : '#888'
                      }}
                    ></i>
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
                      lineHeight: '1.7'
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
