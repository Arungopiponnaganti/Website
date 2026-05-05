'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const FAQ_LIST = [
  {
    q: 'What is the EU AI Act and does it apply to us?',
    a: 'The EU AI Act is a comprehensive regulation classifying AI systems by risk level — unacceptable risk (prohibited), high risk (regulated), limited risk (transparency obligations), and minimal risk (mostly unregulated). It applies to any organisation that deploys AI systems that affect people in the EU — regardless of where the organisation is headquartered. High-risk applications (credit scoring, HR screening, biometric identification, critical infrastructure) face the most onerous requirements: mandatory risk assessments, documentation, human oversight mechanisms, and registration in a public EU database. If you deploy AI to EU customers, employees, or users, the Act almost certainly applies to at least some of your systems.',
  },
  {
    q: 'We\'re a small organisation — is AI governance relevant to us?',
    a: 'Governance requirements scale with AI risk, not with organisational size. A small fintech using an AI credit scoring model faces the same EU AI Act obligations as a large bank. That said, a small organisation using AI only for internal productivity tools (drafting emails, summarising documents) has minimal governance obligations. The key question is: does your AI system affect decisions about people — credit, employment, access to services, medical care? If yes, governance is relevant regardless of size. Our governance audit is designed to right-size the framework to your actual risk profile.',
  },
  {
    q: 'How do you test for bias in our AI models?',
    a: 'We test for bias across multiple protected attributes simultaneously — age, gender, ethnicity, nationality, disability, and religion — depending on which are relevant to your use case and jurisdiction. Our testing methodology includes: (1) disparate impact analysis — do outcomes differ materially across demographic groups? (2) counterfactual testing — would a decision change if we modified only a protected attribute? (3) intersectionality testing — are specific combinations of attributes (e.g., young women of a certain ethnicity) particularly disadvantaged? We use industry-standard tools including Fairlearn, AIF360, and custom testing frameworks, and deliver a written report with statistical evidence and a prioritised remediation plan.',
  },
  {
    q: 'What\'s the difference between AI governance and AI security?',
    a: 'AI security is a subset of AI governance. Governance covers the full spectrum: transparency (can decisions be explained?), fairness (are outcomes equitable?), privacy (is training and inference data protected?), model risk (is the model validated and monitored?), human oversight (can humans intervene?), and security (is the system resistant to attack?). Security specifically covers threats like prompt injection, adversarial attacks, model extraction, and data poisoning. Both are covered in our framework — the security domain addresses LLM-specific attack surfaces that traditional application security testing misses.',
  },
  {
    q: 'How long does a full governance framework build take?',
    a: 'For a single AI system or a small portfolio of 2–3 systems: 4–6 weeks for audit + framework. For a larger AI portfolio (5+ systems across multiple departments): 8–12 weeks. The audit phase (weeks 1–2) assesses your existing systems, data, and documentation. The framework build phase (weeks 3–6) produces the policy documents, risk register, monitoring setup, and training programme. We then conduct a validation workshop with your legal, technical, and leadership teams to review and finalise everything. The result is a framework you can show a regulator, board, or enterprise customer on day one.',
  },
];

export default function AGEFaq() {
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
              Title="What organisations ask about AI governance"
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
                      maxHeight: openIdx === idx ? '600px' : '0',
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
