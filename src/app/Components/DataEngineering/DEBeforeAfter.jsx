'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const BA_DATA = [
  {
    label: 'Reporting',
    icon: 'bi-bar-chart',
    desc: 'Automated reporting',
    beforeIcon: 'bi-file-earmark-spreadsheet',
    afterIcon: 'bi-check2-square',
    beforeHeadline: 'Manual, slow, inconsistent',
    afterHeadline: 'Automated, real-time, trusted',
    scenario: 'A mid-size company has finance data spread across four different systems — an ERP, a payroll platform, a billing tool, and a CRM. Every Friday, the finance team manually exports from each system, reconciles in Excel, and spends Monday morning debating which numbers are correct.',
    context: 'The CFO asks for a weekly report every Monday. By the time the data is compiled, it is already out of date. Different teams report different revenue figures depending on which system they pulled from.',
    before: [
      { lbl: 'Process', v: 'Finance pulls data from 4 systems manually every Friday. Takes 3 hours to reconcile and 2 more to format the report. Delivered Monday morning.' },
      { lbl: 'Accuracy', v: 'Revenue figures differ between finance, sales, and marketing by up to 8%. Every board meeting starts with a 20-minute argument about which number is correct.' },
      { lbl: 'Latency', v: "Decision-makers are looking at last week's data — by the time it arrives, the situation has already changed." },
      { lbl: 'Trust', v: '"I don\'t trust this number" is said in every data-related meeting. Teams make decisions on gut feel because they don\'t trust the data.' },
    ],
    after: [
      { lbl: 'Process', v: "Automated pipeline runs at 6 AM every day. Report is in every stakeholder's inbox before they open their laptop. Zero manual intervention." },
      { lbl: 'Accuracy', v: "Single source of truth in the warehouse. Finance, sales, and marketing all see the same number because they're all pulling from the same governed data model." },
      { lbl: 'Latency', v: "Decision-makers see yesterday's data today. For critical metrics, near-real-time streaming shows data updated within minutes." },
      { lbl: 'Trust', v: 'Data trust score (measured quarterly) moves from 40% to 87% within six months of platform launch. Teams act on data instead of debating it.' },
    ],
  },
  {
    label: 'Data team productivity',
    icon: 'bi-code-slash',
    desc: 'Faster delivery',
    beforeIcon: 'bi-hourglass-split',
    afterIcon: 'bi-rocket-takeoff',
    beforeHeadline: 'Slow, fragile, undocumented',
    afterHeadline: 'Fast, resilient, self-documenting',
    scenario: 'A data team of four supports a 200-person company. They spend most of their time firefighting — fixing broken pipelines, reconciling conflicting numbers, and manually preparing data for the one analyst who knows how the system works.',
    context: 'When the senior data engineer left last year, it took three months to rebuild institutional knowledge. New sources still take three weeks to integrate. Every pipeline is a one-off custom build.',
    before: [
      { lbl: 'Time split', v: 'Data analysts spend 70% of their time on data wrangling — finding data, cleaning it, reconciling sources — and 30% on actual analysis.' },
      { lbl: 'Pipeline breakage', v: '2–3 pipeline failures per week. Each one requires a data engineer to diagnose, fix, and manually reprocess affected data. Average 4 hours per incident.' },
      { lbl: 'New source', v: 'Adding a new data source requires a 3-week custom build. Each new source is a unique project with no reusable patterns.' },
      { lbl: 'Documentation', v: 'Zero. If the person who built the pipeline leaves, no one knows how it works, what it does, or how to fix it when it breaks.' },
    ],
    after: [
      { lbl: 'Time split', v: 'Analysts spend 80% of their time on analysis — the data infrastructure handles the wrangling. More insights shipped per sprint.' },
      { lbl: 'Pipeline breakage', v: 'Automated monitoring catches failures within 2 minutes and alerts the on-call engineer. Most failures are self-healed by retry logic before anyone notices.' },
      { lbl: 'New source', v: 'Adding a new source using Airbyte takes 2–4 hours for a standard connector. Custom sources take 2–3 days with the reusable ingestion framework.' },
      { lbl: 'Documentation', v: "dbt auto-generates documentation for every model. Lineage graph shows every table's upstream sources and downstream consumers. Runbooks for every pipeline." },
    ],
  },
  {
    label: 'Analytics & AI readiness',
    icon: 'bi-lightbulb',
    desc: 'Self-serve insights',
    beforeIcon: 'bi-question-circle',
    afterIcon: 'bi-star-fill',
    beforeHeadline: 'Slow queries, manual prep, no self-serve',
    afterHeadline: 'Fast queries, feature store, self-serve',
    scenario: 'A product team wants to build a churn prediction model and a customer segmentation dashboard. The data science team estimates eight weeks to prepare data before the first model can be trained. The BI team has stopped refreshing dashboards because queries take too long.',
    context: 'Every data request goes through the data team. Business users wait 1–2 weeks for basic analyses. "Revenue" means something different in every report. There is no way for analysts to self-serve.',
    before: [
      { lbl: 'BI queries', v: 'A BI dashboard query that joins 5 tables takes 8 minutes to load. Analysts avoid refreshing dashboards because it blocks their work.' },
      { lbl: 'AI / ML', v: 'Data scientists spend 80% of project time on data preparation — accessing, cleaning, and joining data from raw operational systems.' },
      { lbl: 'Self-serve', v: 'Only the data team can answer data questions. Business teams queue requests and wait 1–2 weeks for a simple analysis.' },
      { lbl: 'Consistency', v: '"Revenue" means different things in different reports. "Active customer" has three different definitions across three teams.' },
    ],
    after: [
      { lbl: 'BI queries', v: 'The same 5-table join runs in 4 seconds — clustering, partitioning, and materialised views optimised for the most common query patterns.' },
      { lbl: 'AI / ML', v: 'Data scientists access clean, versioned features from the feature store. Time-to-first-model drops from 8 weeks to 2 weeks per project.' },
      { lbl: 'Self-serve', v: 'Business teams use the semantic layer to build their own Looker or Power BI reports from trusted, governed metrics — no queue, no wait.' },
      { lbl: 'Consistency', v: '"Revenue" has one definition, one owner, and one canonical data model in the warehouse. Every report, every dashboard, every AI model uses the same number.' },
    ],
  },
];

