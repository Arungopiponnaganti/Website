'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const MODELS = [
  {
    name: 'OpenAI GPT-4o',
    detail: 'Best-in-class reasoning, multimodal',
    badges: [
      { l: 'API',        bg: '#FAEEDA', tc: '#633806' },
      { l: 'Enterprise', bg: '#E1F5EE', tc: '#085041' },
    ],
  },
  {
    name: 'Anthropic Claude 3.5 Sonnet',
    detail: 'Long context, strong instruction following',
    badges: [
      { l: 'API',        bg: '#FAEEDA', tc: '#633806' },
      { l: 'Enterprise', bg: '#E1F5EE', tc: '#085041' },
    ],
  },
  {
    name: 'Google Gemini Pro / Flash',
    detail: 'Google ecosystem, cost-efficient',
    badges: [
      { l: 'API',       bg: '#FAEEDA', tc: '#633806' },
      { l: 'Vertex AI', bg: '#E6F1FB', tc: '#0C447C' },
    ],
  },
  {
    name: 'Meta Llama 3 70B',
    detail: 'Open-source, full on-premise deployment',
    badges: [
      { l: 'On-prem',  bg: '#EEEDFE', tc: '#3C3489' },
      { l: 'Private',  bg: '#FAECE7', tc: '#712B13' },
    ],
  },
  {
    name: 'Mistral 7B / 8x7B',
    detail: 'Lightweight, fast, self-hosted',
    badges: [
      { l: 'On-prem',  bg: '#EEEDFE', tc: '#3C3489' },
      { l: 'Low cost', bg: '#E1F5EE', tc: '#085041' },
    ],
  },
  {
    name: 'Custom fine-tuned model',
    detail: 'Your domain, your data, your model',
    badges: [
      { l: 'Bespoke', bg: '#F1EFE8', tc: '#444441' },
    ],
  },
];

const STACK = [
  { name: 'LangChain / LlamaIndex',      detail: 'Orchestration & RAG pipelines' },
  { name: 'Pinecone / pgvector',          detail: 'Vector database for semantic search' },
  { name: 'Weights & Biases',             detail: 'Experiment tracking & evaluation' },
  { name: 'FastAPI / Node.js',            detail: 'Integration API layer' },
  { name: 'Datadog / custom dashboards',  detail: 'AI performance monitoring' },
  { name: 'Prompt versioning (custom)',   detail: 'Prompt management & rollback' },
];

export default function AIModelStack() {
  return (
    <section className="cd-section cd-section-muted border-bottom py-5">
      <div className="container py-4">
        <SectionTitle
          className="text-center mb-5"
          SubTitle="AI models & infrastructure"
          Title="Every model we integrate with — and how we deploy them"
          Content="We're model-agnostic. We recommend the right model for your use case — not the one with the biggest marketing budget."
          isDarkMode={false}
        />

        <div className="ai-stack-grid">
          {/* Left: models */}
          <div>
            <div className="ai-stack-col-head">AI models we integrate</div>
            {MODELS.map((m, i) => (
              <div key={i} className="ai-stack-row">
                <div>
                  <div className="ai-stack-name">{m.name}</div>
                  <div className="ai-stack-detail">{m.detail}</div>
                </div>
                <div className="ai-stack-badges">
                  {m.badges.map((b, bi) => (
                    <span
                      key={bi}
                      className="ai-stack-badge"
                      style={{ background: b.bg, color: b.tc }}
                    >
                      {b.l}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: integration stack */}
          <div>
            <div className="ai-stack-col-head">Integration & infrastructure stack</div>
            {STACK.map((s, i) => (
              <div key={i} className="ai-stack-row">
                <div>
                  <div className="ai-stack-name">{s.name}</div>
                  <div className="ai-stack-detail">{s.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
