'use client';
import React from 'react';
import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';

const CLOUDS = [
  {
    name: 'Amazon Web Services',
    abbr: 'AWS',
    icon: '/assets/images/technologies/awsImage.svg',
    tag: 'AWS Certified',
    rowBg: 'linear-gradient(135deg, #FDF3E3 0%, #FAEEDA 100%)',
    logoBg: '#FAEEDA',
    logoTc: '#633806',
    tagBg: '#f5d5a0',
    tagTc: '#633806',
    descBg: 'linear-gradient(135deg, #FAE8C8 0%, #F5D5A0 100%)',
    itemBorder: 'rgba(99,56,6,0.18)',
    itemBg: 'rgba(255,255,255,0.7)',
    labelColor: '#8a5c20',
    valueColor: '#3d2008',
    desc: 'Amazon Web Services is our most deployed platform — well-suited for data-heavy workloads with mature managed services across ingestion, storage, and querying. The S3-based lakehouse pattern with Redshift and Glue is core to most AWS data platform builds.',
    rows: [
      { l: 'Warehouse',     r: 'Amazon Redshift' },
      { l: 'Data lake',     r: 'Amazon S3' },
      { l: 'Ingestion',     r: 'AWS Glue' },
      { l: 'Streaming',     r: 'Amazon Kinesis' },
      { l: 'Orchestration', r: 'Amazon MWAA (Airflow)' },
      { l: 'Governance',    r: 'AWS Lake Formation' },
      { l: 'Query layer',   r: 'Amazon Athena' },
    ],
  },
  {
    name: 'Microsoft Azure',
    abbr: 'Az',
    icon: '/assets/images/technologies/azureImage.svg',
    tag: 'Azure Certified',
    rowBg: 'linear-gradient(135deg, #F5F4FF 0%, #EEEDFE 100%)',
    logoBg: '#EEEDFE',
    logoTc: '#3C3489',
    tagBg: '#d4d2f8',
    tagTc: '#3C3489',
    descBg: 'linear-gradient(135deg, #E8E7FC 0%, #D4D2F8 100%)',
    itemBorder: 'rgba(60,52,137,0.18)',
    itemBg: 'rgba(255,255,255,0.7)',
    labelColor: '#5a53a0',
    valueColor: '#1e1a5e',
    desc: 'Microsoft Azure is the natural fit for organisations already invested in the Microsoft ecosystem. Synapse Analytics unifies warehousing and data lake operations, while seamless Power BI integration makes it the strongest platform for enterprise self-service analytics.',
    rows: [
      { l: 'Warehouse',     r: 'Azure Synapse Analytics' },
      { l: 'Data lake',     r: 'Azure Data Lake Storage' },
      { l: 'Ingestion',     r: 'Azure Data Factory' },
      { l: 'Streaming',     r: 'Azure Event Hubs' },
      { l: 'Orchestration', r: 'Azure Synapse Pipelines' },
      { l: 'Governance',    r: 'Microsoft Purview' },
      { l: 'BI layer',      r: 'Power BI Premium' },
    ],
  },
  {
    name: 'Google Cloud Platform',
    abbr: 'GCP',
    icon: '/assets/images/technologies/googlecloudImage.svg',
    tag: 'GCP Certified',
    rowBg: 'linear-gradient(135deg, #F0FBF7 0%, #E1F5EE 100%)',
    logoBg: '#E1F5EE',
    logoTc: '#085041',
    tagBg: '#b8e8d9',
    tagTc: '#085041',
    descBg: 'linear-gradient(135deg, #CCF0E4 0%, #B8E8D9 100%)',
    itemBorder: 'rgba(8,80,65,0.18)',
    itemBg: 'rgba(255,255,255,0.7)',
    labelColor: '#1a7a60',
    valueColor: '#053d2e',
    desc: "Google Cloud Platform leads on analytics query performance and ML integration. BigQuery's serverless architecture removes cluster management entirely, and Vertex AI makes GCP the strongest choice for organisations combining data platforms with machine learning workloads.",
    rows: [
      { l: 'Warehouse',     r: 'BigQuery' },
      { l: 'Data lake',     r: 'Google Cloud Storage' },
      { l: 'Ingestion',     r: 'Cloud Dataflow' },
      { l: 'Streaming',     r: 'Pub/Sub' },
      { l: 'Orchestration', r: 'Cloud Composer (Airflow)' },
      { l: 'Governance',    r: 'Dataplex' },
      { l: 'ML layer',      r: 'Vertex AI' },
    ],
  },
];

