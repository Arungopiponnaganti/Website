import React from 'react';
import SectionTitle from '../Common/SectionTitle';

export default function RVWhy() {
  return (
    <section className="py-5 pb-5 bg-white">
      <div className="container py-4">
        <SectionTitle
          className="text-center"
          SubTitle="Our approach"
          Title="What separates a Mayurasoft report from a spreadsheet export"
          Content=""
          isDarkMode={false}
        />
        <div className="row g-4 mt-2">
          <div className="col-lg-4">
            <div className="p-4 border rounded-3 bg-light h-100">
              <div className="fw-semibold text-dark mb-2" style={{fontSize: '15px'}}>Designed for the reader, not the data team</div>
              <div className="text-muted" style={{fontSize: '14px', lineHeight: 1.6}}>
                Every report is designed from the reader&apos;s decision, not the data structure. We start by asking &ldquo;what decision does this enable?&rdquo; — not &ldquo;what data do we have?&rdquo;
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="p-4 border rounded-3 bg-light h-100">
              <div className="fw-semibold text-dark mb-2" style={{fontSize: '15px'}}>Automated — no manual refresh ever</div>
              <div className="text-muted" style={{fontSize: '14px', lineHeight: 1.6}}>
                Every report we build is fully automated — scheduled, refreshed from live data, and delivered to inboxes or portals without anyone pressing a button.
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="p-4 border rounded-3 bg-light h-100">
              <div className="fw-semibold text-dark mb-2" style={{fontSize: '15px'}}>Contextualised — not just numbers</div>
              <div className="text-muted" style={{fontSize: '14px', lineHeight: 1.6}}>
                Numbers without context don&apos;t drive decisions. Every metric in our reports includes a benchmark, a trend, and a recommended action threshold.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
