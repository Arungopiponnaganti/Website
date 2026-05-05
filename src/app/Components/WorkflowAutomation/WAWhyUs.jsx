'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const WHY_CARDS = [
  {
    icon: '🗺️',
    bg: '#FAEEDA',
    title: 'We map before we build',
    desc: 'Every engagement starts with a process mapping workshop. We document the as-is flow in full before writing a line of automation — catching edge cases, exceptions, and unwritten rules that would break a naive implementation.',
  },
  {
    icon: '🛡️',
    bg: '#EEEDFE',
    title: 'Human gates, not black boxes',
    desc: 'Every automation we build has defined escalation paths. When something unusual happens — an invoice that doesn\'t match, a request that\'s ambiguous — the workflow pauses and routes to the right human. Automation with no escape hatch is a liability.',
  },
  {
    icon: '✅',
    bg: '#E1F5EE',
    title: 'Built to last — not just to demo',
    desc: 'We\'ve seen automations that work in the demo and break in production because no one thought about error handling, rate limits, or API versioning. Every automation we ship includes error recovery, retry logic, alerting, and a documented maintenance runbook.',
  },
  {
    icon: '🤖',
    bg: '#E6F1FB',
    title: 'AI where it adds value, not everywhere',
    desc: 'Not every automation needs AI. We use AI for classification, content generation, anomaly detection, and judgment calls — and simple deterministic logic for everything else. Over-engineering with AI where rules suffice creates fragility and cost.',
  },
  {
    icon: '🔑',
    bg: '#FAECE7',
    title: 'Your team can own it when we leave',
    desc: 'We build automations in tools your team can learn — n8n, Make, Zapier, or custom code where needed. Every workflow is documented with flow diagrams, decision logic, and an admin guide. You don\'t need us on call to modify a step.',
  },
  {
    icon: '📊',
    bg: '#EAF3DE',
    title: 'Monitored and measured from day one',
    desc: 'Every automation includes a dashboard showing run counts, success rates, error frequency, and time saved. You can see the ROI of the automation in real numbers — not estimates — from the first week it runs in production.',
  },
];

export default function WAWhyUs() {
  return (
    <section className="cd-section cd-section-light border-top py-5 pb-3">
      <div className="container py-4">
        <SectionTitle
          className="text-center"
          SubTitle="Why MayuraSoft"
          Title="What separates our automation practice"
          Content=""
          isDarkMode={false}
        />

        <div className="wa-why-grid">
          {WHY_CARDS.map((card, i) => (
            <div key={i} className="wa-why-card">
              <div className="wa-why-icon" style={{ background: card.bg, fontSize: '22px' }}>
                {card.icon}
              </div>
              <div>
                <div className="wa-why-title">{card.title}</div>
                <div className="wa-why-desc">{card.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
