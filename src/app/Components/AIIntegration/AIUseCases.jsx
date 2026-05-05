'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import SectionTitle from '../Common/SectionTitle';

const FILTERS = ['All', 'BFSI', 'Healthcare', 'Retail', 'SaaS', 'Internal tools'];

const IND_COLORS = {
  BFSI: { bg: '#FAEEDA', color: '#633806' },
  Healthcare: { bg: '#FAECE7', color: '#712B13' },
  Retail: { bg: '#E1F5EE', color: '#085041' },
  SaaS: { bg: '#EEEDFE', color: '#3C3489' },
  'Internal tools': { bg: '#E6F1FB', color: '#0C447C' },
};

const USE_CASES = [
  {
    t: 'AI support ticket triage',
    d: 'Classify, prioritise, and draft first responses to inbound support tickets — before a human agent sees them.',
    industry: 'SaaS',
    complexity: 'Beginner',
    models: ['GPT-4o', 'Claude 3.5'],
    del: ['Ticket classification taxonomy', 'Prompt template library', 'Escalation logic', 'Agent handoff workflow'],
    stack: ['OpenAI API', 'Zendesk webhook', 'Confidence scoring', 'Human-in-the-loop gate'],
    impact: '60–80% reduction in first-response time',
  },
  {
    t: 'Contract intelligence extraction',
    d: 'Extract key clauses, dates, obligations, and risk signals from PDF contracts into structured data for review.',
    industry: 'BFSI',
    complexity: 'Intermediate',
    models: ['Claude 3.5', 'GPT-4o'],
    del: ['Document ingestion pipeline', 'Structured extraction schema', 'Review UI integration', 'Audit trail'],
    stack: ['PDF parser', 'RAG pipeline', 'Schema validation', 'Structured output mode'],
    impact: '75% faster contract review cycle',
  },
  {
    t: 'Clinical note summarisation',
    d: 'Summarise verbose clinical notes into structured SOAP summaries, reducing physician documentation time.',
    industry: 'Healthcare',
    complexity: 'Advanced',
    models: ['GPT-4', 'Custom fine-tuned'],
    del: ['HIPAA-compliant deployment', 'Clinical vocabulary fine-tuning', 'Summary templates', 'EHR integration'],
    stack: ['On-premise deployment', 'Clinical NLP', 'PHI redaction', 'Physician approval gate'],
    impact: '40% reduction in documentation time per patient',
  },
  {
    t: 'Personalised product recommendations',
    d: 'Generate personalised product copy and recommendations from purchase history and browsing behaviour.',
    industry: 'Retail',
    complexity: 'Intermediate',
    models: ['GPT-4o', 'Gemini Pro'],
    del: ['Behaviour data pipeline', 'Personalisation prompts', 'A/B test variants', 'Conversion tracking'],
    stack: ['Vector similarity', 'Real-time API', 'A/B framework', 'Analytics dashboard'],
    impact: '23% average uplift in add-to-cart rate',
  },
  {
    t: 'Internal knowledge assistant',
    d: 'Build a company-wide AI assistant that answers questions using your internal docs, policies, and wikis.',
    industry: 'Internal tools',
    complexity: 'Beginner',
    models: ['Claude 3.5', 'GPT-4o'],
    del: ['Document ingestion & embedding', 'Retrieval pipeline', 'Slack / Teams integration', 'Usage analytics'],
    stack: ['RAG architecture', 'Pinecone / pgvector', 'Citation engine', 'Feedback loop'],
    impact: '35% reduction in repeat HR/IT questions',
  },
  {
    t: 'Fraud pattern detection',
    d: 'Detect unusual transaction sequences and flag anomalies in real time using LLM-powered pattern reasoning.',
    industry: 'BFSI',
    complexity: 'Advanced',
    models: ['GPT-4', 'Llama 3 (on-prem)'],
    del: ['Transaction feature engineering', 'Anomaly prompt design', 'Risk scoring output', 'Compliance audit log'],
    stack: ['Streaming data pipeline', 'On-prem deployment', 'RBAC', 'Explainability layer'],
    impact: '41% improvement in fraud detection precision',
  },
  {
    t: 'Dynamic report generation',
    d: 'Auto-generate weekly business reports from raw dashboard data — narrative, charts, and executive summary.',
    industry: 'Internal tools',
    complexity: 'Beginner',
    models: ['GPT-4o', 'Gemini Pro'],
    del: ['Data connector build', 'Report template system', 'Scheduling automation', 'Distribution integration'],
    stack: ['API data pull', 'Structured output', 'Jinja2 templates', 'Email / Slack delivery'],
    impact: '5 hrs/week saved per analyst',
  },
  {
    t: 'Returns intent classification',
    d: 'Classify customer return reasons from free-text into structured categories, feeding policy and product decisions.',
    industry: 'Retail',
    complexity: 'Beginner',
    models: ['GPT-4o', 'Claude 3.5'],
    del: ['Classification taxonomy', 'Feedback loop for retraining', 'Dashboard integration', 'Weekly trend report'],
    stack: ['Batch API calls', 'Zero-shot classification', 'Structured output', 'Warehouse integration'],
    impact: '90% accuracy vs 62% manual labelling',
  },
  {
    t: 'Medical coding assistance',
    d: 'Suggest ICD-10 codes from clinical narratives, reducing coder workload and improving billing accuracy.',
    industry: 'Healthcare',
    complexity: 'Advanced',
    models: ['Custom fine-tuned', 'GPT-4'],
    del: ['Clinical corpus fine-tuning', 'Code suggestion API', 'Coder review interface', 'Audit trail for compliance'],
    stack: ['HIPAA-compliant infra', 'Fine-tuning pipeline', 'Confidence thresholds', 'Human approval gate'],
    impact: '55% reduction in coding time per encounter',
  },
];

