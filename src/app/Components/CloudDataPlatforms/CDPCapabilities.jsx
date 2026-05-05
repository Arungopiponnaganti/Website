'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import SectionTitle from '../Common/SectionTitle';

const CAPABILITIES = [
  {
    iconBg: '#E6F1FB',
    iconColor: '#185FA5',
    icon: 'bi-database',
    title: 'Data ingestion',
    subtitle: 'Moving data from your sources into the platform — reliably, on schedule',
    deliverables: [
      'Connects to databases, SaaS platforms, APIs, flat files, and event streams',
      'Supports both batch (scheduled) and real-time (streaming) data movement',
      'Handles schema changes in source systems without breaking downstream pipelines',
      'Logs every run — what was ingested, how many records, whether it succeeded',
    ],
    tools: ['Airbyte', 'Apache Kafka', 'Custom Python connectors', 'AWS Glue / Azure Data Factory / Cloud Dataflow'],
  },
  {
    iconBg: '#FAEEDA',
    iconColor: '#854F0B',
    icon: 'bi-layers',
    title: 'Storage and organisation',
    subtitle: 'Layered data storage — raw, cleaned, and analytics-ready zones',
    deliverables: [
      'Separates raw data from processed data — raw is never overwritten or deleted',
      'Organises data into domains (finance, operations, customers) for clarity and governance',
      'Applies compression and storage formats that reduce cost without losing accessibility',
      'Partitions large tables so queries only scan the data they need',
    ],
    tools: ['Snowflake', 'Google BigQuery', 'Amazon Redshift', 'AWS S3 / Azure Data Lake / GCS'],
  },
  {
    iconBg: '#E1F5EE',
    iconColor: '#0F6E56',
    icon: 'bi-arrow-repeat',
    title: 'Transformation',
    subtitle: 'Turning raw source data into consistent, analysis-ready form',
    deliverables: [
      'Applies business logic consistently — "revenue" has one definition, used everywhere',
      'Produces tested, documented models — not ad-hoc SQL that only one person understands',
      'Runs on a schedule or triggered by new data arrival',
      'Validates outputs — tests that totals reconcile, required fields are present, row counts correct',
    ],
    tools: ['dbt (data build tool)', 'Apache Spark', 'Great Expectations / dbt tests'],
  },
  {
    iconBg: '#EEEDFE',
    iconColor: '#534AB7',
    icon: 'bi-shield-check',
    title: 'Governance and access control',
    subtitle: 'Who can see what data, and can you trust what you see',
    deliverables: [
      'Assigns ownership to each data domain — a named person responsible for accuracy',
      'Classifies data by sensitivity — public, internal, confidential, restricted',
      'Enforces role-based access — analysts see aggregated data, not raw PII',
      'Maintains a lineage record — every transformation step from source to dashboard is visible',
    ],
    tools: ['Apache Atlas / Atlan / DataHub', 'Cloud IAM (AWS, Azure, GCP)', 'Column-level security in Snowflake / BigQuery'],
  },
  {
    iconBg: '#FAECE7',
    iconColor: '#993C1D',
    icon: 'bi-bar-chart',
    title: 'Analytics enablement',
    subtitle: 'Making trusted data accessible to the people and tools that need it',
    deliverables: [
      'Connects BI tools directly to the analytics-ready data layer',
      'Provides a semantic layer — business-friendly names, pre-defined metrics, consistent calculations',
      'Enables self-service reporting — analysts query directly without waiting for data team support',
      'Supports machine learning pipelines with clean, versioned feature datasets',
    ],
    tools: ['Power BI, Tableau, Looker', 'Metabase', 'Databricks (for ML/AI workloads)'],
  },
];

const ANIM_MS = 320;

export default function CDPCapabilities() {
  const [activeIdx, setActiveIdx] = useState(-1);
  const [panelAt, setPanelAt] = useState(-1);
  const [panelOpen, setPanelOpen] = useState(false);
  const gridRef = useRef(null);
  const timerRef = useRef(null);

  const getLastInRow = useCallback((cardIndex) => {
    if (!gridRef.current) return cardIndex;
    const cards = Array.from(gridRef.current.querySelectorAll('.ai-uc-card'));
    if (cardIndex >= cards.length) return cardIndex;
    const top = cards[cardIndex].getBoundingClientRect().top;
    let last = cardIndex;
    for (let i = cardIndex + 1; i < cards.length; i++) {
      if (Math.abs(cards[i].getBoundingClientRect().top - top) < 5) last = i;
      else break;
    }
    return last;
  }, []);

  useEffect(() => {
    if (activeIdx < 0 || !gridRef.current) return;
    const observer = new ResizeObserver(() => {
      const newLast = getLastInRow(activeIdx);
      setPanelAt((prev) => (prev !== newLast ? newLast : prev));
    });
    observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, [activeIdx, getLastInRow]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleCard = (i) => {
    clearTimeout(timerRef.current);

    if (activeIdx === i) {
      setPanelOpen(false);
      timerRef.current = setTimeout(() => {
        setActiveIdx(-1);
        setPanelAt(-1);
      }, ANIM_MS);
      return;
    }

    const newLast = getLastInRow(i);

    if (panelOpen && panelAt !== newLast) {
      setPanelOpen(false);
      timerRef.current = setTimeout(() => {
        setActiveIdx(i);
        setPanelAt(newLast);
        requestAnimationFrame(() => setPanelOpen(true));
      }, ANIM_MS);
    } else {
      setActiveIdx(i);
      setPanelAt(newLast);
      requestAnimationFrame(() => setPanelOpen(true));
    }
  };

  const panelData = CAPABILITIES[activeIdx];

  return (
    <section className="cd-section cd-section-light border-top border-bottom py-5">
      <div className="container py-2">
        <SectionTitle
          className="mb-4"
          SubTitle="Core capabilities"
          Title="Five functions — what the platform does with your data"
          Content="Click any capability to see what it does and the tools we use at that layer."
          isDarkMode={false}
        />

        <div className="ai-uc-grid" ref={gridRef}>
          {CAPABILITIES.map((cap, i) => (
            <React.Fragment key={i}>
              <div
                className={`ai-uc-card${activeIdx === i ? ' active' : ''}`}
                onClick={() => handleCard(i)}
              >
                <div className="ai-uc-ind-row">
                  <span className="ai-uc-ind" style={{ background: cap.iconBg, color: cap.iconColor }}>
                    <i className={`bi ${cap.icon} fs-6`}></i>
                  </span>
                </div>
                <div className="ai-uc-title">{cap.title}</div>
                <div className="ai-uc-desc">{cap.subtitle}</div>
                <div className="ai-uc-arrow-row">
                  <span className="ai-uc-arrow-label">
                    {activeIdx === i ? 'Close' : 'View details'}
                  </span>
                  <svg
                    className={`ai-uc-arrow-icon${activeIdx === i ? ' rotated' : ''}`}
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                  >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {panelAt === i && panelData && (
                <div className={`ai-uc-detail${panelOpen ? ' open' : ''}`}>
                  <div>
                    <div className="ai-udp-label">What it does</div>
                    {panelData.deliverables.map((d, di) => (
                      <div key={di} className="ai-udp-item">{d}</div>
                    ))}
                  </div>
                  <div>
                    <div className="ai-udp-label">Tools we use</div>
                    {panelData.tools.map((t, ti) => (
                      <div key={ti} className="ai-udp-item">{t}</div>
                    ))}
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
