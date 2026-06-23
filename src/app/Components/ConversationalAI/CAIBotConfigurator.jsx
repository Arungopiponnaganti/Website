'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import DynamicFormModal from '../Common/DynamicFormModal';
import '@/app/assets/ai-integration.css';

const CFG_SECTIONS = [
  {
    num: '01',
    label: 'Primary use case',
    q: 'What is the main purpose of your chatbot?',
    opts: [
      'Customer support — FAQ, issue resolution, returns',
      'Sales qualification — lead capture & scoring',
      'Internal helpdesk — HR, IT, onboarding queries',
      'E-commerce assistant — orders, tracking, recommendations',
    ],
    note: 'Knowledge base of FAQs + CRM integration + CSAT measurement',
  },
  {
    num: '02',
    label: 'Deployment channel',
    q: 'Where will your bot live?',
    opts: [
      'Website chat widget — embedded on your site',
      'WhatsApp Business — India\'s highest-engagement channel',
      'Slack / Teams — for internal bots',
      'Multi-channel — all of the above unified',
    ],
    note: 'JavaScript snippet, customisable design, mobile responsive',
  },
  {
    num: '03',
    label: 'AI capability level',
    q: 'How intelligent should your bot be?',
    opts: [
      'Rule-based + LLM hybrid — predictable, lower cost, fast build',
      'Fully LLM-powered — natural conversation, highest quality',
      'LLM + voice interface — voice + text, multilingual',
    ],
    note: 'Decision trees for common flows, LLM for open-ended queries, 40% lower API cost',
  },
  {
    num: '04',
    label: 'Human handoff',
    q: 'Do you need human agent escalation?',
    opts: [
      'Automated only — no handoff, fully self-contained',
      'Handoff to human agent — with full context transfer',
      'Handoff + agent assist — bot stays on, suggests replies',
    ],
    note: 'Bot resolves or ends conversation, no escalation path',
  },
];

export default function CAIBotConfigurator() {
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
  const allDone = doneCount === CFG_SECTIONS.length;

  const handleSubmit = () => {
    if (!allDone) {
      alert('Please select one option from each section to complete your bot configuration.');
      return;
    }
    setSubmitted(true);
  };

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


  const formMetadata = {
    sourcePage: 'Conversational AI',
    sourceSection: 'Bot configurator',
    formType: 'Design your chatbot in 60 seconds',
    pageUrl: typeof window !== 'undefined' ? window.location.pathname : ''
  };

  const quizAnswers = Object.keys(answers).map(qi => ({
    question: CFG_SECTIONS[qi].q,
    answer: CFG_SECTIONS[qi].opts[answers[qi]]
  }));

  return (
    <section className="cd-section ai-quiz-section">
      <div className="container py-4">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7">
            <SectionTitle
              className="text-center"
              SubTitle="Bot configurator"
              Title="Design your chatbot in 60 seconds"
              Content="Select your options. We'll generate a configuration summary you can use as a starting brief — or send directly to us."
              isDarkMode={true}
            />
          </div>
        </div>

        <div className="row g-0 rounded-3 overflow-hidden">
          <div className="col-md-6 ai-quiz-col-left p-4 p-lg-5 d-flex flex-column gap-4">
            <div className="ai-quiz-progress">
              <div className="d-flex gap-2 flex-grow-1">
                {CFG_SECTIONS.map((_, i) => (
                  <div key={i} className={`ai-quiz-prog-seg${answers[i] !== undefined ? ' done' : ''}`} />
                ))}
              </div>
              <div className="ai-quiz-prog-label">
                {doneCount} of {CFG_SECTIONS.length} answered
              </div>
            </div>

            <div className="d-flex flex-column gap-4">
              {CFG_SECTIONS.map((section, qi) => (
                <div key={qi} className="ai-quiz-question-card">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="ai-quiz-q-num">{section.num}</span>
                    <span className="ai-quiz-q-label">{section.label}</span>
                  </div>
                  <label htmlFor={`cfg-q-${qi}`} className="ai-quiz-q-text mb-3 d-block">{section.q}</label>
                  <select
                    id={`cfg-q-${qi}`}
                    className="form-select ai-quiz-select"
                    value={answers[qi] !== undefined ? answers[qi] : ''}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val !== '') pickAnswer(qi, parseInt(val, 10));
                    }}
                  >
                    <option value="">Select your answer...</option>
                    {section.opts.map((o, oi) => (
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
                  style={{ border: 'none', cursor: 'pointer', fontSize: '14px', padding: '12px 28px' }}
                  onClick={handleSubmit}
                >
                  Generate configuration summary &rarr;
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
                      strokeDashoffset={138 - (138 * doneCount / CFG_SECTIONS.length)}
                      strokeLinecap="round"
                      style={{ transition: 'stroke-dashoffset 0.4s ease', transformOrigin: 'center', transform: 'rotate(-90deg)' }}
                    />
                    <text x="24" y="29" textAnchor="middle" fontSize="14" fontWeight="700" fill="rgba(255,255,255,0.9)">
                      {doneCount}/{CFG_SECTIONS.length}
                    </text>
                  </svg>
                </div>
                <div className="ai-quiz-ph-title mb-2">Your configuration appears here</div>
                <div className="ai-quiz-ph-desc">
                  Answer all {CFG_SECTIONS.length} questions on the left to get your personalised bot configuration summary and next steps.
                </div>
              </div>
            ) : (
              <>
                <div className="p-4 p-lg-5 flex-grow-1 d-flex flex-column gap-4">
                  <div>
                    <span className="ai-qr-badge mb-2" style={{ borderColor: '#4ade80', color: '#4ade80' }}>
                      Configuration Ready
                    </span>
                    <div className="ai-qr-level">Your bot is ready to be scoped</div>
                  </div>

                  <p className="ai-qr-desc mb-0">
                    Based on your selections, here&apos;s your bot configuration summary. Review the details below and send this brief directly to Mayurasoft for a detailed scoping questionnaire.
                  </p>

                  <div className="ai-qr-priorities-label">Configuration summary</div>

                  <div className="d-flex flex-column gap-3">
                    {CFG_SECTIONS.map((section, qi) => (
                      <div key={qi} className="ai-qr-rec-card">
                        <div className="ai-qr-rec-num">{section.num}</div>
                        <div className="ai-qr-rec-title">{section.label}</div>
                        <div className="ai-qr-rec-desc">{section.opts[answers[qi]]}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="ai-quiz-res-footer p-4 p-lg-5 d-flex flex-column gap-2">
                  <button
                    className="cd-btn-primary d-block text-center text-decoration-none"
                    style={{ fontSize: '14px', padding: '12px 24px', border: 'none', cursor: 'pointer' }}
                    onClick={() => setIsModalOpen(true)}
                  >
                    Send this brief to Mayurasoft &rarr;
                  </button>
                  <button
                    className="ai-quiz-retake-btn w-100"
                    onClick={resetQuiz}
                  >
                    Retake configurator
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
        title="Get Your chatbot configuration brief"
        description="Fill out the form below to get your complete chatbot configuration assessment."
        fields={formFields}
        metadata={formMetadata}
        quizAnswers={quizAnswers}
      />
    </section>
  );
}