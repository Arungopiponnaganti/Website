import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const rows = [
  {
    dimension: 'Dev Rework',
    icon: 'bi-code-slash',
    badStat: '30–50%',
    badText: 'of sprint time wasted fixing UX issues after launch',
    goodStat: '0',
    goodText: 'UX bugs — caught in prototype before a single line is written',
  },
  {
    dimension: 'User Onboarding',
    icon: 'bi-person-check',
    badStat: 'High',
    badText: 'support ticket volume and slow time-to-value for new users',
    goodStat: '40–60%',
    goodText: 'fewer onboarding support tickets with intuitive user flows',
  },
  {
    dimension: 'Conversion Rate',
    icon: 'bi-graph-up-arrow',
    badStat: '2–3%',
    badText: 'industry average — where most teams without UX investment land',
    goodStat: '2.5×',
    goodText: 'above industry baseline with research-led design decisions',
  },
  {
    dimension: 'Dev Speed',
    icon: 'bi-lightning-charge',
    badStat: 'Slow',
    badText: 'constant mid-sprint back-and-forth clarifying design intent',
    goodStat: 'Clear',
    goodText: 'annotated specs, design system, component library — zero ambiguity',
  },
  {
    dimension: 'Enterprise Sales',
    icon: 'bi-briefcase',
    badStat: 'Lost',
    badText: 'poor UX is a consistent deal-breaker in B2B procurement',
    goodStat: 'Won',
    goodText: 'polished UI signals product maturity to enterprise buyers',
  },
];

export default function UXUIComparison() {
  return (
    <section className="uxcmp-section">
      <div className="container">

        {/* Header */}
        <div className="row mb-5">
            <SectionTitle
              SubTitle="Why invest in design"
              Title="What happens when design is an afterthought"
              className="text-center"
              isDarkMode={false}
              Content={"The cost of skipping UX investment isn&apos;t zero — it shows up as rework, churn, and lost deals. Here&apos;s what the data says."}
            />
          </div>

        {/* Column labels */}
        <div className="uxcmp-labels">
          <div className="uxcmp-label uxcmp-label-bad">
            <i className="bi bi-x-circle-fill" />
            <span>Without UX Investment</span>
          </div>
          <div className="uxcmp-label-spacer" />
          <div className="uxcmp-label uxcmp-label-good">
            <i className="bi bi-check-circle-fill" />
            <span>With Mayurasoft</span>
          </div>
        </div>

        {/* Infographic */}
        <div className="uxcmp-infographic">
          {rows.map((row, i) => (
            <div key={i} className="uxcmp-row">

              {/* Bad side */}
              <div className="uxcmp-side uxcmp-side-bad">
                <div className="uxcmp-stat uxcmp-stat-bad">{row.badStat}</div>
                <p className="uxcmp-text">{row.badText}</p>
              </div>

              {/* Center spine */}
              <div className="uxcmp-spine">
                <div className="uxcmp-node">
                  <i className={`bi ${row.icon}`} />
                </div>
                <span className="uxcmp-dim">{row.dimension}</span>
              </div>

              {/* Good side */}
              <div className="uxcmp-side uxcmp-side-good">
                <div className="uxcmp-stat uxcmp-stat-good">{row.goodStat}</div>
                <p className="uxcmp-text">{row.goodText}</p>
              </div>

            </div>
          ))}
        </div>

        {/* Source note */}
        <div className="uxcmp-source">
          <i className="bi bi-info-circle-fill" />
          <p>
            <strong>Source:</strong> Forrester Research, Nielsen Norman Group, Baymard Institute.
            Figures represent industry medians across B2B SaaS products.
          </p>
        </div>
      </div>
    </section>
  );
}