export default function CDPCloudEcosystems() {
  return (
    <section className="cd-section cd-section-light border-top border-bottom py-5">
      <div className="container py-4">
        <SectionTitle
          className="mb-4"
          SubTitle="Cloud ecosystems"
          Title="Three platforms — we work across all of them"
          Content="We implement data platforms on Amazon Web Services, Microsoft Azure, and Google Cloud Platform. We work with the data-specific services on each provider — not just general cloud infrastructure."
          isDarkMode={false}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {CLOUDS.map((cloud, i) => {
            const flipped = i % 2 !== 0;
            return (
              <div
                key={i}
                className="row g-0 align-items-stretch rounded-3 overflow-hidden"
                style={{ background: cloud.rowBg, border: `1px solid ${cloud.itemBorder}` }}
              >

                {/* Column — Logo visual */}
                <div
                  className={`col-lg-3 col-12 d-flex flex-column align-items-center justify-content-center p-4 order-1 ${flipped ? 'order-lg-3' : 'order-lg-1'}`}
                  style={{
                    background: cloud.descBg,
                    borderRight: flipped ? 'none' : `1px solid ${cloud.itemBorder}`,
                    borderLeft: flipped ? `1px solid ${cloud.itemBorder}` : 'none',
                    minHeight: '200px',
                  }}
                >
                  <div
                    style={{
                      width: '72px', height: '72px', borderRadius: '16px',
                      background: cloud.itemBg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '14px',
                      boxShadow: `0 4px 16px ${cloud.itemBorder}`,
                      padding: '12px',
                    }}
                  >
                    <Image src={cloud.icon} alt={cloud.name} width={48} height={48} style={{ objectFit: 'contain' }} />
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: cloud.valueColor, marginBottom: '8px', textAlign: 'center' }}>
                    {cloud.name}
                  </div>
                  <div
                    style={{
                      fontSize: '11px', fontWeight: '600', padding: '3px 12px',
                      borderRadius: '99px', background: cloud.tagBg, color: cloud.tagTc,
                      border: `1px solid ${cloud.itemBorder}`,
                    }}
                  >
                    {cloud.tag}
                  </div>
                </div>

                {/* Column — Description */}
                <div
                  className={`col-lg-4 col-12 d-flex flex-column justify-content-center p-4 px-lg-5 py-lg-4 order-2 ${flipped ? 'order-lg-1' : 'order-lg-2'}`}
                >
                  <h3 style={{ fontSize: '17px', fontWeight: '700', color: cloud.valueColor, marginBottom: '12px', lineHeight: '1.35' }}>
                    {cloud.name}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: cloud.labelColor, lineHeight: '1.7', margin: 0 }}>
                    {cloud.desc}
                  </p>
                </div>

                {/* Column — Services list */}
                <div
                  className={`col-lg-5 col-12 d-flex flex-column justify-content-center p-4 px-lg-4 py-lg-4 order-3 ${flipped ? 'order-lg-2' : 'order-lg-3'}`}
                  style={{
                    borderLeft: flipped ? 'none' : `1px solid ${cloud.itemBorder}`,
                    borderRight: flipped ? `1px solid ${cloud.itemBorder}` : 'none',
                  }}
                >
                  <p style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: cloud.labelColor, marginBottom: '10px' }}>
                    Core services
                  </p>
                  <ul className="list-unstyled mb-0" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {cloud.rows.map((row, ri) => (
                      <li
                        key={ri}
                        className="d-flex align-items-center justify-content-between"
                        style={{
                          background: cloud.itemBg,
                          border: `1px solid ${cloud.itemBorder}`,
                          borderRadius: '7px',
                          padding: '7px 12px',
                          fontSize: '13px',
                        }}
                      >
                        <span style={{ color: cloud.labelColor, fontWeight: '500' }}>{row.l}</span>
                        <span style={{ color: cloud.valueColor, fontWeight: '600' }}>{row.r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

        <div style={{ marginTop: '16px', padding: '12px 16px', background: '#fafbfc', border: '1px solid #e5e7eb', borderRadius: '10px', fontSize: '13px', color: '#4b5563', lineHeight: '1.65' }}>
          <strong style={{ fontWeight: '600', color: '#050a1e' }}>On provider selection:</strong> We recommend the provider that fits your existing environment, not the one with the best partner margins for us. If your organisation already uses Azure, we build on Azure. If you have no existing commitment, we assess your workload, team, and cost profile before recommending. Multi-cloud is possible but adds operational overhead — we discuss the trade-offs explicitly.
        </div>
      </div>
    </section>
  );
}
