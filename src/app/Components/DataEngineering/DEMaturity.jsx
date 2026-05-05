'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const LEVELS = [
  {
    num: 'Level 1',
    t: 'Data chaos',
    d: 'Spreadsheets rule',
    chars: [
      'Data lives in Excel, Google Sheets, and individual laptop files',
      'No single source of truth — different teams have different numbers',
      'Reporting is manual, slow, and error-prone',
      'No data engineering or platform in place',
    ],
    next: [
      'Define a single source of truth strategy',
      'Choose a cloud warehouse (Snowflake / BigQuery / Redshift)',
      'Build your first automated pipeline from your primary system',
      'Establish data ownership and basic naming conventions',
    ],
  },
  {
    num: 'Level 2',
    t: 'Data silos',
    d: 'Systems, no integration',
    chars: [
      'Data in multiple systems (CRM, ERP, marketing tools) but not connected',
      'ETL pipelines exist but are fragile, undocumented, and often failing',
      'Analysts spend 70%+ of their time on data prep, not analysis',
      'No data quality monitoring — issues found when stakeholders complain',
    ],
    next: [
      'Implement a modern ELT platform (Airbyte / Fivetran)',
      'Introduce dbt for version-controlled, tested transformations',
      'Build a data quality framework with automated alerting',
      'Create a shared data catalogue — who owns what, what does it mean',
    ],
  },
  {
    num: 'Level 3',
    t: 'Data foundation',
    d: 'Reliable infrastructure',
    chars: [
      'Centralised warehouse with clean, governed data domains',
      'Automated pipelines with monitoring, alerting, and documented logic',
      'Analysts work from trusted data — less than 20% prep time',
      'dbt-based transformation layer with tests and documentation',
    ],
    next: [
      'Build a semantic layer for consistent business metric definitions',
      'Implement real-time streaming for latency-sensitive use cases',
      'Add ML feature store for data science team productivity',
      'Introduce data mesh principles for domain ownership at scale',
    ],
  },
  {
    num: 'Level 4',
    t: 'Data advantage',
    d: 'Data as a product',
    chars: [
      'Data treated as a product — SLA, documentation, and ownership per domain',
      'Real-time and batch pipelines both live in production',
      'Self-serve analytics — business teams build their own reports reliably',
      'AI and ML models fed from governed, versioned feature store',
    ],
    next: [
      'Productise your best datasets for internal or external data sharing',
      'Implement advanced governance: lineage, impact analysis, PII detection',
      'Build a data observability layer with end-to-end SLO monitoring',
      'Consider a data marketplace or monetisation strategy for your data assets',
    ],
  },
];

export default function DEMaturity() {
  const [active, setActive] = useState(0);
  const level = LEVELS[active];

  return (
    <section className="cd-section border-bottom py-5">
      <div className="container py-2">
        <SectionTitle
          className="mb-4"
          SubTitle="Data maturity levels"
          Title="Where does your organisation sit? Click your level to see what it means and what to do next."
          Content="Most organisations who come to us are at Level 1 or 2. We meet you where you are and build toward Level 3 or 4."
          isDarkMode={false}
        />

        <div className="de-mat-levels">
          {LEVELS.map((l, i) => (
            <div
              key={i}
              className={`de-mat-level${active === i ? ' on' : ''}`}
              onClick={() => setActive(i)}
            >
              <div className="de-ml-num">{l.num}</div>
              <div className="de-ml-t">{l.t}</div>
              <div className="de-ml-d">{l.d}</div>
            </div>
          ))}
        </div>

        <div className="de-mat-detail">
          <div>
            <div className="de-md-lbl">Where you are now</div>
            {level.chars.map((c, i) => (
              <div key={i} className="de-md-item">
                <div className="de-md-dot" />
                {c}
              </div>
            ))}
          </div>
          <div>
            <div className="de-md-lbl">What to do next</div>
            {level.next.map((n, i) => (
              <div key={i} className="de-md-item">
                <div className="de-md-dot" style={{ background: '#ff3c00' }} />
                {n}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
