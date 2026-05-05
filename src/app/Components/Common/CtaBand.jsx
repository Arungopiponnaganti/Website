import Link from 'next/link';
import React from 'react';

const DEFAULT_TRUST = 'Typically responds within 4 business hours \u00b7 No sales pitch, just a clear plan';

export default function CtaBand({
  title,
  description,
  primaryBtn,
  secondaryBtn,
  trustText = DEFAULT_TRUST,
  bgClass = '',
}) {
  const secondaryClass = secondaryBtn?.variant === 'secondary' ? 'cd-btn-secondary' : 'cd-btn-link';

  return (
    <section className={`cd-cta-band ${bgClass}`}>
      <div className="container">
        <h2>{title}</h2>
        <p className="lead">{description}</p>

        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
          <Link
            href={primaryBtn.href}
            className="cd-btn-primary"
            data-cta={primaryBtn.dataCta}
          >
            {primaryBtn.text}
          </Link>
          {secondaryBtn && (
            <a href={secondaryBtn.href} className={secondaryClass}>
              {secondaryBtn.text}
            </a>
          )}
        </div>

        <div className="cd-cta-trust">{trustText}</div>
      </div>
    </section>
  );
}
