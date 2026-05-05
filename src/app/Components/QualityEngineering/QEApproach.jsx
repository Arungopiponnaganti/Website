'use client';
import React, { useState } from 'react';

/* Maps every tool name → Bootstrap Icon class + gradient pill colour */
const TOOL_META = {
  'Jira':            { icon: 'bi-kanban-fill',             grad: 'qeap-tp-blue'   },
  'Confluence':      { icon: 'bi-journal-richtext',        grad: 'qeap-tp-teal'   },
  'Miro':            { icon: 'bi-grid-1x2-fill',           grad: 'qeap-tp-yellow' },
  'Figma':           { icon: 'bi-vector-pen',              grad: 'qeap-tp-purple' },
  'TestRail':        { icon: 'bi-clipboard2-check-fill',   grad: 'qeap-tp-green'  },
  'Cypress':         { icon: 'bi-tree-fill',               grad: 'qeap-tp-teal'   },
  'Selenium':        { icon: 'bi-robot',                   grad: 'qeap-tp-blue'   },
  'Docker':          { icon: 'bi-box-fill',                grad: 'qeap-tp-blue'   },
  'Playwright':      { icon: 'bi-play-circle-fill',        grad: 'qeap-tp-teal'   },
  'Postman':         { icon: 'bi-send-fill',               grad: 'qeap-tp-orange' },
  'k6':              { icon: 'bi-speedometer2',            grad: 'qeap-tp-purple' },
  'BrowserStack':    { icon: 'bi-display-fill',            grad: 'qeap-tp-orange' },
  'SonarQube':       { icon: 'bi-shield-fill-check',       grad: 'qeap-tp-blue'   },
  'GitHub Actions':  { icon: 'bi-git',                     grad: 'qeap-tp-purple' },
  'Allure':          { icon: 'bi-bar-chart-fill',          grad: 'qeap-tp-green'  },
  'Datadog':         { icon: 'bi-graph-up-arrow',          grad: 'qeap-tp-purple' },
  'Sentry':          { icon: 'bi-bug-fill',                grad: 'qeap-tp-red'    },
  'AWS CloudWatch':  { icon: 'bi-cloud-fill',              grad: 'qeap-tp-yellow' },
  'PagerDuty':       { icon: 'bi-bell-fill',               grad: 'qeap-tp-green'  },
};

const PHASES = [
  {
    id: 0,
    step: 'Sprint 0',
    title: 'Requirements',
    subtitle: 'QA involvement',
    icon: 'bi-layers',
    activities: [
      'Analyze user stories and acceptance criteria',
      'Identify test scenarios and edge cases',
      'Participate in sprint planning and estimation',
      'Initial risk assessment for new features',
    ],
    tools: ['Jira', 'Confluence', 'Miro', 'Figma'],
  },
  {
    id: 1,
    step: 'Sprint N · Dev',
    title: 'Test Design',
    subtitle: 'Runs in parallel',
    icon: 'bi-code-slash',
    activities: [
      'Write detailed test cases and steps',
      'Create and update automation scripts',
      'Prepare required test data and environments',
      "Review developers' implementation plans",
    ],
    tools: ['TestRail', 'Cypress', 'Selenium', 'Docker'],
  },
  {
    id: 2,
    step: 'Sprint N · QA',
    title: 'Execution',
    subtitle: 'Before sprint end',
    icon: 'bi-shield-check',
    activities: [
      'Run functional and regression suites',
      'Exploratory testing on new features',
      'Log, prioritise, and verify defect fixes',
      'Performance spot-checks on changed endpoints',
    ],
    tools: ['Playwright', 'Postman', 'k6', 'BrowserStack'],
  },
  {
    id: 3,
    step: 'Sprint Close',
    title: 'Quality Gate',
    subtitle: 'Before release',
    icon: 'bi-box',
    activities: [
      'Review overall test coverage and results',
      'Sign off on sprint deliverables',
      'Update requirements traceability matrix',
      'Conduct QA retrospective',
    ],
    tools: ['SonarQube', 'GitHub Actions', 'Allure', 'Jira'],
  },
  {
    id: 4,
    step: 'Release',
    title: 'Certification',
    subtitle: 'Go / no-go',
    icon: 'bi-rocket',
    activities: [
      'Execute production smoke testing',
      'Monitor application logs for anomalies',
      'Final go/no-go sign-off with stakeholders',
      'Post-release performance monitoring',
    ],
    tools: ['Datadog', 'Sentry', 'AWS CloudWatch', 'PagerDuty'],
  },
];