function BeforeIconDisplay({ icon }) {
  return (
    <div className="am-ba-icon-stage">
      <div className="am-ba-ring-spin" />
      <div className="am-ba-ring-static am-ba-ring-static--before" />
      <div className="am-ba-icon-circle am-ba-icon-circle--before">
        <i className={`bi ${icon} am-ba-main-icon am-ba-main-icon--before`} />
      </div>
      <div className="am-ba-badge-pin am-ba-badge-pin--before">
        <i className="bi bi-exclamation-lg" style={{ fontSize: '10px', fontWeight: '900' }} />
      </div>
    </div>
  );
}

function AfterIconDisplay({ icon }) {
  return (
    <div className="am-ba-icon-stage">
      <div className="am-ba-ping am-ba-ping--1" />
      <div className="am-ba-ping am-ba-ping--2" />
      <div className="am-ba-ring-static am-ba-ring-static--after" />
      <div className="am-ba-icon-circle am-ba-icon-circle--after">
        <i className={`bi ${icon} am-ba-main-icon am-ba-main-icon--after`} />
      </div>
      <div className="am-ba-badge-pin am-ba-badge-pin--after">
        <i className="bi bi-check2" style={{ fontSize: '10px', fontWeight: '900' }} />
      </div>
    </div>
  );
}

export default function DEBeforeAfter() {
  const [active, setActive] = useState(0);
  const d = BA_DATA[active];

  return (
    <section className="am-ba-section cd-section-light border-top border-bottom">
      <div className="am-ba-bg-blob am-ba-bg-blob--left" aria-hidden="true" />
      <div className="am-ba-bg-blob am-ba-bg-blob--right" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        <div className="am-ba-header">
          <SectionTitle
            SubTitle="The transformation"
            Title="What changes when your data infrastructure works properly"
            Content="Switch between common scenarios to see the before and after."
            isDarkMode={false}
          />
        </div>

        <div className="am-ba-tabrow">
          {BA_DATA.map((uc, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`am-ba-tabcard${active === i ? ' am-ba-tabcard--active' : ''}`}
            >
              <div className={`am-ba-tabcard-icon${active === i ? ' am-ba-tabcard-icon--active' : ''}`}>
                <i className={`bi ${uc.icon}`} style={{ fontSize: '18px' }} />
              </div>
              <div>
                <div className="am-ba-tabcard-label">{uc.label}</div>
                <div className="am-ba-tabcard-desc">{uc.desc}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="am-ba-scenario">
          <div className="am-ba-scenario-label">Scenario</div>
          <p className="am-ba-scenario-title">{d.scenario}</p>
          <p className="am-ba-scenario-body">{d.context}</p>
        </div>

        <div className="am-ba-compare">

          <div className="am-ba-panel am-ba-panel--before">
            <div className="am-ba-panel-inner">
              <BeforeIconDisplay icon={d.beforeIcon} />
              <div className="am-ba-state-label am-ba-state-label--before">
                <span className="am-ba-state-dot am-ba-state-dot--before" />
                Current state
              </div>
              <h3 className="am-ba-headline am-ba-headline--before">{d.beforeHeadline}</h3>
              <ul className="am-ba-points">
                {d.before.map((row, i) => (
                  <li key={i} className="am-ba-point am-ba-point--before" style={{ animationDelay: `${i * 60}ms` }}>
                    <span className="am-ba-point-icon am-ba-point-icon--before">
                      <i className="bi bi-x" />
                    </span>
                    <span>
                      <strong className="am-ba-kv-label">{row.lbl}</strong>
                      {row.v}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="am-ba-centre">
            <div className="am-ba-centre-line" />
            <div className="am-ba-centre-arrow">
              <i className="bi bi-arrow-right" style={{ fontSize: '16px', color: '#1a1e2d' }} />
            </div>
            <div className="am-ba-centre-line" />
          </div>

          <div className="am-ba-panel am-ba-panel--after">
            <div className="am-ba-panel-inner">
              <AfterIconDisplay icon={d.afterIcon} />
              <div className="am-ba-state-label am-ba-state-label--after">
                <span className="am-ba-state-dot am-ba-state-dot--after" />
                With MayuraSoft platform
              </div>
              <h3 className="am-ba-headline am-ba-headline--after">{d.afterHeadline}</h3>
              <ul className="am-ba-points">
                {d.after.map((row, i) => (
                  <li key={i} className="am-ba-point am-ba-point--after" style={{ animationDelay: `${i * 60}ms` }}>
                    <span className="am-ba-point-icon am-ba-point-icon--after">
                      <i className="bi bi-check2" />
                    </span>
                    <span>
                      <strong className="am-ba-kv-label">{row.lbl}</strong>
                      {row.v}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}