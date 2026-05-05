'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import SectionTitle from '../Common/SectionTitle';

const TAG_COLORS = {
  Explainability: { bg: '#E6F1FB', color: '#0C447C' },
  Fairness:       { bg: '#EEEDFE', color: '#3C3489' },
  Privacy:        { bg: '#E1F5EE', color: '#085041' },
  'Model risk':   { bg: '#FAEEDA', color: '#633806' },
  Oversight:      { bg: '#FEF3C7', color: '#92400E' },
  Security:       { bg: '#FAECE7', color: '#712B13' },
};

const DOMAINS = [
  {
    tag: 'Explainability',
    num: '01',
    title: 'Transparency & explainability',
    desc: 'AI systems must be understandable to the people they affect and the regulators who oversee them.',
    deliverables: ['Model decision explanation documentation', 'SHAP / LIME explainability implementation', 'User-facing explanation interfaces', 'Audit trail for every AI decision'],
    standards: ['EU AI Act Art. 13', 'ISO/IEC 42001', 'NIST AI RMF'],
    tools: ['SHAP', 'LIME', 'InterpretML', 'Alibi'],
  },
  {
    tag: 'Fairness',
    num: '02',
    title: 'Fairness & bias management',
    desc: 'AI must not discriminate unlawfully across protected attributes or demographic groups.',
    deliverables: ['Protected attribute fairness audit', 'Disparate impact testing across demographic groups', 'Bias monitoring pipeline in production', 'Remediation plan for identified bias'],
    standards: ['EU AI Act Art. 10', 'IEEE 7000-2021', 'Equal Credit Opportunity Act'],
    tools: ['Fairlearn', 'AIF360', 'What-If Tool', 'Custom audit framework'],
  },
  {
    tag: 'Privacy',
    num: '03',
    title: 'Data governance & privacy',
    desc: 'Training and inference data must be protected, lineaged, and lawfully processed.',
    deliverables: ['Data lineage mapping for all AI training sets', 'PII identification and anonymisation audit', 'Consent framework for AI training data', 'Data retention policy for AI systems'],
    standards: ['GDPR Art. 22', 'DPDPA 2023 (India)', 'CCPA', 'ISO 27701'],
    tools: ['Apache Atlas', 'AWS Macie', 'Custom lineage tooling'],
  },
  {
    tag: 'Model risk',
    num: '04',
    title: 'Model risk management',
    desc: 'AI models must be tested, monitored, and controlled throughout their full lifecycle.',
    deliverables: ['Model inventory and classification', 'Pre-deployment validation protocol', 'Production drift monitoring setup', 'Model retirement and replacement policy'],
    standards: ['SR 11-7 (Fed Reserve)', 'Basel IV model risk', 'EU AI Act conformity', 'ISO/IEC 23053'],
    tools: ['MLflow', 'Evidently AI', 'Seldon', 'Custom monitoring'],
  },
  {
    tag: 'Oversight',
    num: '05',
    title: 'Human oversight & control',
    desc: 'Humans must remain in meaningful control of consequential AI decisions at all times.',
    deliverables: ['Human-in-the-loop gate design', 'Override mechanism implementation', 'Escalation protocol documentation', 'Staff training on AI oversight responsibilities'],
    standards: ['EU AI Act Art. 14', 'OECD AI Principles', 'UK AI Safety Institute'],
    tools: ['Custom review UI', 'Workflow automation', 'Audit logging'],
  },
  {
    tag: 'Security',
    num: '06',
    title: 'Security & adversarial robustness',
    desc: 'AI systems must be resistant to adversarial attacks, prompt injection, and model extraction.',
    deliverables: ['Adversarial attack surface assessment', 'Prompt injection testing (for LLM systems)', 'Model extraction attack mitigation', 'Input validation and output filtering'],
    standards: ['OWASP LLM Top 10', 'NIST SP 800-218A', 'EU AI Act Art. 15'],
    tools: ['Garak', 'PromptBench', 'Microsoft PyRIT', 'Custom red-teaming'],
  },
];

const ANIM_MS = 320;

