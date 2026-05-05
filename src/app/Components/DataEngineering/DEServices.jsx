'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import SectionTitle from '../Common/SectionTitle';
import './DEServices.css';

const SERVICES = [
  {
    iconBg: '#E6F1FB',
    iconColor: '#185FA5',
    icon: 'bi-database',
    title: 'Data pipeline engineering',
    subtitle: 'ETL/ELT pipelines from any source to any destination',
    deliverables: [
      'Ingestion pipeline design & build',
      'Incremental and full-refresh strategies',
      'Schema evolution handling',
      'Error handling, retry, and dead-letter queue',
    ],
    tools: ['Airbyte', 'Apache Kafka', 'dbt', 'Airflow', 'Prefect'],
  },
  {
    iconBg: '#FAEEDA',
    iconColor: '#854F0B',
    icon: 'bi-cloud-upload',
    title: 'Cloud data warehouse build',
    subtitle: 'Snowflake, BigQuery, Redshift, or Databricks implementation',
    deliverables: [
      'Platform selection & architecture design',
      'Warehouse provisioning & security setup',
      'Cost optimisation (clustering, partitioning)',
      'BI tool connection & semantic layer',
    ],
    tools: ['Snowflake', 'BigQuery', 'dbt', 'Terraform', 'Looker'],
  },
  {
    iconBg: '#E1F5EE',
    iconColor: '#0F6E56',
    icon: 'bi-layers',
    title: 'Data lakehouse architecture',
    subtitle: 'Delta Lake, Apache Iceberg, or Hudi on cloud storage',
    deliverables: [
      'Lakehouse architecture design',
      'Bronze / Silver / Gold zone implementation',
      'ACID transaction layer setup',
      'Metadata & governance layer',
    ],
    tools: ['Delta Lake', 'Apache Spark', 'dbt', 'Unity Catalog', 'Apache Iceberg'],
  },
  {
    iconBg: '#EEEDFE',
    iconColor: '#534AB7',
    icon: 'bi-broadcast',
    title: 'Real-time streaming pipelines',
    subtitle: 'Sub-second data delivery for operational analytics',
    deliverables: [
      'Kafka cluster design & provisioning',
      'Stream processing logic (Flink / Spark Streaming)',
      'Real-time OLAP setup (ClickHouse / Pinot)',
      'Monitoring and lag alerting',
    ],
    tools: ['Apache Kafka', 'Apache Flink', 'ClickHouse', 'Apache Pinot', 'Debezium'],
  },
  {
    iconBg: '#FAECE7',
    iconColor: '#993C1D',
    icon: 'bi-shield-check',
    title: 'Data quality & observability',
    subtitle: 'Automated quality monitoring across your entire data platform',
    deliverables: [
      'Data quality rule definition & implementation',
      'Automated testing with Great Expectations / dbt tests',
      'Data freshness & volume anomaly detection',
      'Quality dashboard & alerting setup',
    ],
    tools: ['dbt tests', 'Great Expectations', 'Monte Carlo', 'Soda', 'Custom dashboards'],
  },
  {
    iconBg: '#EAF3DE',
    iconColor: '#27500A',
    icon: 'bi-diagram-2',
    title: 'Data orchestration & monitoring',
    subtitle: 'Reliable scheduling, dependency management, and alerting',
    deliverables: [
      'Orchestration platform setup (Airflow / Prefect)',
      'DAG design & dependency mapping',
      'SLA monitoring & alerting pipeline',
      'On-call runbook documentation',
    ],
    tools: ['Apache Airflow', 'Prefect', 'Dagster', 'PagerDuty', 'Datadog'],
  },
];

const ANIM_MS = 320;

export default function DEServices() {
  const [activeIdx, setActiveIdx] = useState(-1);
  const [panelAt, setPanelAt] = useState(-1);
  const [panelOpen, setPanelOpen] = useState(false);
  const gridRef = useRef(null);
  const timerRef = useRef(null);

  const getLastInRow = useCallback((cardIndex) => {
    if (!gridRef.current) return cardIndex;
    const cards = Array.from(gridRef.current.querySelectorAll('.de-svc-card'));
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

  const panelData = SERVICES[activeIdx];

  return (
    <section className="cd-section cd-section-muted border-top border-bottom py-5">
      <div className="container py-2">
        <SectionTitle
          className="mb-5"
          SubTitle="What we build"
          Title="Six data engineering capabilities"
          Content="Click any service to explore deliverables and tools."
          isDarkMode={false}
        />

        <div className="de-svc-grid" ref={gridRef}>
          {SERVICES.map((svc, i) => (
            <React.Fragment key={i}>
              <div
                className={`de-svc-card${activeIdx === i ? ' active' : ''}`}
                onClick={() => handleCard(i)}
              >
                <div className="de-svc-ind-row">
                  <span className="de-svc-ind" style={{ background: svc.iconBg, color: svc.iconColor }}>
                    <i className={`bi ${svc.icon}`}></i>
                  </span>
                </div>
                <div className="de-svc-title">{svc.title}</div>
                <div className="de-svc-desc">{svc.subtitle}</div>
                <div className="de-svc-arrow-row">
                  <span className="de-svc-arrow-label">
                    {activeIdx === i ? 'Close' : 'View details'}
                  </span>
                  <svg
                    className={`de-svc-arrow-icon${activeIdx === i ? ' rotated' : ''}`}
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                  >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {panelAt === i && panelData && (
                <div className={`de-svc-detail${panelOpen ? ' open' : ''}`}>
                  <div>
                    <div className="de-sdp-label">What we deliver</div>
                    {panelData.deliverables.map((d, di) => (
                      <div key={di} className="de-sdp-item">{d}</div>
                    ))}
                  </div>
                  <div>
                    <div className="de-sdp-label">Tools &amp; technologies</div>
                    {panelData.tools.map((t, ti) => (
                      <div key={ti} className="de-sdp-item">{t}</div>
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
