'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';
import Image from 'next/image';

const ABI_UCS = [
  { ic: '#fef3c7', stroke: '#d97706', path: 'M2 10l3-3 3 3 3-3 3 3M2 5h11', t: 'Revenue intelligence', d: 'MoM revenue, product mix, customer cohort value, forecast vs. actuals — the CFO and CEO dashboard.', items: ['Gross revenue, net revenue, revenue by product/region/channel', 'MoM and YoY growth, customer LTV, CAC', '3-month rolling forecast with scenario modelling', 'Executive and board-level reporting dashboard'] },
  { ic: '#d1fae5', stroke: '#059669', path: 'M2 8h11M2 5h7M2 11h5', t: 'Sales performance', d: 'Pipeline health, conversion rates, rep performance, and forecast accuracy — the VP Sales dashboard.', items: ['Pipeline by stage, conversion rate by stage', 'Deals won/lost, rep activity vs. quota', 'Forecast accuracy and deal velocity tracking', 'Territory planning and quota setting support'] },
  { ic: '#ede9fe', stroke: '#7c3aed', path: 'M7 1v6l3 3M7 14a7 7 0 110-14 7 7 0 010 14z', t: 'Operations dashboard', d: 'Fulfilment time, SLA adherence, cost per order, and inventory health — the COO and ops team view.', items: ['Order processing time, SLA breach rate', 'Cost per order, inventory turnover, return rate', 'NPS by fulfilment route and vendor', 'Process improvement and vendor performance tracking'] },
  { ic: '#dbeafe', stroke: '#2563eb', path: 'M2 4h11v9H2zM5 4V2.5a2 2 0 014 0V4', t: 'Finance reporting', d: 'P&L summary, budget vs. actuals, cash flow, and department spend — the finance team and board view.', items: ['Revenue, COGS, gross margin, EBITDA', 'Department budget vs. actuals tracking', 'Cash runway and AR aging analysis', 'Investor and board-level reporting'] },
  { ic: '#ffedd5', stroke: '#ea580c', path: 'M7 1l6 3v7l-6 3L1 11V4z', t: 'Customer analytics', d: 'Churn prediction, retention cohorts, NPS trends, and support volume — the customer success view.', items: ['Monthly churn rate, retention by cohort', 'NPS trend and support ticket volume', 'CSAT tracking and expansion revenue', 'Retention programme and headcount planning'] },
  { ic: '#ecfccb', stroke: '#65a30d', path: 'M2 5h11M2 9h7M2 12h4', t: 'Marketing attribution', d: 'Campaign ROI, channel attribution, CAC by source, and content performance — the CMO view.', items: ['CAC by channel, ROAS by campaign', 'Multi-touch attribution modelling', 'Email open/click/convert and SEO traffic', 'Budget allocation and campaign prioritisation'] },
];

export default function ABIUseCases() {
  return (
    <section className="cd-section cd-section-muted border-top border-bottom py-5" id="use-cases">
      <div className="container py-4">
        <SectionTitle
          className="text-center mb-3"
          SubTitle="Analytics use cases"
          Title="What we build — by business function"
          Content="Every Mayurasoft analytics engagement covers these core use cases — built on clean data and tuned for your team's decisions."
          isDarkMode={false}
        />

        <div className="row g-4 mt-2">
          {ABI_UCS.map((u, i) => (
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
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: u.ic, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                  <svg viewBox="0 0 13 13" fill="none" stroke={u.stroke} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px' }}>
                    <path d={u.path} />
                  </svg>
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1e2d', marginBottom: '12px' }}>{u.t}</h3>
                <p style={{ fontSize: '14.5px', color: '#6c757d', lineHeight: '1.6', marginBottom: '25px' }}>{u.d}</p>

                <div className="d-flex flex-column gap-2 mt-auto">
                  {u.items.map((li, idx) => (
                    <div key={idx} className="d-flex gap-2 align-items-start" style={{
                      fontSize: '13.5px',
                      color: '#7a7a7a',
                      lineHeight: '1.4',
                      paddingBottom: '10px',
                      borderBottom: idx === u.items.length - 1 ? 'none' : '1px dashed #f0f0f0'
                    }}>
                      <i className="bi bi-check2" style={{ fontSize: '16px', color: u.stroke, marginTop: '-1px', flexShrink: 0 }}></i>
                      <span>{li}</span>
                    </div>
                  ))}
                </div>

                <div style={{ position: 'absolute', bottom: '20px', right: '30px', opacity: 0.12, fontSize: '46px', color: '#1a1e2d', pointerEvents: 'none' }}>
                  <svg viewBox="0 0 13 13" fill="none" stroke={u.stroke} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: '50px', height: '50px' }}>
                    <path d={u.path} />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="service-shape bounce-animate3">
        <Image src="/assets/images/service5.png" alt="Service feature image" width={199} height={420} />
      </div>
      <div className="service-shape2">
        <Image src="/assets/images/service7.png" alt="Service feature icon" width={100} height={100} />
      </div>
      <div className="service-shape3 bounce-animate4">
        <Image src="/assets/images/service8.png" alt="Service decorative image" width={341} height={351} />
      </div>
    </section>
  );
}