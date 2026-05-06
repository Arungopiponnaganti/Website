'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import DynamicFormModal from '../Common/DynamicFormModal';

const QUESTIONS = [
  {
    num: '01',
    label: 'Data structure',
    q: 'How structured is the data your AI would work with?',
    opts: [
      'Mostly unstructured (emails, docs, free text)',
      'Mix of structured and unstructured',
      'Mostly structured (databases, APIs)',
      'Not sure yet',
    ],
  },
  {
    num: '02',
    label: 'Use case clarity',
    q: 'Do you have a clear use case in mind for AI?',
    opts: [
      'Yes — very specific and defined',
      'Roughly defined but not scoped',
      'Several ideas, not prioritised yet',
      'No clear idea yet',
    ],
  },
  {
    num: '03',
    label: 'Data accessibility',
    q: 'How accessible is your data via API or code?',
    opts: [
      'Clean APIs or DB access available',
      'Partial access — some manual steps',
      'Mostly manual or file-based access',
      'No access yet — data is siloed',
    ],
  },
  {
    num: '04',
    label: 'AI adoption stage',
    q: "What is your organisation's AI adoption stage?",
    opts: [
      'Already using AI tools in production',
      'Piloting AI in limited areas',
      'Evaluating options — nothing live',
      'No AI exposure yet',
    ],
  },
];

const RESULTS = [
  {
    min: 75,
    badge: 'Ready to build',
    level: 'High readiness — start building now',
    desc: "Your data is accessible, your use case is defined, and your organisation has some AI exposure. You're in the top tier of AI integration readiness. A proof-of-concept can be live within 2–4 weeks.",
    color: '#4ade80',
    recs: [
      { t: 'Start with a PoC', d: 'Pick one high-impact use case and build a working integration in 2–4 weeks.' },
      { t: 'Define your evaluation criteria', d: "Know how you'll measure success before you build — accuracy, latency, or cost reduction." },
      { t: 'Plan your monitoring setup', d: 'Production AI needs dashboards and alerts from day one, not added later.' },
    ],
  },
  {
    min: 45,
    badge: 'Prepare then build',
    level: 'Moderate readiness — prepare, then build',
    desc: 'You have some clarity on use cases and data access, but some foundations need strengthening before a production integration. A structured discovery engagement will get you ready in 2–4 weeks.',
    color: '#fbbf24',
    recs: [
      { t: 'Run a data readiness audit', d: 'Assess data quality and accessibility before selecting a use case to build around.' },
      { t: 'Narrow your use case', d: 'Too many ideas leads to a scattered integration — pick the one with clearest ROI first.' },
      { t: 'Identify your data custodian', d: 'AI integrations need a single owner who understands both the business and the data.' },
    ],
  },
  {
    min: 0,
    badge: 'Foundation first',
    level: 'Early stage — foundation first',
    desc: "You're early in your AI journey, and that's fine — rushing into a build without the right foundations creates technical debt that's expensive to unwind. A strategy engagement will set you up for success.",
    color: '#a78bfa',
    recs: [
      { t: 'Start with an AI strategy session', d: 'Map your highest-value use cases against your data reality before any code is written.' },
      { t: 'Fix data accessibility first', d: 'Siloed or inaccessible data is the #1 reason AI integrations fail — address this first.' },
      { t: 'Run an internal education session', d: 'Building organisational understanding of AI capabilities and limits reduces unrealistic expectations.' },
    ],
  },
];

