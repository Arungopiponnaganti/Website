'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const FAQ_LIST = [
  {
    q: 'Does our data get sent to OpenAI or Anthropic?',
    a: "This is the most common question we get, and the answer depends on your configuration. We can architect your integration to use the standard API — where data is sent to the provider's API but not used for training under their enterprise agreements — or to run models fully on-premise or in your own cloud account using open-source models like Llama 3 or Mistral. For highly regulated industries (BFSI, healthcare), we default to private deployment. We'll walk you through every data flow in the architecture document before we build anything.",
  },
  {
    q: 'How do you handle AI hallucinations in production?',
    a: 'Every AI integration we build includes a reliability layer specifically to contain hallucination risk. For factual outputs, we implement retrieval-augmented generation (RAG) so the model grounds its responses in your actual data rather than its training set. For high-stakes outputs (financial summaries, medical content, legal drafts), we add confidence scoring, human-in-the-loop gates, and output validation checks. We also implement continuous evaluation — regularly testing the model against a golden dataset to catch drift before it reaches users.',
  },
  {
    q: 'Will AI API costs be unpredictable?',
    a: 'Only if the integration isn\'t designed with cost in mind. We build token budgets, caching layers, and request batching into every integration from day one. We also implement cost monitoring dashboards so you can see API spend per user, per feature, or per workflow in real time. For high-volume use cases, we evaluate smaller, cheaper models for specific tasks — not every call needs GPT-4. In practice, our integrations cost 40–60% less than naive implementations because we design for efficiency from the start.',
  },
  {
    q: 'What if we want to switch AI models later?',
    a: 'We design for model portability as a default. Our integration layer uses an abstraction API so that swapping from, say, GPT-4o to Claude 3.5 Sonnet or Llama 3 is a configuration change, not a rebuild. We also version your prompts — so if a model update changes behaviour, you can roll back to a previous prompt version while you evaluate the new one. Model lock-in is a real risk, and it\'s one we actively design around.',
  },
  {
    q: 'How long does a typical AI integration take?',
    a: 'A proof-of-concept integration — one use case, your actual data, working in your system — takes 2–4 weeks. A production-grade integration with evaluation, monitoring, safety guardrails, and team training is typically 6–12 weeks depending on complexity. The most common variable is data readiness: if your data is clean and accessible via API, we move fast. If we need to build a data pipeline first, that adds time. We assess this in the free audit and give you a precise estimate before any commitment.',
  },
];

export default function AIFaq() {
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
              Title="What teams ask before integrating AI"
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
