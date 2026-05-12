'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const RV_STEPS = [
  { n: '01', t: 'Requirements', d: 'Stakeholder brief', dur: 'Day 1–3', acts: ['Interview report consumers — not producers', 'Define the one decision each report enables', 'Agree metric definitions before any design'], tools: ['Stakeholder interview guide', 'Metric definition doc', 'Requirements sign-off'] },
  { n: '02', t: 'Design', d: 'Mockup approval', dur: 'Day 4–7', acts: ['Lo-fi layout design in Figma', 'Stakeholder review round', 'Design spec and colour system'], tools: ['Figma mockups', 'Brand style guide', 'Design approval checklist'] },
  { n: '03', t: 'Build', d: 'Data + visualisation', dur: 'Day 8–18', acts: ['SQL / dbt model for each metric', 'BI tool implementation', 'Automated refresh and alert setup'], tools: ['Power BI / Tableau / Looker', 'dbt transformation models', 'Scheduled refresh config'] },
  { n: '04', t: 'Deploy', d: 'Automate & handover', dur: 'Day 19–21', acts: ['Production deployment and access setup', 'Automated delivery schedule configured', 'Training session for report owners'], tools: ['Distribution list config', 'Training recording', 'Maintenance runbook'] },
];

export default function RVSteps() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-5 pb-5 bg-light border-top border-bottom" id="services">
      <div className="container py-4">
        <SectionTitle
          className="text-center"
          SubTitle="How we deliver reports"
          Title="Four steps from brief to boardroom-ready report"
          Content=""
          isDarkMode={false}
        />
        <div className="rv-steps">
          {RV_STEPS.map((s, i) => (
            <div 
              key={i} 
              className={`rv-step ${activeIndex === i ? 'active' : ''}`}
              onClick={() => setActiveIndex(i)}
            >
              <div className="rvs-n">{s.n} · {s.dur}</div>
              <div className="rvs-t">{s.t}</div>
              <div className="rvs-d">{s.d}</div>
            </div>
          ))}
        </div>

        <div className="rv-step-detail shadow-sm animate-fade-in">
          <div>
            <div className="td-lbl">What we do</div>
            {RV_STEPS[activeIndex].acts.map((a, i) => (
              <div key={i} className="td-item border-0 py-1" style={{fontSize: '14px', color:'#4b5563'}}>• {a}</div>
            ))}
          </div>
          <div>
            <div className="td-lbl">Tools & methods</div>
            {RV_STEPS[activeIndex].tools.map((t, i) => (
              <div key={i} className="td-item border-0 py-1" style={{fontSize: '14px', color:'#4b5563'}}>• {t}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
