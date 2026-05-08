'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const DELIVERABLES = [
  { bg: '#FAEEDA', icon: '📄', title: 'AI ethics policy document', desc: 'Formal policy covering acceptable AI use, prohibited applications, bias commitments, and accountability structure — board-ready and auditor-ready.' },
  { bg: '#E1F5EE', icon: '🔬', title: 'Bias audit report', desc: 'Statistical fairness analysis of your live models across protected attribute groups, with disparate impact measures and a prioritised remediation plan.' },
  { bg: '#EEEDFE', icon: '📋', title: 'Model risk register', desc: 'Inventory of every AI system in production, classified by risk level, with ownership, monitoring frequency, and escalation thresholds documented.' },
  { bg: '#E6F1FB', icon: '📊', title: 'Governance monitoring dashboard', desc: 'Real-time view of model drift, bias metric trends, incident log, and compliance status — designed for quarterly board reporting.' },
  { bg: '#FAECE7', icon: '🗺️', title: 'EU AI Act compliance map', desc: 'Document-level mapping of your AI systems to EU AI Act risk categories, required documentation, and conformity assessment obligations.' },
  { bg: '#EAF3DE', icon: '🎓', title: 'Staff training programme', desc: 'A one-day AI ethics and governance training for technical and non-technical teams — covering bias recognition, appropriate AI trust, and escalation responsibilities.' },
  { bg: '#F1EFE8', icon: '🚨', title: 'Incident response playbook', desc: 'Step-by-step procedures for an AI failure event — classification, escalation, public communication, and remediation — designed for your specific risk profile.' },
  { bg: '#EEEDFE', icon: '⭐', title: 'Board governance report template', desc: 'Quarterly reporting template that surfaces AI performance, risk events, bias trends, and compliance status in language appropriate for non-technical board members.' },
];

export default function AGEDeliverables() {
  return (
    <section className="cd-section py-5 pb-5 border-top border-bottom">
      <div className="container py-4">
        <SectionTitle
          className="mb-2 text-center"
          SubTitle="What you receive"
          Title="Eight governance deliverables — written, practical, and auditable"
          Content="Every engagement produces documents that survive a regulatory audit, a board presentation, and a customer security questionnaire."
          isDarkMode={false}
        />

        <div className="age-del-grid">
          {DELIVERABLES.map((d, i) => (
            <div className="age-del-card" key={i}>
              <div className="age-del-ic" style={{ background: d.bg }}>
                <span>{d.icon}</span>
              </div>
              <div>
                <div className="age-del-title">{d.title}</div>
                <div className="age-del-desc">{d.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
