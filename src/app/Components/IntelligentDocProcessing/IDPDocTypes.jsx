'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import SectionTitle from '../Common/SectionTitle';

const TAG_COLORS = {
  Finance:    { bg: '#FAEEDA', color: '#633806' },
  Legal:      { bg: '#E1F5EE', color: '#085041' },
  Compliance: { bg: '#EEEDFE', color: '#3C3489' },
  Healthcare: { bg: '#FAECE7', color: '#712B13' },
  Operations: { bg: '#E6F1FB', color: '#0C447C' },
};

const DOC_TYPES = [
  {
    label: 'Invoices & POs',
    category: 'Finance',
    desc: 'Extract vendor details, line items, tax breakdowns, and automate 3-way matching and ERP posting.',
    fields: ['Vendor name & GSTIN', 'Invoice number & date', 'Line items with HSN codes', 'Tax breakdown (GST/IGST)', 'Payment terms & due date', 'Bank details'],
    actions: ['3-way match with PO', 'Route by amount threshold', 'Post to SAP / Tally / QuickBooks', 'Flag exceptions for review'],
    accuracy: '96–98%',
    volume: 'High · daily processing',
  },
  {
    label: 'Contracts',
    category: 'Legal',
    desc: 'Parse key clauses, deadlines, obligations, and risk signals from complex legal documents.',
    fields: ['Party names & execution date', 'Contract value & payment terms', 'Key obligations & deadlines', 'Termination clauses', 'Renewal dates & auto-renew flags', 'Liability caps & indemnity'],
    actions: ['Risk clause flagging', 'Deadline calendar extraction', 'CRM contract record update', 'Legal team routing'],
    accuracy: '91–95%',
    volume: 'Medium · batch processing',
  },
  {
    label: 'KYC / Onboarding',
    category: 'Compliance',
    desc: 'Verify identity documents and extract structured data to trigger AML screening and CRM updates.',
    fields: ['Name, DOB, address', 'ID document type & number', 'Entity type & registration', 'Director / UBO details', 'Bank account information', 'Risk classification'],
    actions: ['Identity verification trigger', 'AML screening API call', 'CRM / banking system update', 'Compliance team escalation'],
    accuracy: '93–97%',
    volume: 'Medium-high · regulated',
  },
  {
    label: 'Medical / Clinical',
    category: 'Healthcare',
    desc: 'Extract patient demographics, diagnosis codes, and lab values for EHR integration and coding support.',
    fields: ['Patient demographics', 'Diagnosis codes (ICD-10)', 'Medication details', 'Lab values & vitals', 'Physician signatures', 'Insurance details'],
    actions: ['EHR system update', 'Coding suggestion generation', 'Prior authorisation trigger', 'Clinical team routing'],
    accuracy: '89–94%',
    volume: 'High · time-critical',
  },
  {
    label: 'Logistics & Shipping',
    category: 'Operations',
    desc: 'Parse AWBs, bills of lading, and customs declarations for real-time TMS and carrier integration.',
    fields: ['Shipper & consignee details', 'AWB / tracking numbers', 'Package weights & dimensions', 'HS codes for customs', 'Country of origin', 'Dangerous goods flags'],
    actions: ['TMS system update', 'Customs declaration filing', 'Carrier API integration', 'Exception alert'],
    accuracy: '95–98%',
    volume: 'Very high · real-time',
  },
];

const ANIM_MS = 320;

