'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const FAQ_LIST = [
  {
    q: 'How accurate is this readiness assessment?',
    a: 'The assessment is designed to give directionally correct guidance, not a precise prediction. Its six dimensions — data, infrastructure, use case, skills, governance, and executive alignment — are the primary drivers of AI project success or failure, validated across hundreds of enterprise AI engagements. The score tells you where your gaps are likely to appear, not a binary pass/fail. Treat it as a structured conversation starter, not a final verdict.',
  },
  {
    q: 'We already have an AI strategy — how does this add value?',
    a: 'The most common failure mode in AI strategy is overconfidence in one or two dimensions while underestimating others. We see organisations with excellent data infrastructure and poor governance, or clear use cases and no ML capability. The assessment surfaces the dimension you\'re least likely to have self-diagnosed. Most teams that complete it identify at least one significant gap they hadn\'t formally articulated.',
  },
  {
    q: 'What happens after I see my score?',
    a: 'You can take the score as-is and use it internally, or book a free 45-minute consultation where we walk through your specific dimension scores, explain what each means in practice for your industry, and help you build a 90-day AI adoption plan. The consultation is non-commercial — it\'s designed to give you something useful regardless of whether you engage Mayurasoft for any implementation work.',
  },
  {
    q: 'Our organisation is large — is this assessment relevant at different levels?',
    a: 'The assessment is most useful at the business unit or department level, not the whole-enterprise level. A large organisation\'s "AI readiness" varies dramatically between departments — the data science team in finance may be AI-ready while the operations team is still early stage. We recommend completing one assessment per business unit you\'re considering for an AI project.',
  },
  {
    q: 'What if we score low — should we not pursue AI at all?',
    a: 'A low score doesn\'t mean "don\'t do AI" — it means the path to successful AI runs through foundational work first. Every organisation we\'ve worked with that achieved a low readiness score has successfully deployed production AI within 12–18 months by addressing prerequisites in the right order. The assessment helps you spend the next 3–6 months on the right things, so the subsequent AI build doesn\'t stall or fail.',
  },
];

export default function ARAFaq() {
  const [openIdx, setOpenIdx] = useState(0);
  const toggle = (idx) => setOpenIdx(openIdx === idx ? -1 : idx);

  return (
    <section className="cd-section py-5 cd-section-muted border-top">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <SectionTitle
              className="text-center mb-5"
              SubTitle="Common questions"
              Title="About the AI Readiness Assessment"
              Content=""
              isDarkMode={false}
            />
            <div className="faq-container mt-4">
              {FAQ_LIST.map((faq, idx) => (
                <div
                  key={idx}
                  className="faq-item"
                  style={{
                    background: '#fff', borderRadius: '10px', marginBottom: '15px',
                    border: openIdx === idx ? '1px solid #1a1e2d' : '1px solid #e0e0e0',
                    transition: 'all 0.3s ease', overflow: 'hidden',
                  }}
                >
                  <div
                    className="faq-question"
                    onClick={() => toggle(idx)}
                    style={{
                      padding: '20px 25px', display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', cursor: 'pointer', fontWeight: '600', fontSize: '16px',
                      color: openIdx === idx ? '#1a1e2d' : '#444',
                    }}
                  >
                    <span style={{ paddingRight: '20px' }}>{faq.q}</span>
                    <i className="bi bi-plus-lg" style={{
                      transform: openIdx === idx ? 'rotate(45deg)' : 'none',
                      transition: 'transform 0.3s ease',
                      color: openIdx === idx ? '#ff3c00' : '#888', flexShrink: 0,
                    }} />
                  </div>
                  <div
                    className="faq-answer"
                    style={{
                      maxHeight: openIdx === idx ? '500px' : '0',
                      padding: openIdx === idx ? '0 25px 25px 25px' : '0 25px',
                      opacity: openIdx === idx ? 1 : 0,
                      transition: 'all 0.3s ease', fontSize: '15px', color: '#666', lineHeight: '1.7',
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
