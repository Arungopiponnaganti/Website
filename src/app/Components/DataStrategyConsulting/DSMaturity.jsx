'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const DS_MAT_ROWS = [
  { lbl: 'Reporting', l1: 'Manual Excel files emailed around', l2: 'Basic dashboards exist but not trusted', l3: 'Single source of truth, automated delivery', l4: 'Self-serve analytics, AI-augmented insights' },
  { lbl: 'Data infra', l1: 'Data in operational databases only', l2: 'Basic warehouse or first pipelines', l3: 'Governed modern data platform', l4: 'Real-time lakehouse, ML feature store' },
  { lbl: 'Governance', l1: 'No policies, no ownership', l2: 'Ad-hoc quality checks, no catalogue', l3: 'Catalogue, lineage, quality rules in force', l4: 'Data mesh, federated ownership, full lineage' },
  { lbl: 'AI / ML', l1: 'No AI capability', l2: 'Experimentation without production deployment', l3: '1–3 ML models in production', l4: 'AI embedded in core business processes' },
  { lbl: 'Culture', l1: 'Data is IT\'s problem', l2: 'Some data champions in the business', l3: 'Data owners in every department', l4: 'Data-first decision making at every level' },
];

export default function DSMaturity() {
  const [activeCell, setActiveCell] = useState(null);

  const handleClick = (dim, level, desc, rIndex, cIndex) => {
    if(activeCell && activeCell.r === rIndex && activeCell.c === cIndex) {
      setActiveCell(null);
    } else {
      setActiveCell({ dim, level, desc, r: rIndex, c: cIndex });
    }
  };

  return (
    <section className="py-5 pb-3 bg-white border-top">
      <div className="container py-4">
        <SectionTitle
          className="text-center"
          SubTitle="Data maturity roadmap"
          Title="Where your organisation sits today — and what Level 4 looks like"
          Content="Click any cell to understand what that capability looks like at each maturity level."
          isDarkMode={false}
        />

        <div className="ds-maturity shadow-sm bg-white">
          <div className="dsm-row">
            <div className="dsm-label border-bottom-0">Dimension</div>
            <div className="dsm-cell header">Level 1 — Reactive</div>
            <div className="dsm-cell header">Level 2 — Developing</div>
            <div className="dsm-cell header">Level 3 — Managed</div>
            <div className="dsm-cell header">Level 4 — Leading</div>
          </div>
          {DS_MAT_ROWS.map((r, ri) => (
            <div key={ri} className="dsm-row">
              <div className="dsm-label">{r.lbl}</div>
              <div className={`dsm-cell ${activeCell?.r===ri && activeCell?.c===1 ? 'active':''}`} onClick={()=>handleClick(r.lbl,'Level 1',r.l1,ri,1)}>{r.l1}</div>
              <div className={`dsm-cell ${activeCell?.r===ri && activeCell?.c===2 ? 'active':''}`} onClick={()=>handleClick(r.lbl,'Level 2',r.l2,ri,2)}>{r.l2}</div>
              <div className={`dsm-cell ${activeCell?.r===ri && activeCell?.c===3 ? 'active':''}`} onClick={()=>handleClick(r.lbl,'Level 3',r.l3,ri,3)}>{r.l3}</div>
              <div className={`dsm-cell border-right-0 ${activeCell?.r===ri && activeCell?.c===4 ? 'active':''}`} onClick={()=>handleClick(r.lbl,'Level 4',r.l4,ri,4)}>{r.l4}</div>
            </div>
          ))}
        </div>

        {activeCell && (
          <div className="mt-3 p-4 bg-light border rounded-3 animate-fade-in shadow-sm">
            <span className="fw-semibold text-dark">{activeCell.dim} — {activeCell.level}:</span> <span className="text-muted" style={{fontSize: '14px', lineHeight: 1.6}}>{activeCell.desc}. Our data strategy engagement assesses where you are on each dimension today and builds a roadmap to move every dimension to Level 3 or 4 within 24 months.</span>
          </div>
        )}
      </div>
      <style dangerouslySetInnerHTML={{__html:`
        .animate-fade-in { animation: fadeIn 0.2s ease-in; }
        @keyframes fadeIn { from {opacity: 0; transform: translateY(-3px)} to {opacity: 1; transform: translateY(0)} }
      `}}/>
    </section>
  );
}
