'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import '../DataEngineering/DEArchitecture.css';

const LIN_LAYERS = [
  {
    lbl: 'Sources',
    icon: 'L1',
    nodes: [
      { badge: 'PG', title: 'PostgreSQL', subtitle: 'App DB', dot: '#378ADD', tip: 'Application database — orders, users, and events. Extracted via Debezium CDC every 5 minutes. 14 downstream tables depend on this source.' },
      { badge: 'SF', title: 'Salesforce', subtitle: 'CRM', dot: '#1D9E75', tip: 'CRM data extracted via Salesforce Bulk API. 6 tables consumed downstream. Owner: Sales Operations. Data owner: Head of Sales.' },
      { badge: 'ST', title: 'Stripe', subtitle: 'Payments', dot: '#534AB7', tip: 'Payment event stream via webhook + nightly batch reconciliation. Revenue figures in 4 reports trace back here. Critical — break this and 3 board-level metrics fail.' },
    ],
  },
  {
    lbl: 'Raw (Bronze)',
    icon: 'L2',
    nodes: [
      { badge: 'BR', title: 'raw_orders', subtitle: 'Bronze', dot: '#BA7517', tip: 'Immutable raw order events. 12.4M rows. Never modified. Upstream: PostgreSQL. Downstream: stg_orders, dim_orders.' },
      { badge: 'BR', title: 'raw_crm', subtitle: 'Bronze', dot: '#BA7517', tip: 'Raw Salesforce account and opportunity data. Upstream: Salesforce. Downstream: dim_customers.' },
      { badge: 'BR', title: 'raw_payments', subtitle: 'Bronze', dot: '#BA7517', tip: 'Raw Stripe payment events. Upstream: Stripe webhook. Downstream: fct_revenue.' },
    ],
  },
  {
    lbl: 'Staging (Silver)',
    icon: 'L3',
    nodes: [
      { badge: 'DT', title: 'stg_orders', subtitle: 'dbt', dot: '#1D9E75', tip: 'Cleaned and typed orders. Deduplication applied. 11 quality tests pass on every run. Downstream: fct_orders, fct_revenue.' },
      { badge: 'DT', title: 'stg_customers', subtitle: 'dbt', dot: '#1D9E75', tip: 'Merged CRM and app user records. Deduplication and identity resolution. Downstream: dim_customers.' },
      { badge: 'DT', title: 'stg_payments', subtitle: 'dbt', dot: '#1D9E75', tip: 'Normalised payment events. Currency conversion applied. Downstream: fct_revenue, fct_refunds.' },
    ],
  },
  {
    lbl: 'Gold',
    icon: 'L4',
    nodes: [
      { badge: 'GD', title: 'fct_orders', subtitle: 'Gold · dbt', dot: '#639922', tip: 'Order fact table. Grain: 1 row per order. 8 quality tests. Owner: Data Engineering. Downstream: revenue_by_product, orders_dashboard.' },
      { badge: 'GD', title: 'fct_revenue', subtitle: 'Gold · dbt', dot: '#639922', tip: 'Revenue fact table. Sources: stg_orders + stg_payments. The single source of truth for all revenue reporting. 3 board-level metrics depend here.' },
      { badge: 'GD', title: 'dim_customers', subtitle: 'Gold · dbt', dot: '#639922', tip: 'Customer dimension. SCD Type 2 — historical changes preserved. Downstream: 6 reports and 2 ML feature sets.' },
    ],
  },
  {
    lbl: 'Consume',
    icon: 'L5',
    nodes: [
      { badge: 'PB', title: 'Revenue dash', subtitle: 'Power BI', dot: '#185FA5', tip: 'Board-level revenue dashboard. Upstream: fct_revenue. 14 executives view this weekly. Quality gate: fails to refresh if fct_revenue has a quality violation.' },
      { badge: 'LK', title: 'Orders report', subtitle: 'Looker', dot: '#185FA5', tip: 'Operations orders report. Upstream: fct_orders. Owner: Operations. Refreshed hourly.' },
      { badge: 'ML', title: 'ML features', subtitle: 'Feature store', dot: '#7F77DD', tip: 'Customer propensity model features. Upstream: dim_customers + fct_orders. 2 production models depend on this.' },
    ],
  },
];

export default function DGLineage() {
  const [activeTip, setActiveTip] = useState(null);

  const handleNode = (li, ni) => {
    const key = `${li}-${ni}`;
    setActiveTip(activeTip === key ? null : key);
  };

  const getNode = (key) => {
    if (!key) return null;
    const [li, ni] = key.split('-').map(Number);
    return LIN_LAYERS[li]?.nodes[ni];
  };

  const tipNode = getNode(activeTip);

  return (
    <section className="de-arch-section mb-0">
      <div className="container">
        <SectionTitle
          SubTitle="Data lineage"
          Title="See exactly where your data comes from — and where it goes"
          Content="Data lineage tracks every transformation step from source to dashboard. Click any node to understand its upstream sources and downstream consumers — and what breaks if it changes."
          isDarkMode={false}
          className='mb-0'
        />

        <div className="mb-4">
          <div className="dea-pipeline-header mb-0">
            <h3 className="dea-pipeline-title">Architecture pipeline</h3>
          </div>
          <div className="dea-pipeline-grid">
            {LIN_LAYERS.map((layer, li) => (
              <div key={li} className="dea-pipeline-col">
                <div className="dea-col-label"><span>{layer.icon}</span> {layer.lbl}</div>
                {layer.nodes.map((node, ni) => {
                  const key = `${li}-${ni}`;
                  return (
                    <div
                      key={ni}
                      className={`dea-pipeline-card ${activeTip === key ? 'dea-pipeline-card-active' : ''}`}
                      onClick={() => handleNode(li, ni)}
                      role="button"
                    >
                      <div className="dea-card-badge" style={{ background: `${node.dot}20`, color: node.dot }}>
                        {node.badge}
                      </div>
                      <div className="dea-card-content">
                        <div className="dea-card-title">{node.title}</div>
                        <div className="dea-card-subtitle">{node.subtitle}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {tipNode && (
          <div style={{
            background: '#ffffff',
            borderRadius: '12px',
            padding: '20px 24px',
            border: '1px solid #e8e8ed',
            marginBottom: '24px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span className="dea-status-dot green"></span>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a2e' }}>{tipNode.title}</span>
            </div>
            <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.7', margin: 0 }}>
              {tipNode.tip}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}