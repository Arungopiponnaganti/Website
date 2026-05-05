'use client';
import Link from 'next/link';
import React from 'react';

export default function CtaSplit({
  tag,
  title,
  description,
  items,
  primaryBtn,
  secondaryBtn,
  formTitle,
  formNote,
  formFields,
  formSubmitBtn
}) {
  return (
    <section className="py-5" style={{ borderTop: '1px solid #e5e7eb' }}>
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Left Column */}
          <div className="col-lg-6" style={{ borderRight: '1px solid #e5e7eb' }}>
            <div className="pe-lg-4">
              {tag && <div className="di-section-label mb-2">{tag}</div>}
              <h2 className="di-section-title mb-3" style={{ fontSize: 'clamp(28px, 3vw, 36px)' }}>
                {title}
              </h2>
              <p className="di-section-subtitle mb-4">{description}</p>
              
              {items && items.length > 0 && (
                <div className="d-flex flex-column gap-2 mb-4">
                  {items.map((item, idx) => (
                    <div key={idx} className="d-flex align-items-center gap-2" style={{ fontSize: '14px', color: '#6b7280' }}>
                      <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(16,185,129,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#10b981', flexShrink: 0 }}>✓</div>
                      {item}
                    </div>
                  ))}
                </div>
              )}

              <div className="d-flex flex-wrap gap-3">
                {primaryBtn && (
                  <Link href={primaryBtn.href} className="btn-2 py-2 px-2 rounded-2">
                    {primaryBtn.text}
                  </Link>
                )}
                {secondaryBtn && (
                  <Link href={secondaryBtn.href} className="btn btn-outline-dark rounded-2 py-2 px-4 fw-medium">
                    {secondaryBtn.text}
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="col-lg-6">
            <div className="ps-lg-4">
              <div className="mb-4">
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#050a1e', marginBottom: '6px' }}>{formTitle}</h3>
                {formNote && <p className="mb-0" style={{ fontSize: '13px', color: '#6b7280' }}>{formNote}</p>}
              </div>

              <form className="d-flex flex-column gap-3" onSubmit={(e) => e.preventDefault()}>
                {formFields.map((field, idx) => (
                  <div key={idx}>
                    <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#4b5563', marginBottom: '6px' }}>
                      {field.label}
                    </label>
                    {field.type === 'select' ? (
                      <select className="form-select bg-light border" style={{ fontSize: '14px', padding: '10px 14px' }}>
                        {field.options.map(opt => <option key={opt}>{opt}</option>)}
                      </select>
                    ) : (
                      <input type={field.type} className="form-control bg-light border" placeholder={field.placeholder} style={{ fontSize: '14px', padding: '10px 14px' }} />
                    )}
                  </div>
                ))}
                
                <button type="submit" className="btn btn-dark w-100 py-3 mt-2 rounded-2 fw-semibold">
                  {formSubmitBtn}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
