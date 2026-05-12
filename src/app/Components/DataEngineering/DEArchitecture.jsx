'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import './DEArchitecture.css';
import DynamicFormModal from '../Common/DynamicFormModal';

const OPTIONS = [
  {
    id: 'lakehouse',
    index: '01',
    title: 'Modern lakehouse',
    desc: 'Balances cost, flexibility, and analytical power',
  },
  {
    id: 'streaming',
    index: '02',
    title: 'Real-time streaming',
    desc: 'Sub-second data freshness for live use cases',
  },
  {
    id: 'warehouse',
    index: '03',
    title: 'Cloud warehouse-first',
    desc: 'Simplest architecture for analytics-focused teams',
  },
  {
    id: 'onpremise',
    index: '04',
    title: 'On-premise / hybrid',
    desc: 'For regulated industries with strict compliance needs',
  },
];

const METRICS = {
  lakehouse: { latency: 'Minutes', cost: '$$', complexity: 'Medium', scale: 'TB–PB' },
  streaming: { latency: 'Seconds', cost: '$$$', complexity: 'High', scale: 'GB–TB' },
  warehouse: { latency: 'Minutes', cost: '$$', complexity: 'Low', scale: 'TB–PB' },
  onpremise: { latency: 'Hours', cost: '$$', complexity: 'High', scale: 'PB' },
};

const DESCRIPTIONS = {
  lakehouse: 'Recommended for most organisations — balances cost, flexibility, and analytical power. Supports both batch and streaming, scales without a large upfront warehouse commitment.',
  streaming: 'For use cases requiring sub-second data freshness — fraud detection, live dashboards, operational analytics. Higher operational complexity; use only where latency requirements justify it.',
  warehouse: "Simplest architecture — best for analytics-focused teams who don't need a data lake. Fast to implement, easy to maintain, lower operational overhead.",
  onpremise: 'For regulated industries (BFSI, healthcare) where data cannot leave the on-premise environment. Higher infrastructure ownership; we design for security and compliance from the ground up.',
};

const PIPELINE_DATA = {
  lakehouse: {
    L1: [
      { badge: 'DB', title: 'App DBs', subtitle: 'CDC/batch' },
      { badge: 'SA', title: 'SaaS APIs', subtitle: 'Airbyte' },
      { badge: 'EV', title: 'Event streams', subtitle: 'Kafka' },
      { badge: 'S3', title: 'Files/SFTP', subtitle: 'S3 landing' },
    ],
    L2: [
      { badge: 'DL', title: 'S3 / GCS', subtitle: 'Data lake (raw)' },
      { badge: 'DT', title: 'Delta Lake', subtitle: 'ACID lake format' },
    ],
    L3: [
      { badge: 'SP', title: 'Spark / dbt', subtitle: 'Transformation' },
      { badge: 'AF', title: 'Airflow', subtitle: 'Orchestration' },
      { badge: 'GE', title: 'Great Expectations', subtitle: 'Quality' },
    ],
    L4: [
      { badge: 'DW', title: 'Snowflake / BigQuery', subtitle: 'Analytics warehouse' },
      { badge: 'SL', title: 'Semantic layer', subtitle: 'Business metrics' },
    ],
    L5: [
      { badge: 'PB', title: 'Power BI / Looker', subtitle: 'BI dashboards' },
      { badge: 'PY', title: 'Python notebooks', subtitle: 'Data science' },
      { badge: 'AI', title: 'LLM / ML', subtitle: 'AI features' },
    ],
  },
  streaming: {
    L1: [
      { badge: 'EV', title: 'App events', subtitle: 'Kafka producers' },
      { badge: 'IO', title: 'IoT sensors', subtitle: 'MQTT bridge' },
      { badge: 'WH', title: 'Webhooks', subtitle: 'API events' },
    ],
    L2: [
      { badge: 'KK', title: 'Apache Kafka', subtitle: 'Event bus' },
      { badge: 'FK', title: 'Apache Flink', subtitle: 'Stream processing' },
      { badge: 'KS', title: 'Kafka Streams', subtitle: 'Lightweight ops' },
    ],
    L3: [
      { badge: 'PT', title: 'Pinot / Druid', subtitle: 'Real-time OLAP' },
      { badge: 'RD', title: 'Redis', subtitle: 'Hot cache' },
      { badge: 'CH', title: 'ClickHouse', subtitle: 'Fast analytics' },
    ],
    L4: [
      { badge: 'LD', title: 'Live dashboards', subtitle: 'Sub-second refresh' },
      { badge: 'OA', title: 'Operational apps', subtitle: 'Real-time decisions' },
      { badge: 'AL', title: 'Alert engines', subtitle: 'Anomaly detection' },
    ],
    L5: [
      { badge: 'DB', title: 'Databricks', subtitle: 'Unified analytics' },
      { badge: 'BQ', title: 'BigQuery', subtitle: 'Serverless DW' },
    ],
  },
  warehouse: {
    L1: [
      { badge: 'DB', title: 'Databases', subtitle: 'Direct connection' },
      { badge: 'ST', title: 'SaaS tools', subtitle: 'Fivetran / Airbyte' },
      { badge: 'FL', title: 'Files', subtitle: 'S3 staging' },
    ],
    L2: [
      { badge: 'EL', title: 'ELT pipeline', subtitle: 'Raw load first' },
      { badge: 'SA', title: 'Schema auto-detect', subtitle: 'Flexible ingestion' },
    ],
    L3: [
      { badge: 'DB', title: 'dbt Cloud', subtitle: 'SQL transformations' },
      { badge: 'AT', title: 'Automated tests', subtitle: 'Quality as code' },
      { badge: 'DD', title: 'Data docs', subtitle: 'Auto-generated' },
    ],
    L4: [
      { badge: 'SN', title: 'Snowflake / BigQuery', subtitle: 'Single source of truth' },
      { badge: 'BL', title: 'BI semantic layer', subtitle: 'Consistent metrics' },
    ],
    L5: [
      { badge: 'TB', title: 'Tableau', subtitle: 'BI dashboards' },
      { badge: 'EX', title: 'Exports', subtitle: 'Data extraction' },
    ],
  },
  onpremise: {
    L1: [
      { badge: 'OR', title: 'Oracle / SQL Server', subtitle: 'Legacy systems' },
      { badge: 'SA', title: 'SAP / ERP', subtitle: 'RFC extraction' },
      { badge: 'IA', title: 'Internal APIs', subtitle: 'Microservices' },
    ],
    L2: [
      { badge: 'SP', title: 'Spark on YARN', subtitle: 'Cluster processing' },
      { badge: 'SQ', title: 'Sqoop / NiFi', subtitle: 'Batch extraction' },
      { badge: 'DB', title: 'Debezium CDC', subtitle: 'Real-time capture' },
    ],
    L3: [
      { badge: 'HF', title: 'Hadoop HDFS', subtitle: 'Data lake storage' },
      { badge: 'PG', title: 'On-prem Postgres', subtitle: 'Curated warehouse' },
    ],
    L4: [
      { badge: 'SP', title: 'Superset', subtitle: 'Open-source BI' },
      { badge: 'TB', title: 'Tableau / PowerBI', subtitle: 'On-prem gateway' },
      { badge: 'PY', title: 'Python / Jupyter', subtitle: 'Data science' },
    ],
    L5: [
      { badge: 'RP', title: 'Reporting', subtitle: 'Compliance reports' },
      { badge: 'AN', title: 'Analytics', subtitle: 'Internal analytics' },
      { badge: 'DS', title: 'Data science', subtitle: 'ML workflows' },
    ],
  },
};

