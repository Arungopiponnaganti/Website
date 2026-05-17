"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import websiteContactInfo from "../../Data/contactInfo.json";

const defaultContactInfo = {
  title: "Contact Information",
  ...websiteContactInfo,
};

const DynamicFormModal = ({
  isOpen,
  onClose,
  title = "Get in Touch",
  description = "Fill out the form below and we'll get back to you shortly.",
  submitButtonText = "Submit",
  fields = [],
  metadata = {},
  quizAnswers = [],
  onSuccess,
  showContactInfo = true,
  contactInfo = defaultContactInfo,
}) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      const initialData = {};
      fields.forEach((field) => {
        initialData[field.name] = field.defaultValue || "";
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

    if (field.type === "email" && value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
      }
    }

    if (field.type === "tel" && value.trim()) {
      const phoneRegex = /^[\d\s\-+()]{10,}$/;
      if (!phoneRegex.test(value)) {
        return "Please enter a valid phone number";
      }
    }

    if (field.minLength && value.trim().length < field.minLength) {
      return `${field.label} must be at least ${field.minLength} characters`;
    }

    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const field = fields.find((f) => f.name === name);
    if (field && errors[name]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    fields.forEach((field) => {
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

    const emailApi =
      process.env.NEXT_PUBLIC_EMAIL_PROVIDER === "smtp"
        ? "/api/send-email-smtp"
        : "/api/send-email";

    const payload = {
      ...formData,
      metadata: {
        ...metadata,
        submittedAt: new Date().toISOString(),
        pageUrl: typeof window !== "undefined" ? window.location.pathname : "",
      },
      quizAnswers: quizAnswers,
    };

    try {
      const response = await fetch(emailApi, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! We'll be in touch shortly.",
        });
        setFormData({});
        if (onSuccess) onSuccess();
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to submit. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field) => {
    const commonProps = {
      name: field.name,
      value: formData[field.name] || "",
      onChange: handleChange,
      placeholder: field.placeholder || "",
      className: `form-control ${errors[field.name] ? "is-invalid" : ""}`,
      required: field.required,
    };

    switch (field.type) {
      case "select":
        return (
          <select {...commonProps}>
            <option value="">{field.placeholder || "Select..."}</option>
            {field.options?.map((opt, i) => (
              <option key={i} value={opt.value || opt}>
                {opt.label || opt}
              </option>
            ))}
          </select>
        );
      case "textarea":
        return <textarea {...commonProps} rows={field.rows || 4} />;
      case "date":
        return (
          <input
            {...commonProps}
            type="date"
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              border: errors[field.name]
                ? "2px solid #ff3b00"
                : "2px solid #e5e7eb",
              borderRadius: "10px",
              fontSize: "1rem",
              color: "#374151",
              backgroundColor: "white",
              transition: "all 0.2s ease",
              cursor: "pointer",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#ff3b00";
              e.target.style.boxShadow = "0 0 0 3px rgba(255, 59, 0, 0.1)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = errors[field.name]
                ? "#ff3b00"
                : "#e5e7eb";
              e.target.style.boxShadow = "none";
            }}
          />
        );
      case "datetime-local":
        return (
          <input
            {...commonProps}
            type="datetime-local"
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              border: errors[field.name]
                ? "2px solid #ff3b00"
                : "2px solid #e5e7eb",
              borderRadius: "10px",
              fontSize: "1rem",
              color: "#374151",
              backgroundColor: "white",
              transition: "all 0.2s ease",
              cursor: "pointer",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#ff3b00";
              e.target.style.boxShadow = "0 0 0 3px rgba(255, 59, 0, 0.1)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = errors[field.name]
                ? "#ff3b00"
                : "#e5e7eb";
              e.target.style.boxShadow = "none";
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
        display: "block",
        backgroundColor: "rgba(255, 59, 0, 0.15)",
        backdropFilter: "blur(8px)",
        animation: "fadeIn 0.3s ease-out",
        zIndex: 99999,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflowY: "auto",
      }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        style={{
          maxWidth: "1200px",
          margin: "1.75rem auto",
          position: "relative",
          zIndex: 10000,
          maxHeight: "calc(100vh - 3.5rem)",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="modal-content"
          style={{
            border: "none",
            borderRadius: "20px",
            boxShadow: "0 30px 60px rgba(255, 59, 0, 0.3)",
            overflow: "auto",
            animation: "slideUp 0.4s ease-out",
            position: "relative",
            maxHeight: "calc(100vh - 3.5rem)",
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
          }}
        >
          {/* Decorative elements */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "60px",
              height: "60px",
              background: "linear-gradient(135deg, #ff3b00 0%, #ff6b35 100%)",
              borderRadius: "50%",
              opacity: 0.1,
              zIndex: 1,
              display: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              left: "40px",
              width: "120px",
              height: "120px",
              background: "linear-gradient(135deg, #ff3b00 0%, #ff6b35 100%)",
              borderRadius: "50%",
              opacity: 0.05,
              zIndex: 1,
              display: "none",
            }}
          />

          <div
            className="row g-0"
            style={{
              display: "flex",
              position: "relative",
              zIndex: 2,
              width: "100%",
              margin: 0,
              alignItems: "stretch",
            }}
          >
            {/* Left Side - Contact Info */}
            {showContactInfo && (
              <div
                className="col-md-4"
                style={{
                  background:
                    "linear-gradient(135deg, #ff3b00 0%, #ff6b35 100%)",
                  padding: "2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  color: "white",
                  position: "relative",
                  overflow: "hidden",
                  minHeight: "200px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    opacity: 0.3,
                  }}
                />
                <div style={{ position: "relative", zIndex: 3 }}>
                  <h3
                    className="text-white"
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "800",
                      marginBottom: "1.5rem",
                      letterSpacing: "-0.5px",
                      textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    }}
                  >
                    {contactInfo.title}
                  </h3>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <div
                      className="contact-info-item"
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <div
                        className="info-icon"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "10px",
                          background: "rgba(255, 255, 255, 0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div className="info-text">
                        <strong
                          style={{
                            display: "block",
                            fontSize: "0.85rem",
                            opacity: 0.8,
                            marginBottom: "0.25rem",
                          }}
                        >
                          Phone
                        </strong>
                        <span style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
                          {contactInfo.phone}
                        </span>
                      </div>
                    </div>
                    <div
                      className="contact-info-item"
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <div
                        className="info-icon"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "10px",
                          background: "rgba(255, 255, 255, 0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </div>
                      <div className="info-text">
                        <strong
                          style={{
                            display: "block",
                            fontSize: "0.85rem",
                            opacity: 0.8,
                            marginBottom: "0.25rem",
                          }}
                        >
                          Email
                        </strong>
                        <span style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
                          {contactInfo.email}
                        </span>
                      </div>
                    </div>
                    <div
                      className="contact-info-item"
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <div
                        className="info-icon"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "10px",
                          background: "rgba(255, 255, 255, 0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      </div>
                      <div className="info-text">
                        <strong
                          style={{
                            display: "block",
                            fontSize: "0.85rem",
                            opacity: 0.8,
                            marginBottom: "0.25rem",
                          }}
                        >
                          Hours
                        </strong>
                        <span style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
                          {contactInfo.hours}
                        </span>
                      </div>
                    </div>
                    <div
                      className="contact-info-item"
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <div
                        className="info-icon"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "10px",
                          background: "rgba(255, 255, 255, 0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div className="info-text">
                        <strong
                          style={{
                            display: "block",
                            fontSize: "0.85rem",
                            opacity: 0.8,
                            marginBottom: "0.25rem",
                          }}
                        >
                          Address
                        </strong>
                        <span style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
                          {contactInfo.address}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Right Side - Form */}
            <div
              className={showContactInfo ? "col-md-8" : "col-12"}
              style={{
                background: "#ffffff",
                padding: "2.5rem",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                minHeight: "200px",
              }}
            >
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="dynamic-form-modal-close-btn"
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  width: "48px",
                  height: "48px",
                  border: "none",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #ff3b00 0%, #ff6b35 100%)",
                  color: "#fff",
                  fontSize: "1.75rem",
                  lineHeight: "1",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 25px rgba(255, 59, 0, 0.35)",
                  transition: "all 0.3s ease",
                  zIndex: 10,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "rotate(90deg) scale(1.1)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(255, 59, 0, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "rotate(0deg) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(255, 59, 0, 0.35)";
                }}
              >
                ×
              </button>

              <div style={{ position: "relative", zIndex: 2 }}>
                <div style={{ marginBottom: "2rem", paddingRight: "60px" }}>
                  <h2
                    style={{
                      fontSize: "2rem",
                      fontWeight: "800",
                      marginBottom: "0.75rem",
                      lineHeight: "1.2",
                      background:
                        "linear-gradient(135deg, #ff3b00 0%, #ff6b35 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {title}
                  </h2>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "1rem",
                      margin: 0,
                      lineHeight: "1.6",
                      fontWeight: "400",
                    }}
                  >
                    {description}
                  </p>
                </div>
                {submitStatus?.type === "success" ? (
                  <div
                    className="text-center py-5"
                    style={{ animation: "fadeIn 0.5s ease-out" }}
                  >
                    <div
                      className="mb-4"
                      style={{
                        width: "100px",
                        height: "100px",
                        margin: "0 auto 1.5rem",
                        background:
                          "linear-gradient(135deg, #ff3b00 0%, #ff6b35 100%)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        animation: "scaleIn 0.5s ease-out",
                        boxShadow: "0 12px 35px rgba(255, 59, 0, 0.35)",
                      }}
                    >
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h4
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: "800",
                        marginBottom: "0.75rem",
                        color: "#1f2937",
                        letterSpacing: "-0.5px",
                      }}
                    >
                      Thank You!
                    </h4>
                    <p
                      style={{
                        color: "#6b7280",
                        fontSize: "1.1rem",
                        marginBottom: "2rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {submitStatus.message}
                    </p>
                    <button
                      onClick={onClose}
                      style={{
                        background:
                          "linear-gradient(135deg, #ff3b00 0%, #ff6b35 100%)",
                        color: "white",
                        border: "none",
                        padding: "1rem 2.5rem",
                        borderRadius: "14px",
                        fontSize: "1.1rem",
                        fontWeight: "700",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        boxShadow: "0 8px 25px rgba(255, 59, 0, 0.3)",
                        letterSpacing: "-0.25px",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "translateY(-3px)";
                        e.target.style.boxShadow =
                          "0 12px 35px rgba(255, 59, 0, 0.45)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow =
                          "0 8px 25px rgba(255, 59, 0, 0.3)";
                      }}
                    >
                      Awesome!
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-3">
                      {fields.map((field, index) => (
                        <div
                          key={field.name}
                          className={
                            field.fullWidth || field.type === "textarea"
                              ? `col-12 mb-3`
                              : `col-6 mb-3`
                          }
                        >
                          <label
                            className="form-label"
                            style={{
                              fontSize: "0.875rem",
                              fontWeight: "700",
                              color: "#1f2937",
                              marginBottom: "0.5rem",
                              display: "block",
                              letterSpacing: "0.5px",
                              textTransform: "uppercase",
                            }}
                          >
                            {field.label}
                            {field.required && (
                              <span
                                style={{
                                  color: "#ff3b00",
                                  marginLeft: "6px",
                                  fontSize: "0.875rem",
                                }}
                              >
                                *
                              </span>
                            )}
                          </label>
                          {field.type === "select" ? (
                            <select
                              name={field.name}
                              value={formData[field.name] || ""}
                              onChange={handleChange}
                              required={field.required}
                              style={{
                                width: "100%",
                                padding: "0.875rem 1.25rem",
                                border: errors[field.name]
                                  ? "3px solid #ff3b00"
                                  : "3px solid #e5e7eb",
                                borderRadius: "14px",
                                fontSize: "1rem",
                                color: "#374151",
                                backgroundColor: "#ffffff",
                                transition: "all 0.3s ease",
                                cursor: "pointer",
                                boxShadow: "0 4px 15px rgba(255, 59, 0, 0.08)",
                                outline: "none",
                                fontWeight: "600",
                                minHeight: "50px",
                              }}
                              onFocus={(e) => {
                                e.target.style.borderColor = "#ff3b00";
                                e.target.style.boxShadow =
                                  "0 0 0 4px rgba(255, 59, 0, 0.12)";
                                e.target.style.transform = "translateY(-2px)";
                              }}
                              onBlur={(e) => {
                                e.target.style.borderColor = errors[field.name]
                                  ? "#ff3b00"
                                  : "#e5e7eb";
                                e.target.style.boxShadow =
                                  "0 4px 15px rgba(255, 59, 0, 0.08)";
                                e.target.style.transform = "translateY(0)";
                              }}
                            >
                              <option value="">
                                {field.placeholder || "Choose an option..."}
                              </option>
                              {field.options?.map((opt, i) => (
                                <option key={i} value={opt.value || opt}>
                                  {opt.label || opt}
                                </option>
                              ))}
                            </select>
                          ) : field.type === "textarea" ? (
                            <textarea
                              name={field.name}
                              value={formData[field.name] || ""}
                              onChange={handleChange}
                              placeholder={field.placeholder || ""}
                              rows={field.rows || 3}
                              required={field.required}
                              style={{
                                width: "100%",
                                padding: "0.875rem 1.25rem",
                                border: errors[field.name]
                                  ? "3px solid #ff3b00"
                                  : "3px solid #e5e7eb",
                                borderRadius: "14px",
                                fontSize: "1rem",
                                color: "#374151",
                                backgroundColor: "#ffffff",
                                transition: "all 0.3s ease",
                                resize: "vertical",
                                fontFamily: "inherit",
                                boxShadow: "0 4px 15px rgba(255, 59, 0, 0.08)",
                                outline: "none",
                                fontWeight: "600",
                                minHeight: "100px",
                              }}
                              onFocus={(e) => {
                                e.target.style.borderColor = "#ff3b00";
                                e.target.style.boxShadow =
                                  "0 0 0 4px rgba(255, 59, 0, 0.12)";
                                e.target.style.transform = "translateY(-2px)";
                              }}
                              onBlur={(e) => {
                                e.target.style.borderColor = errors[field.name]
                                  ? "#ff3b00"
                                  : "#e5e7eb";
                                e.target.style.boxShadow =
                                  "0 4px 15px rgba(255, 59, 0, 0.08)";
                                e.target.style.transform = "translateY(0)";
                              }}
                            />
                          ) : (
                            <input
                              type={field.type}
                              name={field.name}
                              value={formData[field.name] || ""}
                              onChange={handleChange}
                              placeholder={field.placeholder || ""}
                              required={field.required}
                              readOnly={field.readOnly}
                              style={{
                                width: "100%",
                                padding: "0.875rem 1.25rem",
                                border: errors[field.name]
                                  ? "3px solid #ff3b00"
                                  : "3px solid #e5e7eb",
                                borderRadius: "14px",
                                fontSize: "1rem",
                                color: field.readOnly ? "#6b7280" : "#374151",
                                backgroundColor: field.readOnly
                                  ? "#f9fafb"
                                  : "#ffffff",
                                transition: "all 0.3s ease",
                                cursor: field.readOnly ? "not-allowed" : "text",
                                boxShadow: "0 4px 15px rgba(255, 59, 0, 0.08)",
                                outline: "none",
                                fontWeight: "600",
                                minHeight: "50px",
                              }}
                              onFocus={(e) => {
                                if (!field.readOnly) {
                                  e.target.style.borderColor = "#ff3b00";
                                  e.target.style.boxShadow =
                                    "0 0 0 4px rgba(255, 59, 0, 0.12)";
                                  e.target.style.transform = "translateY(-2px)";
                                }
                              }}
                              onBlur={(e) => {
                                if (!field.readOnly) {
                                  e.target.style.borderColor = errors[
                                    field.name
                                  ]
                                    ? "#ff3b00"
                                    : "#e5e7eb";
                                  e.target.style.boxShadow =
                                    "0 4px 15px rgba(255, 59, 0, 0.08)";
                                  e.target.style.transform = "translateY(0)";
                                }
                              }}
                            />
                          )}
                          {field.readOnlyMessage && (
                            <div
                              style={{
                                color: "#64748b",
                                fontSize: "1rem",
                                marginTop: "1rem",
                                fontWeight: "500",
                                fontStyle: "italic",
                                background:
                                  "linear-gradient(135deg, rgba(255, 59, 0, 0.05) 0%, rgba(255, 107, 53, 0.05) 100%)",
                                padding: "1rem 1.25rem",
                                borderRadius: "12px",
                                borderLeft: "4px solid #ff3b00",
                                marginTop: "1.5rem",
                              }}
                            >
                              {field.readOnlyMessage}
                            </div>
                          )}
                          {errors[field.name] && (
                            <div
                              style={{
                                color: "#ff3b00",
                                fontSize: "0.85rem",
                                marginTop: "0.5rem",
                                fontWeight: "600",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                              }}
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ff3b00"
                                strokeWidth="3"
                              >
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                              </svg>
                              {errors[field.name]}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    {submitStatus?.type === "error" && (
                      <div
                        style={{
                          background:
                            "linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)",
                          border: "2px solid #ffedd5",
                          borderRadius: "14px",
                          padding: "1rem",
                          marginBottom: "1.5rem",
                          color: "#c2410c",
                          fontSize: "1rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          boxShadow: "0 4px 15px rgba(255, 59, 0, 0.1)",
                          fontWeight: "600",
                        }}
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#ff3b00"
                          strokeWidth="3"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <strong>{submitStatus.message}</strong>
                      </div>
                    )}
                    <div className="d-flex gap-3 mt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                          flex: 1,
                          background: isSubmitting
                            ? "linear-gradient(135deg, #d1d5db 0%, #9ca3af 100%)"
                            : "linear-gradient(135deg, #ff3b00 0%, #ff6b35 100%)",
                          color: "white",
                          border: "none",
                          padding: "1rem 1.5rem",
                          borderRadius: "14px",
                          fontSize: "1rem",
                          fontWeight: "700",
                          cursor: isSubmitting ? "not-allowed" : "pointer",
                          transition: "all 0.3s ease",
                          boxShadow: isSubmitting
                            ? "none"
                            : "0 8px 25px rgba(255, 59, 0, 0.35)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.75rem",
                          letterSpacing: "-0.25px",
                          position: "relative",
                          overflow: "hidden",
                          textTransform: "uppercase",
                        }}
                        onMouseEnter={(e) => {
                          if (!isSubmitting) {
                            e.target.style.transform = "translateY(-2px)";
                            e.target.style.boxShadow =
                              "0 12px 30px rgba(255, 59, 0, 0.45)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSubmitting) {
                            e.target.style.transform = "translateY(0)";
                            e.target.style.boxShadow =
                              "0 8px 25px rgba(255, 59, 0, 0.35)";
                          }
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              style={{ animation: "spin 1s linear infinite" }}
                            >
                              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                            </svg>
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <span>{submitButtonText}</span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
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
                          padding: "1rem 1.5rem",
                          borderRadius: "14px",
                          fontSize: "1rem",
                          fontWeight: "700",
                          cursor: isSubmitting ? "not-allowed" : "pointer",
                          transition: "all 0.3s ease",
                          background:
                            "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
                          color: "#6b7280",
                          border: "2px solid #e5e7eb",
                          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.06)",
                          letterSpacing: "-0.25px",
                          textTransform: "uppercase",
                        }}
                        onMouseEnter={(e) => {
                          if (!isSubmitting) {
                            e.target.style.borderColor = "#ff3b00";
                            e.target.style.background =
                              "linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)";
                            e.target.style.color = "#ff3b00";
                            e.target.style.transform = "translateY(-2px)";
                            e.target.style.boxShadow =
                              "0 8px 20px rgba(255, 59, 0, 0.2)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSubmitting) {
                            e.target.style.borderColor = "#e5e7eb";
                            e.target.style.background =
                              "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)";
                            e.target.style.color = "#6b7280";
                            e.target.style.transform = "translateY(0)";
                            e.target.style.boxShadow =
                              "0 4px 15px rgba(0, 0, 0, 0.06)";
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
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default DynamicFormModal;
