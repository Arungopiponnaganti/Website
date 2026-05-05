'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import './CDPArchitecture.css';
import { useRouter } from 'next/navigation';

const OPTIONS = [
  {
    id: 'lakehouse',
    index: '01',
    title: 'Modern lakehouse',
    desc: 'Cloud-native storage with schema-on-read flexibility',
  },
  {
    id: 'streaming',
    index: '02',
    title: 'Real-time streaming',
    desc: 'Sub-second data processing with event-driven architecture',
  },
  {
    id: 'warehouse',
    index: '03',
    title: 'Cloud warehouse-first',
    desc: 'Leverage managed DW for analytics at scale',
  },
  {
    id: 'onpremise',
    index: '04',
    title: 'On-premise / hybrid',
    desc: 'Maximize control with on-prem or VPC-deployed infrastructure',
  },
];

const METRICS = {
  lakehouse: { latency: 'Minutes', cost: '$$', complexity: 'Medium', scale: 'TB–PB' },
  streaming: { latency: 'Seconds', cost: '$$$', complexity: 'High', scale: 'GB–TB' },
  warehouse: { latency: 'Minutes', cost: '$$$', complexity: 'Medium', scale: 'TB–PB' },
  onpremise: { latency: 'Hours', cost: '$', complexity: 'High', scale: 'PB' },
};

const DESCRIPTIONS = {
  lakehouse: 'A modern lakehouse architecture separates storage and compute, allowing you to store massive volumes of raw data while scaling processing resources independently. This pattern is ideal for organizations transitioning from traditional data warehouses.',
  streaming: 'Real-time streaming architectures process data as it arrives, enabling immediate insights and actions. Built on event streaming platforms like Kafka, this pattern supports use cases from fraud detection to operational monitoring.',
  warehouse: 'Cloud warehouse-first approach centralizes analytics in a managed data warehouse service, simplifying operations and enabling fast SQL-based insights. Best for organizations already invested in cloud analytics.',
  onpremise: 'On-premise and hybrid architectures keep data within your controlled environment, addressing strict regulatory requirements and data sovereignty rules. This pattern provides maximum control over data residency and security policies.',
};