const ANIM_MS = 320;

export default function AIUseCases() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeUc, setActiveUc] = useState(-1);
  // panelAt  — which card index the panel is rendered after in the DOM
  // panelOpen — whether the .open CSS class (and transition) is applied
  const [panelAt, setPanelAt] = useState(-1);
  const [panelOpen, setPanelOpen] = useState(false);
  const gridRef = useRef(null);
  const timerRef = useRef(null);

  const filtered = USE_CASES.filter(
    (u) => activeFilter === 'All' || u.industry === activeFilter
  );

  // Returns the index of the last card that shares a row with cardIndex.
  const getLastInRow = useCallback((cardIndex) => {
    if (!gridRef.current) return cardIndex;
    const cards = Array.from(gridRef.current.querySelectorAll('.ai-uc-card'));
    if (cardIndex >= cards.length) return cardIndex;
    const top = cards[cardIndex].getBoundingClientRect().top;
    let last = cardIndex;
    for (let i = cardIndex + 1; i < cards.length; i++) {
      if (Math.abs(cards[i].getBoundingClientRect().top - top) < 5) last = i;
      else break;
    }
    return last;
  }, []);

  // Reposition panel instantly on grid resize (no animation — just correct placement).
  useEffect(() => {
    if (activeUc < 0 || !gridRef.current) return;
    const observer = new ResizeObserver(() => {
      const newLast = getLastInRow(activeUc);
      setPanelAt((prev) => (prev !== newLast ? newLast : prev));
    });
    observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, [activeUc, getLastInRow]);

  // Cleanup timer on unmount.
  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleFilter = (f) => {
    clearTimeout(timerRef.current);
    setPanelOpen(false);
    setPanelAt(-1);
    setActiveUc(-1);
    setActiveFilter(f);
  };

  const handleCard = (i) => {
    clearTimeout(timerRef.current);

    if (activeUc === i) {
      // --- Close ---
      setPanelOpen(false);
      timerRef.current = setTimeout(() => {
        setActiveUc(-1);
        setPanelAt(-1);
      }, ANIM_MS);
      return;
    }

    const newLast = getLastInRow(i);

    if (panelOpen && panelAt !== newLast) {
      // --- Moving to a different row: close → relocate → open ---
      setPanelOpen(false);
      timerRef.current = setTimeout(() => {
        setActiveUc(i);
        setPanelAt(newLast);
        requestAnimationFrame(() => setPanelOpen(true));
      }, ANIM_MS);
    } else {
      // --- First open or same row: place and open ---
      setActiveUc(i);
      setPanelAt(newLast);
      requestAnimationFrame(() => setPanelOpen(true));
    }
  };

  // The data shown in the panel — keep using activeUc's data while it's still set
  // (it stays set until close animation finishes).
  const panelData = filtered[activeUc];

  return (
    <section className="cd-section cd-section-light border-bottom py-5">
      <div className="container py-4">
        <SectionTitle
          className="mb-4 text-center"
          SubTitle="What we've built"
          Title="AI integration patterns — click any to see how it works"
          Content="Filter by industry or complexity. Each pattern is a repeatable, tested integration we've built for clients."
          isDarkMode={false}
        />

        {/* Filters */}
        <div className="ai-uc-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`ai-uc-filter-btn${activeFilter === f ? ' active' : ''}`}
              onClick={() => handleFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="ai-uc-grid" ref={gridRef}>
          {filtered.map((u, i) => {
            const ind = IND_COLORS[u.industry] || { bg: '#f3f4f6', color: '#6b7280' };
            return (
              <React.Fragment key={u.t}>
                <div
                  className={`ai-uc-card${activeUc === i ? ' active' : ''}`}
                  onClick={() => handleCard(i)}
                >
                  <div className="ai-uc-ind-row">
                    <span className="ai-uc-ind" style={{ background: ind.bg, color: ind.color }}>
                      {u.industry}
                    </span>
                    <span className="ai-uc-complexity">{u.complexity}</span>
                  </div>
                  <div className="ai-uc-title">{u.t}</div>
                  <div className="ai-uc-desc">{u.d}</div>
                  <div className="ai-uc-arrow-row">
                    <span className="ai-uc-arrow-label">
                      {activeUc === i ? 'Close' : 'View details'}
                    </span>
                    <svg
                      className={`ai-uc-arrow-icon${activeUc === i ? ' rotated' : ''}`}
                      width="16" height="16" viewBox="0 0 16 16" fill="none"
                    >
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {panelAt === i && panelData && (
                  <div className={`ai-uc-detail${panelOpen ? ' open' : ''}`}>
                    <div>
                      <div className="ai-udp-label">What we deliver</div>
                      {panelData.del.map((d, di) => (
                        <div key={di} className="ai-udp-item">{d}</div>
                      ))}
                    </div>
                    <div>
                      <div className="ai-udp-label">Tech stack</div>
                      {panelData.stack.map((s, si) => (
                        <div key={si} className="ai-udp-item">{s}</div>
                      ))}
                    </div>
                    <div>
                      <div className="ai-udp-label">Typical impact</div>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: '#050a1e', padding: '6px 0', borderBottom: '1px solid #e5e7eb', marginBottom: '8px' }}>
                        {panelData.impact}
                      </div>
                      <div className="ai-udp-item" style={{ fontStyle: 'italic', borderBottom: 'none' }}>
                        Impact figures are directional benchmarks from comparable deployments, not guarantees.
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
