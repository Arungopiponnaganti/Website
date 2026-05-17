'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SectionTitle from '../Common/SectionTitle';
import DynamicFormModal from '../Common/DynamicFormModal';

const DIMS = [
  {
    lbl: 'Version control & branching',
    vals: ['No VCS', 'Basic Git', 'GitFlow', 'Trunk-based dev', 'Advanced branching'],
  },
  {
    lbl: 'CI pipeline automation',
    vals: ['Manual builds', 'Basic CI', 'CI with tests', 'Full CI + quality gates', 'Self-healing pipeline'],
  },
  {
    lbl: 'Deployment frequency',
    vals: ['Quarterly+', 'Monthly', 'Weekly', 'Daily', 'On-demand / continuous'],
  },
  {
    lbl: 'Infrastructure as code',
    vals: ['Manual / click-ops', 'Scripts', 'Partial IaC', 'Full IaC', 'IaC + policy as code'],
  },
  {
    lbl: 'Monitoring & observability',
    vals: ['None', 'Basic uptime checks', 'Metrics only', 'Metrics + logs', 'Full observability stack'],
  },
  {
    lbl: 'Security practices',
    vals: ['Ad-hoc', 'Basic IAM', 'Secrets management', 'SAST/DAST in pipeline', 'Shift-left security'],
  },
];

function getResult(pct) {
  if (pct < 30) {
    return {
      label: 'Foundational',
      sublabel: 'High-impact improvements available across all dimensions',
      color: '#ef4444',
      recs: [
        { t: 'Start with version control', d: 'Move to Git trunk-based development — the foundation everything else builds on.' },
        { t: 'Add a basic CI pipeline', d: 'Even a simple lint + unit test run on every push reduces production bugs by 40%.' },
        { t: 'Instrument your app', d: "You can't improve what you can't measure — start with uptime and error rate." },
      ],
    };
  }
  if (pct < 55) {
    return {
      label: 'Developing',
      sublabel: 'Good foundations — focus on automation and consistency',
      color: '#f59e0b',
      recs: [
        { t: 'Increase deployment frequency', d: 'Weekly is good, daily is better — smaller releases mean smaller blast radius.' },
        { t: 'Move to infrastructure as code', d: 'Replace manual cloud console work with Terraform — start with your most-changed infra.' },
        { t: 'Add observability', d: 'Metrics + structured logs + alerts for P1 conditions — the DevOps force multiplier.' },
      ],
    };
  }
  if (pct < 80) {
    return {
      label: 'Advanced',
      sublabel: 'Strong practices — optimise and standardise',
      color: '#10b981',
      recs: [
        { t: 'Implement policy as code', d: 'OPA / Sentinel to enforce security and compliance rules automatically at plan time.' },
        { t: 'Add distributed tracing', d: 'Move from knowing "something is slow" to knowing exactly which service and why.' },
        { t: 'Optimise your cloud spend', d: 'Reserved instances, spot for batch, rightsizing — typical savings of 25–40%.' },
      ],
    };
  }
  return {
    label: 'Elite',
    sublabel: 'Top-tier DevOps maturity — maintain and share practices',
    color: '#4ade80',
    recs: [
      { t: 'Consider platform engineering', d: 'Build internal developer platforms that package your mature practices for other teams.' },
      { t: 'Focus on developer experience', d: 'Measure and optimise time from commit to production — every minute saved compounds.' },
      { t: 'Contribute to open source', d: 'Your mature practices are valuable — consider open-sourcing internal tooling.' },
    ],
  };
}

function StepIndicator({ dim, value, onChange }) {
  // Track fill: dots are flex-1 (5 cols), centers span from 10% to 90% of container
  const fillPct = (value / 4) * 80;

  return (
    <div className="cdm-steps-wrap" role="group" aria-label={`Maturity level for ${dim.lbl}`}>
      {/* Background track */}
      <div className="cdm-step-track-bg" aria-hidden="true" />
      {/* Filled track */}
      <div
        className="cdm-step-track-fill"
        style={{ width: `${fillPct}%` }}
        aria-hidden="true"
      />
      {dim.vals.map((val, i) => (
        <button
          key={i}
          type="button"
          className={[
            'cdm-step-btn',
            i <= value ? 'cdm-step-active' : '',
            i === value ? 'cdm-step-current' : '',
          ].filter(Boolean).join(' ')}
          onClick={() => onChange(i)}
          aria-label={`${dim.lbl}: Level ${i + 1} — ${val}`}
          aria-pressed={i === value}
        >
          <span className="cdm-step-dot" />
        </button>
      ))}
    </div>
  );
}

