import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const pricingSteps = [
  {
    step: 'Step 01',
    title: 'Free scoping call',
    desc: '30 minutes. You share your goals, constraints, and timeline. We ask the right questions.',
    timeline: 'Day 1',
    icon: 'bi-telephone-fill',
  },
  {
    step: 'Step 02',
    title: 'Scope document',
    desc: 'We send a written scope — deliverables, team size, phases, and timeline — within 48 hours.',
    timeline: 'Within 48 hrs',
    icon: 'bi-file-earmark-text-fill',
  },
  {
    step: 'Step 03',
    title: 'Fixed-price proposal',
    desc: 'A clear proposal tied to the agreed scope. No hourly billing, no estimate ranges — a number you can budget against.',
    timeline: 'Within 5 days',
    icon: 'bi-receipt-cutoff',
  },
  {
    step: 'Step 04',
    title: 'You decide',
    desc: 'No pressure, no follow-up calls. Accept, revise the scope, or walk away — your call entirely.',
    timeline: 'Your timeline',
    icon: 'bi-check2-circle',
  },
];

export default function PEPricing() {
  return (
    <section
      style={{
        padding: '80px 0 40px',
        background: 'linear-gradient(135deg, #050a1e 90%, #2a0d05 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background glow accent */}
      <div
        style={{
          position: 'absolute',
          bottom: '-120px',
          right: '-120px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,60,0,0.12) 0%, rgba(255,60,0,0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          left: '-80px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,60,0,0.07) 0%, rgba(255,60,0,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionTitle
          className="text-center mb-5"
          SubTitle="Our Pricing Process"
          Title="You'll know the full cost <br /> before you commit — always"
          Content="We don't publish rates because every engagement is scoped to your exact needs. But our quoting process is fast, structured, and completely transparent."
          isDarkMode={true}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            marginTop: '48px',
          }}
          className="pe-pricing-grid"
        >
          {pricingSteps.map((s, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: '14px',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                transition: 'border-color 0.25s, background 0.25s',
                backdropFilter: 'blur(6px)',
              }}
              className="pe-pricing-step-card"
            >
              {/* Step label */}
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#ff3c00',
                }}
              >
                {s.step}
              </div>

              {/* Icon */}
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(255,60,0,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  color: '#ff3c00',
                }}
              >
                <i className={`bi ${s.icon}`}></i>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#ffffff',
                  margin: 0,
                  lineHeight: '1.3',
                }}
              >
                {s.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '14px',
                  color: '#a0aabf',
                  lineHeight: '1.65',
                  margin: 0,
                  flexGrow: 1,
                }}
              >
                {s.desc}
              </p>

              {/* Timeline badge */}
              <div style={{ marginTop: '4px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    color: '#c8cfe0',
                    fontSize: '12px',
                    fontWeight: '500',
                    padding: '5px 14px',
                    borderRadius: '99px',
                  }}
                >
                  {s.timeline}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 991px) {
          .pe-pricing-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 575px) {
          .pe-pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .pe-pricing-step-card:hover {
          border-color: rgba(255, 60, 0, 0.35) !important;
          background: rgba(255, 255, 255, 0.07) !important;
        }
      `}</style>
    </section>
  );
}
