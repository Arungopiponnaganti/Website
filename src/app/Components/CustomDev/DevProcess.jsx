'use client';

import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const steps = [
  {
    num: '01', phase: 'Discovery', title: 'Free scoping session',
    body: 'We run a structured 60-minute session to understand your goals, existing systems, constraints, and success metrics. No charge, no commitment.',
    output: 'Scoping document'
  },
  {
    num: '02', phase: 'Architecture', title: 'Technical design',
    body: 'We produce a full technical architecture — stack selection, data model, API contracts, and third-party integrations — for your review before any code is written.',
    output: 'Architecture doc + tech spec'
  },
  {
    num: '03', phase: 'Sprint planning', title: 'Roadmap & estimation',
    body: 'We break the project into two-week sprints with fixed deliverables. You receive a line-item project plan with milestones and costs before kickoff.',
    output: 'Sprint plan + cost breakdown'
  },
  {
    num: '04', phase: 'Build', title: 'Agile development',
    body: 'Each sprint closes with a working demo and QA sign-off. Weekly async updates. You always know what was built, what\'s next, and what\'s blocked.',
    output: 'Tested, deployed increment'
  },
  {
    num: '05', phase: 'QA & security', title: 'Quality engineering',
    body: 'Our dedicated QA team runs functional, regression, performance, and basic security testing on every release — not as an afterthought but as part of the sprint.',
    output: 'QA report + test coverage'
  },
  {
    num: '06', phase: 'Launch', title: 'Go-live & handover',
    body: 'We manage the production deployment, monitor for 72 hours post-launch, and hand over full documentation, credentials, and runbooks.',
    output: 'Live product + documentation'
  },
  {
    num: '07', phase: 'Support', title: 'Ongoing partnership',
    body: 'Post-launch, we offer managed support tiers. Bug fixes, minor enhancements, performance tuning, and architecture evolution as your product grows.',
    output: 'SLA-backed support'
  }
];

const ProcessStep = ({ step, isLeft, setNodeRef }) => {
  return (
    <div className={`sleek-step pristine-static ${isLeft ? 'sleek-left' : 'sleek-right'}`}>
      <div className="sleek-node-container" ref={setNodeRef}>
        <div className="sleek-node-ring"></div>
        <div className="sleek-node-core"></div>
      </div>

      <div className="sleek-content">
        <div className="sleek-bg-number">{step.num}</div>
        <div className="sleek-content-inner">
          <span className="sleek-phase">{step.phase}</span>
          <h3 className="sleek-title">{step.title}</h3>
          <p className="sleek-body">{step.body}</p>
          <div className="sleek-output">
            <span className="output-accent">Deliverable:</span> {step.output}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DevProcess() {
  const containerRef = useRef(null);
  const nodeRefs = useRef([]);
  const [pathData, setPathData] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  const calculatePath = () => {
    if (!containerRef.current || nodeRefs.current.filter(Boolean).length !== steps.length) return;

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

        const verticalDist = y - prevY;
        const controlOffset = verticalDist * 0.55;

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
        const percentage = Math.max(0, Math.min(1, scrolled / activeArea));
        setScrollProgress(percentage);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" className="cd-section" style={{ backgroundColor: '#050a1e', overflow: 'hidden' }}>
      <div className="container">
        <SectionTitle
          className="text-center "
          SubTitle="Methodology"
          Title="Engineering Lifecycle"
          Content="No black boxes. A continuous integration of architecture, deployment, and scaling that executes flawlessly."
          isDarkMode={true}
        />

        <div className="sleek-process-container pristine-container" ref={containerRef}>
          {/* Dynamic Dotted SVG Animation Layer */}
          <svg className="snake-svg-canvas" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
            <defs>
              <clipPath id="snake-scroll-clip">
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height={`${scrollProgress * 100}%`}
                  style={{ transition: 'height 0.15s ease-out' }}
                />
              </clipPath>
            </defs>

            {/* Background Dotted Track */}
            <path
              d={pathData}
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="2"
              strokeDasharray="6 8"
            />
            {/* Active Highlight Dotted Track (Clipped by Scroll) */}
            <path
              d={pathData}
              fill="none"
              stroke="#ff3c00"
              strokeWidth="3"
              strokeDasharray="6 8"
              clipPath="url(#snake-scroll-clip)"
            />
          </svg>

          <div className="sleek-steps-wrapper" style={{ position: 'relative', zIndex: 2, padding: '40px 0' }}>
            {steps.map((s, idx) => (
              <ProcessStep
                key={s.num}
                step={s}
                isLeft={idx % 2 === 0}
                setNodeRef={(el) => (nodeRefs.current[idx] = el)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
