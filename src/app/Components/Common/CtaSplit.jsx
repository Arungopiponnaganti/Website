'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import DynamicFormModal from './DynamicFormModal';

const defaultFormFields = [
  {
    label: 'Full Name',
    name: 'name',
    type: 'text',
    placeholder: 'John Smith',
    required: true,
    colSize: 6
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'john@company.com',
    required: true,
    colSize: 6
  },
  {
    label: 'Subject',
    name: 'subject',
    type: 'text',
    placeholder: 'Your Subject Here',
    required: true,
    colSize: 6
  },
  {
    label: 'Phone',
    name: 'phone',
    type: 'tel',
    placeholder: '+1 (555) 000-0000',
    required: true,
    colSize: 6
  },
  {
    label: 'Message',
    name: 'message',
    type: 'textarea',
    placeholder: 'Tell us more about your project...',
    required: false,
    colSize: 12
  },
];

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
  formSubmitBtn,
  subject,
  secondaryFormTitle,
  secondaryFormNote,
  secondaryFormFields,
  secondaryFormSubmitBtn,
  secondarySubject
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondaryModalOpen, setIsSecondaryModalOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const nameField = formFields.find(f => f.label.toLowerCase().includes('name'));
    const emailField = formFields.find(f => f.label.toLowerCase().includes('email'));

    if (nameField && !formData[nameField.label]?.trim()) {
      setSubmitStatus({ type: 'error', message: `${nameField.label} is required.` });
      return false;
    }

    if (emailField) {
      const emailValue = formData[emailField.label]?.trim();
      if (!emailValue) {
        setSubmitStatus({ type: 'error', message: `${emailField.label} is required.` });
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailValue)) {
        setSubmitStatus({ type: 'error', message: 'Please enter a valid email address.' });
        return false;
      }
    }

    for (let field of formFields) {
      if (field.required && !formData[field.label]?.trim()) {
        setSubmitStatus({ type: 'error', message: 'Please fill in all required fields.' });
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    const nameField = formFields.find(f => f.label.toLowerCase().includes('name'));
    const emailField = formFields.find(f => f.label.toLowerCase().includes('email'));
    const phoneField = formFields.find(f => f.label.toLowerCase().includes('phone'));

    const otherFields = formFields.filter(f =>
      f !== nameField && f !== emailField && f !== phoneField
    );

    const messageParts = otherFields.map(f => {
      const value = formData[f.label];
      return value ? `${f.label}: ${value}` : null;
    }).filter(Boolean);

    const apiPayload = {
      name: nameField ? formData[nameField.label] || '' : '',
      email: emailField ? formData[emailField.label] || '' : '',
      subject: subject || 'Form submission',
      phone: phoneField ? formData[phoneField.label] || '' : 'Not provided',
      message: messageParts.length > 0 ? messageParts.join('\n') : ''
    };

    const emailApi = process.env.NEXT_PUBLIC_EMAIL_PROVIDER === 'smtp' ? '/api/send-email-smtp' : '/api/send-email';

    try {
      const response = await fetch(emailApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(apiPayload)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Email sent successfully!' });
        setFormData({});
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send email. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-5" style={{ borderTop: '1px solid #e5e7eb' }}>
      <div className="container">
        <div className="row g-5 align-items-center">
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
                  <Link href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-2 py-2 px-2 rounded-2">
                    {primaryBtn.text}
                  </Link>
                )}
                {secondaryBtn && (
                  <button onClick={() => setIsSecondaryModalOpen(true)} className="btn btn-outline-dark rounded-2 py-2 px-4 fw-medium">
                    {secondaryBtn.text}
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="ps-lg-4">
              <div className="mb-4">
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#050a1e', marginBottom: '6px' }}>{formTitle}</h3>
                {formNote && <p className="mb-0" style={{ fontSize: '13px', color: '#6b7280' }}>{formNote}</p>}
              </div>

              <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
                {formFields.map((field, idx) => (
                  <div key={idx}>
                    <label htmlFor={`field-${idx}`} className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#4b5563', marginBottom: '6px' }}>
                      {field.label}
                    </label>
                    {field.type === 'select' ? (
                      <select
                        id={`field-${idx}`}
                        name={field.label}
                        className="form-select bg-light border"
                        style={{ fontSize: '14px', padding: '10px 14px' }}
                        onChange={handleChange}
                      >
                        <option value="">Select an option</option>
                        {field.options.map(opt => <option key={opt}>{opt}</option>)}
                      </select>
                    ) : (
                      <input
                        id={`field-${idx}`}
                        type={field.type}
                        name={field.label}
                        className="form-control bg-light border"
                        placeholder={field.placeholder}
                        style={{ fontSize: '14px', padding: '10px 14px' }}
                        onChange={handleChange}
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="btn btn-dark w-100 py-3 mt-2 rounded-2 fw-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SENDING...' : formSubmitBtn}
                </button>
              </form>

              {submitStatus && (
                <div className={`mt-3 p-3 rounded-2 ${submitStatus.type === 'success' ? 'bg-success text-white' : 'bg-danger text-white'}`}>
                  {submitStatus.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <DynamicFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={formTitle || 'Get in Touch'}
        description={formNote || 'Fill out the form below and we\'ll get back to you shortly.'}
        submitButtonText={formSubmitBtn || 'Submit'}
        fields={defaultFormFields}
        metadata={{ 
          subject: subject, 
          pageTitle: title,
          pageUrl: typeof window !== 'undefined' ? window.location.pathname : ''
        }}
      />

      <DynamicFormModal
        isOpen={isSecondaryModalOpen}
        onClose={() => setIsSecondaryModalOpen(false)}
        title={secondaryFormTitle || 'Book a Call'}
        description={secondaryFormNote || 'Schedule a call with us.'}
        submitButtonText={secondaryFormSubmitBtn || 'Submit'}
        fields={secondaryFormFields || defaultFormFields}
        metadata={{ 
          subject: secondarySubject || subject, 
          pageTitle: title,
          pageUrl: typeof window !== 'undefined' ? window.location.pathname : ''
        }}
      />
    </section>
  );
}
