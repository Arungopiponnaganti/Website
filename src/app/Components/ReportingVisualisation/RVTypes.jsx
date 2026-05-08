'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const RV_TYPES = [
  { t: 'Executive dashboard', s: 'C-suite weekly', builds: ['KPI scorecard with traffic-light RAG status', 'MoM trend lines with targets', 'One-number story per initiative', 'Mobile-optimised for on-the-go review'], audience: 'CEO, CFO, Board', delivery: 'Automated Monday 7 AM delivery', preview: { bars: [3, 5, 4, 7, 6, 8], color: '#3b82f6' } },
  { t: 'Operational report', s: 'Team daily/weekly', builds: ['High-frequency operational metrics', 'Alert thresholds and exception flagging', 'Drill-down capability by region/product/rep', 'Export to PDF for distribution'], audience: 'Operations managers, team leads', delivery: 'Automated daily or weekly', preview: { bars: [5, 4, 6, 5, 7, 6], color: '#10b981' } },
  { t: 'Financial P&L', s: 'Finance monthly', builds: ['Actual vs. budget by department', 'Waterfall charts for variance analysis', 'Multi-period comparison', 'Board pack paginated PDF'], audience: 'CFO, Finance team, Board', delivery: 'Monthly close + on-demand', preview: { bars: [4, 6, 5, 8, 7, 9], color: '#f59e0b' } },
  { t: 'Custom web portal', s: 'Embedded analytics', builds: ['White-labelled analytics inside your product', 'Customer-facing usage dashboards', 'Multi-tenant data isolation', 'API-connected live data'], audience: 'Your customers / partners', delivery: 'Real-time, embedded in your product', preview: { bars: [6, 5, 7, 6, 8, 7], color: '#8b5cf6' } },
];

export default function RVTypes() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-5 pb-5 bg-white">
      <div className="container py-4">
        <SectionTitle
          className="text-center"
          SubTitle="Report types we build"
          Title="Six reporting formats — each designed for a specific audience and decision"
          Content="Click any report type to see what it contains, who it's for, and how it's delivered."
          isDarkMode={false}
        />
        <div className="rv-types">
          {RV_TYPES.map((t, i) => (
            <div 
              key={i} 
              className={`rv-type ${activeIndex === i ? 'active' : ''}`} 
              onClick={() => setActiveIndex(i)}
            >
              <div className="rv-type-preview">
                {t.preview.bars.map((h, bi) => (
                  <div key={bi} style={{ flex: 1, height: `${Math.round((h / 10) * 100)}%`, background: t.preview.color, borderRadius: '2px 2px 0 0', opacity: bi === t.preview.bars.length - 1 ? 1 : 0.5 + bi * 0.1 }}></div>
                ))}
              </div>
              <div className="rv-type-t">{t.t}</div>
              <div className="rv-type-s">{t.s}</div>
            </div>
          ))}
        </div>

        <div className="rv-type-detail shadow-sm animate-fade-in">
          <div>
            <div className="td-lbl">What it contains</div>
            {RV_TYPES[activeIndex].builds.map((b, i) => (
              <div key={i} className={`td-item border-0 py-1 ${i===0?'pt-0':''}`} style={{fontSize: '14px'}}>• {b}</div>
            ))}
          </div>
          <div>
            <div className="td-lbl">Audience</div>
            <div className="td-item border-0 pt-0 pb-3" style={{fontSize: '15px', color:'#050a1e', fontWeight: '500'}}>{RV_TYPES[activeIndex].audience}</div>
            
            <div className="td-lbl mt-2">Delivery method</div>
            <div className="td-item border-0 pt-0" style={{fontSize: '15px'}}>{RV_TYPES[activeIndex].delivery}</div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html:`
        .animate-fade-in { animation: fadeIn 0.2s ease-in; }
        @keyframes fadeIn { from {opacity: 0; transform: translateY(-5px)} to {opacity: 1; transform: translateY(0)} }
      `}}/>
    </section>
  );
}
