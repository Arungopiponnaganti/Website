'use client';
import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from '../Common/SectionTitle';
import { useCallback } from 'react';

const DEPTS = ['All', 'Finance', 'Sales', 'HR', 'Operations', 'Support', 'Marketing'];

const IMP_COLORS = {
  High:   { bg: '#f0fdf4', color: '#15803d' },
  Medium: { bg: '#fefce8', color: '#a16207' },
};

const AUTOS = [
  {
    t: 'Invoice processing & 3-way matching',
    d: 'Auto-extract invoice data, match to POs and goods receipts, route exceptions, and post approved invoices to ERP.',
    dept: 'Finance', impact: 'High', effort: '2–4 wks', saving: '12 hrs/week freed',
    del: ['PDF extraction pipeline', 'PO matching logic', 'Approval routing workflow', 'ERP posting integration', 'Exception escalation'],
    tools: ['n8n / Make', 'OCR / AI extraction', 'SAP / Tally webhook', 'Slack alerts'],
    metric: '94% straight-through processing rate',
  },
  {
    t: 'Month-end close reporting',
    d: 'Automate data pulls from all systems, generate standardised reports, and distribute to stakeholders with zero manual compilation.',
    dept: 'Finance', impact: 'High', effort: '3–5 wks', saving: '16 hrs/month freed',
    del: ['Multi-source data connector', 'Report template engine', 'Scheduling & distribution', 'Variance flagging logic'],
    tools: ['Python', 'Google Sheets API', 'Looker / Power BI', 'Email automation'],
    metric: '3-day close reduced to same-day',
  },
  {
    t: 'Lead enrichment & CRM update',
    d: 'Enrich new leads from LinkedIn, Clearbit, and company websites — then auto-update CRM fields and route to the right rep.',
    dept: 'Sales', impact: 'High', effort: '1–2 wks', saving: '8 hrs/week freed',
    del: ['Lead capture webhook', 'Enrichment API integration', 'CRM field mapping', 'Routing logic by territory'],
    tools: ['Zapier / n8n', 'Clearbit API', 'Salesforce / HubSpot', 'Slack notification'],
    metric: 'Lead response time: 4 hrs → 8 min',
  },
  {
    t: 'Sales proposal generation',
    d: 'Generate first-draft proposals from CRM opportunity data — product, pricing, case study selection — ready for rep review in minutes.',
    dept: 'Sales', impact: 'Medium', effort: '3–5 wks', saving: '6 hrs/week per rep',
    del: ['CRM data extraction', 'AI proposal drafting', 'Template population', 'Review & approval queue'],
    tools: ['GPT-4o API', 'Google Docs API', 'Salesforce webhook', 'Email delivery'],
    metric: 'Proposal draft time: 4 hrs → 15 min',
  },
  {
    t: 'Employee onboarding workflow',
    d: 'Trigger system account creation, tool access provisioning, equipment ordering, and buddy assignment the moment an offer is signed.',
    dept: 'HR', impact: 'High', effort: '2–4 wks', saving: '10 hrs per hire freed',
    del: ['HRIS trigger integration', 'IT provisioning automation', 'Checklist & task assignment', 'Day-1 comms sequence'],
    tools: ['Workday / BambooHR', 'Okta / Azure AD', 'Jira task creation', 'Slack onboarding bot'],
    metric: 'Time to fully productive: 5 days → 1 day',
  },
  {
    t: 'Offboarding & access revocation',
    d: 'Automatically revoke all system access, archive data, trigger exit interview, and generate offboarding checklist within minutes.',
    dept: 'HR', impact: 'High', effort: '2–3 wks', saving: '4 hrs per exit',
    del: ['HRIS termination trigger', 'Access revocation across all tools', 'Data archival workflow', 'Exit survey trigger'],
    tools: ['Okta SCIM', 'Google Workspace API', 'Slack deactivation', 'Automated email'],
    metric: 'Access revocation: 2 days → 4 min',
  },
  {
    t: 'Support ticket triage & routing',
    d: 'Classify incoming support tickets by type, sentiment, and priority — route to the right team and draft a first response automatically.',
    dept: 'Support', impact: 'High', effort: '2–4 wks', saving: '15 hrs/week freed',
    del: ['Ticket ingestion webhook', 'AI classification layer', 'Routing logic by type', 'First-response draft', 'SLA escalation workflow'],
    tools: ['Claude 3.5 API', 'Zendesk / Freshdesk', 'Slack escalation', 'Response template engine'],
    metric: 'First-response time: 4 hrs → 8 min',
  },
  {
    t: 'Customer feedback analysis',
    d: 'Aggregate reviews, NPS responses, and support tickets — classify by theme and sentiment, generate a weekly digest for the product team.',
    dept: 'Support', impact: 'Medium', effort: '2–3 wks', saving: '6 hrs/week freed',
    del: ['Multi-source aggregation', 'AI sentiment & theme tagging', 'Weekly digest generation', 'Product team distribution'],
    tools: ['GPT-4o API', 'Typeform / Delighted', 'Notion / Confluence', 'Scheduled email digest'],
    metric: 'Insight reporting: weekly manual → daily automated',
  },
  {
    t: 'Order fulfilment & inventory sync',
    d: 'Sync orders from all sales channels to your fulfilment system, update inventory in real time, and trigger reorder workflows at threshold.',
    dept: 'Operations', impact: 'High', effort: '3–6 wks', saving: '20 hrs/week freed',
    del: ['Multi-channel order aggregation', 'Inventory sync logic', 'Reorder trigger workflow', 'Shipping notification automation'],
    tools: ['Shopify / WooCommerce', 'SAP / Zoho Inventory', '3PL API integration', 'Customer email/SMS'],
    metric: 'Order processing: 45 min → 2 min',
  },
];

