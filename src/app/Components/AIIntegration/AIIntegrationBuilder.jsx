'use client';
import React from 'react';
import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';

const IconLLM = () => (
  <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 8h8M6 11h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="15" cy="4" r="2.5" fill="currentColor" opacity="0.3" />
  </svg>
);

const IconRAG = () => (
  <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconClassify = () => (
  <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="16" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="2" y="9" width="10" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M14 11l2 2 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="2" y="15" width="7" height="3" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconExtract = () => (
  <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="2,14 7,9 11,12 18,5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 5h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconSummarise = () => (
  <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 5h12M4 8h12M4 11h8M4 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="16" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M18.5 16.5l1.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconEval = () => (
  <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2l2.09 4.26L17 7.27l-3.5 3.41.83 4.82L10 13.27l-4.33 2.23.83-4.82L3 7.27l4.91-.71L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const SERVICES = [
  {
    title: 'LLM API Integration',
    Icon: IconLLM,
    image: '/assets/images/llm-ai-integration.webp',
    bullets: [
      'OpenAI GPT-4o integration',
      'Anthropic Claude & Google Gemini',
      'Open-source LLM support',
      'Versioned model abstraction layer',
      'Swap models as market evolves',
    ],
  },
  {
    title: 'RAG — Knowledge Base AI',
    Icon: IconRAG,
    image: '/assets/images/rag-knowledge-base-ai.webp',
    bullets: [
      'Query internal policies & manuals',
      'Contract & past-ticket Q&A',
      'Grounded, cited answers',
      'Zero hallucination risk',
      'Connects to your knowledge base',
    ],
  },
  {
    title: 'AI Classification & Routing',
    Icon: IconClassify,
    image: '/assets/images/ai-classification-routing.webp',
    bullets: [
      'Email & ticket categorisation',
      'Priority & escalation logic',
      'Document classification',
      'Structured decision outputs',
      'Fully auditable decisions',
    ],
  },
  {
    title: 'AI Data Extraction',
    Icon: IconExtract,
    image: '/assets/images/ai-dataextraction.webp',
    bullets: [
      'PDF & image parsing',
      'Email data extraction',
      'Typed, validated records',
      'CRM & ERP integration',
      'Eliminates manual rekeying',
    ],
  },
  {
    title: 'AI Summarisation & Analysis',
    Icon: IconSummarise,
    image: '/assets/images/ai-summarisation-analysis.webp',
    bullets: [
      'Long document summarisation',
      'Call transcript processing',
      'Research report analysis',
      'Sentiment signal detection',
      'Structured key extracts',
    ],
  },
  {
    title: 'AI Evaluation & Safety',
    Icon: IconEval,
    image: '/assets/images/ai-evaluation-safety.webp',
    bullets: [
      'Objective quality scoring',
      'Regression test suites',
      'Safety guardrails',
      'Model performance benchmarking',
      'Reliable as models change',
    ],
  },
];

export default function AIIntegrationBuilder() {
  return (
    <section className="cd-section cd-section-muted border-bottom py-5" id="ai-builder">
      <div className="container py-4">
        <SectionTitle
          className="text-center mb-5"
          SubTitle="What we do"
          Title="Our AI Integration Services"
          Content="Six specialised capabilities — each a distinct, scoped service. From LLM integration to safety evaluation, we cover the full AI delivery stack."
          isDarkMode={false}
        />

        <div className="row g-4">
          {SERVICES.map((svc, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="ai-sfc-card">
                {/* Background image */}
                <div className="ai-sfc-img">
                  <Image src={svc.image} alt={svc.title} width={400} height={260} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                {/* Default state: blue bottom bar with floating icon */}
                <div className="ai-sfc-bar-icon">
                  <svc.Icon />
                </div>
                <div className="ai-sfc-bar">

                  <h3 className="ai-sfc-bar-title">{svc.title}</h3>
                </div>

                {/* Hover state: full blue overlay sliding up */}
                <div className="ai-sfc-overlay">
                  <div className="ai-sfc-ov-icon">
                    <svc.Icon />
                  </div>
                  <h3 className="ai-sfc-ov-title">{svc.title}</h3>
                  <ul className="ai-sfc-bullets">
                    {svc.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
