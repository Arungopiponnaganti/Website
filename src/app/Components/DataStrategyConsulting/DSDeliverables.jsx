import React from 'react';
import SectionTitle from '../Common/SectionTitle';

export default function DSDeliverables() {
  return (
    <section className="py-5 pb-5 bg-white">
      <div className="container py-4">
        <SectionTitle
          className="text-center"
          SubTitle="Deliverables"
          Title="What you receive from a Mayurasoft data strategy engagement"
          Content=""
          isDarkMode={false}
        />

        <div className="row g-4 mt-2">
          <div className="col-lg-4">
            <div className="p-4 border rounded-3 bg-light h-100 shadow-sm">
              <div style={{fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280', marginBottom: '8px'}}>Week 1–2</div>
              <div className="fw-bold text-dark mb-2" style={{fontSize: '16px'}}>Data value map</div>
              <div className="text-muted" style={{fontSize: '14px', lineHeight: 1.6}}>
                Every business process mapped to its data dependency and value opportunity — quantified in revenue, cost, or risk terms. The foundation of every investment decision.
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="p-4 border rounded-3 bg-light h-100 shadow-sm">
              <div style={{fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280', marginBottom: '8px'}}>Week 3–4</div>
              <div className="fw-bold text-dark mb-2" style={{fontSize: '16px'}}>Capability gap analysis</div>
              <div className="text-muted" style={{fontSize: '14px', lineHeight: 1.6}}>
                Assessment of your current data capabilities against what you need to deliver the value map. Gap severity classified by business impact and technical feasibility.
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="p-4 border rounded-3 bg-light h-100 shadow-sm">
              <div style={{fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280', marginBottom: '8px'}}>Week 5–6</div>
              <div className="fw-bold text-dark mb-2" style={{fontSize: '16px'}}>24-month roadmap</div>
              <div className="text-muted" style={{fontSize: '14px', lineHeight: 1.6}}>
                Sequenced, funded, board-ready roadmap. Each initiative includes an investment case with ROI estimate, a delivery timeline, and build-vs-buy-vs-partner recommendation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
