import React from 'react';
import '@/app/assets/custom-dev.css';

import PEHero from '@/app/Components/ProductEngineering/PEHero';
import PECapabilities from '@/app/Components/ProductEngineering/PECapabilities';
import PEDevProcess from '@/app/Components/ProductEngineering/PEDevProcess';
import PEEngagementModels from '@/app/Components/ProductEngineering/PEEngagementModels';
import CtaBand from '@/app/Components/Common/CtaBand';
import { getPageMetadata } from '@/utils/seo';

const exploratoryCallFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Company/Investment Firm', name: 'company', type: 'text', placeholder: 'Your company or firm name', required: true, colSize: 6 },
  { label: 'Deal Context', name: 'context', type: 'textarea', placeholder: 'Tell us about the potential deal, target company, and what stage you\'re at...', required: false, colSize: 12 },
];

const sampleReportFormFields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true, colSize: 6 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true, colSize: 6 },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: true, colSize: 6 },
  { label: 'Company/Investment Firm', name: 'company', type: 'text', placeholder: 'Your company or firm name', required: true, colSize: 6 },
  { label: 'Report Type Interest', name: 'report_interest', type: 'textarea', placeholder: 'Which type of audit report interests you most? (Red Flag, Full Due Diligence, or Post-Deal Remediation)', required: false, colSize: 12 },
];

export const metadata = getPageMetadata('/service/tech-due-diligence');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Tech Due Diligence',
  provider: {
    '@type': 'Organization',
    name: 'Mayurasoft',
    url: 'https://mayurasoft.com'
  },
  description: 'Comprehensive Tech Due Diligence for investors and M&A. Code, architecture, security, and infrastructure assessments.',
  areaServed: 'Worldwide',
  serviceType: 'Tech Due Diligence'
};

const heroProps = {
  badgeText: "Tech Due Diligence",
  title: "Uncover technical risks before they become financial liabilities",
  subheadline: "Comprehensive Tech Due Diligence for investors, PE firms, and M&A. Know exactly what you're buying—code quality, scalability, security, and team capability.",
  tags: ['Pre-deal assessment', 'Code quality audit', 'Architecture review', 'Security & Compliance'],
  primaryCta: { text: "Get a sample audit report →", href: "/contact?service=tech-due-diligence" },
  secondaryCta: { text: "See Audit Process ", href: "#process" },
  stats: [
    { num: '7-10 days', lbl: 'Standard audit turnaround' },
    { num: 'Full-stack', lbl: 'Technical Review' },
    { num: 'Risk-led', lbl: 'Findings Report' },
    { num: 'Actionable', lbl: 'Clear remediation roadmaps' }
  ],
  formTitle: "Request a Sample Audit Report",
  formMetadata: { service: 'tech-due-diligence', pageTitle: 'Tech Due Diligence' }
};

const capabilitiesData = [
  {
    icon: 'bi-diagram-3', title: 'Architecture & Scalability',
    body: 'Is the system built to handle 10x growth, or will it require a complete rewrite? We assess technical debt, structural flaws, and scalability limits.',
  },
  {
    icon: 'bi-code-slash', title: 'Code Quality & Debt',
    body: 'Quantifying maintainability and technical debt. We review codebase architecture, testing coverage, and engineering standards.',
  },
  {
    icon: 'bi-shield-check', title: 'Security & Compliance',
    body: 'Identifying vulnerabilities and regulatory gaps (GDPR, SOC2). We check data handling, encryption, and access controls.',
  },
  {
    icon: 'bi-cloud-arrow-up', title: 'DevOps & Infrastructure',
    body: 'Assessing cloud spend efficiency, CI/CD maturity, deployment automation, and disaster recovery readiness.',
  },
  {
    icon: 'bi-people', title: 'Team & Process Maturity',
    body: 'Evaluating engineering leadership, agile methodology adoption, developer productivity, and overall team structure.',
  },
  {
    icon: 'bi-box-seam', title: 'Open Source IP Risk',
    body: 'Scanning for restrictive licenses and proprietary IP leakage that could create legal liabilities post-acquisition.',
  }
];