export default function IDPDocTypes() {
  const [activeDoc, setActiveDoc] = useState(-1);
  const [panelAt, setPanelAt]     = useState(-1);
  const [panelOpen, setPanelOpen] = useState(false);
  const gridRef  = useRef(null);
  const timerRef = useRef(null);

  const getLastInRow = useCallback((cardIndex) => {
    if (!gridRef.current) return cardIndex;
    const cards = Array.from(gridRef.current.querySelectorAll('.cdx-card'));
    if (cardIndex >= cards.length) return cardIndex;
    const top = cards[cardIndex].getBoundingClientRect().top;
    let last = cardIndex;
    for (let i = cardIndex + 1; i < cards.length; i++) {
      if (Math.abs(cards[i].getBoundingClientRect().top - top) < 5) last = i;
      else break;
    }
    return last;
  }, []);

  useEffect(() => {
    if (activeDoc < 0 || !gridRef.current) return;
    const observer = new ResizeObserver(() => {
      const newLast = getLastInRow(activeDoc);
      setPanelAt((prev) => (prev !== newLast ? newLast : prev));
    });
    observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, [activeDoc, getLastInRow]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleCard = (i) => {
    clearTimeout(timerRef.current);

    if (activeDoc === i) {
      setPanelOpen(false);
      timerRef.current = setTimeout(() => { setActiveDoc(-1); setPanelAt(-1); }, ANIM_MS);
      return;
    }

    const newLast = getLastInRow(i);

    if (panelOpen && panelAt !== newLast) {
      setPanelOpen(false);
      timerRef.current = setTimeout(() => {
        setActiveDoc(i);
        setPanelAt(newLast);
        requestAnimationFrame(() => setPanelOpen(true));
      }, ANIM_MS);
    } else {
      setActiveDoc(i);
      setPanelAt(newLast);
      requestAnimationFrame(() => setPanelOpen(true));
    }
  };

  const panelData = DOC_TYPES[activeDoc];

  return (
    <section className="cd-section py-5 border-bottom" id="idp-doc-types">
      <div className="container py-4">
        <SectionTitle
          className="mb-4"
          SubTitle="Document types we process"
          Title="Every major document category — one unified platform"
          Content="IDP buyers usually arrive knowing their document type. Select yours to see exactly what we extract and what we trigger downstream."
          isDarkMode={false}
        />

        <div className="cdx-grid" ref={gridRef}>
          {DOC_TYPES.map((d, i) => {
            const tag = TAG_COLORS[d.category] || { bg: '#f3f4f6', color: '#6b7280' };
            return (
              <React.Fragment key={d.label}>
                <div
                  className={`cdx-card${activeDoc === i ? ' active' : ''}`}
                  onClick={() => handleCard(i)}
                >
                  <div className="cdx-tag-row">
                    <span className="cdx-tag" style={{ background: tag.bg, color: tag.color }}>
                      {d.category}
                    </span>
                    <span className="cdx-meta">Accuracy: {d.accuracy}</span>
                  </div>
                  <div className="cdx-title">{d.label}</div>
                  <div className="cdx-desc">{d.desc}</div>
                  <div className="cdx-arrow-row">
                    <span className="cdx-arrow-label">
                      {activeDoc === i ? 'Close' : 'View details'}
                    </span>
                    <svg
                      className={`cdx-arrow-icon${activeDoc === i ? ' rotated' : ''}`}
                      width="16" height="16" viewBox="0 0 16 16" fill="none"
                    >
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {panelAt === i && panelData && (
                  <div className={`cdx-detail${panelOpen ? ' open' : ''}`}>
                    <div>
                      <div className="cdx-dl-label">Fields extracted</div>
                      {panelData.fields.map((f, fi) => (
                        <div key={fi} className="cdx-dl-item">{f}</div>
                      ))}
                    </div>
                    <div>
                      <div className="cdx-dl-label">Downstream actions triggered</div>
                      {panelData.actions.map((a, ai) => (
                        <div key={ai} className="cdx-dl-item">{a}</div>
                      ))}
                    </div>
                    <div>
                      <div className="cdx-dl-label">Performance</div>
                      <div style={{ fontSize: '20px', fontWeight: '700', color: '#050a1e', padding: '6px 0', borderBottom: '1px solid #e5e7eb', marginBottom: '8px' }}>
                        {panelData.accuracy}
                      </div>
                      <div className="cdx-dl-item" style={{ fontWeight: '600', color: '#050a1e', borderBottom: 'none' }}>
                        Extraction accuracy
                      </div>
                      <div style={{ marginTop: '16px' }}>
                        <div className="cdx-dl-label">Processing volume</div>
                        <div className="cdx-dl-item" style={{ borderBottom: 'none' }}>
                          {panelData.volume}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
