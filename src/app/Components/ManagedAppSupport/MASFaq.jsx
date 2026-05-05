'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const faqList = [
  {
    q: 'We already have a DevOps engineer — do we still need managed support?',
    a: 'Managed support and a DevOps engineer serve different functions. Your DevOps engineer builds and improves the infrastructure — they shouldn\'t be on-call at 2am for a production incident on top of their build work. MayuraSoft handles the operational layer — monitoring, incident response, patching — so your DevOps engineer can focus on platform improvement without being the permanent on-call person for every alert.'
  },
  {
    q: 'How do you handle incidents without knowing our application deeply?',
    a: 'This is exactly what the 10-day onboarding is designed to solve. We spend the first week doing an architecture deep-dive, reviewing past incidents, writing runbooks for every known failure mode, and running an incident simulation. By day 10, our team knows your application\'s critical paths and failure patterns before an incident occurs — not during one.'
  },
  {
    q: 'What if we want to bring support back in-house later?',
    a: 'All runbooks, alert configurations, monitoring dashboards, and documentation are yours — fully exported and handed over. We maintain everything in a format your team can own from day one. Transitioning out is a structured offboarding, not a crisis — and we actively support it if that\'s the direction you choose. There is no data or tooling lock-in.'
  },
  {
    q: 'Do you support applications you didn\'t build?',
    a: 'Yes — most of our managed support clients come to us with applications built by someone else. The onboarding process is specifically designed for this: we perform a full application health assessment, document the architecture, and get to a point where our team can support the application confidently regardless of who wrote the original code.'
  }
];

export default function MASFaq() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleOpen = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="cd-section py-5">
      <div className="container py-4">

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <SectionTitle
              className="text-center mb-5"
              SubTitle="Common questions"
              Title="What teams ask before moving to managed support"
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
                    <span style={{ paddingRight: '20px' }}>{faq.q}</span>
                    <i
                      className="bi bi-plus-lg"
                      style={{
                         transform: openIdx === idx ? 'rotate(45deg)' : 'none',
                         transition: 'transform 0.3s ease',
                         color: openIdx === idx ? '#ff3c00' : '#888',
                         flexShrink: 0
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
