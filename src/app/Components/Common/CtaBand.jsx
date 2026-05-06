'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import DynamicFormModal from './DynamicFormModal';

const DEFAULT_TRUST = 'Typically responds within 4 business hours · No sales pitch, just a clear plan';

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

export default function CtaBand({
  title,
  description,
  primaryBtn,
  secondaryBtn,
  trustText = DEFAULT_TRUST,
  bgClass = '',
  useModal = false,
  modalFields = defaultFormFields,
  modalTitle = 'Get in Touch',
  modalDescription = 'Fill out the form below and we\'ll get back to you shortly.',
  modalMetadata = {},
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const secondaryClass = secondaryBtn?.variant === 'secondary' ? 'cd-btn-secondary' : 'cd-btn-link';

  const handlePrimaryClick = (e) => {
    if (useModal) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <section className={`cd-cta-band ${bgClass}`}>
        <div className="container">
          <h2>{title}</h2>
          <p className="lead">{description}</p>

          <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
            {useModal ? (
              <Link
                href="#"
                onClick={handlePrimaryClick}
                className="cd-btn-primary"
                data-cta={primaryBtn?.dataCta}
              >
                {primaryBtn?.text}
              </Link>
            ) : (
              <Link
                href={primaryBtn.href}
                className="cd-btn-primary"
                data-cta={primaryBtn?.dataCta}
              >
                {primaryBtn?.text}
              </Link>
            )}
            {secondaryBtn && (
              <a href={secondaryBtn.href} className={secondaryClass}>
                {secondaryBtn.text}
              </a>
            )}
          </div>

          <div className="cd-cta-trust">{trustText}</div>
        </div>
      </section>

      {useModal && (
        <DynamicFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={modalTitle}
          description={modalDescription}
          submitButtonText="Submit"
          fields={modalFields}
          metadata={{ ...modalMetadata, pageTitle: title }}
        />
      )}
    </>
  );
}