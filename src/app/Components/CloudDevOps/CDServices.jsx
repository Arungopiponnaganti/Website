'use client';
import React from 'react';
import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';

const SVCS = [
  {
    img: '/assets/images/cloud-migration-strategy.webp',
    bgGradient: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
    t: 'Cloud migration & strategy',
    sub: 'Move from on-premise or legacy cloud to modern architecture. We assess, plan, and execute migrations that minimise disruption and maximise long-term value.',
    del: [
      'Cloud readiness assessment',
      'Migration strategy (lift-shift vs re-platform)',
      'Infrastructure as code with Terraform',
      'Cost modelling & TCO analysis',
    ],
    tools: ['Terraform', 'AWS', 'GCP', 'Azure', 'Packer', 'Checkov'],
  },
  {
    img: '/assets/images/cicd-pipeline-engineering.webp',
    bgGradient: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
    t: 'CI/CD pipeline engineering',
    sub: 'Automated build, test, and deploy pipelines for every commit. Ship faster with confidence through repeatable, auditable delivery workflows.',
    del: [
      'Pipeline design & implementation',
      'Branch strategy & git workflow',
      'Automated testing gates',
      'Deployment strategy (blue-green, canary)',
    ],
    tools: ['GitHub Actions', 'GitLab CI', 'ArgoCD', 'Tekton'],
  },
  {
    img: '/assets/images/kubernetes-container-orchestration.webp',
    bgGradient: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)',
    t: 'Kubernetes & container orchestration',
    sub: 'Design, deploy, and operate production-grade Kubernetes clusters. Run resilient workloads that scale automatically with demand.',
    del: [
      'Cluster design & provisioning',
      'Workload migration to containers',
      'Helm chart development',
      'HPA, VPA & cluster autoscaling',
    ],
    tools: ['Kubernetes', 'Helm', 'Docker', 'Kustomize', 'K9s'],
  },
  {
    img: '/assets/images/infrastructure-as-code.webp',
    bgGradient: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
    t: 'Infrastructure as code',
    sub: 'Every resource defined, versioned, and reviewable in Git. Eliminate configuration drift and enable peer-reviewed infrastructure changes.',
    del: [
      'Terraform module library',
      'State management & remote backends',
      'Policy as code with OPA / Sentinel',
      'Drift detection & remediation',
    ],
    tools: ['Terraform', 'Pulumi', 'Atlantis', 'Checkov', 'tfsec'],
  },
  {
    img: '/assets/images/observability-sre.webp',
    bgGradient: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
    t: 'Observability & SRE',
    sub: 'Full-stack visibility — metrics, logs, traces, and alerting. Know what is happening in your systems before your customers do.',
    del: [
      'Monitoring stack setup (Datadog / Prometheus)',
      'Log aggregation & structured logging',
      'Distributed tracing implementation',
      'SLO definition, error budgets & alerting',
    ],
    tools: ['Datadog', 'Prometheus', 'Grafana', 'Jaeger', 'PagerDuty'],
  },
  {
    img: '/assets/images/cloud-security-compliance.webp',
    bgGradient: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
    t: 'Cloud security & compliance',
    sub: 'Security baked in — not bolted on — across every layer. Meet compliance requirements without slowing down your engineering teams.',
    del: [
      'IAM policy design & least-privilege',
      'Network security (VPC, security groups)',
      'Secrets management (Vault, AWS Secrets Manager)',
      'Compliance mapping (SOC 2, ISO 27001, PCI)',
    ],
    tools: ['Vault', 'AWS GuardDuty', 'Snyk', 'Trivy', 'OWASP ZAP'],
  },
];

export default function CDServices() {
  return (
    <section className="cd-section cd-section-white">
      <div className="container">

        <div className="row align-items-center">
          <SectionTitle
            SubTitle="What we do"
            Title="Six cloud and <span>DevOps capabilities </span>"
            isDarkMode={false}
            Content="Every capability is delivered by engineers who own cloud infrastructure day-to-day — not generalists reading documentation for the first time."
            className="text-center"
          />
        </div>

        <div className="cd-svc-list">
          {SVCS.map((svc, i) => {
            const flipped = i % 2 !== 0;
            return (
              <div
                className="row g-0 align-items-stretch rounded-3 overflow-hidden mb-4 cd-svc-row"
                key={i}
              >

                {/* Column — Image
                    Desktop: col-1 on odd rows, col-3 on even rows
                    Mobile:  always first (order-1) */}
                <div
                  className={`col-lg-4 col-12 cd-svc-img-col position-relative order-1 ${flipped ? 'order-lg-3' : 'order-lg-1'}`}
                  style={{ background: svc.bgGradient }}
                >
                  <Image
                    src={svc.img}
                    alt={svc.t}
                    fill
                    priority={i < 2}
                    style={{ objectFit: 'cover' }}
                    className="cd-svc-img"
                  />
                </div>

                {/* Column — Title, description, tools
                    Desktop: col-2 always
                    Mobile:  always second (order-2) */}
                <div className={`col-lg-4 col-12 d-flex flex-column justify-content-center p-4 px-lg-5 py-lg-4 cd-svc-desc-col
                  order-2 ${flipped ? 'order-lg-1' : 'order-lg-2'}`}
                >
                  <h3 className="fw-bold text-white mb-3" style={{ fontSize: '18px', lineHeight: '1.35' }}>{svc.t}</h3>
                  <p className="mb-4 cd-svc-sub-text" style={{ fontSize: '14px', lineHeight: '1.7' }}>
                    {svc.sub}
                  </p>
                </div>

                {/* Column — Deliverables
                    Desktop: col-3 always
                    Mobile:  always third (order-3) */}
                <div className={`col-lg-4 col-12 d-flex flex-column justify-content-center p-4 px-lg-5 py-lg-4
                  order-3 ${flipped ? 'order-lg-2' : 'order-lg-3'}`}
                >
                  <p className="fw-bold text-uppercase mb-3 cd-svc-del-label" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>
                    Deliverables
                  </p>
                  <ul className="list-unstyled mb-0 cd-svc-del-list">
                    {svc.del.map((d, j) => (
                      <li className="d-flex align-items-start gap-2 py-2" key={j}>
                        <span className="cd-svc-del-dot flex-shrink-0"></span>
                        <span className="cd-svc-del-text">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
