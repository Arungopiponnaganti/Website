'use client';
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const DynamicFormModal = ({
  isOpen,
  onClose,
  title = 'Get in Touch',
  description = 'Fill out the form below and we\'ll get back to you shortly.',
  submitButtonText = 'Submit',
  fields = [],
  metadata = {},
  quizAnswers = [],
  onSuccess
}) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      const initialData = {};
      fields.forEach(field => {
        initialData[field.name] = field.defaultValue || '';
      });
      setFormData(initialData);
      setErrors({});
      setSubmitStatus(null);
    }
  }, [isOpen, fields]);

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

    if (field.minLength && value.trim().length < field.minLength) {
      return `${field.label} must be at least ${field.minLength} characters`;
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
      },
      quizAnswers: quizAnswers
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
        return (
          <select {...commonProps}>
            <option value="">{field.placeholder || 'Select...'}</option>
            {field.options?.map((opt, i) => (
              <option key={i} value={opt.value || opt}>{opt.label || opt}</option>
            ))}
          </select>
        );
      case 'textarea':
        return (
          <textarea
            {...commonProps}
            rows={field.rows || 4}
          />
        );
      case 'date':
        return (
          <input
            {...commonProps}
            type="date"
            style={{
              width: '100%',
              padding: '0.875rem 1rem',
              border: errors[field.name] ? '2px solid #ef4444' : '2px solid #e2e8f0',
              borderRadius: '12px',
              fontSize: '1rem',
              color: '#334155',
              backgroundColor: 'white',
              transition: 'all 0.2s ease',
              cursor: 'pointer'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#667eea';
              e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = errors[field.name] ? '#ef4444' : '#e2e8f0';
              e.target.style.boxShadow = 'none';
            }}
          />
        );
      case 'datetime-local':
        return (
          <input
            {...commonProps}
            type="datetime-local"
            style={{
              width: '100%',
              padding: '0.875rem 1rem',
              border: errors[field.name] ? '2px solid #ef4444' : '2px solid #e2e8f0',
              borderRadius: '12px',
              fontSize: '1rem',
              color: '#334155',
              backgroundColor: 'white',
              transition: 'all 0.2s ease',
              cursor: 'pointer'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#667eea';
              e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = errors[field.name] ? '#ef4444' : '#e2e8f0';
              e.target.style.boxShadow = 'none';
            }}
          />
        );
      default:
        return <input {...commonProps} type={field.type} />;
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <div
      className="modal fade show"
      style={{
        display: 'block',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(4px)',
        animation: 'fadeIn 0.3s ease-out',
        zIndex: 99999,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onClick={onClose}
    >
      <div
      className="modal-dialog modal-dialog-centered"
      style={{ maxWidth: '600px', margin: '1.75rem auto', position: 'relative', zIndex: 10000 }}
      onClick={(e) => e.stopPropagation()}
    >
        <div 
          className="modal-content"
          style={{
            border: 'none',
            borderRadius: '20px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            overflow: 'hidden',
            animation: 'slideUp 0.4s ease-out'
          }}
        >
          <div 
            className=""
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              padding: '2rem 2rem 1.5rem',
              position: 'relative'
            }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className='dynamic-form-modal-close-btn'
              onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
              onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
            >
              ×
            </button>
            <h5 
              className="modal-title"
              style={{
                color: 'white',
                fontSize: '1.75rem',
                fontWeight: '700',
                marginBottom: '0.5rem',
                letterSpacing: '-0.5px'
              }}
            >
              {title}
            </h5>
            <p 
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.95rem',
                marginBottom: '0',
                fontWeight: '400'
              }}
            >
              {description}
            </p>
          </div>
          <div className="modal-body" style={{ padding: '2rem' }}>
            {submitStatus?.type === 'success' ? (
              <div 
                className="text-center py-4"
                style={{ animation: 'fadeIn 0.5s ease-out' }}
              >
                <div 
                  className="mb-4"
                  style={{
                    width: '100px',
                    height: '100px',
                    margin: '0 auto',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'scaleIn 0.5s ease-out'
                  }}
                >
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4 
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '0.75rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Thank You!
                </h4>
                <p 
                  style={{
                    color: '#64748b',
                    fontSize: '1rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  {submitStatus.message}
                </p>
                <button
                  onClick={onClose}
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '0.75rem 2rem',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
                  }}
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="row">
                  {fields.map((field, index) => (
                    <div key={field.name} className={`col-lg-${field.colSize || 12} mb-4`}>
                      <label 
                        className="form-label"
                        style={{
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          color: '#334155',
                          marginBottom: '0.5rem',
                          display: 'block'
                        }}
                      >
                        {field.label}
                        {field.required && <span style={{ color: '#ef4444', marginLeft: '4px' }}>*</span>}
                      </label>
                      {field.type === 'select' ? (
                        <select
                          name={field.name}
                          value={formData[field.name] || ''}
                          onChange={handleChange}
                          required={field.required}
                          style={{
                            width: '100%',
                            padding: '0.875rem 1rem',
                            border: errors[field.name] ? '2px solid #ef4444' : '2px solid #e2e8f0',
                            borderRadius: '12px',
                            fontSize: '1rem',
                            color: '#334155',
                            backgroundColor: 'white',
                            transition: 'all 0.2s ease',
                            cursor: 'pointer'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#667eea';
                            e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = errors[field.name] ? '#ef4444' : '#e2e8f0';
                            e.target.style.boxShadow = 'none';
                          }}
                        >
                          <option value="">{field.placeholder || 'Select...'}</option>
                          {field.options?.map((opt, i) => (
                            <option key={i} value={opt.value || opt}>{opt.label || opt}</option>
                          ))}
                        </select>
                      ) : field.type === 'textarea' ? (
                        <textarea
                          name={field.name}
                          value={formData[field.name] || ''}
                          onChange={handleChange}
                          placeholder={field.placeholder || ''}
                          rows={field.rows || 4}
                          required={field.required}
                          style={{
                            width: '100%',
                            padding: '0.875rem 1rem',
                            border: errors[field.name] ? '2px solid #ef4444' : '2px solid #e2e8f0',
                            borderRadius: '12px',
                            fontSize: '1rem',
                            color: '#334155',
                            backgroundColor: 'white',
                            transition: 'all 0.2s ease',
                            resize: 'vertical',
                            fontFamily: 'inherit'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#667eea';
                            e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = errors[field.name] ? '#ef4444' : '#e2e8f0';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                       ) : (
                         <input
                           type={field.type}
                           name={field.name}
                           value={formData[field.name] || ''}
                           onChange={handleChange}
                           placeholder={field.placeholder || ''}
                           required={field.required}
                           readOnly={field.readOnly}
                           style={{
                             width: '100%',
                             padding: '0.875rem 1rem',
                             border: errors[field.name] ? '2px solid #ef4444' : '2px solid #e2e8f0',
                             borderRadius: '12px',
                             fontSize: '1rem',
                             color: field.readOnly ? '#64748b' : '#334155',
                             backgroundColor: field.readOnly ? '#f8fafc' : 'white',
                             transition: 'all 0.2s ease',
                             cursor: field.readOnly ? 'not-allowed' : 'text'
                           }}
                           onFocus={(e) => {
                             if (!field.readOnly) {
                               e.target.style.borderColor = '#667eea';
                               e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                             }
                           }}
                           onBlur={(e) => {
                             if (!field.readOnly) {
                               e.target.style.borderColor = errors[field.name] ? '#ef4444' : '#e2e8f0';
                               e.target.style.boxShadow = 'none';
                             }
                           }}
                         />
                       )}
                       {field.readOnlyMessage && (
                         <div 
                           style={{
                             color: '#64748b',
                             fontSize: '0.8rem',
                             marginTop: '0.5rem',
                             fontWeight: '400',
                             fontStyle: 'italic'
                           }}
                         >
                           {field.readOnlyMessage}
                         </div>
                       )}
                      {errors[field.name] && (
                        <div 
                          style={{
                            color: '#ef4444',
                            fontSize: '0.85rem',
                            marginTop: '0.5rem',
                            fontWeight: '500'
                          }}
                        >
                          {errors[field.name]}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {submitStatus?.type === 'error' && (
                  <div 
                    style={{
                      background: '#fef2f2',
                      border: '1px solid #fecaca',
                      borderRadius: '12px',
                      padding: '1rem',
                      marginBottom: '1.5rem',
                      color: '#dc2626',
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    {submitStatus.message}
                  </div>
                )}
                <div className="d-flex gap-3 mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      flex: 1,
                      background: isSubmitting 
                        ? '#94a3b8' 
                        : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '1rem 2rem',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: isSubmitting 
                        ? 'none' 
                        : '0 4px 15px rgba(102, 126, 234, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.5)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
                      }
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg 
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                          style={{ animation: 'spin 1s linear infinite' }}
                        >
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        {submitButtonText}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={isSubmitting}
                    style={{
                      padding: '1rem 2rem',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      background: 'white',
                      color: '#64748b',
                      border: '2px solid #e2e8f0'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.target.style.borderColor = '#cbd5e1';
                        e.target.style.background = '#f8fafc';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        e.target.style.borderColor = '#e2e8f0';
                        e.target.style.background = 'white';
                      }
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes scaleIn {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default DynamicFormModal;