export default function CDMaturityModel() {
  const [isModalOpen, setModalOpen] = useState(false);

  const [vals, setVals] = useState(DIMS.map(() => 0));

  const update = (i, v) => {
    const next = [...vals];
    next[i] = v;
    setVals(next);
  };

  const total = vals.reduce((a, b) => a + b, 0);
  const max = DIMS.length * 4;
  const pct = Math.round((total / max) * 100);
  const hasInteracted = total > 0;
  const result = getResult(pct);

  const getQuizAnswers = () => {
    return DIMS.map((dim, i) => ({
      question: dim.lbl,
      answer: dim.vals[vals[i]]
    }));
  };

  const getAssessmentData = () => {
    return {
      score: pct,
      level: result.label,
      sublabel: result.sublabel,
      recommendations: result.recs,
      dimensions: DIMS.map((dim, i) => ({
        dimension: dim.lbl,
        selectedLevel: vals[i],
        selectedValue: dim.vals[vals[i]]
      }))
    };
  };

  return (
    <section className="cdm-section cd-section">
      <div className="container">

        {/* ── Header ── */}
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="cd-eyebrow-pill" style={{ display: 'inline-flex', marginBottom: '20px' }}>
              <span className="cd-eyebrow-dot" />
              Self-assessment
            </div>
            <SectionTitle
              className="text-center"
              Title="What is your DevOps maturity level?"
              Content="Score your current practices across six dimensions. We'll show you where to focus first — and what typical clients gain from each area."
              isDarkMode={true}
            />
          </div>
        </div>

        {/* ── Assessment panel ── */}
        <div className="row justify-content-center">
          <div className="col-lg-12">

            <div className="cdm-panel">
              {/* Column headers */}
              <div className="cdm-panel-hd" aria-hidden="true">
                <span>Dimension</span>
                <span>Maturity level</span>
                <span>Current state</span>
              </div>

              {DIMS.map((dim, i) => (
                <div key={i} className="cdm-dim-row">
                  <div className="cdm-dim-label">
                    <span className="cdm-dim-num" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="cdm-dim-name">{dim.lbl}</span>
                  </div>

                  <StepIndicator
                    dim={dim}
                    value={vals[i]}
                    onChange={(v) => update(i, v)}
                  />

                  <span className="cdm-dim-val">{dim.vals[vals[i]]}</span>
                </div>
              ))}
            </div>

            {/* ── Score result ── */}
            {hasInteracted && (
              <div className="cdm-result" role="region" aria-label="Maturity assessment result">

                {/* Score header */}
                <div className="cdm-result-header">
                  <div className="cdm-score-block">
                    <span
                      className="cdm-score"
                      style={{ color: result.color }}
                      aria-label={`Score: ${pct} percent`}
                    >
                      {pct}%
                    </span>
                    <span
                      className="cdm-level-badge"
                      style={{
                        background: `${result.color}18`,
                        color: result.color,
                        border: `1px solid ${result.color}38`,
                      }}
                    >
                      <span
                        className="cdm-badge-dot"
                        style={{ background: result.color }}
                        aria-hidden="true"
                      />
                      {result.label}
                    </span>
                  </div>

                  <div className="cdm-result-meta">
                    <div className="cdm-result-label">{result.label} DevOps maturity</div>
                    <div className="cdm-result-sublabel">{result.sublabel}</div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="cdm-progress-track" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
                  <div
                    className="cdm-progress-fill"
                    style={{ width: `${pct}%`, background: result.color }}
                  />
                </div>

                {/* Recommendations */}
                <div className="cdm-recs">
                  {result.recs.map((r, j) => (
                    <div
                      key={j}
                      className="cdm-rec"
                      style={{ borderLeftColor: result.color }}
                    >
                      <div className="cdm-rec-t">{r.t}</div>
                      <div className="cdm-rec-d">{r.d}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => setModalOpen(true)}
                  className="cdm-cta"
                >
                  Get a full DevOps assessment &rarr;
                </button>

              </div>
            )}

          </div>
        </div>

        <DynamicFormModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          title="DevOps Assessment Request"
          description="Fill out the form below to request a full DevOps assessment."
          fields={[
            {
              label: 'Full Name',
              name: 'name',
              type: 'text',
              placeholder: 'John Smith',
              required: true,
              colSize: 6
            },
            {
              label: 'Email',
              name: 'email',
              type: 'email',
              placeholder: 'john@company.com',
              required: true,
              colSize: 6
            },
            {
              label: 'Phone',
              name: 'phone',
              type: 'tel',
              placeholder: '+1 (555) 000-0000',
              required: true,
              colSize: 6
            },
            {
              label: 'Company',
              name: 'company',
              type: 'text',
              placeholder: 'Your company name',
              required: false,
              colSize: 6
            },
            {
              label: 'Message',
              name: 'message',
              type: 'textarea',
              placeholder: 'Tell us more about your project...',
              required: false,
              colSize: 12
            }
          ]}
          quizAnswers={getQuizAnswers()}
          metadata={{
            page: 'Cloud & DevOps Maturity Assessment',
            section: 'Maturity Assessment Section',
            modal: 'DevOps Maturity Assessment Form',
            source: 'devops-maturity-assessment',
            formType: 'DevOps Assessment Request',
            readinessScore: pct,
            readinessLevel: result.label,
            assessmentData: getAssessmentData()
          }}
        />
      </div>
    </section>
  );
}
