'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const includedList = [
  {
    icon: 'bi-activity', title: '24/7 monitoring & alerting', theme: '#0F6E56', bg: '#E1F5EE',
    body: "Full-stack observability across your application, infrastructure, APIs, and database — with intelligent alerting that pages humans, not inboxes.",
    items: ['Uptime monitoring every 60 seconds', 'Custom alert thresholds per service', 'On-call rotation with escalation paths', 'Your team notified with context, not noise']
  },
  {
    icon: 'bi-cone-striped', title: 'Incident response', theme: '#993C1D', bg: '#FAECE7',
    body: 'Structured response for every production incident — detect, diagnose, resolve, and document — with SLA-backed response times and post-incident reports.',
    items: ['P1 response in <15 minutes', 'Live status page for stakeholders', 'RCA report within 24 hrs of resolution', 'Runbook-driven, not reactive']
  },
  {
    icon: 'bi-tools', title: 'Patch & dependency management', theme: '#534AB7', bg: '#EEEDFE',
    body: 'Security patches, dependency updates, and OS-level maintenance applied on a structured schedule — without surprise deployments or unplanned downtime.',
    items: ['Weekly dependency vulnerability scan', 'Critical patches applied within 24 hrs', 'Scheduled maintenance windows agreed', 'Rollback plan for every patch']
  },
  {
    icon: 'bi-speedometer2', title: 'Performance optimisation', theme: '#185FA5', bg: '#E6F1FB',
    body: 'Monthly reviews of application performance, database query health, and infrastructure cost — with specific, actionable recommendations each cycle.',
    items: ['Monthly performance review report', 'Database query optimisation', 'Cloud cost rightsizing', 'Caching & CDN recommendations']
  },
  {
    icon: 'bi-clipboard-data', title: 'Reporting & visibility', theme: '#27500A', bg: '#EAF3DE',
    body: 'Monthly SLA reports, incident summaries, and performance trends — giving your leadership team full visibility without needing to ask for it.',
    items: ['Monthly SLA compliance report', 'Incident volume & trend analysis', 'Your dedicated status dashboard', 'Quarterly business review']
  },
  {
    icon: 'bi-person-badge', title: 'Dedicated support engineer', theme: '#854F0B', bg: '#FAEEDA',
    body: 'A named engineer who knows your application, your team, and your business context — not a rotating help desk that reads from a script.',
    items: ['Named primary support contact', 'Bi-weekly sync with your team', 'Direct Slack/Teams access', 'Handover documentation maintained']
  }
];

export default function MASWhatsIncluded() {
  return (
    <section id="whats-included" className="cd-section py-5 cd-section-muted">
      <div className="container py-4">
        <SectionTitle
          className="text-center mb-5"
          SubTitle="What's included"
          Title="Everything in a managed support engagement"
          Content="Every Mayurasoft support plan includes these six pillars — not as add-ons, but as the baseline."
          isDarkMode={false}
        />

        <div className="row g-4 mt-2">
          {includedList.map((item, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div
                className="cd-cap-card"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '35px 30px',
                  position: 'relative',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.02)',
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
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
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className={`bi ${item.icon}`} style={{ fontSize: '20px', color: item.theme }}></i>
                </div>
                
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1e2d', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontSize: '14.5px', color: '#6c757d', lineHeight: '1.6', marginBottom: '25px' }}>{item.body}</p>

                <div className="d-flex flex-column gap-2 mt-auto">
                  {item.items.map((li, idx) => (
                    <div key={idx} className="d-flex gap-2 align-items-start" style={{ 
                      fontSize: '13.5px', 
                      color: '#7a7a7a', 
                      lineHeight: '1.4',
                      paddingBottom: '10px',
                      borderBottom: idx === item.items.length - 1 ? 'none' : '1px dashed #f0f0f0'
                    }}>
                      <i className="bi bi-check2" style={{ fontSize: '16px', color: item.theme, marginTop: '-1px', flexShrink: 0 }}></i>
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
