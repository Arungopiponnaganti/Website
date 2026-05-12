import React from 'react';
import Link from 'next/link';
import SectionTitle from './SectionTitle';
import './RelatedServices.css';

const RelatedServices = ({ 
  subTitle, 
  title, 
  services, 
  sectionClassName = "cd-section cd-section-light py-5 border-top",
  contentClassName = "container"
}) => {
  return (
    <section className={sectionClassName}>
      <div className={contentClassName}>
        <div className="related-services-header">
          <SectionTitle
            className="mb-5 text-center"
            SubTitle={subTitle}
            Title={title}
            Content=""
            isDarkMode={false}
          />
        </div>

        <div className="related-services-grid">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="related-services-card"
              aria-label={`Learn more about ${service.title}`}
            >
              <div className="related-services-card-content">
                <h3 className="related-services-title">{service.title}</h3>
                <p className="related-services-description">{service.desc}</p>
                <div className="related-services-link">
                  <span>Explore service</span>
                  <svg
                    className="related-services-arrow"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"/>
                    <path d="M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
