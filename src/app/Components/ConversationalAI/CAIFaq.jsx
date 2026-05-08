'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const FAQ_LIST = [
  {
    q: 'What if the bot says something wrong or embarrassing?',
    a: "This is the right question to ask, and it's why every bot we build has multiple safety layers. The LLM is constrained to answer only within the scope of your knowledge base — it's not allowed to speculate or make things up. We implement confidence thresholds: if the bot isn't certain of an answer, it routes to a human agent rather than guessing. We also run a red-team evaluation before launch, actively trying to get the bot to produce inappropriate responses so we can add guardrails before users do. Post-launch, we monitor conversations daily for the first month and flag any problematic exchanges.",
  },
  {
    q: 'Will our customers actually use it, or will they just ask for a human?',
    a: "Adoption depends almost entirely on how fast and accurate the bot is — not on whether customers prefer bots philosophically. When the bot resolves a query in 30 seconds that would have taken 4 hours via email, customers use it. The critical success factors are: a knowledge base that actually contains the answers, conversation design that anticipates real user language (not formal FAQ-style phrasing), and a friction-free handoff to a human when needed. We spend significant time on conversation design and user testing before launch specifically to get this right.",
  },
  {
    q: 'How do you train the bot on our specific products and policies?',
    a: "We use retrieval-augmented generation (RAG) — the bot doesn't memorise your information, it retrieves it at query time from a live knowledge base we build from your actual documents: product manuals, policy PDFs, FAQ articles, historical support tickets, and CRM data. This means updates to your products or policies reflect in the bot's answers immediately when you update the source documents — no retraining needed. We build the ingestion pipeline that keeps the knowledge base current, and you get an admin interface to add, edit, or remove documents yourself.",
  },
  {
    q: 'Does the bot hand off to a human agent — and does the agent get the conversation history?',
    a: "Yes, and the handoff is where most off-the-shelf bots fall down. When our bot escalates to a human — either because the user asks, because the bot's confidence is below threshold, or because certain intent types always warrant a human — the agent receives: the full conversation transcript, a summary of what the bot understood and tried, the user's contact details pre-pulled from the CRM, and a suggested next action. The user doesn't have to repeat themselves. We also integrate with your existing ticketing system (Zendesk, Freshdesk, ServiceNow) so the escalation creates a ticket automatically with all context attached.",
  },
  {
    q: 'Does the bot need constant maintenance after launch?',
    a: "A small amount — but we make it manageable. The knowledge base needs updating when your products or policies change — this is a content management task, not a technical one. Prompt engineering needs occasional tuning if you notice the bot handling certain question types poorly — we review monthly. New intents (new question categories) need to be identified and added quarterly. Most clients handle the knowledge base updates themselves using our admin interface, and opt for our managed retainer for the monthly prompt tuning and new intent builds. The bot gets meaningfully smarter every quarter with this rhythm.",
  },
];

export default function CAIFaq() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => setOpenIdx(openIdx === idx ? -1 : idx);

  return (
    <section className="cd-section py-5 pb-5 cd-section-muted">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <SectionTitle
              className="text-center"
              SubTitle="Common questions"
              Title="What teams ask before building a conversational AI"
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