export default function QEApproach() {
  const [activePhase, setActivePhase] = useState(2);
  const current = PHASES[activePhase];

  return (
    <section className="cd-section cd-section-muted qeap-section" id="qe-approach">
      <div className="container">

        {/* ── Header ── */}
        <div className="text-center mb-5">
          <div className="qeap-eyebrow d-inline-flex align-items-center gap-2 mb-4">
            <span className="qeap-ping-wrap">
              <span className="qeap-ping" />
              <span className="qeap-ping-dot" />
            </span>
            <span className="qeap-eyebrow-text">QA Architecture</span>
          </div>

          <h2 className="qeap-heading mb-3">
            Quality built into every sprint,{' '}
            <br className="d-none d-md-block" />
            <span className="qeap-heading-gradient">not bolted on at the end.</span>
          </h2>

          <p className="qeap-subtext mx-auto mb-0">
            Click each phase to explore how our QA team embeds seamlessly with developers to ensure bug-free delivery.
          </p>
        </div>

        {/* ── Desktop timeline ── */}
        <div className="qeap-timeline-wrap d-none d-md-block mb-5">
          <div className="qeap-timeline-track" />
          {/* width is dynamic — must stay inline */}
          <div
            className="qeap-timeline-progress"
            style={{ width: `${(activePhase / (PHASES.length - 1)) * 80}%` }}
          />
          <div className="row g-0">
            {PHASES.map((phase, i) => {
              const isActive = activePhase === i;
              const isPast = activePhase > i;
              return (
                <div key={phase.id} className="col d-flex flex-column align-items-center">
                  <button
                    onClick={() => setActivePhase(i)}
                    className={`qeap-node${isActive ? ' qeap-node-active' : isPast ? ' qeap-node-past' : ''}`}
                  >
                    <i className={`bi ${phase.icon}`} />
                  </button>
                  <div className="text-center px-2 mt-3">
                    <div className={`qeap-node-step${isActive ? ' active' : ''}`}>{phase.step}</div>
                    <div className={`qeap-node-title${isActive ? ' active' : ''}`}>{phase.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Layout wrapper: two-col on mobile, block on desktop ── */}
        <div className="qeap-layout-wrapper">

          {/* Vertical nav — mobile only (left column) */}
          <div className="qeap-mobile-vnav d-md-none">
            {PHASES.map((phase, i) => {
              const isActive = activePhase === i;
              const isPast   = activePhase > i;
              return (
                <div key={phase.id} className="qeap-vnode-item">
                  <div className="qeap-vnode-col">
                    <button
                      onClick={() => setActivePhase(i)}
                      className={`qeap-node${isActive ? ' qeap-node-active' : isPast ? ' qeap-node-past' : ''}`}
                    >
                      <i className={`bi ${phase.icon}`} />
                    </button>
                    {i < PHASES.length - 1 && (
                      <div className={`qeap-vnode-line${isPast ? ' active' : ''}`} />
                    )}
                  </div>
                  <div className="qeap-vnode-label">
                    <div className={`qeap-node-step${isActive ? ' active' : ''}`}>{phase.step}</div>
                    <div className={`qeap-node-title${isActive ? ' active' : ''}`}>{phase.title}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Content card ── */}
          <div key={activePhase} className="qeap-card">
            <div className="row g-0">

              {/* Left: Phase Activities */}
              <div className="col-lg-7 qeap-card-left p-3 p-md-5">
                <div className="mb-4">
                  <h3 className="qeap-card-heading mb-1">Phase Activities</h3>
                  <p className="qeap-card-sub mb-0">{current.subtitle}</p>
                </div>
                <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                  {current.activities.map((activity, i) => (
                    <li key={i} className="qeap-activity-item d-flex align-items-start gap-3">
                      <span className="qeap-check-icon flex-shrink-0">
                        <i className="bi bi-check" />
                      </span>
                      <span className="qeap-activity-text">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Tools & Methods */}
              <div className="col-lg-5 qeap-card-right p-3 p-md-5">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <span className="qeap-terminal-icon">
                    <i className="bi bi-terminal" />
                  </span>
                  <h3 className="qeap-card-heading mb-0">Tools &amp; Methods</h3>
                </div>

                <div className="d-flex flex-wrap gap-3">
                  {current.tools.map((tool, i) => {
                    const meta = TOOL_META[tool] ?? { icon: 'bi-tools', grad: 'qeap-tp-blue' };
                    return (
                      <div key={i} className={`qeap-tool-pill d-flex align-items-center justify-content-between rounded-pill ${meta.grad}`}>
                        <span className="qeap-tool-pill-name">{tool}</span>
                        <span className="qeap-tool-pill-icon">
                          <i className={`bi ${meta.icon}`} />
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Current Focus accent card */}
                <div className="qeap-focus-card mt-4">
                  <p className="qeap-focus-label mb-1">Current Focus</p>
                  <p className="qeap-focus-title mb-0">{current.title}</p>
                  <div className="qeap-focus-blur" />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
