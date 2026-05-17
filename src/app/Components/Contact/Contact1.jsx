"use client";
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import websiteContactInfo from "../../Data/contactInfo.json";

const defaultContactInfo = {
  title: "Contact Information",
  ...websiteContactInfo
};

const ContactForm = ({
  title = 'Get in Touch',
  description = 'Fill out the form below and we\'ll get back to you shortly.',
  submitButtonText = 'Send Message',
  fields = [],
  metadata = {},
  onSuccess,
  showContactInfo = true,
  contactInfo = defaultContactInfo
}) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const initialData = {};
    fields.forEach(field => {
      initialData[field.name] = field.defaultValue || '';
    });
    setFormData(initialData);
  }, [fields]);

  const validateField = (field, value) => {
    if (field.required && !value.trim()) {
      return `${field.label} is required`;
    }
    if (field.type === 'email' && value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Please enter a valid email address';
      }
    }
    if (field.type === 'tel' && value.trim()) {
      const phoneRegex = /^[\d\s\-+()]{10,}$/;
      if (!phoneRegex.test(value)) {
        return 'Please enter a valid phone number';
      }
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    const field = fields.find(f => f.name === name);
    if (field && errors[name]) {
      const error = validateField(field, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    fields.forEach(field => {
      const error = validateField(field, formData[field.name]);
      if (error) newErrors[field.name] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    const emailApi = process.env.NEXT_PUBLIC_EMAIL_PROVIDER === 'smtp' ? '/api/send-email-smtp' : '/api/send-email';
    const payload = {
      ...formData,
      metadata: {
        ...metadata,
        submittedAt: new Date().toISOString(),
        pageUrl: typeof window !== 'undefined' ? window.location.pathname : ''
      }
    };
    try {
      const response = await fetch(emailApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you! We\'ll be in touch shortly.' });
        setFormData({});
        if (onSuccess) onSuccess();
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to submit. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field) => {
    const commonProps = {
      name: field.name,
      value: formData[field.name] || '',
      onChange: handleChange,
      placeholder: field.placeholder || '',
      className: `form-control ${errors[field.name] ? 'is-invalid' : ''}`,
      required: field.required
    };
    switch (field.type) {
      case 'select':
        return <select {...commonProps}><option value="">{field.placeholder || 'Select...'}</option>{field.options?.map((opt, i) => (<option key={i} value={opt.value || opt}>{opt.label || opt}</option>))}</select>;
      case 'textarea':
        return <textarea {...commonProps} rows={field.rows || 4} />;
      default:
        return <input {...commonProps} type={field.type} />;
    }
  };

  return (
    <div className="row g-0" style={{ display: 'flex', width: '100%', margin: 0, alignItems: 'stretch', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(255, 59, 0, 0.15)' }}>
      {showContactInfo && (
        <div
          className="col-md-4"
          style={{
            background: 'linear-gradient(135deg, #ff3b00 0%, #ff6b35 100%)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '500px'
          }}
        >
          <div style={{ position: 'relative', zIndex: 3 }}>
            <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem', letterSpacing: '-0.5px', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              {contactInfo.title}
            </h3>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.25rem' }}>Address</strong>
                  <span style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>{contactInfo.address}</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.25rem' }}>Phone</strong>
                  <span style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>{contactInfo.phone}</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.25rem' }}>Email</strong>
                  <span style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>{contactInfo.infoEmail}</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.25rem' }}>Hours</strong>
                  <span style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>{contactInfo.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className={showContactInfo ? "col-md-8" : "col-12"}
        style={{
          background: '#ffffff',
          padding: '2.5rem',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '500px'
        }}
      >
        <div style={{ position: 'relative', zIndex: 2 }}>
          {submitStatus?.type === 'success' ? (
            <div className="text-center py-5">
              <div style={{
                width: '100px',
                height: '100px',
                margin: '0 auto 1.5rem',
                background: 'linear-gradient(135deg, #ff3b00 0%, #ff6b35 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 12px 35px rgba(255, 59, 0, 0.35)'
              }}>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h4 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '0.75rem', color: '#1f2937', letterSpacing: '-0.5px' }}>Thank You!</h4>
              <p style={{ color: '#6b7280', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>{submitStatus.message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="row gy-3">
                {fields.map((field) => (
                  <div key={field.name} className={field.fullWidth || field.type === 'textarea' ? 'col-12 mb-3' : 'col-6 mb-3'}>
                    <label className="form-label" style={{
                      fontSize: '0.875rem',
                      fontWeight: '700',
                      color: '#1f2937',
                      marginBottom: '0.5rem',
                      display: 'block',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase'
                    }}>
                      {field.label}
                      {field.required && <span style={{ color: '#ff3b00', marginLeft: '6px', fontSize: '0.875rem' }}>*</span>}
                    </label>
                    {renderField(field)}
                    {errors[field.name] && (
                      <div style={{ color: '#ff3b00', fontSize: '0.85rem', marginTop: '0.5rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff3b00" strokeWidth="3">
                          <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        {errors[field.name]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {submitStatus?.type === 'error' && (
                <div style={{
                  background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
                  border: '2px solid #ffedd5',
                  borderRadius: '14px',
                  padding: '1rem',
                  marginBottom: '1.5rem',
                  color: '#c2410c',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontWeight: '600'
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff3b00" strokeWidth="3">
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <strong>{submitStatus.message}</strong>
                </div>
              )}
              <button type="submit" disabled={isSubmitting} style={{
                width: '100%',
                background: isSubmitting ? 'linear-gradient(135deg, #d1d5db 0%, #9ca3af 100%)' : 'linear-gradient(135deg, #ff3b00 0%, #ff6b35 100%)',
                color: 'white',
                border: 'none',
                padding: '1rem 1.5rem',
                borderRadius: '14px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: isSubmitting ? 'none' : '0 8px 25px rgba(255, 59, 0, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                letterSpacing: '-0.25px',
                textTransform: 'uppercase'
              }}>
                {isSubmitting ? (
                  <>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ animation: 'spin 1s linear infinite' }}>
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>{submitButtonText} <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

const Contact1 = ({ className = "" }) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const contactFields = [
    { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe', required: true },
    { name: 'email', label: 'Your Email', type: 'email', placeholder: 'john@example.com', required: true },
    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: websiteContactInfo.phone, required: true },
    { name: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?', required: true },
    { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell us more about your project...', required: true, fullWidth: true }
  ];

  return (
    <div className={`contact-area ${className}`} data-background="/assets/images/contact-bg2.png">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="section-title text-left mb-5">
              <SectionTitle
                SubTitle="CONTACT US"
                Title="Make an Online Appointment Booking<br />For Business Planning."
              ></SectionTitle>
            </div>
            <ContactForm
              title="Get in Touch"
              description="Fill out the form below and we'll get back to you shortly."
              submitButtonText="Send Message"
              fields={contactFields}
              showContactInfo={true}
              contactInfo={defaultContactInfo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact1;
