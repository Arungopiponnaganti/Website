'use client';
import { useState, useImperativeHandle, forwardRef } from 'react';
import Link from 'next/link';

const industriesLeft = [
  {
    icon: 'bi-bank',
    iconColor: '#2563eb',
    iconBg: '#dbeafe',
    title: 'Banking & Fintech',
    desc: 'Secure, scalable fintech solutions.',
    href: '/industries/banking-fintech',
  },
  {
    icon: 'bi-mortarboard',
    iconColor: '#16a34a',
    iconBg: '#dcfce7',
    title: 'Education',
    desc: 'Modern digital learning systems.',
    href: '/industries/education',
  },
  {
    icon: 'bi-rocket',
    iconColor: '#f59e0b',
    iconBg: '#fef3c7',
    title: 'Startups',
    desc: 'MVP to market-ready products.',
    href: '/industries/startups',
  },
  {
    icon: 'bi-heart-pulse',
    iconColor: '#db2777',
    iconBg: '#fce7f3',
    title: 'Healthcare & Life Sciences',
    desc: 'Patient-centric digital platforms.',
    href: '/industries/healthcare-life-sciences',
  },

  {
    icon: 'bi-shield-check',
    iconColor: '#0ea5e9',
    iconBg: '#e0f2fe',
    title: 'Insurance',
    desc: 'Digital insurance transformation.',
    href: '/industries/insurance',
  },
];

const industriesRight = [
  {
    icon: 'bi-gear',
    iconColor: '#f59e0b',
    iconBg: '#fef3c7',
    title: 'Manufacturing',
    desc: 'Automation and smart factories.',
    href: '/industries/manufacturing',
  },
    {
    icon: 'bi-cpu',
    iconColor: '#4f46e5',
    iconBg: '#e0e7ff',
    title: 'Hi Tech',
    desc: 'Innovative enterprise tech solutions.',
    href: '/industries/hi-tech',
  },
  {
    icon: 'bi-briefcase',
    iconColor: '#6366f1',
    iconBg: '#e0e7ff',
    title: 'Professional Services',
    desc: 'Digital-first service operations.',
    href: '/industries/professional-services',
  },
  {
    icon: 'bi-cart',
    iconColor: '#f97316',
    iconBg: '#ffedd5',
    title: 'Retail & Consumer Goods',
    desc: 'Omnichannel commerce platforms.',
    href: '/industries/retail-consumer-goods',
  },
  {
    icon: 'bi-airplane',
    iconColor: '#06b6d4',
    iconBg: '#cffafe',
    title: 'Travel, Logistics & Hospitality',
    desc: 'Smart mobility and logistics tech.',
    href: '/industries/travel-logistics-hospitality',
  },
];

const MegaMenuIndustries = forwardRef(function MegaMenuIndustries(
  { setMobileToggle, onLinkClick },
  ref
) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    close: () => setMobileOpen(false),
  }));

  return (
    <>
      {/* Mobile Toggle */}
      <span
        className={mobileOpen ? 'cs-munu_dropdown_toggle active' : 'cs-munu_dropdown_toggle'}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span></span>
      </span>

      {/* Mega Menu Panel */}
      <div className={`cs_mega_menu_panel custom-mega-panel${mobileOpen ? ' cs_mega_mobile_open' : ''}`}>
        <div className="megamenu-container">
          <div className="cs_mega_inner d-block bg-transparent">

            <div className="row g-4">

              {/* LEFT + RIGHT COLUMNS */}
              <div className="col-lg-12 col-xl-8">
                <div className="row g-2">

                  {/* LEFT */}
<div className="col-md-6">
  <h4 className="px-3 mb-4 fw-semibold mega-col-heading">
    Core & Regulated Industries
  </h4>

                    <div className="d-flex flex-column gap-1">
                      {industriesLeft.map((item) => (
                        <Link
                          href={item.href}
                          key={item.href}
                          onClick={onLinkClick}
                          className="custom-mega-item"
                        >
                          <span
                            className="custom-mega-item-icon"
                            style={{
                              backgroundColor: item.iconBg,
                              color: item.iconColor,
                            }}
                          >
                            <i className={`bi ${item.icon}`}></i>
                          </span>

                          <span className="custom-mega-item-content">
                            <span className="fw-semibold mb-1 custom-mega-item-title">
                              {item.title}
                            </span>
                            <span className="custom-mega-item-desc">
                              {item.desc}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="col-md-6">
  <h4 className="px-3 mb-4 fw-semibold mega-col-heading">
    Digital & Commercial Industries
  </h4>
                    <div className="d-flex flex-column gap-1">
                      {industriesRight.map((item) => (
                        <Link
                          href={item.href}
                          key={item.href}
                          onClick={onLinkClick}
                          className="custom-mega-item"
                        >
                          <span
                            className="custom-mega-item-icon"
                            style={{
                              backgroundColor: item.iconBg,
                              color: item.iconColor,
                            }}
                          >
                            <i className={`bi ${item.icon}`}></i>
                          </span>

                          <span className="custom-mega-item-content">
                            <span className="fw-semibold mb-1 custom-mega-item-title">
                              {item.title}
                            </span>
                            <span className="custom-mega-item-desc">
                              {item.desc}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* RIGHT SIDE POSTER */}
              <div className="col-lg-12 col-xl-4">
                <div className="poster-card" style={{ background: '#0f172a' }}>
                  <div className="poster-bg poster-bg-industries"></div>

                  <h3 className="mb-4 d-flex align-items-center fw-bold text-white">
                    <i className="bi bi-buildings-fill me-3 text-primary"></i>
                    Industry Expertise
                  </h3>

                  <p className="poster-text mb-4">
                    We deliver tailored, scalable solutions across industries
                    with deep domain knowledge and modern technology.
                  </p>

                  <div className="d-flex flex-column gap-3">
                    <div className="poster-bullet">
                      <i className="bi bi-check-circle-fill me-2 text-primary"></i>
                      Domain-driven solutions
                    </div>
                    <div className="poster-bullet">
                      <i className="bi bi-diagram-3 me-2"></i>
                      Cross-industry expertise
                    </div>
                    <div className="poster-bullet">
                      <i className="bi bi-graph-up me-2"></i>
                      Scalable architectures
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

export default MegaMenuIndustries;