const defaultFormFields = [
  {
    label: 'Full Name',
    name: 'name',
    type: 'text',
    placeholder: 'John Smith',
    required: true,
    colSize: 6
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'john@company.com',
    required: true,
    colSize: 6
  },
  {
    label: 'Subject',
    name: 'subject',
    type: 'text',
    placeholder: 'Your Subject Here',
    required: true,
    colSize: 6
  },
  {
    label: 'Phone',
    name: 'phone',
    type: 'tel',
    placeholder: '+1 (555) 000-0000',
    required: true,
    colSize: 6
  },
  {
    label: 'Message',
    name: 'message',
    type: 'textarea',
    placeholder: 'Tell us more about your project...',
    required: false,
    colSize: 12
  },
];

export default function DEArchitecture() {
  const [selectedOption, setSelectedOption] = useState('lakehouse');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const metrics = METRICS[selectedOption];
  const desc = DESCRIPTIONS[selectedOption];
  const pipeline = PIPELINE_DATA[selectedOption];

  const optionTitle = OPTIONS.find((o) => o.id === selectedOption)?.title || '';

  const getBestFit = () => {
    switch (selectedOption) {
      case 'lakehouse':
        return [
          'Organizations needing both batch and streaming',
          'Teams requiring flexible schema-on-read',
          'Data engineering teams wanting lakehouse benefits',
        ];
      case 'streaming':
        return [
          'Fraud detection and real-time monitoring',
          'Live dashboards requiring sub-second refresh',
          'Operational analytics with low latency needs',
        ];
      case 'warehouse':
        return [
          'Analytics-focused teams with existing DW investment',
          'Organizations seeking fast implementation',
          'Teams preferring managed services',
        ];
      case 'onpremise':
        return [
          'BFSI and healthcare with strict data residency',
          'Regulatory compliance requirements',
          'Existing on-premise infrastructure',
        ];
      default:
        return [];
    }
  };

  const getSkipIf = () => {
    switch (selectedOption) {
      case 'lakehouse':
        return [
          'Simple use cases not requiring data lake flexibility',
          'Teams without lakehouse expertise',
          'Strict latency requirements below 1 second',
        ];
      case 'streaming':
        return [
          'Batch-only workloads without real-time needs',
          'Teams lacking operational expertise',
          'Cost-sensitive projects with relaxed SLAs',
        ];
      case 'warehouse':
        return [
          'Organizations requiring data lake capabilities',
          'Teams with complex streaming requirements',
          'Large-scale ML/AI workloads',
        ];
      case 'onpremise':
        return [
          'Cloud-first organizations',
          'Rapid scaling requirements',
          'Minimal infrastructure management preference',
        ];
      default:
        return [];
    }
  };

  return (
    <section className="de-arch-section bg-white pb-5" id="de-architecture">
      <div className="container">
        <SectionTitle
          SubTitle="Reference architectures"
          Title="Four proven data infrastructure patterns"
          Content="Select a pattern to see the recommended stack and when to use it."
          isDarkMode={false}
          className='mb-1'
        />

        <div className="dea-option-cards">
          {OPTIONS.map((opt) => (
            <div
              key={opt.id}
              className={`dea-option-card position-relative ${selectedOption === opt.id ? 'active' : ''}`}
              onClick={() => setSelectedOption(opt.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedOption(opt.id)}
            >

              <div className="position-absolute top-0 start-0 mt-2 ms-3 fw-bold small text-muted">
                {opt.index}
              </div>

              <div className="pt-4">
                <div className="dea-option-title">{opt.title}</div>
                <div className="dea-option-desc">{opt.desc}</div>
              </div>

            </div>
          ))}
        </div>

        <div className="dea-header dea-option-card active">
          <div className="dea-header-left">
            <h2 className="dea-main-title">{optionTitle}</h2>
            <p className="dea-main-desc">{desc}</p>
          </div>
          <div className="dea-metrics">
            <div className="dea-metrics-row">
              <div className="dea-metric">
                <span className="dea-metric-label">Latency</span>
                <span className="dea-metric-value">{metrics.latency}</span>
              </div>
              {/* <div className="dea-metric">
                <span className="dea-metric-label">Cost</span>
                <span className="dea-metric-value highlight-purple">{metrics.cost}</span>
              </div> */}
              <div className="dea-metric">
                <span className="dea-metric-label">Complexity</span>
                <span className="dea-metric-value">{metrics.complexity}</span>
              </div>
              <div className="dea-metric">
                <span className="dea-metric-label">Scale</span>
                <span className="dea-metric-value">{metrics.scale}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="dea-pipeline-section">
          <div className="dea-pipeline-header mb-0">
            <h3 className="dea-pipeline-title">Architecture pipeline</h3>
          </div>
          <div className="dea-pipeline-grid">
            <div className="dea-pipeline-col">
              <div className="dea-col-label"><span>L1</span> Sources</div>
              {pipeline.L1.map((item, i) => (
                <div key={i} className="dea-pipeline-card">
                  <div className="dea-card-badge">{item.badge}</div>
                  <div className="dea-card-content">
                    <div className="dea-card-title">{item.title}</div>
                    <div className="dea-card-subtitle">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="dea-pipeline-col">
              <div className="dea-col-label"><span>L2</span> Storage</div>
              {pipeline.L2.map((item, i) => (
                <div key={i} className="dea-pipeline-card">
                  <div className="dea-card-badge">{item.badge}</div>
                  <div className="dea-card-content">
                    <div className="dea-card-title">{item.title}</div>
                    <div className="dea-card-subtitle">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="dea-pipeline-col">
              <div className="dea-col-label"><span>L3</span> Process</div>
              {pipeline.L3.map((item, i) => (
                <div key={i} className="dea-pipeline-card">
                  <div className="dea-card-badge">{item.badge}</div>
                  <div className="dea-card-content">
                    <div className="dea-card-title">{item.title}</div>
                    <div className="dea-card-subtitle">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="dea-pipeline-col">
              <div className="dea-col-label"><span>L4</span> Warehouse</div>
              {pipeline.L4.map((item, i) => (
                <div key={i} className="dea-pipeline-card">
                  <div className="dea-card-badge">{item.badge}</div>
                  <div className="dea-card-content">
                    <div className="dea-card-title">{item.title}</div>
                    <div className="dea-card-subtitle">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="dea-pipeline-col">
              <div className="dea-col-label"><span>L5</span> Consume</div>
              {pipeline.L5.map((item, i) => (
                <div key={i} className="dea-pipeline-card">
                  <div className="dea-card-badge">{item.badge}</div>
                  <div className="dea-card-content">
                    <div className="dea-card-title">{item.title}</div>
                    <div className="dea-card-subtitle">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="dea-footer-grid">
          <div className="dea-footer-card active">
            <div className="dea-footer-header">
              <span className="dea-status-dot green"></span>
              <span className="dea-footer-title">Best fit</span>
            </div>
            <ul className="dea-footer-list">
              {getBestFit().map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="dea-footer-card">
            <div className="dea-footer-header">
              <span className="dea-status-dot orange"></span>
              <span className="dea-footer-title">Skip if</span>
            </div>
            <ul className="dea-footer-list">
              {getSkipIf().map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="dea-cta-wrapper">
          <button className="dea-cta-btn" onClick={() => setIsModalOpen(true)}>
            Get a recommendation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
      <DynamicFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get a recommendation"
        description="Fill out the form below and we'll get back to you shortly."
        submitButtonText="Submit"
        fields={defaultFormFields}
        metadata={{ service: 'Reference architectures', pageTitle: 'Data Engineering & Pipelines' }}
      />
    </section>
  );
}