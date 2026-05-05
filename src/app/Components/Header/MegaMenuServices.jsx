'use client';
import { useState, useImperativeHandle, forwardRef } from 'react';
import Link from 'next/link';

const buildServices = [
  {
    icon: 'bi-code-slash',
    iconColor: '#2563eb', iconBg: '#dbeafe',
    title: 'Custom Software Development',
    desc: 'Bespoke solutions engineered to your exact business requirements.',
    href: '/service/custom-software-development',
  },
  {
    icon: 'bi-layers',
    iconColor: '#9333ea', iconBg: '#f3e8ff',
    title: 'Product Engineering',
    desc: 'End-to-end product design, development, and iteration at speed.',
    href: '/service/product-engineering',
  },
  {
    icon: 'bi-arrow-repeat',
    iconColor: '#ea580c', iconBg: '#ffedd5',
    title: 'Application Modernisation',
    desc: 'Migrate legacy systems to scalable, cloud-ready architectures.',
    href: '/service/application-modernisation',
  },
  {
    icon: 'bi-pen',
    iconColor: '#db2777', iconBg: '#fce7f3',
    title: 'UX / UI Design',
    desc: 'Intuitive interfaces that convert users and delight stakeholders.',
    href: '/service/ux-ui-design',
  },
];

const runServices = [
  {
    icon: 'bi-cloud',
    iconColor: '#0ea5e9', iconBg: '#e0f2fe',
    title: 'Cloud & DevOps',
    desc: 'Infrastructure automation, CI/CD pipelines, and cloud optimisation.',
    href: '/service/cloud-devops',
  },
  {
    icon: 'bi-check2-circle',
    iconColor: '#16a34a', iconBg: '#dcfce7',
    title: 'Quality Engineering',
    desc: 'Automated testing strategies that ship confidence, not just code.',
    href: '/service/quality-engineering',
  },
  {
    icon: 'bi-headset',
    iconColor: '#4f46e5', iconBg: '#e0e7ff',
    title: 'Managed App Support',
    desc: 'Proactive monitoring, maintenance, and 24/7 incident response.',
    href: '/service/managed-app-support',
  },
  {
    icon: 'bi-search',
    iconColor: '#0d9488', iconBg: '#ccfbf1',
    title: 'Tech Due Diligence',
    desc: 'Independent technical assessments for investors and M&A teams.',
    href: '/service/tech-due-diligence',
  },
];

const MegaMenuServices = forwardRef(function MegaMenuServices({ setMobileToggle, onLinkClick }, ref) {
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
                    <h6 className="px-3 mb-4 fw-semibold mega-col-heading">Build &amp; Modernise</h6>
                    <div className="d-flex flex-column gap-1">
                      {buildServices.map((s) => (
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
                    <h6 className="px-3 mb-4 fw-semibold mega-col-heading">Run &amp; Optimise</h6>
                    <div className="d-flex flex-column gap-1">
                      {runServices.map((s) => (
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
                <div className="poster-card" style={{ background: '#0f172a' }}>
                  <div className="poster-bg poster-bg-services"></div>
                  <h5 className="mb-4 d-flex align-items-center fw-bold poster-title position-relative z-1 text-white">
                    <i className="bi bi-rocket-takeoff-fill me-3" style={{ color: '#38bdf8' }}></i> Engineered for Scale
                  </h5>
                  <p className="poster-text position-relative z-1 mb-4">
                    We build robust, scalable architectures that grow with your ambitions and handle enterprise demands seamlessly.
                  </p>
                  <div className="d-flex flex-column gap-3 position-relative z-1">
                    <div className="poster-bullet poster-bullet-services">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: '#38bdf8' }}></i> 99.99% UPTIME
                    </div>
                    <div className="poster-bullet poster-bullet-secondary">
                      <i className="bi bi-shield-check me-2"></i> ENTERPRISE SECURITY
                    </div>
                    <div className="poster-bullet poster-bullet-secondary">
                      <i className="bi bi-lightning-charge me-2"></i> OPTIMISED WORKFLOWS
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

export default MegaMenuServices;
