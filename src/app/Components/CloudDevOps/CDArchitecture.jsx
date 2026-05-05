'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const ARCHS = [
  {
    name: 'Production web app',
    layers: [
      { lbl: 'Users', nodes: [{ t: 'CDN', d: 'CloudFront / Cloudflare', dot: 'blue' }, { t: 'WAF', d: 'Web app firewall', dot: 'amber' }] },
      { lbl: 'Edge', nodes: [{ t: 'Load balancer', d: 'ALB / NLB', dot: 'blue' }, { t: 'SSL termination', d: 'ACM / Let\u2019s Encrypt', dot: 'green' }] },
      { lbl: 'Compute', nodes: [{ t: 'App servers', d: 'ECS / K8s pods', dot: 'green' }, { t: 'Worker nodes', d: 'Background jobs', dot: 'green' }, { t: 'Auto-scaling', d: 'Horizontal pod autoscaler', dot: 'blue' }] },
      { lbl: 'Data', nodes: [{ t: 'Primary DB', d: 'RDS PostgreSQL', dot: 'purple' }, { t: 'Read replica', d: 'Read scaling', dot: 'purple' }, { t: 'Cache', d: 'ElastiCache Redis', dot: 'amber' }, { t: 'Object store', d: 'S3 / GCS', dot: 'blue' }] },
      { lbl: 'Ops', nodes: [{ t: 'Monitoring', d: 'Datadog / CloudWatch', dot: 'amber' }, { t: 'Logging', d: 'ELK / CloudTrail', dot: 'green' }, { t: 'Alerting', d: 'PagerDuty', dot: 'amber' }] },
    ],
  },
  {
    name: 'Microservices',
    layers: [
      { lbl: 'Ingress', nodes: [{ t: 'API Gateway', d: 'Kong / AWS API GW', dot: 'blue' }, { t: 'Service mesh', d: 'Istio / Linkerd', dot: 'purple' }] },
      { lbl: 'Services', nodes: [{ t: 'Auth service', d: 'OAuth 2.0 / JWT', dot: 'green' }, { t: 'User service', d: 'Domain service', dot: 'green' }, { t: 'Order service', d: 'Domain service', dot: 'green' }, { t: 'Notifications', d: 'Async events', dot: 'blue' }] },
      { lbl: 'Messaging', nodes: [{ t: 'Event bus', d: 'Kafka / SQS', dot: 'amber' }, { t: 'Event store', d: 'Event sourcing', dot: 'purple' }] },
      { lbl: 'Data', nodes: [{ t: 'DB per service', d: 'DB-per-service pattern', dot: 'purple' }, { t: 'Shared cache', d: 'Redis cluster', dot: 'amber' }] },
      { lbl: 'Ops', nodes: [{ t: 'Distributed tracing', d: 'Jaeger / X-Ray', dot: 'amber' }, { t: 'Centralised logs', d: 'ELK stack', dot: 'green' }, { t: 'Service registry', d: 'Consul / K8s DNS', dot: 'blue' }] },
    ],
  },
  {
    name: 'Data pipeline',
    layers: [
      { lbl: 'Ingest', nodes: [{ t: 'Event streams', d: 'Kafka / Kinesis', dot: 'blue' }, { t: 'Batch import', d: 'S3 / SFTP drops', dot: 'amber' }, { t: 'CDC', d: 'Debezium change data', dot: 'purple' }] },
      { lbl: 'Process', nodes: [{ t: 'Stream proc.', d: 'Flink / Spark Streaming', dot: 'green' }, { t: 'Batch jobs', d: 'Spark / dbt', dot: 'green' }, { t: 'Orchestration', d: 'Airflow / Prefect', dot: 'amber' }] },
      { lbl: 'Store', nodes: [{ t: 'Data lake', d: 'S3 / GCS raw zone', dot: 'blue' }, { t: 'Warehouse', d: 'Snowflake / BigQuery', dot: 'purple' }, { t: 'Serving layer', d: 'Redshift / Athena', dot: 'purple' }] },
      { lbl: 'Consume', nodes: [{ t: 'BI dashboards', d: 'Tableau / Power BI', dot: 'amber' }, { t: 'ML models', d: 'Feature store / Sagemaker', dot: 'green' }, { t: 'APIs', d: 'Data mesh endpoints', dot: 'blue' }] },
    ],
  },
  {
    name: 'CI/CD pipeline',
    layers: [
      { lbl: 'Source', nodes: [{ t: 'GitHub / GitLab', d: 'Version control', dot: 'blue' }, { t: 'Branch strategy', d: 'Trunk-based dev', dot: 'purple' }] },
      { lbl: 'CI', nodes: [{ t: 'Lint & format', d: 'ESLint, Black, gofmt', dot: 'amber' }, { t: 'Unit tests', d: 'Jest, Pytest, Go test', dot: 'green' }, { t: 'Build & push', d: 'Docker image build', dot: 'blue' }, { t: 'SAST scan', d: 'Snyk, SonarQube', dot: 'amber' }] },
      { lbl: 'CD', nodes: [{ t: 'Staging deploy', d: 'Auto on PR merge', dot: 'green' }, { t: 'Integration tests', d: 'Playwright, k6', dot: 'green' }, { t: 'Prod deploy', d: 'Manual gate or auto', dot: 'blue' }] },
      { lbl: 'Post-deploy', nodes: [{ t: 'Smoke tests', d: 'Critical path checks', dot: 'green' }, { t: 'Rollback trigger', d: 'Auto on error threshold', dot: 'amber' }, { t: 'Observability', d: 'Dashboards update', dot: 'blue' }] },
    ],
  },
];

