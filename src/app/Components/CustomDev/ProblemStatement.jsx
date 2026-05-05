import React from 'react';

export default function ProblemStatement() {
  return (
    <section className="cd-section cd-section-muted">
      <div className="container">
        <div className="cd-problem-header">
          <span className="eyebrow">The challenge</span>
          <h2>Off-the-shelf software wasn&apos;t built for your business</h2>
          <p>
            Generic SaaS tools create workarounds. Workarounds create inefficiency.
            Inefficiency creates the ceiling your growth hits. When your processes
            are unique, your software should be too.
          </p>
          <p>
            Most development engagements fail not because of bad code — but because
            of poor scoping, misaligned expectations, and teams that disappear after
            launch. We&apos;ve designed our entire model to solve these three problems.
          </p>
        </div>
        
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="cd-pain-card">
              <span className="cd-pain-label">Generic tools</span>
              <p className="cd-pain-text">
                Force you to adapt your process to the software rather than the reverse.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="cd-pain-card">
              <span className="cd-pain-label">Poor scoping</span>
              <p className="cd-pain-text">
                Leads to runaway budgets and timelines that slip by months.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="cd-pain-card">
              <span className="cd-pain-label">Post-launch void</span>
              <p className="cd-pain-text">
                Leaves you managing bugs and enhancements without a capable partner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
