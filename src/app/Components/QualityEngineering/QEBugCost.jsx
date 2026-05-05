'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const STAGES = [
  {
    id: 'design',
    label: 'Design & Planning',
    shortLabel: 'Design',
    multiplier: 1,
    icon: 'bi-pencil-ruler',
    ringColor: '#bfdbfe',
    bgLight: '#eff6ff',
    barWidth: '10%',
    visualHeight: 15,
    colors: { id: 'blue', top: '#93c5fd', left: '#60a5fa', right: '#3b82f6', ghost: '#dbeafe', text: '#2563eb' },
    description: "Catching a flaw during design or planning is as simple as erasing a whiteboard or updating a Figma component. It costs virtually nothing and keeps your team moving fast.",
  },
  {
    id: 'development',
    label: 'Development',
    shortLabel: 'Development',
    multiplier: 6,
    icon: 'bi-code-slash',
    ringColor: '#99f6e4',
    bgLight: '#f0fdfa',
    barWidth: '25%',
    visualHeight: 35,
    colors: { id: 'teal', top: '#5eead4', left: '#2dd4bf', right: '#14b8a6', ghost: '#ccfbf1', text: '#0d9488' },
    description: "A bug found by a developer reviewing their own code or a peer review adds context-switching and rework time. Still cheap — but already 6× more expensive than catching it in the design spec.",
  },
  {
    id: 'qa',
    label: 'QA / Testing',
    shortLabel: 'QA',
    multiplier: 15,
    icon: 'bi-bug',
    ringColor: '#fef08a',
    bgLight: '#fefce8',
    barWidth: '40%',
    visualHeight: 50,
    colors: { id: 'yellow', top: '#fde047', left: '#facc15', right: '#eab308', ghost: '#fef9c3', text: '#ca8a04' },
    description: "Once code is merged and handed to QA, finding a bug means writing a ticket, reproducing the issue, reprioritizing work, and pulling a developer off new features to fix it.",
  },
  {
    id: 'staging',
    label: 'Staging / UAT',
    shortLabel: 'Staging',
    multiplier: 30,
    icon: 'bi-database',
    ringColor: '#fed7aa',
    bgLight: '#fff7ed',
    barWidth: '70%',
    visualHeight: 70,
    colors: { id: 'orange', top: '#fdba74', left: '#fb923c', right: '#f97316', ghost: '#ffedd5', text: '#ea580c' },
    description: "Bugs found in staging or UAT often block releases. Fixing them requires a full cycle of code, review, QA, and deployment, causing significant delays and team frustration.",
  },
  {
    id: 'production',
    label: 'Production',
    shortLabel: 'Production',
    multiplier: 100,
    icon: 'bi-exclamation-triangle',
    ringColor: '#fecaca',
    bgLight: '#fff1f2',
    barWidth: '100%',
    visualHeight: 100,
    colors: { id: 'red', top: '#fca5a5', left: '#f87171', right: '#dc2626', ghost: '#fee2e2', text: '#b91c1c' },
    description: "The worst-case scenario. Involves emergency hotfixes, potential data loss, user frustration, support overhead, and a massive interruption to your engineering pipeline.",
  },
];

/* Dynamic fill/stroke values (colors.left / .right / .top / .ghost) must stay
   inline because they are unique per stage. Structural transitions are in CSS. */
