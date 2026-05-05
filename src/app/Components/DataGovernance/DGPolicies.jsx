'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import SectionTitle from '../Common/SectionTitle';
import '../DataEngineering/DEServices.css';

const POLICIES = [
  {
    iconBg: '#FAEEDA',
    iconColor: '#854F0B',
    icon: 'bi-tags',
    title: 'Data classification policy',
    subtitle: 'What sensitivity level is each dataset?',
    deliverables: [
      'Four-tier classification: Public, Internal, Confidential, Restricted',
      'Classification criteria and decision tree for new datasets',
      'Required controls per classification tier',
      'Re-classification process when data sensitivity changes',
    ],
    tools: [
      'Classification taxonomy document',
      'Decision flowchart for new datasets',
      'Control matrix by tier',
      'Quarterly review process',
    ],
  },
  {
    iconBg: '#E6F3FB',
    iconColor: '#185FA5',
    icon: 'bi-clock-history',
    title: 'Data retention policy',
    subtitle: 'How long is each dataset kept — and how is it deleted?',
    deliverables: [
      'Retention schedule by data category and regulatory requirement',
      'Technical deletion procedure for each platform',
      'Right-to-erasure workflow under DPDPA and GDPR',
      'Audit evidence requirements for deletion',
    ],
    tools: [
      'Retention schedule register',
      'Deletion verification checklist',
      'Right-to-erasure runbook',
      'Legal hold exception process',
    ],
  },
  {
    iconBg: '#E1F5EE',
    iconColor: '#0F6E56',
    icon: 'bi-check2-square',
    title: 'Data quality policy',
    subtitle: 'What does "good data" mean — and who is accountable?',
    deliverables: [
      'Quality dimensions: completeness, accuracy, consistency, timeliness',
      'Quality SLA per dataset: minimum acceptable score by domain',
      'Escalation path when quality falls below SLA threshold',
      'Incident response process for data quality failures',
    ],
    tools: [
      'Quality SLA register per domain',
      'Escalation runbook',
      'Quality incident log template',
      'Monthly quality review cadence',
    ],
  },
  {
    iconBg: '#EEEDFE',
    iconColor: '#534AB7',
    icon: 'bi-key',
    title: 'Data access policy',
    subtitle: 'Who can access what data — and how is access requested?',
    deliverables: [
      'Access request and approval workflow',
      'Need-to-know principle enforcement',
      'Privileged access management for production data',
      'Quarterly access review and deprovisioning process',
    ],
    tools: [
      'Access request form and approval SLA',
      'Access review checklist',
      'Privileged access register',
      'Deprovisioning runbook',
    ],
  },
  {
    iconBg: '#FAECE7',
    iconColor: '#993C1D',
    icon: 'bi-share',
    title: 'Data sharing policy',
    subtitle: 'Under what conditions can data be shared externally?',
    deliverables: [
      'Approved data sharing use cases and prohibited uses',
      'Vendor and third-party data sharing requirements',
      'Data transfer agreement templates',
      'Cross-border data transfer compliance (DPDPA, GDPR)',
    ],
    tools: [
      'Data sharing approval workflow',
      'Third-party DPA template',
      'Cross-border transfer impact assessment',
      'Approved sharing registry',
    ],
  },
  {
    iconBg: '#EAF3DE',
    iconColor: '#27500A',
    icon: 'bi-person-check',
    title: 'Data ownership & stewardship policy',
    subtitle: 'Who is accountable for each data domain?',
    deliverables: [
      'Data owner role definition and accountability framework',
      'Data steward responsibilities and escalation rights',
      'Governance council charter and meeting cadence',
      'Ownership transfer process when people change roles',
    ],
    tools: [
      'Data owner RACI matrix',
      'Steward handbook',
      'Governance council terms of reference',
      'Ownership transition checklist',
    ],
  },
  {
    iconBg: '#F1EFE8',
    iconColor: '#5F5E5A',
    icon: 'bi-exclamation-triangle',
    title: 'Data incident policy',
    subtitle: 'What happens when data is wrong, lost, or breached?',
    deliverables: [
      'Data quality incident definition and severity classification',
      'Breach notification obligations and timelines (DPDPA, GDPR)',
      'Incident response team and escalation chain',
      'Post-incident review and root cause analysis process',
    ],
    tools: [
      'Incident severity matrix',
      'Breach notification runbook',
      'Response team RACI',
      'Post-incident review template',
    ],
  },
  {
    iconBg: '#EEEDFE',
    iconColor: '#3C3489',
    icon: 'bi-journal-text',
    title: 'Metadata management policy',
    subtitle: 'How is data documented and kept accurate?',
    deliverables: [
      'Required metadata fields for every production dataset',
      'Metadata update obligation for data owners',
      'Glossary term governance and approval process',
      'Automated vs. manual metadata capture standards',
    ],
    tools: [
      'Metadata standards register',
      'Glossary governance process',
      'Catalogue update checklist',
      'Metadata quality scoring',
    ],
  },
];

