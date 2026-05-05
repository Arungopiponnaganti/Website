'use client';

import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const steps = [
  {
    num: '01', phase: 'Discover', title: 'Stakeholder alignment & user research',
    body: 'We run structured stakeholder workshops and user interviews to understand goals, pain points, and context. Competitive UX audits surface opportunities before a single pixel is placed.',
    output: 'Research synthesis & insights deck',
  },
  {
    num: '02', phase: 'Define', title: 'Personas, JTBD & design brief',
    body: 'We synthesise research into 2–4 primary personas and jobs-to-be-done maps. The output is a signed-off design brief that anchors every subsequent decision.',
    output: 'Signed-off design brief',
  },
  {
    num: '03', phase: 'Ideate', title: 'IA, user flows & lo-fi wireframes',
    body: 'Information architecture and user journey maps come first, then lo-fi wireframes for every key screen. A stakeholder review closes the stage before we add fidelity.',
    output: 'Wireframes + user journey maps',
  },
  {
    num: '04', phase: 'Prototype', title: 'Hi-fi prototype & micro-interactions',
    body: 'We build a clickable hi-fi prototype in Figma with micro-interaction specs, edge cases, and error states — enough fidelity to test with real users.',
    output: 'Interactive prototype',
  },
  {
    num: '05', phase: 'Test', title: 'Moderated usability & iteration',
    body: 'Moderated sessions, heatmaps, and session recordings surface priority issues. We iterate the designs post-testing before handing off to development.',
    output: 'Synthesis report + iterated designs',
  },
  {
    num: '06', phase: 'Handoff', title: 'Dev-ready specs & design system',
    body: 'We deliver dev-ready Figma files with full annotations, a component library, and design token exports. A live walkthrough with your engineering team ensures zero translation loss.',
    output: 'Design system + Figma handoff',
  },
];

const ProcessStep = ({ step, isLeft, setNodeRef }) => {
  return (
    <div className={`sleek-step uxui-step pristine-static ${isLeft ? 'sleek-left' : 'sleek-right'}`}>
      <div className="sleek-node-container" ref={setNodeRef}>
        <div className="uxui-node-ring"></div>
        <div className="uxui-node-core"></div>
      </div>

      <div className="sleek-content">
        <div className="sleek-bg-number">{step.num}</div>
        <div className="sleek-content-inner">
          <span className="uxui-phase">{step.phase}</span>
          <h3 className="sleek-title">{step.title}</h3>
          <p className="sleek-body">{step.body}</p>
          <div className="uxui-output">
            <span className="uxui-output-accent">Deliverable:</span> {step.output}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function UXUIProcess() {
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
          className="text-center mb-5"
          SubTitle="Methodology"
          Title="Design Lifecycle"
          Content="No guesswork. A research-led, six-stage process that turns ambiguity into a tested, dev-ready design system."
          isDarkMode={true}
        />

        <div className="sleek-process-container pristine-container" ref={containerRef}>
          {/* Dynamic Dotted SVG Animation Layer */}
          <svg className="snake-svg-canvas" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
            <defs>
              <clipPath id="uxui-snake-scroll-clip">
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
              stroke="#4361EE"
              strokeWidth="3"
              strokeDasharray="6 8"
              clipPath="url(#uxui-snake-scroll-clip)"
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

      <style>{`
        .uxui-node-core {
          width: 12px;
          height: 12px;
          background-color: #050a1e;
          border: 2px solid #3b4256;
          border-radius: 50%;
          transition: all 0.5s ease;
        }
        .uxui-node-ring {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.6s ease;
        }
        .uxui-step:hover .uxui-node-core {
          background-color: #4361EE;
          border-color: #4361EE;
          box-shadow: 0 0 16px rgba(67, 97, 238, 0.6);
        }
        .uxui-step:hover .uxui-node-ring {
          transform: scale(1.6);
          border-color: rgba(67, 97, 238, 0.2);
        }
        .uxui-phase {
          font-size: 11px;
          text-transform: uppercase;
          color: #4361EE;
          font-weight: 600;
          letter-spacing: 2px;
          margin-bottom: 12px;
          display: block;
        }
        .uxui-output {
          font-size: 13px;
          color: #cbd5e1;
          padding-left: 16px;
          border-left: 2px solid rgba(255, 255, 255, 0.1);
        }
        .uxui-output-accent {
          color: #fff;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
}
