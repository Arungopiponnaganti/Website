import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const ROWS = [
  {
    feature: 'Understands natural language',
    noBot: 'No — phone / email only',
    offShelf: 'Partially — keyword matching',
    custom: 'Yes — full LLM understanding',
  },
  {
    feature: 'Answers based on your specific data',
    noBot: 'Humans look it up manually',
    offShelf: 'Limited — preset FAQ answers only',
    custom: 'Yes — RAG from your live knowledge base',
  },
  {
    feature: 'Available 24/7 without queues',
    noBot: 'No — business hours only',
    offShelf: 'Yes — but limited to scripted flows',
    custom: 'Yes — unlimited concurrent conversations',
  },
  {
    feature: 'Handles complex multi-turn conversations',
    noBot: 'Every question restarts the process',
    offShelf: 'No — breaks outside scripted paths',
    custom: 'Yes — full context maintained throughout',
  },
  {
    feature: 'Integrates with CRM & backend systems',
    noBot: 'Manual copy-paste',
    offShelf: 'Basic CRM read — no write actions',
    custom: 'Full read/write integration with any API',
  },
  {
    feature: 'Human handoff with context transfer',
    noBot: 'N/A — always human',
    offShelf: 'Basic transcript only',
    custom: 'Full transcript + CRM context + suggested action',
  },
  {
    feature: 'Updates when your information changes',
    noBot: 'Via staff retraining',
    offShelf: 'Requires manual FAQ update',
    custom: 'Knowledge base update reflects instantly',
  },
  {
    feature: 'Customisable persona & tone',
    noBot: 'N/A',
    offShelf: 'Limited template customisation',
    custom: 'Fully custom — persona, tone, escalation style',
  },
];

export default function CAIComparison() {
  return (
    <section className="cd-section py-5 pb-5 cd-section-muted border-bottom">
      <div className="container py-4">
        <SectionTitle
          className="text-center"
          SubTitle="Why custom-built"
          Title="Custom LLM bot vs. off-the-shelf vs. no bot at all"
          Content="Off-the-shelf tools are great for simple FAQs. For complex conversations, your own data, and real business logic — custom is the only option."
          isDarkMode={false}
        />

        <div className="cai-cmp-table">
          {/* Header */}
          <div className="cai-cmp-head">
            <div className="cai-cmp-hc">Capability</div>
            <div className="cai-cmp-hc dim">No bot</div>
            <div className="cai-cmp-hc dim">Off-the-shelf (Intercom, Freshchat)</div>
            <div className="cai-cmp-hc highlight">Mayurasoft custom LLM bot</div>
          </div>

          {/* Rows */}
          {ROWS.map((row, i) => (
            <div key={i} className="cai-cmp-row">
              <div className="cai-cmp-cell feature">{row.feature}</div>
              <div className="cai-cmp-cell dim">{row.noBot}</div>
              <div className="cai-cmp-cell dim">{row.offShelf}</div>
              <div className="cai-cmp-cell hl">{row.custom}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