const processSteps = [
  {
    num: '01', title: 'Discovery & Access', dur: 'Days 1-2',
    desc: 'Initial kickoff with founders or technical leads to understand the business context. We securely provision access to code repositories, cloud infrastructure, and documentation.',
    outputs: ['NDA execution', 'Secure access provisioning', 'Initial management interview', 'Kickoff alignment document'],
    cards: [
      { t: 'Kickoff Interview', d: 'With technical leadership', icon: 'bi-mic-fill', theme: 'bento-blue' },
      { t: 'Secure Access', d: 'Read-only securely granted', icon: 'bi-shield-lock-fill', theme: 'bento-green' },
      { t: 'Documentation Review', d: 'Reviewing existing specs', icon: 'bi-file-text-fill', theme: 'bento-orange' }
    ]
  },
  {
    num: '02', title: 'Deep Dive Analysis', dur: 'Days 3-7',
    desc: 'Our senior engineers perform a rigorous audit of the codebase, architecture, infrastructure, and security posture using automated tools and manual review.',
    outputs: ['Codebase static analysis', 'Infrastructure & cloud audit', 'Security vulnerability scan', 'Key personnel interviews'],
    cards: [
      { t: 'Code Review', d: 'Manual & automated analysis', icon: 'bi-code-square', theme: 'bento-purple' },
      { t: 'Architecture Audit', d: 'Scalability & design review', icon: 'bi-diagram-3-fill', theme: 'bento-pink' },
      { t: 'Team Assessment', d: 'Evaluating capabilities', icon: 'bi-people-fill', theme: 'bento-yellow' }
    ]
  },
  {
    num: '03', title: 'Reporting & Remediation', dur: 'Days 8-10',
    desc: 'We synthesize our findings into an executive summary and a detailed technical report. We highlight red flags and provide a prioritized remediation roadmap with estimated costs.',
    outputs: ['Executive summary presentation', 'Comprehensive technical report', 'Risk matrix & Red flags', 'Actionable remediation plan'],
    cards: [
      { t: 'Executive Briefing', d: 'Presenting to stakeholders', icon: 'bi-easel-fill', theme: 'bento-blue' },
      { t: 'Remediation Roadmap', d: 'Fixes with cost estimates', icon: 'bi-sign-turn-right-fill', theme: 'bento-green' },
      { t: 'Technical Report', d: 'Detailed evidence & metrics', icon: 'bi-journal-check', theme: 'bento-orange' }
    ]
  }
];

const engagementModelsData = [
  {
    label: 'Rapid',
    badge: null,
    headline: 'Red Flag Report',
    desc: 'A fast, high-level assessment to identify showstoppers before committing significant resources to a deal.',
    includes: [
      '2-3 day turnaround',
      'High-level architecture review',
      'Automated security & IP scan',
      'CTO interview',
      'Executive summary of red flags'
    ],
    ctaText: 'Request rapid assessment',
    ctaLink: '/contact?model=red-flag',
    featured: false
  },
  {
    label: 'Standard',
    badge: 'Most Comprehensive',
    headline: 'Full Due Diligence',
    desc: 'In-depth, 360-degree audit of code, architecture, infrastructure, security, and team maturity.',
    includes: [
      '7-10 day turnaround',
      'Deep code & architecture review',
      'Infrastructure & DevOps audit',
      'Team capability evaluation',
      'Detailed report & remediation roadmap'
    ],
    ctaText: 'Schedule full audit',
    ctaLink: '/contact?model=full-audit',
    featured: true
  },
  {
    label: 'Post-Deal',
    badge: null,
    headline: 'Remediation & Execution',
    desc: 'After the acquisition, we step in to execute the remediation roadmap, modernize systems, and scale the team.',
    includes: [
      'Technical debt paydown',
      'Cloud cost optimization',
      'Security patching & compliance',
      'Architecture modernization',
      'Engineering maturity coaching'
    ],
    ctaText: 'Discuss post-deal support',
    ctaLink: '/contact?model=remediation',
    featured: false
  }
];

export default function TechDueDiligencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="custom-dev-page">
        <PEHero {...heroProps} />
        
        <PECapabilities 
          title="What we assess during Due Diligence" 
          subTitle="Capabilities Focus" 
          content="We provide a holistic view of the target company's technical health, identifying risks across all technical disciplines."
          capabilities={capabilitiesData} 
        />
        
        <PEDevProcess 
          title="A rigorous, confidential audit<br /><span className=''>conducted without disrupting the target team</span>"
          subTitle="Audit Process"
          content="Our senior engineers conduct deep-dive assessments with minimal friction to the target company's daily operations."
          steps={processSteps}
        />
        
        <PEEngagementModels
          title="Audit packages tailored to your deal"
          subTitle="Engagement Models"
          desc="Whether you need a quick red-flag check for an early-stage investment or a deep compliance audit for an enterprise M&A, we have a structured model."
          engagementModels={engagementModelsData}
          pageName="Tech Due Diligence"
          sectionName="Audit Packages"
        />
        
      <CtaBand
        title="Ready to de-risk your next acquisition?"
        description="Speak with our lead technical auditors. We can start a Red Flag assessment or full Tech Due Diligence within 48 hours."
        primaryBtn={{
          text: 'Schedule an exploratory call →',
          dataCta: 'tdd-cta-primary'
        }}
        secondaryBtn={{
          text: 'Get a sample audit report',
          dataCta: 'tdd-cta-secondary',
          variant: 'link'
        }}
        trustText="Strictly confidential audits · Signed NDAs required · Reports delivered within 10 days"
        useModal={true}
        
        // Primary button modal (exploratory call)
        primaryModalTitle="Schedule an Exploratory Call"
        primaryModalDescription="Tell us about your potential deal and we'll schedule a call with our lead technical auditors to discuss your Tech Due Diligence needs."
        primaryModalFields={exploratoryCallFormFields}
        
        // Secondary button modal (sample report)
        secondaryModalTitle="Get a Sample Audit Report"
        secondaryModalDescription="Request a sample Tech Due Diligence audit report to see our comprehensive assessment approach, methodology, and deliverables."
        secondaryModalFields={sampleReportFormFields}
      />
      </div>
    </>
  );
}
