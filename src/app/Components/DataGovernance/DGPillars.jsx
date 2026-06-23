'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const PILLARS = [
  {
    icon: 'bi-card-list',
    theme: '#185FA5',
    bg: '#E6F1FB',
    title: 'Data catalogue',
    body: 'A structured inventory of all data assets — tables, APIs, reports, and models — with business glossary definitions and sensitivity classification.',
    items: [
      'Asset inventory: tables, APIs, reports, and models',
      'Business glossary: agreed definitions for every key term',
      'Ownership assignment: data owner and steward per domain',
      'Sensitivity classification: public, internal, confidential, restricted',
    ],
  },
  {
    icon: 'bi-diagram-2',
    theme: '#854F0B',
    bg: '#FAEEDA',
    title: 'Data lineage',
    body: 'End-to-end traceability from source to dashboard with column-level lineage and automated impact analysis for every change.',
    items: [
      'Column-level lineage from source to dashboard',
      'Impact analysis: what breaks if this table changes?',
      'Automated lineage capture — no manual documentation',
      'Lineage-aware alert routing for pipeline failures',
    ],
  },
  {
    icon: 'bi-shield-check',
    theme: '#0F6E56',
    bg: '#E1F5EE',
    title: 'Data quality',
    body: 'Automated quality rule execution on every pipeline run with scoring, quarantining, and trend dashboards by dataset and domain.',
    items: [
      'Quality rule definition: completeness, accuracy, consistency, timeliness',
      'Automated rule execution on every pipeline run',
      'Quality score trending dashboard by dataset and domain',
      'Quarantine workflow for records failing quality thresholds',
    ],
  },
  {
    icon: 'bi-person-badge',
    theme: '#534AB7',
    bg: '#EEEDFE',
    title: 'Data ownership',
    body: 'Clear RACI ownership per domain, steward networks, escalation paths, and governance council charter for cross-domain alignment.',
    items: [
      'Data owner RACI matrix per business domain',
      'Ownership onboarding process for new datasets',
      'Escalation path for cross-domain data disputes',
      'Data steward network and governance council charter',
    ],
  },
  {
    icon: 'bi-lock',
    theme: '#993C1D',
    bg: '#FAECE7',
    title: 'Access control',
    body: 'Role-based access control with column-level security for PII, plus access request workflows and quarterly review audits.',
    items: [
      'Role-based access control matrix per data domain',
      'Column-level security for PII and sensitive fields',
      'Access request and approval workflow',
      'Quarterly access review process and audit log',
    ],
  },
  {
    icon: 'bi-file-earmark-text',
    theme: '#27500A',
    bg: '#EAF3DE',
    title: 'Compliance & retention',
    body: 'Personal data inventory, retention schedules, right-to-erasure workflows, and data residency mapping for cross-border compliance.',
    items: [
      'Personal data inventory and processing register',
      'Retention schedule: how long each dataset is kept',
      'Right-to-erasure workflow: delete on request in < 30 days',
      'Data residency mapping for cross-border transfer compliance',
    ],
  },
];

export default function DGPillars() {
  return (
    <section className="cd-section cd-section-muted border-top border-bottom py-5">
      <div className="container py-4">
        <SectionTitle
          className="text-center mb-3"
          SubTitle="Our governance framework"
          Title="Six pillars — every dimension of data governance addressed"
          Content="Every Mayurasoft data governance engagement covers these six areas — from catalogue to compliance."
          isDarkMode={false}
        />

        <div className="row g-4 mt-2">
          {PILLARS.map((p, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div
                className="h-100"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '35px 30px',
                  position: 'relative',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.02)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0px 15px 35px rgba(0, 0, 0, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0px 10px 30px rgba(0, 0, 0, 0.02)';
                }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                  <i className={`bi ${p.icon}`} style={{ fontSize: '20px', color: p.theme }}></i>
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1e2d', marginBottom: '12px' }}>{p.title}</h3>
                <p style={{ fontSize: '14.5px', color: '#6c757d', lineHeight: '1.6', marginBottom: '25px' }}>{p.body}</p>

                <div className="d-flex flex-column gap-2 mt-auto">
                  {p.items.map((li, idx) => (
                    <div key={idx} className="d-flex gap-2 align-items-start" style={{
                      fontSize: '13.5px',
                      color: '#7a7a7a',
                      lineHeight: '1.4',
                      paddingBottom: '10px',
                      borderBottom: idx === p.items.length - 1 ? 'none' : '1px dashed #f0f0f0'
                    }}>
                      <i className="bi bi-check2" style={{ fontSize: '16px', color: p.theme, marginTop: '-1px', flexShrink: 0 }}></i>
                      <span>{li}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