const COL_DOTS = ['#3b82f6', '#f59e0b', '#22c55e', '#8b5cf6', '#6b7280'];
const COL_BG = ['#eff6ff', '#fffbeb', '#f0fdf4', '#f5f3ff', '#fff1f2'];

export default function CDArchitecture() {
  const [activeArch, setActiveArch] = useState(0);
  const [activeNode, setActiveNode] = useState(null);

  const arch = ARCHS[activeArch];

  return (
    <section id="cd-architecture" className="cd-section cd-section-muted">
      <div className="container">

        <div className="row align-items-center">
          <div className="col-lg-7">
            <SectionTitle
              SubTitle="Infrastructure blueprint"
              Title="What a MayuraSoft cloud architecture looks like"
              isDarkMode={false}
            />
          </div>
          <div className="col-lg-5">
            <p className="section-descr mb-0" style={{ paddingBottom: '50px' }}>
              Select a pattern to explore the recommended stack. Every layer is chosen for reliability, cost, and your team&apos;s ability to own it after handover.
            </p>
          </div>
        </div>

        {/* Kanban board wrapper */}
        <div className="cd-kanban-wrap">

          {/* Toolbar */}
          <div className="cd-kanban-toolbar">
            <div className="cd-kanban-toolbar-tabs gap-3">
              {ARCHS.map((a, i) => (
                <button
                  key={i}
                  className={`cd-at${activeArch === i ? ' on' : ''}`}
                  onClick={() => { setActiveArch(i); setActiveNode(null); }}
                >
                  {a.name}
                </button>
              ))}
            </div>
          </div>

          {/* Board */}
          <div className="cd-kanban-board row ">
            {arch.layers.map((layer, li) => (
              <div key={li} className=" col-6 p-2 justify-content-center col-xs-6 col-sm-6 col-md-4 col-xl" >
                <div style={{ background: COL_BG[li % COL_BG.length] }} className="cd-kb-col p-3 h-100">
                  {/* Column header */}
                  <div className="cd-kb-col-hd">
                    <div className="cd-kb-col-hd-left">
                      <span className="cd-kb-col-dot" style={{ background: COL_DOTS[li % COL_DOTS.length] }} />
                      <span className="cd-kb-col-name">{layer.lbl}</span>
                      <span className="cd-kb-col-cnt">{layer.nodes.length}</span>
                    </div>
                  </div>

                  {/* Cards */}
                  <div className="cd-kb-col-cards">
                    {layer.nodes.map((node, ni) => {
                      const nodeKey = `${li}-${ni}`;
                      return (
                        <div
                          key={ni}
                          className={`cd-kb-card${activeNode === nodeKey ? ' active' : ''}`}
                          onClick={() => setActiveNode(activeNode === nodeKey ? null : nodeKey)}
                        >
                          <div className="cd-kb-card-title">{node.t}</div>
                          <div className="cd-kb-card-sub">{node.d}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
