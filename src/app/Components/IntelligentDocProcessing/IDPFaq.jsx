'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const FAQ_LIST = [
  {
    q: 'How accurate is AI extraction compared to manual data entry?',
    a: 'For well-structured documents like standard invoices and forms, our extraction pipelines achieve 95–98% accuracy out of the box — matching or exceeding typical human keying accuracy. For irregular or handwritten documents the baseline is lower (88–93%), but accuracy improves significantly with a fine-tuning pass on your specific document variants. Every extraction also includes a confidence score; anything below your threshold routes automatically to a human review queue rather than propagating low-confidence data downstream.',
  },
  {
    q: 'Can it handle documents in multiple languages or regional formats?',
    a: 'Yes. Our pipelines support multi-language OCR and extraction natively — English, Hindi, Tamil, Arabic, German, French, and 80+ additional languages. Regional format variations (Indian GST invoice formats, EU VAT layouts, US 1099 forms, etc.) are handled through format-specific extraction templates layered on top of the base LLM extraction. In our experience, Indian document variety (GSTIN formats, regional language annotations) is one of the harder challenges — and one we have specifically tuned for.',
  },
  {
    q: 'What happens when the extraction gets something wrong?',
    a: 'Every document gets a per-field confidence score. Fields below a configurable threshold — or documents the model is uncertain about classifying — route automatically to a human review queue with the extracted value pre-populated for correction. Corrections flow back into the model retraining pipeline, so accuracy improves over time. Nothing wrong propagates downstream silently. You also get a monitoring dashboard showing accuracy trends, exception rates, and processing volumes — so you can see if accuracy degrades and investigate before it causes problems.',
  },
  {
    q: 'Do we need to replace our existing ERP or document management system?',
    a: 'No. The extraction pipeline sits in front of your existing systems, not instead of them. We build integration connectors to whatever you already run — SAP, Oracle, Tally, QuickBooks, Zoho, Salesforce, SharePoint, or custom internal systems. Documents still end up exactly where they always did; they just arrive structured, verified, and routed automatically rather than requiring manual keying. The most common integration pattern is: receive raw document → extract → validate → post to existing system via API or file-based exchange.',
  },
  {
    q: 'How long does it take to go live with a new document type?',
    a: 'For a standard, well-structured document type (invoice, PO, KYC form), a working extraction pipeline takes 2–4 weeks: one week for dataset preparation and model configuration, one week for validation and integration, one week for UAT with your team. Complex document types with high variation, handwriting, or multi-page structures take 4–8 weeks. Every engagement starts with a free document audit — you send us 20 sample documents and we assess extraction complexity, give you an accuracy estimate, and provide a precise delivery timeline.',
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