export default function AIReadinessQuiz() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pickAnswer = (qi, oi) => {
    setAnswers((prev) => ({ ...prev, [qi]: oi }));
  };
  
  const resetQuiz = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const doneCount = Object.keys(answers).length;
  const allDone = doneCount === QUESTIONS.length;

  const total = Object.values(answers).reduce((a, b) => a + b, 0);
  const pct = allDone
    ? Math.round(((QUESTIONS.length * 3 - total) / (QUESTIONS.length * 3)) * 100)
    : 0;
  const result = RESULTS.find((r) => pct >= r.min) || RESULTS[RESULTS.length - 1];

  const auditFormFields = [
    {
      label: 'Full Name',
      name: 'name',
      type: 'text',
      placeholder: 'John Smith',
      required: true,
      colSize: 6
    },
    {
      label: 'Work Email',
      name: 'email',
      type: 'email',
      placeholder: 'john@company.com',
      required: true,
      colSize: 6
    },
    {
      label: 'Company',
      name: 'company',
      type: 'text',
      placeholder: 'Acme Inc.',
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
      label: 'Message',
      name: 'message',
      type: 'textarea',
      placeholder: 'Tell us more about your AI integration needs...',
      required: false,
      colSize: 12
    },
    {
      label: 'Current AI Readiness Score',
      name: 'readinessScore',
      type: 'text',
      placeholder: `${pct}%`,
      defaultValue: `${pct}%`,
      required: false,
      colSize: 12,
      readOnly: true,
      readOnlyMessage: 'This is your calculated AI readiness score based on your quiz answers.'
    }
  ];

  const auditFormMetadata = {
    sourcePage: 'AI Integration',
    sourceSection: 'Are you ready to integrate AI?',
    formType: 'Full AI Audit',
    pageUrl: typeof window !== 'undefined' ? window.location.pathname : '',
    readinessScore: pct,
    readinessLevel: result.badge
  };

  const quizAnswers = Object.keys(answers).map(qi => ({
    question: QUESTIONS[qi].q,
    answer: QUESTIONS[qi].opts[answers[qi]]
  }));


  return (
    <section className="cd-section ai-quiz-section">
      <div className="container py-4">

        {/* Section header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7">
            <SectionTitle
              className="text-center"
              SubTitle="Are you ready to integrate AI?"
              Title="Four questions. Instant readiness score."
              Content="Answer honestly — the score tells you where to start so your first call with us is 10× more productive."
              isDarkMode={true}
            />
          </div>
        </div>

        {/* Two-column quiz row */}
        <div className="row g-0 rounded-3 overflow-hidden">

          {/* ── Column 1: Questions ── */}
          <div className="col-md-6 ai-quiz-col-left p-4 p-lg-5 d-flex flex-column gap-4">

            {/* Progress strip */}
            <div className="ai-quiz-progress">
              <div className="d-flex gap-2 flex-grow-1">
                {QUESTIONS.map((_, i) => (
                  <div
                    key={i}
                    className={`ai-quiz-prog-seg${answers[i] !== undefined ? ' done' : ''}`}
                  />
                ))}
              </div>
              <div className="ai-quiz-prog-label">
                {doneCount} of {QUESTIONS.length} answered
              </div>
            </div>

            {/* Question cards — no border, just stacked */}
            <div className="d-flex flex-column gap-4">
              {QUESTIONS.map((q, qi) => (
                <div key={qi} className="ai-quiz-question-card">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="ai-quiz-q-num">{q.num}</span>
                    <span className="ai-quiz-q-label">{q.label}</span>
                  </div>
                  <label htmlFor={`quiz-q-${qi}`} className="ai-quiz-q-text mb-3 d-block">{q.q}</label>
                  <select
                    id={`quiz-q-${qi}`}
                    className="form-select ai-quiz-select"
                    value={answers[qi] !== undefined ? answers[qi] : ''}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val !== '') pickAnswer(qi, parseInt(val, 10));
                    }}
                  >
                    <option value="">Select your answer...</option>
                    {q.opts.map((o, oi) => (
                      <option key={oi} value={oi}>{o}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            {/* Submit */}
            {allDone && !submitted && (
              <div className="d-flex justify-content-end mt-auto pt-2">
                <button
                  className="cd-btn-primary"
                  style={{ border: 'none', cursor: 'pointer', fontSize: '14px', padding: '12px 28px' }}
                  onClick={() => setSubmitted(true)}
                >
                  Get my readiness score &rarr;
                </button>
              </div>
            )}

          </div>

          {/* ── Column 2: Result ── */}
          <div className="col-md-6 ai-quiz-col-right d-flex flex-column">

            {!submitted ? (
              /* Placeholder */
              <div className="d-flex flex-column align-items-center justify-content-center text-center flex-grow-1 p-4 p-lg-5">
                <div className="ai-quiz-ph-icon mb-4">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <circle cx="24" cy="24" r="22" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                    <circle cx="24" cy="24" r="22" stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2" strokeDasharray="138" strokeDashoffset={138 - (138 * doneCount / QUESTIONS.length)}
                      strokeLinecap="round"
                      style={{ transition: 'stroke-dashoffset 0.4s ease', transformOrigin: 'center', transform: 'rotate(-90deg)' }}
                    />
                    <text x="24" y="29" textAnchor="middle" fontSize="14" fontWeight="700" fill="rgba(255,255,255,0.9)">
                      {doneCount}/{QUESTIONS.length}
                    </text>
                  </svg>
                </div>
                <div className="ai-quiz-ph-title mb-2">Your score appears here</div>
                <div className="ai-quiz-ph-desc">
                  Answer all {QUESTIONS.length} questions on the left to get your personalised AI readiness score and next-step recommendations.
                </div>
              </div>
            ) : (
              /* Result */
              <>
                {/* Score block */}
                <div className="p-4 p-lg-5 flex-grow-1 d-flex flex-column gap-4">

                  {/* Score + level */}
                  <div className="d-flex align-items-center gap-3">
                    <div className="text-center" style={{ flexShrink: 0 }}>
                      <div className="ai-qr-score" style={{ color: result.color }}>{pct}%</div>
                      <div className="ai-qr-bar-track">
                        <div className="ai-qr-bar-fill" style={{ width: `${pct}%`, background: result.color }} />
                      </div>
                      <div className="ai-qr-sub-label">AI readiness</div>
                    </div>
                    <div>
                      <span className="ai-qr-badge mb-2" style={{ borderColor: result.color, color: result.color }}>
                        {result.badge}
                      </span>
                      <div className="ai-qr-level">{result.level}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="ai-qr-desc mb-0">{result.desc}</p>

                  {/* Top priorities label */}
                  <div className="ai-qr-priorities-label">Your top priorities</div>

                  {/* Rec cards */}
                  <div className="d-flex flex-column gap-3">
                    {result.recs.map((r, i) => (
                      <div key={i} className="ai-qr-rec-card">
                        <div className="ai-qr-rec-num">{String(i + 1).padStart(2, '0')}</div>
                        <div className="ai-qr-rec-title">{r.t}</div>
                        <div className="ai-qr-rec-desc">{r.d}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA footer */}
                <div className="ai-quiz-res-footer p-4 p-lg-5 d-flex flex-column gap-2">
                  <button
                    className="cd-btn-primary d-block text-center"
                    style={{ fontSize: '14px', padding: '12px 24px', border: 'none', cursor: 'pointer' }}
                    onClick={() => setIsModalOpen(true)}
                  >
                    Get full AI audit &rarr;
                  </button>
                  <button
                    className="ai-quiz-retake-btn w-100"
                    onClick={resetQuiz}
                  >
                    Retake quiz
                  </button>
                </div>
              </>
            )}

          </div>

        </div>
      </div>

      <DynamicFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get Your Full AI Audit"
        description="Fill out the form below to get your complete AI readiness assessment."
        fields={auditFormFields}
        metadata={auditFormMetadata}
        quizAnswers={quizAnswers}
      />
    </section>
  );
}
