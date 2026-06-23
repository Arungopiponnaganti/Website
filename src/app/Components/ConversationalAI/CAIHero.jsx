'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DynamicFormModal from '../Common/DynamicFormModal';

const defaultFormFields = [
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
    label: 'Subject',
    name: 'subject',
    type: 'text',
    placeholder: 'Your Subject Here',
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
    placeholder: 'Tell us more about your project...',
    required: false,
    colSize: 12
  },
];

const SCENARIOS = [
  {
    label: 'Support bot',
    msgs: [
      { role: 'bot', text: "Hi! I'm Aria, your AI support assistant. I can help with account issues, billing, and product troubleshooting. What can I help you with?" },
      { role: 'user', text: 'My invoice from last month seems wrong — I was charged twice' },
      { role: 'bot', text: "I can see two charges on October 12 and 14. The second appears to be a gateway retry duplicate. I've flagged this for billing — you'll receive a refund within 3–5 business days. Confirmation sent to your email." },
    ],
  },
  {
    label: 'Sales qualifier',
    msgs: [
      { role: 'bot', text: "Hi! I help companies find the right automation solution. What does your team spend the most time on that feels repetitive?" },
      { role: 'user', text: 'Our finance team manually processes about 200 invoices a week' },
      { role: 'bot', text: "That's ~80 hours/week across your team. We've automated exactly this for several clients — typical result is 90%+ straight-through processing. Want me to book a free process audit?" },
    ],
  },
  {
    label: 'HR assistant',
    msgs: [
      { role: 'bot', text: "Hi, I'm your HR assistant. I can help with leave balances, payroll, benefits, and company policies." },
      { role: 'user', text: 'How many earned leaves do I have left this year?' },
      { role: 'bot', text: "You have 8 earned leaves remaining for 2024 — you've used 14 of 22. Your year resets January 1st. Would you like to apply for leave or check WFH policy?" },
    ],
  },
  {
    label: 'E-commerce',
    msgs: [
      { role: 'bot', text: "Hey! I'm here to help with your order, returns, or product questions." },
      { role: 'user', text: 'Where is my order #INV-2847?' },
      { role: 'bot', text: "Found it! Order #INV-2847 (Blue Linen Kurta, XL) left the warehouse Nov 8. Current scan: Pune — out for delivery today. Estimated delivery by 8 PM. I've sent the live tracking link to your WhatsApp." },
    ],
  },
];

const BOT_REPLIES = [
  'Got it — let me check that for you.',
  'Thanks for sharing that. Could you give me a bit more detail?',
  'Understood. I\'m looking into this now — give me just a moment.',
  'I can definitely help with that. Let me pull up the relevant information.',
];