export default function AGEFramework() {
  const [activeDom, setActiveDom] = useState(-1);
  const [panelAt, setPanelAt]     = useState(-1);
  const [panelOpen, setPanelOpen] = useState(false);
  const gridRef  = useRef(null);
  const timerRef = useRef(null);

  const getLastInRow = useCallback((cardIndex) => {
    if (!gridRef.current) return cardIndex;
    const cards = Array.from(gridRef.current.querySelectorAll('.cdx-card'));
    if (cardIndex >= cards.length) return cardIndex;
    const top = cards[cardIndex].getBoundingClientRect().top;
    let last = cardIndex;
    for (let i = cardIndex + 1; i < cards.length; i++) {
      if (Math.abs(cards[i].getBoundingClientRect().top - top) < 5) last = i;
      else break;
    }
    return last;
  }, []);

  useEffect(() => {
    if (activeDom < 0 || !gridRef.current) return;
    const observer = new ResizeObserver(() => {
      const newLast = getLastInRow(activeDom);
      setPanelAt((prev) => (prev !== newLast ? newLast : prev));
    });
    observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, [activeDom, getLastInRow]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleCard = (i) => {
    clearTimeout(timerRef.current);

    if (activeDom === i) {
      setPanelOpen(false);
      timerRef.current = setTimeout(() => { setActiveDom(-1); setPanelAt(-1); }, ANIM_MS);
      return;
    }

    const newLast = getLastInRow(i);

    if (panelOpen && panelAt !== newLast) {
      setPanelOpen(false);
      timerRef.current = setTimeout(() => {
        setActiveDom(i);
        setPanelAt(newLast);
        requestAnimationFrame(() => setPanelOpen(true));
      }, ANIM_MS);
    } else {
      setActiveDom(i);
      setPanelAt(newLast);
      requestAnimationFrame(() => setPanelOpen(true));
    }
  };

  const panelData = DOMAINS[activeDom];

  return (
    <section className="cd-section py-5 pb-3 border-bottom" id="age-framework">
      <div className="container py-4">
        <SectionTitle
          className="text-center mb-2"
          SubTitle="Our governance framework"
          Title="Six domains — every dimension of responsible AI covered"
          Content="Click any domain to see what we assess, what we build, and the standards we align to."
          isDarkMode={false}
        />

        <div className="cdx-grid" ref={gridRef}>
          {DOMAINS.map((d, i) => {
            const tag = TAG_COLORS[d.tag] || { bg: '#f3f4f6', color: '#6b7280' };
            return (
              <React.Fragment key={d.num}>
                <div
                  className={`cdx-card${activeDom === i ? ' active' : ''}`}
                  onClick={() => handleCard(i)}
                >
                  <div className="cdx-tag-row">
                    <span className="cdx-tag" style={{ background: tag.bg, color: tag.color }}>
                      {d.tag}
                    </span>
                    <span className="cdx-meta">Domain {d.num}</span>
                  </div>
                  <div className="cdx-title">{d.title}</div>
                  <div className="cdx-desc">{d.desc}</div>
                  <div className="cdx-arrow-row">
                    <span className="cdx-arrow-label">
                      {activeDom === i ? 'Close' : 'View details'}
                    </span>
                    <svg
                      className={`cdx-arrow-icon${activeDom === i ? ' rotated' : ''}`}
                      width="16" height="16" viewBox="0 0 16 16" fill="none"
                    >
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {panelAt === i && panelData && (
                  <div className={`cdx-detail${panelOpen ? ' open' : ''}`}>
                    <div>
                      <div className="cdx-dl-label">What we deliver</div>
                      {panelData.deliverables.map((item, di) => (
                        <div key={di} className="cdx-dl-item">{item}</div>
                      ))}
                    </div>
                    <div>
                      <div className="cdx-dl-label">Regulatory standards</div>
                      {panelData.standards.map((item, si) => (
                        <div key={si} className="cdx-dl-item">{item}</div>
                      ))}
                    </div>
                    <div>
                      <div className="cdx-dl-label">Tools & methods</div>
                      {panelData.tools.map((item, ti) => (
                        <div key={ti} className="cdx-dl-item">{item}</div>
                      ))}
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
