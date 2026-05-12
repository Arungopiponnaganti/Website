'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import DynamicFormModal from '../Common/DynamicFormModal';

const DIMENSIONS = [
  {
    num: '01',
    title: 'Data readiness',
    sub: 'Quality, accessibility, and volume of your data',
    q: 'How would you describe the state of your organisation\'s data?',
    opts: [
      'Data is siloed across systems with no central access',
      'Partial data access — some via APIs, some manual',
      'Most data is accessible but quality varies',
      'Clean, structured data with API access and documentation',
    ],
  },
  {
    num: '02',
    title: 'Technical infrastructure',
    sub: 'Current tech stack and engineering capability',
    q: 'How mature is your current technology infrastructure?',
    opts: [
      'On-premise legacy systems, limited cloud usage',
      'Mix of legacy and cloud — ongoing migration',
      'Mostly cloud-native with modern APIs',
      'Cloud-native, microservices, strong engineering team',
    ],
  },
  {
    num: '03',
    title: 'Use case clarity',
    sub: 'How well-defined your AI opportunity is',
    q: 'How clearly defined is your AI use case?',
    opts: [
      'No specific use case — exploring broadly',
      'A general idea but not scoped or prioritised',
      'Defined use case with some success metrics',
      'Specific, scoped use case with clear ROI targets and stakeholder buy-in',
    ],
  },
  {
    num: '04',
    title: 'Team & skills',
    sub: 'Internal AI literacy and capability',
    q: 'What is your team\'s current AI / ML capability?',
    opts: [
      'No AI/ML expertise in-house',
      'Basic awareness — a few team members have used AI tools',
      'Some data science capability but no production AI experience',
      'Strong ML engineering team with production AI experience',
    ],
  },
  {
    num: '05',
    title: 'Governance & ethics',
    sub: 'Policy, risk management, and compliance readiness',
    q: 'How prepared is your organisation for responsible AI deployment?',
    opts: [
      'No AI policies or risk frameworks in place',
      'Basic awareness of AI risks but no formal policies',
      'AI risk considered in planning but no formal framework',
      'Formal AI governance framework in place or in development',
    ],
  },
  {
    num: '06',
    title: 'Executive alignment',
    sub: 'Leadership support and change management readiness',
    q: 'How aligned is your leadership team on AI adoption?',
    opts: [
      'AI not on leadership agenda',
      'Some executive interest but no formal commitment',
      'Leadership supportive but no dedicated budget or owner',
      'Dedicated AI budget, executive sponsor, and clear mandate',
    ],
  },
];

function getResult(pct) {
  if (pct >= 75) {
    return {
      level: 'AI-ready — start building',
      color: '#10b981',
      desc: 'Your organisation has the foundations for successful AI adoption. Data is accessible, infrastructure is modern, and leadership is aligned. The risk of failure is low — the main task is choosing the right first use case and executing with discipline.',
      recs: [
        { t: 'Prioritise your highest-ROI use case', d: 'With strong foundations, your risk is choosing the wrong first project. Use an impact × effort matrix to pick the one with the clearest ROI.' },
        { t: 'Build your evaluation framework first', d: 'Define what "success" looks like — accuracy, latency, cost — before any code is written. This prevents post-launch confusion.' },
        { t: 'Plan for governance from day one', d: 'Even with strong infrastructure, AI governance is often an afterthought. Build your bias testing and monitoring plan alongside the first model.' },
      ],
    };
  }
  if (pct >= 45) {
    return {
      level: 'Developing — address gaps before building',
      color: '#f59e0b',
      desc: 'You have meaningful foundations but important gaps that could derail an AI project if not addressed first. The most common failure mode at this readiness level is starting to build before data and stakeholder alignment issues are resolved.',
      recs: [
        { t: 'Fix data accessibility before selecting a use case', d: 'Siloed or inaccessible data is the #1 reason AI projects fail. Invest 4–6 weeks in data infrastructure before writing a model spec.' },
        { t: 'Run a leadership alignment workshop', d: 'Misaligned expectations between technical and business stakeholders kill more AI projects than technical failures. Align on what success looks like.' },
        { t: 'Hire or partner for AI expertise', d: 'At this readiness level, building entirely in-house often leads to slow progress. A specialist partner can compress your learning curve significantly.' },
      ],
    };
  }
  return {
    level: 'Early stage — build foundations first',
    color: '#534AB7',
    desc: 'AI adoption is achievable for your organisation, but attempting to build AI on current foundations is likely to produce disappointing results and waste budget. The highest-ROI investment right now is in prerequisites — data, infrastructure, and internal alignment.',
    recs: [
      { t: 'Commission a data audit before anything else', d: 'Without understanding what data you have and how to access it, no AI use case can be properly scoped or costed.' },
      { t: 'Start with AI education, not AI projects', d: 'A two-day AI literacy programme for leadership and key teams will save months of misaligned expectations and scope changes later.' },
      { t: 'Pick one small, high-certainty win', d: 'Rather than a transformative AI project, start with a narrow automation that uses existing structured data — build confidence and capability before tackling complex challenges.' },
    ],
  };
}

