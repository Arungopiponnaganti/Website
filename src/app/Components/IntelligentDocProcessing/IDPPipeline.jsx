'use client';
import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const PIPE_NODES = [
  { num: '01', phase: 'Ingest', title: 'Capture from any source', sub: 'Email · API · Upload · SFTP', body: 'Documents arrive from any channel — email attachments, API pushes, portal uploads, or SFTP drops. Each source is normalised into a unified processing queue automatically.' },
  { num: '02', phase: 'Pre-process', title: 'Clean and prepare', sub: 'OCR · Deskew · Denoise', body: 'Raw files are straightened, denoised, and run through high-accuracy OCR so the AI models always work from clean, structured text regardless of scan quality.' },
  { num: '03', phase: 'Classify', title: 'Identify document type', sub: 'Document type detection', body: 'A fine-tuned classifier determines document type — invoice, contract, ID, form — routing each file to the extraction model trained specifically for that category.' },
  { num: '04', phase: 'Extract', title: 'Pull structured data', sub: 'LLM + structured parser', body: 'LLM-powered extraction combined with deterministic parsers pulls every field with high precision. Confidence scores are computed per field, not per document.' },
  { num: '05', phase: 'Validate', title: 'Check and score', sub: 'Confidence scoring · Rules', body: 'Business rules and cross-field validation run automatically. Fields below confidence thresholds are flagged for human review rather than silently passed downstream.' },
  { num: '06', phase: 'Review queue', title: 'Human-in-the-loop', sub: 'Human-in-loop exceptions', body: 'Low-confidence extractions surface in a clean review interface. Corrections are captured, stored, and fed back into model retraining — turning exceptions into improvements.' },
  { num: '07', phase: 'Route & act', title: 'Deliver to your systems', sub: 'ERP · CRM · Notification', body: 'Validated data is pushed directly to your ERP, CRM, or downstream workflow. Webhooks, API callbacks, and event notifications keep every system in sync.' },
];

const PipelineStep = ({ step, isLeft, setNodeRef }) => (
  <div className={`sleek-step pristine-static ${isLeft ? 'sleek-left' : 'sleek-right'}`}>
    <div className="sleek-node-container" ref={setNodeRef}>
      <div className="sleek-node-ring" />
      <div className="sleek-node-core" />
    </div>

    <div className="sleek-content">
      <div className="sleek-bg-number">{step.num}</div>
      <div className="sleek-content-inner">
        <span className="sleek-phase">{step.phase}</span>
        <h3 className="sleek-title">{step.title}</h3>
        <p className="sleek-body">{step.body}</p>
        <div className="sleek-output">
          <span className="output-accent">Handles:</span> {step.sub}
        </div>
      </div>
    </div>
  </div>
);

export default function IDPPipeline() {
  const containerRef = useRef(null);
  const nodeRefs = useRef([]);
  const [pathData, setPathData] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  const calculatePath = () => {
    if (!containerRef.current || nodeRefs.current.filter(Boolean).length !== PIPE_NODES.length) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let d = '';

    nodeRefs.current.forEach((node, i) => {
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top + rect.height / 2;

      if (i === 0) {
        d += `M ${x} ${y} `;
      } else {
        const prevNode = nodeRefs.current[i - 1];
        const prevRect = prevNode.getBoundingClientRect();
        const prevX = prevRect.left - containerRect.left + prevRect.width / 2;
        const prevY = prevRect.top - containerRect.top + prevRect.height / 2;
        const controlOffset = (y - prevY) * 0.55;
        d += `C ${prevX} ${prevY + controlOffset}, ${x} ${y - controlOffset}, ${x} ${y} `;
      }
    });

    setPathData(d);
  };

  useEffect(() => {
    calculatePath();
    window.addEventListener('resize', calculatePath);
    const timeout = setTimeout(calculatePath, 150);
    return () => {
      window.removeEventListener('resize', calculatePath);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startTrigger = windowHeight * 0.7;
      const endTrigger = windowHeight * 0.3;
      const activeArea = height + (startTrigger - endTrigger) - 150;

      if (top > startTrigger) {
        setScrollProgress(0);
      } else if (top + height < endTrigger) {
        setScrollProgress(1);
      } else {
        const scrolled = startTrigger - top;
        setScrollProgress(Math.max(0, Math.min(1, scrolled / activeArea)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="idp-pipeline" className="cd-section" style={{ backgroundColor: '#050a1e', overflow: 'hidden' }}>
      <div className="container">
        <SectionTitle
          className="text-center"
          SubTitle="Processing pipeline"
          Title="How a document moves through our pipeline"
          Content="From raw file to downstream action — seven stages, fully automated with human oversight built in for exceptions."
          isDarkMode={true}
        />

        <div className="sleek-process-container pristine-container" ref={containerRef}>
          <svg className="snake-svg-canvas" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
            <defs>
              <clipPath id="idp-snake-scroll-clip">
                <rect x="0" y="0" width="100%" height={`${scrollProgress * 100}%`} style={{ transition: 'height 0.15s ease-out' }} />
              </clipPath>
            </defs>
            <path d={pathData} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="6 8" />
            <path d={pathData} fill="none" stroke="#534AB7" strokeWidth="3" strokeDasharray="6 8" clipPath="url(#idp-snake-scroll-clip)" />
          </svg>

          <div className="sleek-steps-wrapper" style={{ position: 'relative', zIndex: 2, padding: '40px 0' }}>
            {PIPE_NODES.map((n, idx) => (
              <PipelineStep
                key={n.num}
                step={n}
                isLeft={idx % 2 === 0}
                setNodeRef={(el) => (nodeRefs.current[idx] = el)}
              />
            ))}
          </div>
        </div>

        {/* Callout row */}
        <div className="row g-3 mt-2 pb-5">
          {[
            { icon: 'bi-shield-lock', title: 'No data leaves your environment', desc: 'All processing runs in your cloud tenancy or on-prem. Documents never touch a shared extraction service.' },
            { icon: 'bi-eye', title: 'Every decision is logged', desc: 'Full audit trail — what was extracted, with what confidence, by which model version, at what time.' },
            { icon: 'bi-arrow-repeat', title: 'Continuous model improvement', desc: 'Human corrections in the review queue feed back into model retraining — accuracy improves over time.' },
          ].map((c, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div style={{
                padding: '18px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px',
                background: 'rgba(255,255,255,0.04)', display: 'flex', gap: '14px', alignItems: 'flex-start',
              }}>
                <i className={`bi ${c.icon}`} style={{ fontSize: '22px', flexShrink: 0, color: '#534AB7' }}></i>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#fff', marginBottom: '4px' }}>{c.title}</div>
                  <div style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.55' }}>{c.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
