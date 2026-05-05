'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const BOT_TYPES = [
  {
    title: 'Customer support bot',
    sub: 'FAQ & issue resolution 24/7',
    desc: 'Handles tier-1 and tier-2 support queries — product questions, account issues, billing, and returns — using your knowledge base. Routes complex cases to human agents with full conversation context.',
    accentColor: '#028a4a',
    note: 'Best starting point for most companies. High automation and immediate ROI with minimal operational disruption.',
    meta: [
      { label: 'Automation rate', value: '65–80%', bg: '#E1F5EE', tc: '#085041' },
      { label: 'Complexity', value: 'Medium', bg: '#FAEEDA', tc: '#633806' },
      { label: 'Build time', value: '3–6 weeks', bg: '#fafbfc', tc: '#6b7280' },
    ],
    deliverables: [
      'Intent classification across 50–200 intents',
      'RAG knowledge base from your docs & FAQs',
      'Confidence-based human escalation',
      'CRM & ticketing integration',
      'CSAT measurement built in',
    ],
    tools: [
      'Claude 3.5 / GPT-4o',
      'Zendesk / Freshdesk API',
      'Pinecone knowledge base',
      'WhatsApp Business API',
      'Custom analytics dashboard',
    ],
  },
  {
    title: 'Sales qualification bot',
    sub: 'Lead capture & intelligent scoring',
    desc: 'Engages website visitors or inbound leads with targeted questions, qualifies based on your ICP criteria, scores the lead, and either books a meeting or routes to the right sales rep.',
    accentColor: '#0C447C',
    note: 'Ideal for improving conversion rates without increasing sales team workload.',
    meta: [
      { label: 'Lead capture lift', value: '40–60%', bg: '#E1F5EE', tc: '#085041' },
      { label: 'Complexity', value: 'Medium', bg: '#FAEEDA', tc: '#633806' },
      { label: 'Build time', value: '2–4 weeks', bg: '#fafbfc', tc: '#6b7280' },
    ],
    deliverables: [
      'ICP-aligned qualification questions',
      'Lead scoring model integration',
      'Calendar booking integration',
      'CRM auto-creation with lead score',
      'Sales rep routing by territory / ICP',
    ],
    tools: [
      'GPT-4o / Claude',
      'HubSpot / Salesforce API',
      'Calendly / Google Calendar',
      'Custom scoring logic',
      'Slack lead notification',
    ],
  },
  {
    title: 'Internal HR & IT helpdesk',
    sub: 'Employee self-service at scale',
    desc: 'Handles internal employee queries — leave balances, IT access requests, onboarding checklists, policy questions — available instantly on Slack or Teams, with live data from your HRMS and ITSM systems.',
    accentColor: '#7c3aed',
    note: 'Reduces repetitive internal queries and significantly improves employee productivity.',
    meta: [
      { label: 'HR query deflection', value: '60–75%', bg: '#E1F5EE', tc: '#085041' },
      { label: 'Complexity', value: 'Medium', bg: '#FAEEDA', tc: '#633806' },
      { label: 'Build time', value: '3–5 weeks', bg: '#fafbfc', tc: '#6b7280' },
    ],
    deliverables: [
      'HRMS integration for live leave/payroll data',
      'Policy knowledge base with versioning',
      'IT ticketing automation (Jira / ServiceNow)',
      'Onboarding workflow trigger',
      'Escalation to HR / IT team on Slack',
    ],
    tools: [
      'Claude 3.5',
      'BambooHR / Darwinbox API',
      'Slack / Teams bot platform',
      'Jira / ServiceNow webhook',
      'Document knowledge base',
    ],
  },
  {
    title: 'E-commerce & order assistant',
    sub: 'Post-purchase support & discovery',
    desc: 'Handles order tracking, returns initiation, product recommendations, size guides, and account queries — integrating live with your order management system so answers are always accurate.',
    accentColor: '#d97706',
    note: 'High impact for D2C brands — reduces support load while improving customer experience.',
    meta: [
      { label: 'Support ticket deflection', value: '70–85%', bg: '#E1F5EE', tc: '#085041' },
      { label: 'Complexity', value: 'Low–Medium', bg: '#FAEEDA', tc: '#633806' },
      { label: 'Build time', value: '2–4 weeks', bg: '#fafbfc', tc: '#6b7280' },
    ],
    deliverables: [
      'OMS integration for live order data',
      'Returns initiation workflow',
      'Product catalogue Q&A',
      'WhatsApp + web widget deployment',
      'Proactive delivery notifications',
    ],
    tools: [
      'GPT-4o',
      'Shopify / WooCommerce API',
      'Shiprocket / Delhivery API',
      'WhatsApp Business API',
      'Razorpay / Stripe for refunds',
    ],
  },
  {
    title: 'Product onboarding assistant',
    sub: 'In-app guidance & activation',
    desc: 'Guides new users through your product step-by-step — answering questions contextually based on where they are in the app, reducing time-to-activation and support burden on your CS team.',
    accentColor: '#dc2626',
    note: 'Best suited for SaaS products where activation and onboarding directly impact retention.',
    meta: [
      { label: 'Onboarding completion lift', value: '35–55%', bg: '#E1F5EE', tc: '#085041' },
      { label: 'Complexity', value: 'High', bg: '#FAECE7', tc: '#712B13' },
      { label: 'Build time', value: '4–8 weeks', bg: '#fafbfc', tc: '#6b7280' },
    ],
    deliverables: [
      'In-app context awareness (page / feature)',
      'Step-by-step interactive walkthroughs',
      'Contextual FAQ answers',
      'Usage analytics & drop-off identification',
      'CS escalation with session context',
    ],
    tools: [
      'Claude 3.5',
      'In-app SDK integration',
      'Segment / Mixpanel events',
      'Custom admin console',
      'CS handoff with replay',
    ],
  },
];

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function CAIBotExplorerV2() {
  const [active, setActive] = useState(0);
  const bot = BOT_TYPES[active];

  return (
    <section className='cd-section py-5 pb-3 border-bottom' id="cai-explorer"
      style={{
        background: `linear-gradient(90deg, #fff 35%, ${hexToRgba(bot.accentColor, 0.12)} 100%)`,
        transition: 'background 0.4s ease',
      }}
    >
      <div className="container py-4">

        <div className="row align-items-center mb-1">
          <div className="col-lg-6">
            <SectionTitle
              SubTitle="What we build"
              Title="Five types of conversational AI — each built differently"
              isDarkMode={false}
            />
          </div>
          <div className="col-lg-5 offset-lg-1">
            <p className='section-descr'>
              Not all chatbots are the same. Click your use case to see the specific design, knowledge layer, and integration requirements.
            </p>
          </div>
        </div>

        <div className="am-layout">

          <nav className="am-nav">
            <div className="am-nav-label">Bots</div>
            {BOT_TYPES.map((b, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`am-nav-item ${active === i ? 'active' : ''}`}
                style={active === i ? { color: bot.accentColor, background: `${bot.accentColor}12` } : {}}
              >
                {b.title}
              </button>
            ))}
          </nav>

          <div className="am-content">

            <div className="mb-4">
              <div className="meta-row">
                {bot.meta.map((m, i) => (
                  <span key={i} style={{ background: m.bg, color: m.tc }} className="badge">
                    {m.label}: {m.value}
                  </span>
                ))}
              </div>

              <h3>{bot.title}</h3>
              <p className="sub">{bot.sub}</p>
              <p className="desc">{bot.desc}</p>
            </div>

            <div className="divider" />

            <div className="cols">

              <div>
                <div className="col-label">Best for</div>
                <ul className="list">
                  {bot.deliverables.map((d, i) => (
                    <li key={i}>
                      <span className="dot" style={{ background: bot.accentColor }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="col-label">How it works</div>
                <ol className="steps">
                  {bot.tools.map((t, i) => (
                    <li key={i}>
                      <span className="num" style={{ color: bot.accentColor }}>
                        {i + 1}
                      </span>
                      {t}
                    </li>
                  ))}
                </ol>
              </div>

            </div>

            <div className="insight">
              <span style={{ color: bot.accentColor, fontWeight: 600 }}>Insight — </span>
              {bot.note}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