const ANIM_MS = 320;

export default function DGPolicies() {
  const [activeIdx, setActiveIdx] = useState(-1);
  const [panelAt, setPanelAt] = useState(-1);
  const [panelOpen, setPanelOpen] = useState(false);
  const gridRef = useRef(null);
  const timerRef = useRef(null);

  const getLastInRow = useCallback((cardIndex) => {
    if (!gridRef.current) return cardIndex;
    const cards = Array.from(gridRef.current.querySelectorAll('.de-svc-card'));
    if (cardIndex >= cards.length) return cardIndex;
    const top = cards[cardIndex].getBoundingClientRect().top;
    let last = cardIndex;
    for (let i = cardIndex + 1; i < cards.length; i++) {
      if (Math.abs(cards[i].getBoundingClientRect().top - top) < 5) last = i;
      else break;
    }
    return last;
  }, []);

  useEffect(() => {
    if (activeIdx < 0 || !gridRef.current) return;
    const observer = new ResizeObserver(() => {
      const newLast = getLastInRow(activeIdx);
      setPanelAt((prev) => (prev !== newLast ? newLast : prev));
    });
    observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, [activeIdx, getLastInRow]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleCard = (i) => {
    clearTimeout(timerRef.current);

    if (activeIdx === i) {
      setPanelOpen(false);
      timerRef.current = setTimeout(() => {
        setActiveIdx(-1);
        setPanelAt(-1);
      }, ANIM_MS);
      return;
    }

    const newLast = getLastInRow(i);

    if (panelOpen && panelAt !== newLast) {
      setPanelOpen(false);
      timerRef.current = setTimeout(() => {
        setActiveIdx(i);
        setPanelAt(newLast);
        requestAnimationFrame(() => setPanelOpen(true));
      }, ANIM_MS);
    } else {
      setActiveIdx(i);
      setPanelAt(newLast);
      requestAnimationFrame(() => setPanelOpen(true));
    }
  };

  const panelData = POLICIES[activeIdx];

  return (
    <section className="cd-section cd-section-muted border-top border-bottom py-5">
      <div className="container py-2">
        <SectionTitle
          className="mb-3"
          SubTitle="Policy framework"
          Title="Eight governance policies — written, practical, and immediately usable"
          Content="Every engagement produces written policy documents your team can adopt, adapt, and enforce. Click any policy to explore."
          isDarkMode={false}
        />

        <div className="de-svc-grid" ref={gridRef}>
          {POLICIES.map((p, i) => (
            <React.Fragment key={i}>
              <div
                className={`de-svc-card${activeIdx === i ? ' active' : ''}`}
                onClick={() => handleCard(i)}
              >
                <div className="de-svc-ind-row">
                  <span className="de-svc-ind" style={{ background: p.iconBg, color: p.iconColor }}>
                    <i className={`bi ${p.icon}`}></i>
                  </span>
                </div>
                <div className="de-svc-title">{p.title}</div>
                <div className="de-svc-desc">{p.subtitle}</div>
                <div className="de-svc-arrow-row">
                  <span className="de-svc-arrow-label">
                    {activeIdx === i ? 'Close' : 'View details'}
                  </span>
                  <svg
                    className={`de-svc-arrow-icon${activeIdx === i ? ' rotated' : ''}`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {panelAt === i && panelData && (
                <div className={`de-svc-detail${panelOpen ? ' open' : ''}`}>
                  <div>
                    <div className="de-sdp-label">What it covers</div>
                    {panelData.deliverables.map((d, di) => (
                      <div key={di} className="de-sdp-item">{d}</div>
                    ))}
                  </div>
                  <div>
                    <div className="de-sdp-label">What we deliver</div>
                    {panelData.tools.map((t, ti) => (
                      <div key={ti} className="de-sdp-item">{t}</div>
                    ))}
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
