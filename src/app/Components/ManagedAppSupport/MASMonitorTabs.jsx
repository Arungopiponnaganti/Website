'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const TABS = [
  { id: 'infrastructure', label: 'Infrastructure & Cloud' },
  { id: 'application', label: 'Application Layer' },
  { id: 'database', label: 'Database & State' },
  { id: 'security', label: 'Security & Auth' }
];

const MONITORS = {
  infrastructure: [
    { title: 'CPU & Memory Utilization', desc: 'Resource spikes before they cause OOM issues or slowdowns.', metric: 'Alert: >85% for 5 mins', icon: 'bi-cpu-fill', color: '#3b82f6' },
    { title: 'Network I/O & Bandwidth', desc: 'Monitoring inbound/outbound traffic anomalies and drops.', metric: 'Alert: Deviation > 3σ', icon: 'bi-hdd-network-fill', color: '#10b981' },
    { title: 'Disk Space & Inodes', desc: 'Predictive alerting before critical volumes hit capacity.', metric: 'Alert: <10% free space', icon: 'bi-device-hdd-fill', color: '#8b5cf6' },
    { title: 'Container Health', desc: 'Pod restarts, crash loops, and orchestration layer status.', metric: 'Alert: CrashLoopBackOff', icon: 'bi-box-seam-fill', color: '#f59e0b' }
  ],
  application: [
    { title: 'Uptime & Availability', desc: 'Synthetics testing critical endpoints every 60 seconds.', metric: 'Alert: Down > 1 min', icon: 'bi-activity', color: '#10b981' },
    { title: 'Error Rates (5xx)', desc: 'Spikes in server errors, caught before users complain.', metric: 'Alert: 5xx > 1% / 5m', icon: 'bi-exclamation-triangle-fill', color: '#ef4444' },
    { title: 'Endpoint Latency', desc: 'P95 and P99 latency tracking for core API routes.', metric: 'Alert: p95 > 500ms', icon: 'bi-speedometer', color: '#8b5cf6' },
    { title: 'Queue & Worker Health', desc: 'Background job processing delays and queue backlogs.', metric: 'Alert: Queue age > 10m', icon: 'bi-stack', color: '#3b82f6' }
  ],
  database: [
    { title: 'Connection Pools', desc: 'Nearing exhaustion limits or connection leaks.', metric: 'Alert: Pool > 90% full', icon: 'bi-diagram-2-fill', color: '#f59e0b' },
    { title: 'Slow Queries', desc: 'Query degradation before it brings down the application.', metric: 'Alert: Query > 5s', icon: 'bi-hourglass-split', color: '#ef4444' },
    { title: 'Replication Lag', desc: 'Delay in read-replica synchronization indicating pressure.', metric: 'Alert: Lag > 1s', icon: 'bi-files-alt', color: '#8b5cf6' },
    { title: 'Backup Success', desc: 'Daily verification that automated backups completed.', metric: 'Alert: Backup failed/missed', icon: 'bi-shield-check', color: '#10b981' }
  ],
  security: [
    { title: 'SSL/TLS Expiry', desc: 'Advance warning long before certificates expire.', metric: 'Alert: <30 days remaining', icon: 'bi-lock-fill', color: '#f59e0b' },
    { title: 'Auth Failure Spikes', desc: 'Detecting credential stuffing or aggressive brute forcing.', metric: 'Alert: 401s > baseline', icon: 'bi-shield-lock-fill', color: '#ef4444' },
    { title: 'Dependency Vulnerabilities', desc: 'Scans for CVEs mapped to your specific stack.', metric: 'Alert: Critical CVE found', icon: 'bi-bug-fill', color: '#8b5cf6' },
    { title: 'DDoS / API Abuse', desc: 'Rate limiting triggers and WAF anomaly detection.', metric: 'Alert: Edge blocks > 5%', icon: 'bi-shield-slash-fill', color: '#3b82f6' }
  ]
};

export default function MASMonitorTabs() {
  const [activeTab, setActiveTab] = useState('infrastructure');

  return (
    <section className="cd-section py-5">
      <div className="container py-4">
        <SectionTitle
          className="text-center mb-5"
          SubTitle="Monitoring coverage"
          Title="Full-stack visibility across every layer"
          Content="Select a category to see what we instrument and which thresholds we alert on."
          isDarkMode={false}
        />

        <div className="cd-tech-tabs mb-4">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`cd-tech-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mon-grid mt-4">
          {MONITORS[activeTab].map((item, idx) => (
            <div className="mon-card" key={`${activeTab}-${idx}`}>
              <div 
                style={{ 
                  width: '36px', height: '36px', borderRadius: '8px', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  marginBottom: '12px', background: `${item.color}1a` 
                }}
              >
                <i className={`bi ${item.icon}`} style={{ fontSize: '16px', color: item.color }}></i>
              </div>
              <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#1a1e2d', marginBottom: '6px' }}>{item.title}</h4>
              <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.5', margin: 0 }}>{item.desc}</p>
              <div className="mc-metric">{item.metric}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