export default function ARAAssessment() {
  const [scores, setScores] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenForMailMe, setIsModalOpenForMailMe] = useState(false);

  const pickAnswer = (di, oi) => {
    setScores((prev) => ({ ...prev, [di]: oi }));
  };

  const resetQuiz = () => {
    setScores({});
    setSubmitted(false);
  };

  const doneCount = Object.keys(scores).length;
  const allDone = doneCount === DIMENSIONS.length;

  const handleSubmit = () => {
    if (!allDone) {
      alert('Please select one option from each dimension to complete your assessment.');
      return;
    }
    setSubmitted(true);
  };

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const maxScore = DIMENSIONS.length * 3;
  const overallPct = Math.round((totalScore / maxScore) * 100);
  const result = getResult(overallPct);
  const dimScores = DIMENSIONS.map((d, i) => ({
    label: d.title,
    score: Math.round(((scores[i] ?? 0) / 3) * 100),
  }));

  const barColor = (s) => (s >= 70 ? '#10b981' : s >= 40 ? '#f59e0b' : '#534AB7');

  const formFields = [
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
      placeholder: 'Tell us more about your chatbot configuration needs...',
      required: false,
      colSize: 12
    },
    // {
    //   label: 'Current AI Readiness Score',
    //   name: 'readinessScore',
    //   type: 'text',
    //   placeholder: `${pct}%`,
    //   defaultValue: `${pct}%`,
    //   required: false,
    //   colSize: 12,
    //   readOnly: true,
    //   readOnlyMessage: 'This is your calculated AI readiness score based on your quiz answers.'
    // }
  ];

  const formFieldsForMailMe = [
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'john@company.com',
      required: true,
      colSize: 12
    },
  ]

  const formMetadata = {
    sourcePage: 'AI Readiness',
    sourceSection: 'AI Readiness Assessment',
    formType: 'Assess your organisation&#39;s AI readiness',
    pageUrl: typeof window !== 'undefined' ? window.location.pathname : ''
  };

  const quizAnswers = Object.keys(scores).map(qi => ({
    question: DIMENSIONS[qi].q,
    answer: DIMENSIONS[qi].opts[scores[qi]]
  }));

  return (
    <section className="cd-section ai-quiz-section" id="ara-assessment">
      <div className="container py-4">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7">
            <SectionTitle
              className="text-center"
              SubTitle="AI Readiness Assessment"
              Title="Assess your organisation's AI readiness"
              Content="Answer 6 questions across key dimensions. We'll generate a readiness score with personalised recommendations."
              isDarkMode={true}
            />
          </div>
        </div>

        <div className="row g-0 rounded-3 overflow-hidden">
          <div className="col-md-6 ai-quiz-col-left p-4 p-lg-5 d-flex flex-column gap-4">
            <div className="ai-quiz-progress">
              <div className="d-flex gap-2 flex-grow-1">
                {DIMENSIONS.map((_, i) => (
                  <div key={i} className={`ai-quiz-prog-seg${scores[i] !== undefined ? ' done' : ''}`} />
                ))}
              </div>
              <div className="ai-quiz-prog-label">
                {doneCount} of {DIMENSIONS.length} answered
              </div>
            </div>

            <div className="d-flex flex-column gap-4">
              {DIMENSIONS.map((dim, di) => (
                <div key={di} className="ai-quiz-question-card">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="ai-quiz-q-num">{dim.num}</span>
                    <span className="ai-quiz-q-label">{dim.title}</span>
                  </div>
                  <label htmlFor={`quiz-q-${di}`} className="ai-quiz-q-text mb-3 d-block">{dim.q}</label>
                  <select
                    id={`quiz-q-${di}`}
                    className="form-select ai-quiz-select"
                    value={scores[di] !== undefined ? scores[di] : ''}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val !== '') pickAnswer(di, parseInt(val, 10));
                    }}
                  >
                    <option value="">Select your answer...</option>
                    {dim.opts.map((o, oi) => (
                      <option key={oi} value={oi}>{o}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            {allDone && !submitted && (
              <div className="d-flex justify-content-end mt-auto pt-2">
                <button
                  className="cd-btn-primary"
                  style={{ border: 'none', cursor: 'pointer', fontSize: '14px', padding: '12px 28px', background: '#050a1e', color: '#fff' }}
                  onClick={handleSubmit}
                >
                  Get my readiness score &rarr;
                </button>
              </div>
            )}
          </div>

          <div className="col-md-6 ai-quiz-col-right d-flex flex-column">

            {!submitted ? (
              <div className="d-flex flex-column align-items-center justify-content-center text-center flex-grow-1 p-4 p-lg-5">
                <div className="ai-quiz-ph-icon mb-4">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <circle cx="24" cy="24" r="22" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                    <circle
                      cx="24"
                      cy="24"
                      r="22"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2"
                      strokeDasharray="138"
                      strokeDashoffset={138 - (138 * doneCount / DIMENSIONS.length)}
                      strokeLinecap="round"
                      style={{ transition: 'stroke-dashoffset 0.4s ease', transformOrigin: 'center', transform: 'rotate(-90deg)' }}
                    />
                    <text x="24" y="29" textAnchor="middle" fontSize="14" fontWeight="700" fill="rgba(255,255,255,0.9)">
                      {doneCount}/{DIMENSIONS.length}
                    </text>
                  </svg>
                </div>
                <div className="ai-quiz-ph-title mb-2">Your readiness score appears here</div>
                <div className="ai-quiz-ph-desc">
                  Answer all {DIMENSIONS.length} questions on the left to get your personalised AI readiness assessment and recommendations.
                </div>
              </div>
            ) : (
              <>
                <div className="p-4 p-lg-5 flex-grow-1 d-flex flex-column gap-4">
                  <div>
                    <span className="ai-qr-badge mb-2" style={{ borderColor: result.color, color: result.color }}>
                      Assessment Complete
                    </span>
                    <div className="ai-qr-level" style={{ color: result.color }}>{result.level}</div>
                  </div>

                  <div className="ai-qr-overall-score" style={{ color: result.color }}>{overallPct}%</div>
                  <p className="ai-qr-desc mb-0">
                    {result.desc}
                  </p>

                  <div className="ai-qr-dim-scores">
                    {dimScores.map((ds, i) => (
                      <div className="ai-qr-ds-row" key={i}>
                        <div className="ai-qr-ds-label">{ds.label}</div>
                        <div className="ai-qr-ds-bar">
                          <div className="ai-qr-ds-fill" style={{ width: `${ds.score}%`, background: barColor(ds.score) }} />
                        </div>
                        <div className="ai-qr-ds-val">{ds.score}</div>
                      </div>
                    ))}
                  </div>

                  <div className="ai-qr-priorities-label">Top recommendations</div>
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

                <div className="ai-quiz-res-footer p-4 p-lg-5 d-flex flex-column gap-3">
                  <div className="row g-3">
                    <div className="col-6">
                      <div style={{ padding: '16px', borderRadius: '10px', background: '#050a1e', height: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ fontSize: '13px', fontWeight: '600', color: '#fff' }}>Get the full report</div>
                        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>
                          Free PDF with expanded recommendations.
                        </div>
                        <button onClick={() => setIsModalOpenForMailMe(true)} className="cd-btn-primary d-block text-center text-decoration-none" style={{ fontSize: '12px', padding: '10px 16px', marginTop: '4px', border: 'none', cursor: 'pointer' }}>
                          Email me the report
                        </button>
                      </div>
                    </div>
                    <div className="col-6">
                      <div style={{ padding: '16px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', height: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ fontSize: '13px', fontWeight: '600', color: '#fff' }}>Book consultation</div>
                        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>
                          Free 45-minute session to build your plan.
                        </div>
                        <button onClick={() => setIsModalOpen(true)} className="cd-btn-primary d-block text-center text-decoration-none" style={{ fontSize: '12px', padding: '10px 16px', marginTop: '4px', border: 'none', cursor: 'pointer' }}>
                          Book free consultation
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="ai-quiz-retake-btn w-100"
                    onClick={resetQuiz}
                  >
                    Retake assessment
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <DynamicFormModal
        isOpen={isModalOpen || isModalOpenForMailMe}
        onClose={() => {
          setIsModalOpen(false);
          setIsModalOpenForMailMe(false);
        }}
        title={isModalOpenForMailMe ? "Email me the report" : "Book Your free consultation"}
        description={isModalOpenForMailMe ? "Fill out the form below to get your assessment report." : "Fill out the form below to get your complete assessment."}
        fields={isModalOpenForMailMe ? formFieldsForMailMe : formFields}
        metadata={formMetadata}
        quizAnswers={quizAnswers}
      />
    </section>
  );
}