const PIPELINE_DATA = {
  lakehouse: {
    L1: [
      { badge: 'DB', title: 'PostgreSQL', subtitle: 'Operational databases' },
      { badge: 'SF', title: 'Salesforce', subtitle: 'CRM platform' },
      { badge: 'EV', title: 'Event logs', subtitle: 'Application events' },
    ],
    L2: [
      { badge: 'DL', title: 'Delta Lake', subtitle: 'Open storage layer' },
      { badge: 'OB', title: 'Object store', subtitle: 'S3 / ADLS compatible' },
    ],
    L3: [
      { badge: 'SP', title: 'Spark', subtitle: 'Distributed processing' },
      { badge: 'DP', title: 'dbt', subtitle: 'SQL transformations' },
    ],
    L4: [
      { badge: 'DW', title: 'Databricks', subtitle: 'Unified analytics' },
      { badge: 'BQ', title: 'BigQuery', subtitle: 'Serverless DW' },
    ],
    L5: [
      { badge: 'TB', title: 'Tableau', subtitle: 'BI & visualization' },
      { badge: 'AP', title: 'APIs', subtitle: 'Data products' },
    ],
  },
  streaming: {
    L1: [
      { badge: 'KT', title: 'Kafka', subtitle: 'Event streaming' },
      { badge: 'WH', title: 'Webhooks', subtitle: 'Real-time triggers' },
      { badge: 'IOT', title: 'IoT sensors', subtitle: 'Streaming data' },
    ],
    L2: [
      { badge: 'KS', title: 'Kafka Streams', subtitle: 'Stream storage' },
      { badge: 'PK', title: 'Pulsar', subtitle: 'Distributed messaging' },
    ],
    L3: [
      { badge: 'FK', title: 'Flink', subtitle: 'Stream processing' },
      { badge: 'SP', title: 'Spark Streaming', subtitle: 'Micro-batching' },
    ],
    L4: [
      { badge: 'RK', title: 'Redpanda', subtitle: 'Kafka-compatible' },
      { badge: 'ES', title: 'Elasticsearch', subtitle: 'Search & analytics' },
    ],
    L5: [
      { badge: 'GD', title: 'Grafana', subtitle: 'Real-time dashboards' },
      { badge: 'AL', title: 'Alerting', subtitle: 'Automated alerts' },
    ],
  },
  warehouse: {
    L1: [
      { badge: 'OR', title: 'Oracle', subtitle: 'Enterprise databases' },
      { badge: 'SF', title: 'Salesforce', subtitle: 'SaaS platforms' },
      { badge: 'FL', title: 'Flat files', subtitle: 'ETL feeds' },
    ],
    L2: [
      { badge: 'GS', title: 'GCS', subtitle: 'Cloud storage' },
      { badge: 'S3', title: 'S3', subtitle: 'Object storage' },
    ],
    L3: [
      { badge: 'MF', title: 'Informatica', subtitle: 'Enterprise ETL' },
      { badge: 'DB', title: 'dbt', subtitle: 'SQL models' },
    ],
    L4: [
      { badge: 'SN', title: 'Snowflake', subtitle: 'Cloud data warehouse' },
      { badge: 'BG', title: 'BigQuery', subtitle: 'Serverless DW' },
    ],
    L5: [
      { badge: 'TB', title: 'Tableau', subtitle: 'BI visualization' },
      { badge: 'EX', title: 'Exports', subtitle: 'Data extraction' },
    ],
  },
  onpremise: {
    L1: [
      { badge: 'MF', title: 'Mainframe', subtitle: 'DB2 / VSAM' },
      { badge: 'OR', title: 'Oracle', subtitle: 'SQL Server' },
      { badge: 'SA', title: 'SAP', subtitle: 'ERP system' },
    ],
    L2: [
      { badge: 'HD', title: 'HDFS', subtitle: 'Hadoop storage' },
      { badge: 'IC', title: 'Iceberg', subtitle: 'Open table format' },
    ],
    L3: [
      { badge: 'SP', title: 'Spark on K8s', subtitle: 'Containerized processing' },
      { badge: 'NI', title: 'NiFi', subtitle: 'Data orchestration' },
      { badge: 'AF', title: 'Airflow', subtitle: 'Workflow scheduling' },
    ],
    L4: [
      { badge: 'GP', title: 'Greenplum', subtitle: 'Massive parallel processing' },
      { badge: 'VT', title: 'Vertica', subtitle: 'Column-oriented SQL' },
      { badge: 'TR', title: 'Trino', subtitle: 'Distributed query' },
    ],
    L5: [
      { badge: 'PB', title: 'Power BI', subtitle: 'Business intelligence' },
      { badge: 'IA', title: 'Internal apps', subtitle: 'Custom applications' },
      { badge: 'CR', title: 'Compliance reports', subtitle: 'Regulatory outputs' },
    ],
  },
};

