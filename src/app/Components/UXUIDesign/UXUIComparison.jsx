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
            <span>With MayuraSoft</span>
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

      <style>{`
        .uxcmp-section {
          background: #fff;
          padding-top: 80px;
          padding-bottom: 40px;
        }

        /* ── Column labels ── */
        .uxcmp-labels {
          display: flex;
          align-items: center;
          margin-bottom: 4px;
        }
        .uxcmp-label {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding-bottom: 14px;
        }
        .uxcmp-label-bad {
          color: #b03a2e;
          justify-content: flex-end;
          padding-right: 48px;
        }
        .uxcmp-label-good {
          color: #4361EE;
          padding-left: 48px;
        }
        .uxcmp-label-spacer {
          width: 160px;
          flex-shrink: 0;
        }

        /* ── Infographic container + vertical spine line ── */
        .uxcmp-infographic {
          position: relative;
        }
        .uxcmp-infographic::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          background: linear-gradient(to bottom, transparent, #e0e0e0 8%, #e0e0e0 92%, transparent);
          z-index: 0;
        }

        /* ── Row ── */
        .uxcmp-row {
          display: grid;
          grid-template-columns: 1fr 160px 1fr;
          align-items: center;
          padding: 44px 0;
          border-top: 1px solid #ebebeb;
          position: relative;
        }
        .uxcmp-row:last-child {
          border-bottom: 1px solid #ebebeb;
        }

        /* ── Sides ── */
        .uxcmp-side {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .uxcmp-side-bad {
          align-items: flex-end;
          text-align: right;
          padding-right: 48px;
        }
        .uxcmp-side-good {
          align-items: flex-start;
          text-align: left;
          padding-left: 48px;
        }

        /* ── Stat ── */
        .uxcmp-stat {
          font-size: 42px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.025em;
        }
        .uxcmp-stat-bad { color: #b03a2e; }
        .uxcmp-stat-good { color: #4361EE; }

        /* ── Supporting text ── */
        .uxcmp-text {
          font-size: 13px;
          color: #6c757d;
          line-height: 1.6;
          margin: 0;
          max-width: 260px;
        }
        .uxcmp-side-bad .uxcmp-text {
          margin-left: auto;
        }

        /* ── Center spine node ── */
        .uxcmp-spine {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 9px;
          position: relative;
          z-index: 1;
        }
        .uxcmp-node {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #fff;
          border: 1.5px solid #ddd;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #555;
          font-size: 15px;
          transition: border-color 0.2s, color 0.2s;
        }
        .uxcmp-row:hover .uxcmp-node {
          border-color: #4361EE;
          color: #4361EE;
        }
        .uxcmp-dim {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #bbb;
          text-align: center;
          line-height: 1.4;
        }

        /* ── Source note ── */
        .uxcmp-source {
          margin-top: 28px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 14px 20px;
          border-left: 3px solid rgba(67, 97, 238, 0.25);
          background: rgba(67, 97, 238, 0.03);
        }
        .uxcmp-source i {
          color: #4361EE;
          font-size: 14px;
          margin-top: 1px;
          flex-shrink: 0;
        }
        .uxcmp-source p {
          margin: 0;
          font-size: 12.5px;
          color: #6c757d;
          line-height: 1.55;
        }

        /* ── Responsive: tablet ── */
        @media (max-width: 991px) {
          .uxcmp-stat { font-size: 32px; }
          .uxcmp-row { grid-template-columns: 1fr 130px 1fr; }
          .uxcmp-label-spacer { width: 130px; }
          .uxcmp-side-bad { padding-right: 32px; }
          .uxcmp-side-good { padding-left: 32px; }
          .uxcmp-label-bad { padding-right: 32px; }
          .uxcmp-label-good { padding-left: 32px; }
        }

        /* ── Responsive: mobile ── */
        @media (max-width: 767px) {
          .uxcmp-labels { display: none; }
          .uxcmp-infographic::before { display: none; }
          .uxcmp-row {
            grid-template-columns: 1fr;
            padding: 28px 0;
            gap: 14px;
          }
          .uxcmp-spine {
            flex-direction: row;
            justify-content: flex-start;
            order: -1;
          }
          .uxcmp-side-bad,
          .uxcmp-side-good {
            align-items: flex-start;
            text-align: left;
            padding: 0;
          }
          .uxcmp-side-bad .uxcmp-text { margin-left: 0; }
          .uxcmp-stat { font-size: 30px; }
          .uxcmp-text { max-width: 100%; }
        }
      `}</style>
    </section>
  );
}
