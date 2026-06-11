"use client";

import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const steps = [
  {
    num: "01",
    phase: "Discovery",
    title: "Share the business context",
    body: "We collect context on the workflow, software system, data sources, business goal, constraints, and what happens if the issue stays unresolved.",
    output: "Audit brief",
  },
  {
    num: "02",
    phase: "Readiness",
    title: "Map readiness and gaps",
    body: "We check workflow repeatability, data access, integrations, ownership, risk, human review needs, and where automation or modernization can realistically help.",
    output: "Readiness map",
  },
  {
    num: "03",
    phase: "Prioritization",
    title: "Prioritize practical opportunities",
    body: "We compare possible next moves by business value, technical complexity, data readiness, governance needs, and delivery risk.",
    output: "Prioritized opportunity list",
  },
  {
    num: "04",
    phase: "Recommendation",
    title: "Recommend the first move",
    body: "You receive a clear recommendation for what to automate, modernize, build, or fix first, plus what to avoid for now.",
    output: "Written next-step recommendation",
  },
  {
    num: "05",
    phase: "Next step",
    title: "Choose the path forward",
    body: "If the recommendation is a fit, we can convert it into a scoped software, AI, data, or modernization plan with clear next steps.",
    output: "Scoped next-step plan",
  },
];

const ProcessStep = ({ step, isLeft, setNodeRef }) => (
  <div className={`sleek-step pristine-static ${isLeft ? "sleek-left" : "sleek-right"}`}>
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
          <span className="output-accent">Deliverable:</span> {step.output}
        </div>
      </div>
    </div>
  </div>
);

export default function FreeAIDataAuditProcess() {
  const containerRef = useRef(null);
  const nodeRefs = useRef([]);
  const [pathData, setPathData] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  const calculatePath = () => {
    if (!containerRef.current || nodeRefs.current.filter(Boolean).length !== steps.length) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let d = "";

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
    window.addEventListener("resize", calculatePath);
    const timeout = setTimeout(calculatePath, 150);

    return () => {
      window.removeEventListener("resize", calculatePath);
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="audit-process" className="cd-section" style={{ backgroundColor: "#050a1e", overflow: "hidden" }}>
      <div className="container">
        <SectionTitle
          className="text-center"
          SubTitle="Methodology"
          Title="How the audit works"
          Content="A focused path from context to recommendation: understand the current state, assess readiness, prioritize options, and define the safest first move."
          isDarkMode={true}
        />

        <div className="sleek-process-container pristine-container" ref={containerRef}>
          <svg className="snake-svg-canvas" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }}>
            <defs>
              <clipPath id="audit-snake-scroll-clip">
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height={`${scrollProgress * 100}%`}
                  style={{ transition: "height 0.15s ease-out" }}
                />
              </clipPath>
            </defs>
            <path d={pathData} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="6 8" />
            <path d={pathData} fill="none" stroke="#ff3c00" strokeWidth="3" strokeDasharray="6 8" clipPath="url(#audit-snake-scroll-clip)" />
          </svg>

          <div className="sleek-steps-wrapper" style={{ position: "relative", zIndex: 2, padding: "40px 0" }}>
            {steps.map((step, index) => (
              <ProcessStep
                key={step.num}
                step={step}
                isLeft={index % 2 === 0}
                setNodeRef={(el) => {
                  nodeRefs.current[index] = el;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
