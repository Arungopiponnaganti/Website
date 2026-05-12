'use client';

import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const DELIVERABLES = [
    {
        num: '01',
        week: 'Wk 1–2',
        phase: 'Phase 1',
        title: 'Governance audit & current-state assessment',
        body: 'Deep assessment across all six governance dimensions. Data catalogue inventory, lineage mapping of top 20 datasets, quality profiling on key datasets, access control review, and compliance gap analysis.',
        output: 'Six-dimension scorecard, Data asset inventory, Quality profiling report, Compliance gap analysis'
    },
    {
        num: '02',
        week: 'Wk 3–5',
        phase: 'Phase 2',
        title: 'Ownership model & policy framework',
        body: 'Data owner RACI matrix defined and agreed with business stakeholders. Eight governance policies authored, reviewed, and formally adopted. Governance council charter and meeting cadence established.',
        output: 'Data owner RACI matrix, 8 policy documents, Governance council charter, Training materials'
    },
    {
        num: '03',
        week: 'Wk 6–9',
        phase: 'Phase 3',
        title: 'Technical governance implementation',
        body: 'Data catalogue configured and populated with first 50 critical datasets. Automated lineage capture implemented. Data quality rules deployed in dbt or Great Expectations. Access control policies implemented in warehouse.',
        output: 'Catalogue live & populated, Automated lineage, Quality rules deployed, Access controls enforced'
    },
    {
        num: '04',
        week: 'Wk 10–12',
        phase: 'Phase 4',
        title: 'Monitoring, training & handover',
        body: 'Governance health dashboard live. All data owners and stewards trained on responsibilities. Runbooks for every governance process documented. First governance council meeting facilitated by MayuraSoft.',
        output: 'Governance dashboard, Training completion, Process runbooks, First council meeting'
    },
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
                    <span className="sleek-phase">{step.week} — {step.phase}</span>
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

export default function DGDeliverables() {
    const containerRef = useRef(null);
    const nodeRefs = useRef([]);
    const [pathData, setPathData] = useState('');
    const [scrollProgress, setScrollProgress] = useState(0);

    const calculatePath = () => {
        if (!containerRef.current || nodeRefs.current.filter(Boolean).length !== DELIVERABLES.length) return;

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
        <section id="deliverables" className="cd-section" style={{ backgroundColor: '#050a1e', overflow: 'hidden' }}>
            <div className="container">
                <SectionTitle
                    className="text-center "
                    SubTitle="What you receive"
                    Title="A complete governance programme — delivered in four phases over 12 weeks"
                    Content="Every deliverable is written, practical, and designed to be used by your team on day one — not stored in a SharePoint folder and forgotten."
                    isDarkMode={true}
                />

                <div className="sleek-process-container pristine-container" ref={containerRef}>
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

                        <path
                            d={pathData}
                            fill="none"
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="2"
                            strokeDasharray="6 8"
                        />
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
                        {DELIVERABLES.map((d, idx) => (
                            <ProcessStep
                                key={d.num}
                                step={d}
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
