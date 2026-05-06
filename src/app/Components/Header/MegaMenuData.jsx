'use client';
import { useState, useImperativeHandle, forwardRef } from 'react';
import Link from 'next/link';

const dataInfrastructure = [
  {
    icon: 'bi-database-gear',
    iconBg: '#ffedd5', iconColor: '#ea580c',
    title: 'Data Engineering & Pipelines',
    desc: 'Design and build resilient data pipelines for massive scale processing.',
    href: '/data-solutions/data-engineering-pipelines',
  },
  {
    icon: 'bi-cloud-arrow-up',
    iconBg: '#e0f2fe', iconColor: '#0ea5e9',
    title: 'Cloud Data Platforms',
    desc: 'Modernise your enterprise data warehouse on Azure, AWS, or GCP.',
    href: '/data-solutions/cloud-data-platforms',
  },
  {
    icon: 'bi-shield-lock',
    iconBg: '#dcfce7', iconColor: '#16a34a',
    title: 'Data Governance & Quality',
    desc: 'Ensure data accuracy, security, and compliance across your business.',
    href: '/data-solutions/data-governance',
  },
];

const insightsReporting = [
  {
    icon: 'bi-graph-up-arrow',
    iconBg: '#f3e8ff', iconColor: '#9333ea',
    title: 'Analytics & Business Intelligence',
    desc: 'Transform raw data into strategic insights with powerful BI tools.',
    href: '/data-solutions/analytics-business-intelligence',
  },
  {
    icon: 'bi-pie-chart',
    iconBg: '#fce7f3', iconColor: '#db2777',
    title: 'Reporting & Visualisation',
    desc: 'Create intuitive dashboards that make complex metrics easy to understand.',
    href: '/data-solutions/reporting-visualisation',
  },
  {
    icon: 'bi-lightbulb',
    iconBg: '#fef3c7', iconColor: '#d97706',
    title: 'Data Strategy Consulting',
    desc: 'Align your data operations with overarching business objectives.',
    href: '/data-solutions/data-strategy-consulting',
  },
];

const MegaMenuData = forwardRef(function MegaMenuData({ setMobileToggle, onLinkClick }, ref) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    close: () => setMobileOpen(false),
  }));

  return (
    <>
      <span
        className={mobileOpen ? 'cs-munu_dropdown_toggle active' : 'cs-munu_dropdown_toggle'}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span></span>
      </span>

      <div className={`cs_mega_menu_panel custom-mega-panel${mobileOpen ? ' cs_mega_mobile_open' : ''}`}>
        <div className="megamenu-container">
          <div className="cs_mega_inner d-block bg-transparent">

            <div className="row g-4">
              <div className="col-lg-12 col-xl-8">
                <div className="row g-2">

                  <div className="col-md-6">
                    <h4 className="px-3 mb-4 fw-semibold mega-col-heading">Data Infrastructure</h4>
                    <div className="d-flex flex-column gap-1">
                      {dataInfrastructure.map((s) => (
                        <Link href={s.href} key={s.href} onClick={onLinkClick} className="custom-mega-item">
                          <span className="custom-mega-item-icon" style={{ backgroundColor: s.iconBg, color: s.iconColor }}>
                            <i className={`bi ${s.icon}`}></i>
                          </span>
                          <span className="custom-mega-item-content">
                            <span className="fw-semibold mb-1 custom-mega-item-title">{s.title}</span>
                            <span className="custom-mega-item-desc">{s.desc}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <h4 className="px-3 mb-4 fw-semibold mega-col-heading">Insights &amp; Reporting</h4>
                    <div className="d-flex flex-column gap-1">
                      {insightsReporting.map((s) => (
                        <Link href={s.href} key={s.href} onClick={onLinkClick} className="custom-mega-item">
                          <span className="custom-mega-item-icon" style={{ backgroundColor: s.iconBg, color: s.iconColor }}>
                            <i className={`bi ${s.icon}`}></i>
                          </span>
                          <span className="custom-mega-item-content">
                            <span className="fw-semibold mb-1 custom-mega-item-title">{s.title}</span>
                            <span className="custom-mega-item-desc">{s.desc}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-lg-12 col-xl-4">
                <div className="poster-card" style={{ background: '#064e3b' }}>
                  <div className="poster-bg poster-bg-data"></div>
                  <h3 className="mb-4 d-flex align-items-center fw-bold poster-title position-relative z-1 text-white">
                    <i className="bi bi-bar-chart-line-fill me-3" style={{ color: '#34d399' }}></i> Master Your Data
                  </h3>
                  <p className="poster-text position-relative z-1 mb-4">
                    Turn raw unstructured information into a powerful moat for your business with real-time analytics.
                  </p>
                  <div className="d-flex flex-column gap-3 position-relative z-1">
                    <div className="poster-bullet poster-bullet-data">
                      <i className="bi bi-funnel-fill me-2" style={{ color: '#34d399' }}></i> CLEAN &amp; GOVERN
                    </div>
                    <div className="poster-bullet poster-bullet-secondary">
                      <i className="bi bi-diagram-3-fill me-2"></i> CLOUD WAREHOUSING
                    </div>
                    <div className="poster-bullet poster-bullet-secondary">
                      <i className="bi bi-pie-chart-fill me-2"></i> ACTIONABLE INSIGHTS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default MegaMenuData;
