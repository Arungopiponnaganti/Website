'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const PLAT_CATS = [
  { lbl: 'CRM & Sales', color: '#2563eb', items: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho CRM', 'Microsoft Dynamics'] },
  { lbl: 'ERP & Finance', color: '#ea580c', items: ['SAP', 'Oracle', 'Tally', 'QuickBooks', 'Xero', 'Zoho Books', 'NetSuite'] },
  { lbl: 'HR & People', color: '#16a34a', items: ['BambooHR', 'Workday', 'Darwinbox', 'GreytHR', 'Keka', 'Zoho People'] },
  { lbl: 'Communication', color: '#9333ea', items: ['Slack', 'Microsoft Teams', 'Gmail', 'Outlook', 'WhatsApp Business', 'Twilio'] },
  { lbl: 'Project & Ticketing', color: '#db2777', items: ['Jira', 'Asana', 'Monday.com', 'Trello', 'Zendesk', 'Freshdesk', 'ServiceNow'] },
  { lbl: 'Cloud & Storage', color: '#0ea5e9', items: ['Google Drive', 'SharePoint', 'Dropbox', 'AWS S3', 'Notion', 'Confluence'] },
  { lbl: 'AI & Data', color: '#7c3aed', items: ['OpenAI', 'Anthropic Claude', 'Google Gemini', 'Snowflake', 'BigQuery', 'Airtable'] },
  { lbl: 'E-commerce & Payments', color: '#15803d', items: ['Shopify', 'WooCommerce', 'Razorpay', 'Stripe', 'PayU', 'Cashfree'] },
];

export default function WAPlatforms() {
  return (
    <section className="cd-section cd-section-muted border-top border-bottom py-5 pb-2">
      <div className="container py-4">
        <SectionTitle
          className="text-center"
          SubTitle="Platforms we connect"
          Title="200+ integrations — your stack, automated"
          Content="We connect whatever you're already running. If it has an API or webhook, we can automate it."
          isDarkMode={false}
        />

        <div className="wa-plat-grid">
          {PLAT_CATS.map((cat, ci) => (
            <div key={ci} className="wa-plat-card">
              
              <div 
                className="wa-plat-card-head"
                style={{ background: `${cat.color}15` }}
              >
                <div 
                  className="wa-plat-card-dot"
                  style={{ background: cat.color }}
                />
                <span>{cat.lbl}</span>
              </div>

              <div className="wa-plat-card-body">
                {cat.items.map((item, ii) => (
                  <div key={ii} className="wa-plat-chip">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '12px', color: '#a0a0a0', marginTop: '24px', fontStyle: 'italic' }}>
          Don&apos;t see your tool? We build custom integrations for any system with an accessible API, file export, or webhook capability.
        </p>
      </div>
    </section>
  );
}
