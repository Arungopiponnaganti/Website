import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const VALUE_POINTS = [
  {
    icon: '🎯',
    title: 'Find Your Blind Spots',
    description:
      'Most teams overestimate their readiness in 2-3 dimensions while completely missing critical gaps. This assessment surfaces what you\'re not seeing—before it derails your project.',
  },
  {
    icon: '📋',
    title: 'Prioritized Roadmap',
    description:
      'Get a clear 90-day action plan based on your actual scores. Know exactly what to tackle first for maximum impact, whether it\'s data cleanup, stakeholder alignment, or governance.',
  },
  {
    icon: '⚡',
    title: 'Instant Report, No Email Required',
    description:
      'See your personalized readiness score immediately. No forms to fill, no sales calls—just results you can use right now. Save it, share it, or just take notes and move forward.',
  },
  {
    icon: '🛡️',
    title: 'Risk-Aware Recommendations',
    description:
      'Every suggestion includes risk context and effort estimates. Build confidence that you\'re tackling the right things in the right order—not just chasing trends.',
  },
];

export default function ARAValueProp() {
  return (
    <div className="ara-value-prop-section bg-white py-5 my-0">
      <div className="container py-4">
        {/* Section Title - Focused on value */}
        <div className="row">
          <div className="col-lg-10 mx-auto text-center mb-5">
            <SectionTitle
              className="text-center"
              SubTitle="Why take 5 minutes?"
              Title="Know where you stand before you start"
              Content="Most AI projects fail because teams skip the readiness check. This assessment gives you a structured, objective view of your six critical dimensions—so you can build from a position of strength, not hope."
              isDarkMode={false}
            />
          </div>
        </div>

        {/* Value Points Grid */}
        <div className="row g-4">
          {VALUE_POINTS.map((prop, index) => (
            <div key={index} className="col-lg-6 col-md-6">
              <div
                className="value-point-card h-100 p-4"
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                }}
              >
                <div className="d-flex align-items-start gap-3">
                  <div
                    className="value-point-icon flex-shrink-0"
                    style={{
                      width: '40px',
                      height: '40px',
                      background: '#f7fafc',
                      borderRadius: '8px',
                      fontSize: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {prop.icon}
                  </div>
                  <div>
                    <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: '600', color: '#2d3748' }}>
                      {prop.title}
                    </h4>
                    <p className="mb-0" style={{ fontSize: '14px', color: '#4a5568', lineHeight: '1.6' }}>
                      {prop.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Builder */}
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div
              className="trust-builder text-center p-4"
              style={{
                background: '#f8fafc',
                borderRadius: '8px',
              }}
            >
              <p className="mb-0" style={{ fontSize: '13px', color: '#4a5568' }}>
                Built by practitioners who&apos;ve delivered AI projects across startups and enterprises. We ask about the real blockers, not theoretical models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