const ANIM_MS = 320;

export default function WAAutomationFinder() {
  const [activeDept, setActiveDept] = useState('All');
  const [activeAuto, setActiveAuto] = useState(-1);
  const [panelAt, setPanelAt] = useState(-1);
  const [panelOpen, setPanelOpen] = useState(false);

  const gridRef = useRef(null);
  const timerRef = useRef(null);

  const filtered =
    activeDept === 'All'
      ? AUTOS
      : AUTOS.filter((a) => a.dept === activeDept);

  const getLastInRow = useCallback((index) => {
    if (!gridRef.current) return index;

    const cols = Array.from(
      gridRef.current.querySelectorAll('.wa-col')
    );

    if (!cols[index]) return index;

    const top = cols[index].getBoundingClientRect().top;

    let last = index;
    for (let i = index + 1; i < cols.length; i++) {
      if (Math.abs(cols[i].getBoundingClientRect().top - top) < 5) {
        last = i;
      } else break;
    }
    return last;
  }, []);

  useEffect(() => {
    if (activeAuto < 0) return;

    const observer = new ResizeObserver(() => {
      const newLast = getLastInRow(activeAuto);
      setPanelAt((prev) => (prev !== newLast ? newLast : prev));
    });

    observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, [activeAuto, getLastInRow]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleDept = (d) => {
    clearTimeout(timerRef.current);
    setPanelOpen(false);
    setPanelAt(-1);
    setActiveAuto(-1);
    setActiveDept(d);
  };

  const handleAuto = (i) => {
    clearTimeout(timerRef.current);

    if (activeAuto === i) {
      setPanelOpen(false);
      timerRef.current = setTimeout(() => {
        setActiveAuto(-1);
        setPanelAt(-1);
      }, ANIM_MS);
      return;
    }

    const newLast = getLastInRow(i);

    if (panelOpen && panelAt !== newLast) {
      setPanelOpen(false);
      timerRef.current = setTimeout(() => {
        setActiveAuto(i);
        setPanelAt(newLast);
        requestAnimationFrame(() => setPanelOpen(true));
      }, ANIM_MS);
    } else {
      setActiveAuto(i);
      setPanelAt(newLast);
      requestAnimationFrame(() => setPanelOpen(true));
    }
  };

  const panelData = filtered[activeAuto];

  return (
    <section className="cd-section cd-section-light border-bottom py-5 pb-2" id="wa-finder">
      <div className="container py-4">
        <SectionTitle
          className="text-center"
          SubTitle="What can be automated"
          Title="High-impact automations by department"
          Content="Click any card to see what we build, the tools involved, and typical time savings."
          isDarkMode={false}
        />

        {/* Department tabs */}
        <div className="wa-dept-tabs mb-0">
          {DEPTS.map((d) => (
            <button
              key={d}
              className={`wa-dept-tab${activeDept === d ? ' active' : ''}`}
              onClick={() => handleDept(d)}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="row mt-3" ref={gridRef}>
          {filtered.map((a, i) => {
            const imp = IMP_COLORS[a.impact] || {
              bg: '#f3f4f6',
              color: '#6b7280',
            };

            return (
              <React.Fragment key={i}>
                
                <div className="col-lg-4 col-md-6 mb-4 wa-col">
                  <div
                    className={`wa-auto-card h-100 w-100${activeAuto === i ? ' open' : ''}`}
                    onClick={() => handleAuto(i)}
                  >
                    <div className="wa-ac-top">
                      <span
                        className="wa-ac-impact"
                        style={{
                          background: imp.bg,
                          color: imp.color,
                        }}
                      >
                        {a.impact}
                      </span>
                      <span className="wa-ac-effort">{a.effort}</span>
                    </div>

                    <div className="wa-ac-title">{a.t}</div>
                    <div className="wa-ac-desc">{a.d}</div>
                    <div className="wa-ac-saving">{a.saving}</div>
                    <div className="wa-uc-arrow-row">
                      <span className="wa-uc-arrow-label">
                        {activeAuto === i ? 'Close' : 'View details'}
                      </span>

                      <svg
                        className={`wa-uc-arrow-icon ${activeAuto === i ? ' rotated' : ''}`}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 6l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {panelAt === i && panelData && (
                  <div className="col-12 pb-1">
                    <div className={`wa-auto-detail wa-uc-detail ${panelOpen ? 'open' : ''}`}>
                      <div>
                        <div className="wa-ad-label">What we deliver</div>
                        {panelData.del.map((d, di) => (
                          <div key={di} className="wa-ad-item">
                            {d}
                          </div>
                        ))}
                      </div>

                      <div>
                        <div className="wa-ad-label">Tools & platforms</div>
                        {panelData.tools.map((t, ti) => (
                          <div key={ti} className="wa-ad-item">
                            {t}
                          </div>
                        ))}
                      </div>

                      <div>
                        <div className="wa-ad-label">Typical impact</div>
                        <div className="wa-ad-item">
                          {panelData.metric}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
