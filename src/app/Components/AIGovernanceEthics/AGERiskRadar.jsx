'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const RISKS = [
  {
    name: 'Algorithmic bias',
    pct: 90,
    level: 'Critical',
    levelBg: '#FCEBEB',
    levelColor: '#A32D2D',
    barColor: '#E24B4A',
    detail: 'AI systems trained on historical data inherit historical discrimination patterns. In credit, hiring, and healthcare applications, biased outputs are both unethical and legally actionable. Our bias audit tests every model against protected attributes before deployment and establishes ongoing monitoring.',
  },
  {
    name: 'Hallucination & factual errors',
    pct: 85,
    level: 'Critical',
    levelBg: '#FCEBEB',
    levelColor: '#A32D2D',
    barColor: '#E24B4A',
    detail: 'LLMs generate plausible-sounding but factually incorrect outputs. In legal, medical, or financial contexts, a hallucination reaching a customer or decision-maker can cause real harm. Our RAG architecture, output validation, and confidence thresholds contain this risk structurally.',
  },
  {
    name: 'Data privacy breach',
    pct: 80,
    level: 'High',
    levelBg: '#FAECE7',
    levelColor: '#712B13',
    barColor: '#D85A30',
    detail: 'AI systems trained on personal data may inadvertently expose it in outputs — a known LLM vulnerability. Our training data governance framework prevents PII from entering model training sets and implements output filtering to prevent leakage.',
  },
  {
    name: 'Regulatory non-compliance',
    pct: 70,
    level: 'High',
    levelBg: '#FAECE7',
    levelColor: '#712B13',
    barColor: '#D85A30',
    detail: 'The EU AI Act, GDPR Article 22, and India\'s DPDPA create specific obligations for AI systems. Non-compliance carries fines up to 3–7% of global turnover. Our framework maps every AI system to its applicable regulatory requirements.',
  },
  {
    name: 'Model drift',
    pct: 65,
    level: 'High',
    levelBg: '#FAECE7',
    levelColor: '#712B13',
    barColor: '#D85A30',
    detail: 'Models degrade as the world changes and training data becomes stale. A fraud model trained in 2022 may miss 2024 fraud patterns. Our production monitoring setup includes drift detection, automated alerts, and a retraining cadence protocol.',
  },
  {
    name: 'Prompt injection (LLMs)',
    pct: 55,
    level: 'Medium',
    levelBg: '#FAEEDA',
    levelColor: '#633806',
    barColor: '#BA7517',
    detail: 'Malicious users can craft inputs that override an LLM\'s instructions, potentially causing it to reveal internal data or perform unauthorised actions. Our LLM security review tests for prompt injection, jailbreaking, and data exfiltration vectors.',
  },
  {
    name: 'Over-reliance / automation bias',
    pct: 50,
    level: 'Medium',
    levelBg: '#FAEEDA',
    levelColor: '#633806',
    barColor: '#BA7517',
    detail: 'Teams that use AI outputs without critical review amplify errors at scale. Our human oversight framework defines which decisions require human validation and trains staff on appropriate AI scepticism — what to check and when to override.',
  },
];

export default function AGERiskRadar() {
  const [openIdx, setOpenIdx] = useState(-1);
  const toggle = (i) => setOpenIdx(openIdx === i ? -1 : i);

  return (
    <section className="cd-section py-5 pb-3 cd-section-muted border-top border-bottom">
      <div className="container py-4">
        <SectionTitle
          className="mb-2 text-center"
          SubTitle="AI risk landscape"
          Title="The risks your governance framework must address"
          Content="Click any risk category to see what it means in practice and how our framework mitigates it."
          isDarkMode={false}
        />

        <div>
          {RISKS.map((r, i) => (
            <div
              key={i}
              className="age-risk-row"
              onClick={() => toggle(i)}
              style={{ cursor: 'pointer' }}
            >
              <div className="age-risk-name">{r.name}</div>
              <div className="age-risk-bar-wrap">
                <div className="age-risk-fill" style={{ width: `${r.pct}%`, background: r.barColor }} />
              </div>
              <div className="age-risk-badge" style={{ background: r.levelBg, color: r.levelColor }}>
                {r.level}
              </div>
              {openIdx === i && (
                <div className="age-risk-detail open">{r.detail}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
