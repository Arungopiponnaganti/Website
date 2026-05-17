'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const FAQ_LIST = [
  {
    q: 'How accurate is AI extraction compared to manual data entry?',
    a: 'Accuracy depends on document layout, scan quality, handwriting, field complexity, and the validation rules around each field. We start by reviewing sample documents, identifying the target fields, and defining confidence thresholds. Fields below your threshold can be routed to a human review queue instead of being posted automatically.',
  },
  {
    q: 'Can it handle documents in multiple languages or regional formats?',
    a: 'Yes, but language and format support should be checked against your actual document samples. Multi-language OCR, regional invoice layouts, GST/VAT formats, and mixed-language annotations can be evaluated during the sample document audit. Based on that review, we recommend extraction templates, validation rules, and review steps for the formats you use most often.',
  },
  {
    q: 'What happens when the extraction gets something wrong?',
    a: 'Every extracted field can carry a confidence score. Fields below a configurable threshold, or documents the model is uncertain about classifying, can be routed to a review queue with the extracted value pre-populated for correction. Corrections can be captured and used to improve extraction rules, prompts, templates, or models over time. The goal is to prevent uncertain data from moving downstream silently.',
  },
  {
    q: 'Do we need to replace our existing ERP or document management system?',
    a: 'No. The extraction workflow can sit in front of your existing systems, not replace them. We can connect outputs to ERP, CRM, document management, accounting, or custom internal systems through APIs, webhooks, or file-based exchange. The common pattern is: receive the raw document, extract target fields, validate them, send exceptions for review, and then pass approved data downstream.',
  },
  {
    q: 'How long does it take to go live with a new document type?',
    a: 'Timeline depends on the document type, layout variation, scan quality, target fields, review rules, and downstream integrations. A focused rollout usually starts with one document type so the extraction, validation, review, and handoff flow can be tested end to end. During the sample document audit, we assess complexity and outline a practical implementation path before recommending scope or timeline.',
  },
];

export default function IDPFaq() {
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
              Title="What teams ask before automating document processing"
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
