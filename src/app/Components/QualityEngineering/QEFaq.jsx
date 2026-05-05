'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const FAQ = [
  {
    q: 'We already have a QA team — why would we need you?',
    a: "Most in-house QA teams are excellent at finding bugs — but don't have the capacity to build and maintain a mature automation framework alongside their regular testing work. We typically embed alongside existing QA teams to build the automation layer, freeing your team to focus on exploratory and domain-specific testing. We're an accelerant, not a replacement.",
  },
  {
    q: 'How long does it take to see value from test automation?',
    a: "You'll have a running smoke test suite in week one and a core regression suite in week three. The real payback starts appearing in sprint five or six — when your team stops spending half of every sprint on manual regression and starts shipping new features with that time instead. Automation compounds: the suite grows with the product, and the time savings grow with it.",
  },
  {
    q: 'What happens to the test suite when the engagement ends?',
    a: "The test suite, documentation, and framework are yours — completely. We write all automation in standard, well-documented code (Playwright, pytest, etc.) that any engineer can read and extend. We run paired working sessions with your developers throughout so that framework knowledge lives in your team by the time we hand over.",
  },
  {
    q: 'Can you test a product that has no existing test coverage at all?',
    a: "Yes — and this is one of the most common situations we encounter. We start with a risk-based coverage model: identify the most critical user journeys and highest-risk code paths, and automate those first. You get meaningful coverage fast, rather than waiting months for 100% coverage of lower-risk code.",
  },
  {
    q: 'Do you do manual testing or only automation?',
    a: "Both — but with a clear philosophy. We automate everything that is deterministic and repetitive (regression, API contracts, performance baselines). We apply human judgment to exploratory testing, usability edge cases, accessibility review, and anything that requires reasoning about user intent. The goal is to free human testers from repetitive work, not replace the thinking that only humans can do.",
  },
];

export default function QEFaq() {
  const [openIdx, setOpenIdx] = useState(-1);

  const toggle = (i) => setOpenIdx(openIdx === i ? -1 : i);

  return (
    <section className="cd-section cd-section-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            <SectionTitle
              className="text-center mb-5"
              SubTitle="Common questions"
              Title="What teams ask before investing in quality engineering"
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
