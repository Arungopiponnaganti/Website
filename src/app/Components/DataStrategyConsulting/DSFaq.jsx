'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const FAQ_LIST = [
  { q: "How is a data strategy different from a technology roadmap?", a: "A technology roadmap says \"we will implement Snowflake in Q1, dbt in Q2, and Power BI in Q3.\" A data strategy says \"we need to reduce revenue reporting cycle time from 5 days to same-day, which requires a reliable pipeline from our ERP, a governance layer to define revenue consistently, and a board-facing dashboard — here is the technology sequence that delivers that outcome, and here is the ROI.\" Technology roadmaps are means. Data strategies are about ends, sequenced by business value — with technology as the delivery mechanism." },
  { q: "We're not a large enterprise — do we need a data strategy?", a: "The organisations that benefit most from a data strategy are often Series A–C companies that are scaling fast and making data investment decisions reactively — hiring a data engineer here, buying a tool there — without a coherent view of where data creates the most value. A 4-week lightweight strategy engagement (not a 6-month McKinsey project) can prevent 18 months of misaligned investment. The ROI of a strategy engagement is measured in avoided rework, not just future gains." },
  { q: "Will MayuraSoft recommend their own services in the strategy?", a: "Our strategy engagements are governed independently from our delivery practice. The strategy team's mandate is to find the right approach for your organisation — which sometimes means recommending an open-source tool over a paid one, an in-house hire over a partner, or a different vendor entirely for a specific capability. We document our independence commitment at the start of every strategy engagement. We'd rather lose a delivery contract by giving honest advice than win it by giving self-serving advice — because repeat clients and referrals come from the former, not the latter." }
];

export default function DSFaq() {
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
              Title="What leaders ask before a strategy engagement"
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
