'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const BA_DATA = [
  {
    label: 'Invoice processing',
    before: [
      { lbl: 'Volume', v: 'Finance team receives ~80 invoices/day via email and WhatsApp' },
      { lbl: 'Process', v: 'Someone downloads each PDF, manually types into a spreadsheet, verifies against a PO in another tab, then pastes into the ERP' },
      { lbl: 'Time', v: '2.5 hours per person per day — 5 people — 12.5 person-hours daily' },
      { lbl: 'Errors', v: '~8% error rate on data entry. Each error takes 45 min to find and fix' },
      { lbl: 'Visibility', v: 'No one knows where an invoice is in the approval process without asking' },
    ],
    after: [
      { lbl: 'Volume', v: 'Same 80 invoices — now every one is automatically captured the moment it arrives' },
      { lbl: 'Process', v: 'AI extracts data, matches to PO, routes high-value invoices to CFO and auto-approves the rest, posts to ERP' },
      { lbl: 'Time', v: '4 minutes per invoice — human touches only the 6% of exceptions that need judgment' },
      { lbl: 'Errors', v: 'Data entry errors drop to near-zero. AI extraction is validated against PO before any action' },
      { lbl: 'Visibility', v: 'Live dashboard shows every invoice: received, processing, approved, posted, rejected' },
    ],
  },
  {
    label: 'Employee onboarding',
    before: [
      { lbl: 'Trigger', v: 'Offer accepted → HR sends a spreadsheet to 6 different people: IT, payroll, facilities, manager, security, learning' },
      { lbl: 'IT setup', v: 'IT receives the spreadsheet, manually creates accounts in 8 systems — often 2–3 days after start date' },
      { lbl: 'Day 1', v: 'New hire arrives, no laptop, no email access, waiting in a meeting room while IT scrambles' },
      { lbl: 'Paperwork', v: 'New hire fills in the same information 4 times on different forms across different systems' },
      { lbl: 'Time to productive', v: '5–7 days before the new hire can fully function' },
    ],
    after: [
      { lbl: 'Trigger', v: 'Offer signed in HRIS → automation fires immediately, zero manual hand-off required' },
      { lbl: 'IT setup', v: 'All 8 system accounts created automatically within 4 minutes. Equipment order placed. Manager notified.' },
      { lbl: 'Day 1', v: 'Laptop waiting, all accounts active, welcome Slack message sent, buddy assigned, first-week calendar blocked' },
      { lbl: 'Paperwork', v: 'One digital form, data flows to all systems automatically — no duplicate entry' },
      { lbl: 'Time to productive', v: 'Day 1 — new hire is fully functional from their first hour' },
    ],
  },
  {
    label: 'Support ticket routing',
    before: [
      { lbl: 'Volume', v: 'Support team receives ~150 tickets/day across email, chat, and WhatsApp' },
      { lbl: 'Triage', v: 'One senior agent reads every ticket, decides priority and team, and manually reassigns in the ticketing system' },
      { lbl: 'Response time', v: 'First response averages 4.2 hours — longest wait is 8+ hours for tickets arriving overnight' },
      { lbl: 'Consistency', v: "Routing depends on who's doing triage — same ticket gets different priority on different days" },
      { lbl: 'Senior time', v: 'Senior agent spends 3 hours/day on triage — time not spent resolving complex issues' },
    ],
    after: [
      { lbl: 'Volume', v: 'Same 150 tickets — every one is classified and routed within 90 seconds of arrival, 24/7' },
      { lbl: 'Triage', v: 'AI classifies by type (billing, technical, complaint), sentiment, and urgency. Routes to right team automatically' },
      { lbl: 'Response time', v: 'AI-drafted first response sent within 8 minutes. Human agent reviews and personalises before sending' },
      { lbl: 'Consistency', v: 'Same logic applied to every ticket, every time. Classification accuracy validated weekly against human labels' },
      { lbl: 'Senior time', v: 'Senior agent now handles only escalations and complex cases — triage is fully automated' },
    ],
  },
];

export default function WABeforeAfter() {
  const [activeBa, setActiveBa] = useState(0);

  const d = BA_DATA[activeBa];

  return (
    <section className="cd-section cd-section-muted border-top border-bottom py-5 pb-3">
      <div className="container py-4">
        <SectionTitle
          className="text-center"
          SubTitle="The transformation"
          Title="What your team's day looks like before and after automation"
          Content="Switch between common processes to see the contrast."
          isDarkMode={false}
        />

        {/* Process-switch tabs */}
        <div className="wa-ba-tabs">
          {BA_DATA.map((b, i) => (
            <button
              key={i}
              className={`wa-ba-tab${activeBa === i ? ' active' : ''}`}
              onClick={() => setActiveBa(i)}
            >
              {b.label}
            </button>
          ))}
        </div>

        {/* Side-by-side grid */}
        <div className="wa-ba-grid">
          {/* Before column */}
          <div className="wa-ba-col">
            <div className="wa-ba-col-head before">
              ✕ Before — manual process
            </div>
            {d.before.map((row, i) => (
              <div key={i} className="wa-ba-row">
                <strong>{row.lbl}</strong>
                {row.v}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="wa-ba-divider">
            {[...Array(5)].map((_, i) => (
              <div key={i} style={{ width: '1px', height: '6px', background: '#e5e7eb' }} />
            ))}
            <span className="wa-ba-vs">vs</span>
            {[...Array(5)].map((_, i) => (
              <div key={i + 5} style={{ width: '1px', height: '6px', background: '#e5e7eb' }} />
            ))}
          </div>

          {/* After column */}
          <div className="wa-ba-col">
            <div className="wa-ba-col-head after">
              ✓ After — automated
            </div>
            {d.after.map((row, i) => (
              <div key={i} className="wa-ba-row">
                <strong>{row.lbl}</strong>
                {row.v}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
