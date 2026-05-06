'use client';
import { useState, useImperativeHandle, forwardRef } from 'react';
import Link from 'next/link';

const intelligentSystems = [
  {
    icon: 'bi-cpu',
    iconBg: '#dbeafe', iconColor: '#2563eb',
    title: 'AI Integration Services',
    desc: 'Seamlessly embed AI capabilities into your existing products and workflows.',
    href: '/ai-automations/ai-integration',
  },
  {
    icon: 'bi-diagram-3',
    iconBg: '#dcfce7', iconColor: '#16a34a',
    title: 'Workflow Automation',
    desc: 'Automate repetitive tasks and complex processes using intelligent systems.',
    href: '/ai-automations/workflow-automation',
  },
  {
    icon: 'bi-chat-dots',
    iconBg: '#ffedd5', iconColor: '#ea580c',
    title: 'Conversational AI & Chatbots',
    desc: 'Deploy advanced conversational agents for customer support and internal helpdesks.',
    href: '/ai-automations/conversational-ai',
  },
];

const strategyEnablement = [
  {
    icon: 'bi-file-text',
    iconBg: '#f3e8ff', iconColor: '#9333ea',
    title: 'Intelligent Document Processing',
    desc: 'Automate data extraction from unstructured documents with high accuracy.',
    href: '/ai-automations/document-processing',
  },
  {
    icon: 'bi-clipboard-check',
    iconBg: '#fce7f3', iconColor: '#db2777',
    title: 'AI Readiness Assessment',
    desc: 'Evaluate your infrastructure and data to prepare for enterprise AI adoption.',
    href: '/ai-automations/ai-readiness',
  },
  {
    icon: 'bi-shield-check',
    iconBg: '#e0f2fe', iconColor: '#0ea5e9',
    title: 'AI Governance & Ethics',
    desc: 'Establish robust frameworks for responsible and compliant AI deployments.',
    href: '/ai-automations/ai-governance',
  },
];

const MegaMenuAI = forwardRef(function MegaMenuAI({ setMobileToggle, onLinkClick }, ref) {
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
                    <h4 className="px-3 mb-4 fw-semibold mega-col-heading">Intelligent Systems</h4>
                    <div className="d-flex flex-column gap-1">
                      {intelligentSystems.map((s) => (
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
                    <h4 className="px-3 mb-4 fw-semibold mega-col-heading">Strategy &amp; Enablement</h4>
                    <div className="d-flex flex-column gap-1">
                      {strategyEnablement.map((s) => (
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
                <div className="poster-card" style={{ background: '#1e1b4b' }}>
                  <div className="poster-bg poster-bg-ai"></div>
                  <h3 className="mb-4 d-flex align-items-center fw-bold poster-title position-relative z-1 text-white">
                    <i className="bi bi-robot me-3" style={{ color: '#c084fc' }}></i> Next-Gen AI Power
                  </h3>
                  <p className="poster-text position-relative z-1 mb-4">
                    Tap into the power of cutting-edge language models and automation engines to outpace the competition.
                  </p>
                  <div className="d-flex flex-column gap-3 position-relative z-1">
                    <div className="poster-bullet poster-bullet-ai">
                      <i className="bi bi-cpu me-2" style={{ color: '#c084fc' }}></i> DEEP LEARNING INTEGRATION
                    </div>
                    <div className="poster-bullet poster-bullet-secondary">
                      <i className="bi bi-braces-asterisk me-2"></i> PREDICTIVE MODELING
                    </div>
                    <div className="poster-bullet poster-bullet-secondary">
                      <i className="bi bi-lightbulb me-2"></i> COGNITIVE SERVICES
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

export default MegaMenuAI;