export default function CDPArchitecture() {
  const [selectedOption, setSelectedOption] = useState('onpremise');
  const router = useRouter();

  const metrics = METRICS[selectedOption];
  const desc = DESCRIPTIONS[selectedOption];
  const pipeline = PIPELINE_DATA[selectedOption];

  const optionTitle = OPTIONS.find((o) => o.id === selectedOption)?.title || '';

  return (
    <section className="cdp-arch-section pb-5">
      <div className="container">
        <SectionTitle
          SubTitle="Architecture options"
          Title="Choose your data platform pattern"
          Content="Select an architecture pattern that matches your workload requirements. Each pattern represents a proven approach to building a cloud data platform."
          isDarkMode={false}
          className='mb-3'
        />

        <div className="cdpa-option-cards">
          {OPTIONS.map((opt) => (
            <div
              key={opt.id}
              className={`cdpa-option-card ${selectedOption === opt.id ? 'active' : ''}`}
              onClick={() => setSelectedOption(opt.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedOption(opt.id)}
            >
              <div className="cdpa-option-index">{opt.index}</div>
              <div className="cdpa-option-title">{opt.title}</div>
              <div className="cdpa-option-desc">{opt.desc}</div>
            </div>
          ))}
        </div>

        <div className="cdpa-header">
          <div className="cdpa-header-left">
            <h2 className="cdpa-main-title">{optionTitle}</h2>
            <p className="cdpa-main-desc">{desc}</p>
          </div>
          <div className="cdpa-metrics">
            <div className="cdpa-metrics-row mt-4">
              <div className="cdpa-metric">
                <span className="cdpa-metric-label">Latency</span>
                <span className="cdpa-metric-value">{metrics.latency}</span>
              </div>
              {/* <div className="cdpa-metric">
                <span className="cdpa-metric-label">Cost</span>
                <span className="cdpa-metric-value highlight-purple">{metrics.cost}</span>
              </div> */}
              <div className="cdpa-metric">
                <span className="cdpa-metric-label">Complexity</span>
                <span className="cdpa-metric-value">{metrics.complexity}</span>
              </div>
              <div className="cdpa-metric">
                <span className="cdpa-metric-label">Scale</span>
                <span className="cdpa-metric-value">{metrics.scale}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="cdpa-pipeline-section">
          <div className="cdpa-pipeline-header">
            <h3 className="cdpa-pipeline-title">Architecture pipeline</h3>
          </div>
          <div className="cdpa-pipeline-grid">
            <div className="cdpa-pipeline-col">
              <div className="cdpa-col-label"><span>L1</span> Sources</div>
              {pipeline.L1.map((item, i) => (
                <div key={i} className="cdpa-pipeline-card">
                  <div className="cdpa-card-badge">{item.badge}</div>
                  <div className="cdpa-card-content">
                    <div className="cdpa-card-title">{item.title}</div>
                    <div className="cdpa-card-subtitle">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cdpa-pipeline-col">
              <div className="cdpa-col-label"><span>L2</span> Storage</div>
              {pipeline.L2.map((item, i) => (
                <div key={i} className="cdpa-pipeline-card">
                  <div className="cdpa-card-badge">{item.badge}</div>
                  <div className="cdpa-card-content">
                    <div className="cdpa-card-title">{item.title}</div>
                    <div className="cdpa-card-subtitle">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cdpa-pipeline-col">
              <div className="cdpa-col-label"><span>L3</span> Process</div>
              {pipeline.L3.map((item, i) => (
                <div key={i} className="cdpa-pipeline-card">
                  <div className="cdpa-card-badge">{item.badge}</div>
                  <div className="cdpa-card-content">
                    <div className="cdpa-card-title">{item.title}</div>
                    <div className="cdpa-card-subtitle">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cdpa-pipeline-col">
              <div className="cdpa-col-label"><span>L4</span> Warehouse</div>
              {pipeline.L4.map((item, i) => (
                <div key={i} className="cdpa-pipeline-card">
                  <div className="cdpa-card-badge">{item.badge}</div>
                  <div className="cdpa-card-content">
                    <div className="cdpa-card-title">{item.title}</div>
                    <div className="cdpa-card-subtitle">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cdpa-pipeline-col">
              <div className="cdpa-col-label"><span>L5</span> Consume</div>
              {pipeline.L5.map((item, i) => (
                <div key={i} className="cdpa-pipeline-card">
                  <div className="cdpa-card-badge">{item.badge}</div>
                  <div className="cdpa-card-content">
                    <div className="cdpa-card-title">{item.title}</div>
                    <div className="cdpa-card-subtitle">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cdpa-footer-grid">
          <div className="cdpa-footer-card">
            <div className="cdpa-footer-header">
              <span className="cdpa-status-dot green"></span>
              <span className="cdpa-footer-title">Best fit</span>
            </div>
            <ul className="cdpa-footer-list">
              <li>Regulated industries requiring strict data residency</li>
              <li>Organizations with existing on-premise infrastructure</li>
              <li>Data sovereignty and compliance-first environments</li>
            </ul>
          </div>
          <div className="cdpa-footer-card">
            <div className="cdpa-footer-header">
              <span className="cdpa-status-dot orange"></span>
              <span className="cdpa-footer-title">Skip if</span>
            </div>
            <ul className="cdpa-footer-list">
              <li>Bursty workloads requiring rapid scale-up/down</li>
              <li>Rapid product iteration with frequent schema changes</li>
              <li>Teams seeking minimal infrastructure management</li>
            </ul>
          </div>
        </div>

        <div className="cdpa-cta-wrapper">
          <button className="cdpa-cta-btn" onClick={() => router.push('/contact')}>
            Get a recommendation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}