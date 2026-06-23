import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const TIERS = [
  {
    pct: 80,
    label: 'Unit tests',
    desc: 'Individual function and component testing. Our minimum is 80% line coverage, enforced as a pipeline gate.',
    color: '#1D9E75',
  },
  {
    pct: 70,
    label: 'Integration tests',
    desc: 'Service-to-service and API contract testing. 70% of integration paths covered before merge.',
    color: '#534AB7',
  },
  {
    pct: 95,
    label: 'Critical journeys',
    desc: 'The top 5 user journeys that drive revenue. 95%+ automation coverage — zero regressions allowed.',
    color: '#185FA5',
  },
  {
    pct: 100,
    label: 'Smoke tests',
    desc: '15 core sanity checks run on every deployment — production deploy is blocked if any fail.',
    color: '#BA7517',
  },
];

export default function QECoverage() {
  return (
    <section className="cd-section cd-section-white">
      <div className="container">

        <div className="row mb-4">
          <div className="col-lg-12">
            <SectionTitle
              className="text-center"
              SubTitle="Test coverage standards"
              Title='What <span>"fully covered"</span> means at Mayurasoft'
              Content="We don't stop at unit tests. Every engagement includes coverage across four testing layers — each with a defined minimum threshold."
            />
          </div>
        </div>

        <div className="qe-cov-grid">
          {TIERS.map((tier) => {
            const r = 22;
            const cx = 28;
            const cy = 28;
            const circ = 2 * Math.PI * r;
            const dash = circ * (tier.pct / 100);
            const gap = circ - dash;

            return (
              <div className="qe-cov-card" key={tier.label}>
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  style={{ flexShrink: 0 }}
                >
                  <circle
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="4"
                  />
                  <circle
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill="none"
                    stroke={tier.color}
                    strokeWidth="4"
                    strokeDasharray={`${dash} ${gap}`}
                    strokeLinecap="round"
                    transform={`rotate(-90 ${cx} ${cy})`}
                  />
                  <text
                    x={cx}
                    y={cy + 1}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize="11"
                    fontWeight="600"
                    fill="#050a1e"
                  >
                    {tier.pct}%
                  </text>
                </svg>
                <div className="qe-cov-label">{tier.label}</div>
                <div className="qe-cov-desc">{tier.desc}</div>
              </div>
            );
          })}
        </div>

        <div className="qe-cov-note">
          Our coverage thresholds are enforced as <strong>CI/CD pipeline gates</strong> — a build that drops below threshold is automatically blocked from merging. Quality is structural, not aspirational.
        </div>

      </div>
    </section>
  );
}