const IsometricBar = ({ heightPct, colors, isActive }) => {
  const y = 160 - (140 * (heightPct / 100));
  return (
    <svg viewBox="0 0 100 200" width="100%" height="100%" className="qebc-svg">
      <defs>
        <linearGradient id={`ghost-${colors.id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={colors.ghost} stopOpacity="0.8" />
          <stop offset="100%" stopColor={colors.ghost} stopOpacity="0.0" />
        </linearGradient>
        <radialGradient id={`glow-${colors.id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={colors.left} stopOpacity="0.5" />
          <stop offset="100%" stopColor={colors.left} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* opacity is dynamic (isActive); transition lives in CSS */}
      <g className="qebc-iso-g" style={{ opacity: isActive ? 1 : 0.35 }}>
        <ellipse cx="50" cy="165" rx="35" ry="15" fill={`url(#glow-${colors.id})`} />
        <g opacity="0.7">
          <polygon points="20,20 50,35 50,175 20,160" fill={`url(#ghost-${colors.id})`} />
          <polygon points="50,35 80,20 80,160 50,175" fill={`url(#ghost-${colors.id})`} />
          <polygon points="20,20 50,35 80,20 50,5" fill={colors.ghost} opacity="0.5" />
        </g>
        {/* fill values are dynamic; transition lives in CSS */}
        <g>
          <polygon className="qebc-iso-poly" points={`20,${y} 50,${y + 15} 50,175 20,160`} fill={colors.left} />
          <polygon className="qebc-iso-poly" points={`50,${y + 15} 80,${y} 80,160 50,175`} fill={colors.right} />
          <polygon className="qebc-iso-poly" points={`20,${y} 50,${y + 15} 80,${y} 50,${y - 15}`} fill={colors.top} />
        </g>
      </g>
    </svg>
  );
};

export default function QEBugCost() {
  const [activeId, setActiveId] = useState('production');
  const active = STAGES.find(s => s.id === activeId);

  return (
    <section className="cd-section cd-section-white">
      <div className="container">

        <div className="row mb-5">
          <div className="col-12">
            <SectionTitle
              className="text-center"
              SubTitle="The cost of finding bugs late"
              Title="A bug found in production costs <span>100× more</span> to fix"
              Content="Click any stage to see what it costs your team — and why shifting quality left is the highest-ROI engineering investment you can make."
            />
          </div>
        </div>

        <div className="row g-4 g-lg-5 align-items-start">

          {/* ── Left: interactive stage list ── */}
          <div className="col-lg-5 d-flex flex-column gap-3">
            {STAGES.map(stage => {
              const isActive = activeId === stage.id;
              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveId(stage.id)}
                  className={`bg-white p-3 qebc-stage-btn${isActive ? ' active' : ''}`}
                  /* ring colour is unique per stage — must stay inline */
                  style={isActive ? {
                    boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${stage.ringColor}, 0 4px 6px -1px rgba(0,0,0,0.08)`,
                  } : undefined}
                >
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="qebc-icon-wrap p-2 rounded-2 d-flex align-items-center justify-content-center"
                        /* bgLight is unique per stage */
                        style={isActive ? { background: stage.bgLight } : undefined}
                      >
                        <i
                          className={`bi ${stage.icon} fs-5 qebc-stage-icon`}
                          /* text colour is unique per stage */
                          style={isActive ? { color: stage.colors.text } : undefined}
                        />
                      </div>
                      <span className={`fw-semibold qebc-stage-label${isActive ? ' active' : ''}`}>
                        {stage.label}
                      </span>
                    </div>
                    <span
                      className="fw-bold fs-6 qebc-stage-mult"
                      style={isActive ? { color: stage.colors.text } : undefined}
                    >
                      {stage.multiplier}×
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="qebc-bar-track w-100 rounded-pill overflow-hidden">
                    <div
                      className="qebc-bar-fill"
                      style={{
                        width: stage.barWidth,
                        /* fill colour is unique per stage */
                        backgroundColor: isActive ? stage.colors.left : undefined,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Right: 3D chart + info box ── */}
          <div className="col-lg-7 d-flex flex-column gap-4">

            {/* 3D isometric bar chart */}
            <div className="bg-white p-4 d-flex flex-column qebc-chart-card">
              <div className="d-flex justify-content-between align-items-end flex-grow-1 w-100 px-2">
                {STAGES.map(stage => (
                  <div
                    key={`chart-${stage.id}`}
                    className="d-flex flex-column align-items-center h-100 qebc-chart-col"
                    onClick={() => setActiveId(stage.id)}
                  >
                    <div className="w-100 h-100 position-relative">
                      <IsometricBar
                        heightPct={stage.visualHeight}
                        colors={stage.colors}
                        isActive={activeId === stage.id}
                      />
                    </div>
                    <div className="text-center mt-2 pb-2">
                      <div
                        className="fw-bold qebc-chart-mult"
                        style={activeId === stage.id ? { color: stage.colors.text } : undefined}
                      >
                        {stage.multiplier}×
                      </div>
                      <div className="fw-medium qebc-chart-stage-label">
                        {stage.shortLabel}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info box */}
            <div className="bg-white p-4 qebc-info-card">
              <div className="d-flex align-items-center gap-3 mb-3">
                <span
                  className="px-3 py-1 rounded-2 fw-bold small shadow-sm qebc-badge"
                  /* bgLight + text colour are unique per active stage */
                  style={{ background: active.bgLight, color: active.colors.text }}
                >
                  {active.multiplier}× cost
                </span>
                <h3 className="fw-bold mb-0 qebc-info-title">
                  {active.label}
                </h3>
              </div>

              <p className="mb-0 qebc-info-desc">
                {active.description}
              </p>

              <div className="mt-4 pt-3 border-top small fw-medium qebc-info-footer">
                <span className="qebc-shift-link" onClick={() => setActiveId('design')}>
                  Shift left
                </span>
                {' '}to{' '}
                <span className="qebc-shift-link" onClick={() => setActiveId('design')}>
                  Design & Planning
                </span>
                {' '}to save {active.multiplier > 1 ? active.multiplier - 1 : 0}× the resources.
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