export default function CAIHero() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [messages, setMessages] = useState([...SCENARIOS[0].msgs]);
  const [inputVal, setInputVal] = useState('');
  const [typing, setTyping] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages, typing]);

  const loadScenario = (idx) => {
    setActiveScenario(idx);
    setMessages([...SCENARIOS[idx].msgs]);
    setTyping(false);
    setInputVal('');
  };

  const sendMessage = () => {
    const text = inputVal.trim();
    if (!text || typing) return;
    setMessages((prev) => [...prev, { role: 'user', text }]);
    setInputVal('');
    setTyping(true);
    setTimeout(() => {
      const reply = BOT_REPLIES[Math.floor(Math.random() * BOT_REPLIES.length)];
      setMessages((prev) => [...prev, { role: 'bot', text: reply }]);
      setTyping(false);
    }, 1000);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div
      className="hero-area style-three d-flex align-items-center"
      style={{
        marginTop: '0',
        // paddingTop: '220px',
        // paddingBottom: '100px',
        position: 'relative',
        height: 'auto',
        minHeight: '100vh',
      }}
    >
      {/* Background decorative shape */}
      {/* <div
        className="hero-left-shape"
        style={{
          position: 'absolute',
          top: '20%',
          transform: 'translateY(-50%)',
          left: '10%',
          zIndex: 0,
          opacity: 0.8,
        }}
      >
        <Image
          src="/assets/images/home-3/hero-geo.png"
          alt=""
          width={680}
          height={680}
          priority
        />
      </div> */}

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row hero align-items-center g-4">

          {/* ── Left: copy ── */}
          <div className="col-lg-6 col-md-12">
            <div className="hero-contant" style={{ paddingTop: '0' }}>

              {/* Chips */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: '11px', fontWeight: '600', padding: '4px 12px',
                  borderRadius: '99px', background: '#dcfce7', color: '#15803d',
                  border: '1px solid #86efac',
                }}>
                  Conversational AI &amp; Chatbots
                </span>
                <span style={{
                  fontSize: '11px', fontWeight: '500', padding: '4px 12px',
                  borderRadius: '99px', background: 'rgba(255,255,255,0.1)',
                  color: '#d1d5db', border: '1px solid rgba(255,255,255,0.12)',
                }}>
                  AI &amp; Automation
                </span>
              </div>

              <h1 className="mb-4 d-block" style={{ fontSize: 'clamp(30px, 3.5vw, 44px)', lineHeight: 1.2 }}>
                AI assistants that talk like your best team member — and never take a day off
              </h1>

              <p
                className="subheadline text-white"
                style={{ fontSize: '17px', lineHeight: '1.65', maxWidth: '580px', marginBottom: '32px' }}
              >
                Mayurasoft builds custom LLM-powered chatbots and conversational AI agents for customer
                support, internal operations, sales, and beyond — deployed on your website, WhatsApp,
                Slack, or any channel your users already use.
              </p>

              {/* Proof points */}
              <div style={{
                display: 'flex', flexDirection: 'column', gap: '10px',
                marginBottom: '32px', padding: '16px 18px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
              }}>
                {[
                  'LLM-powered — GPT-4o, Claude, Gemini, or open-source',
                  'RAG knowledge base from your docs, FAQs, and CRM',
                  'Human handoff built in — full context transferred every time',
                  'WhatsApp, web widget, Slack, or Teams — your channel',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#d1d5db' }}>
                    <span style={{
                      width: '18px', height: '18px', borderRadius: '50%',
                      background: 'rgba(16,185,129,0.2)', color: '#10b981',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '10px', fontWeight: '700', flexShrink: 0, marginTop: '1px',
                    }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="d-flex flex-wrap align-items-center gap-4 mb-5">
                <div className="solutek-btn">
                  <Link href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-2">
                    Build your bot &rarr;
                  </Link>
                </div>
                <div className="hero-btn-3">
                  <div className="hero-btn-profile">
                    <Link
                      href="#cai-explorer"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('cai-explorer')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      style={{ textDecoration: 'none' }}
                    >
                      <div style={{ color: '#ff3c00', cursor: 'pointer', fontSize: '16px', fontWeight: '600' }}>
                        See bot types &darr;
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Stat strip */}
              {/* <div className="d-flex flex-wrap gap-4" style={{ padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                {[
                  { value: '70%', label: 'Of support queries resolved without a human agent' },
                  { value: '24/7', label: 'Availability — no after-hours queue, no delay' },
                  { value: '8 sec', label: 'Average first response vs 4.2 hrs for email support' },
                  { value: '3 wks', label: 'To first working bot on your channel' },
                ].map((s, i) => (
                  <div key={i} style={{ minWidth: '110px' }}>
                    <div style={{
                      fontSize: '24px', fontWeight: '700', color: '#ffffff',
                      fontFamily: 'var(--font-mono, monospace)', lineHeight: 1, marginBottom: '4px',
                    }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: '12px', color: '#a0a0a0', lineHeight: 1.35 }}>{s.label}</div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>

          {/* ── Right: Live chat demo ── */}
          <div className="col-lg-6 col-md-12 mt-4 mt-lg-0 d-flex align-items-center justify-content-center">
            <div className="cai-chat-panel">

              {/* Scenario tabs */}
              <div className="cai-scenario-tabs">
                {SCENARIOS.map((s, i) => (
                  <button
                    key={i}
                    className={`cai-scenario-btn${activeScenario === i ? ' active' : ''}`}
                    onClick={() => loadScenario(i)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Chat header */}
              <div className="cai-chat-header">
                <div className="cai-chat-avatar">AI</div>
                <div>
                  <div className="cai-chat-name">Aria · Mayurasoft AI assistant</div>
                  <div className="cai-chat-status">
                    <span className="cai-status-dot" />
                    Online · typically replies in seconds
                  </div>
                </div>
              </div>

              {/* Chat window */}
              <div className="cai-chat-window">
                <div className="cai-chat-messages">
                  {messages.map((m, i) => (
                    <div key={i} className={`cai-msg ${m.role}`}>
                      {m.role === 'bot' && <div className="cai-msg-av">AI</div>}
                      <div className="cai-msg-bubble">{m.text}</div>
                    </div>
                  ))}
                  {typing && (
                    <div className="cai-msg bot">
                      <div className="cai-msg-av">AI</div>
                      <div className="cai-msg-bubble" style={{ padding: '10px 13px' }}>
                        <div className="cai-typing-bubble">
                          <div className="cai-typing-dot" />
                          <div className="cai-typing-dot" />
                          <div className="cai-typing-dot" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <div className="cai-input-row">
                  <input
                    className="cai-input"
                    type="text"
                    placeholder="Type a message..."
                    aria-label="Type a message..."
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={handleKey}
                  />
                  <button className="cai-send-btn" onClick={sendMessage}>Send</button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <DynamicFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Build Your Bot"
        description="Fill out the form below and we'll get back to you shortly."
        submitButtonText="Submit"
        fields={defaultFormFields}
        metadata={{ service: 'conversational-ai', pageTitle: 'Conversational AI' }}
      />
    </div>
  );
}
