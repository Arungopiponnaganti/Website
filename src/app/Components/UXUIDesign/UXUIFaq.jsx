'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SectionTitle from '../Common/SectionTitle';

const faqs = [
  {
    q: 'Do we need to have a developer team ready before starting design?',
    a: "No — and we'd actually encourage starting design before development. Having validated, tested designs before development begins prevents the costly UX rework that happens when developers build from requirements alone. We can start as soon as you have a brief and a stakeholder to collaborate with.",
  },
  {
    q: 'What tools do you use and will we have access to the source files?',
    a: "We design in Figma — the industry standard for collaborative UI design. You get full access to the live Figma file throughout the engagement, not just at the end. All source files transfer to you completely at handoff. We also provide Figma Dev Mode specs so your developers have everything they need without re-measuring pixels.",
  },
  {
    q: 'How do you handle stakeholder feedback and revision rounds?',
    a: "Each design phase includes structured feedback rounds with a clear process: we present, you consolidate feedback internally, and we iterate. We agree the number of revision rounds upfront in the scope document — typically two rounds per major phase. This prevents the endless revision loop that plagues engagements without process discipline.",
  },
  {
    q: 'Can you design for both web and mobile in the same engagement?',
    a: "Yes — and we recommend it. Designing for both surfaces in parallel ensures a consistent design system rather than mobile being retrofitted from web screens. We use responsive design principles and component-based systems that scale across breakpoints from the start.",
  },
  {
    q: 'How involved does our team need to be during the design process?',
    a: "The most valuable input comes at the beginning and at review gates — not day-to-day. We run a kickoff workshop, then work independently with regular check-ins (typically weekly). We need a single point of contact on your side who can consolidate stakeholder feedback. Beyond that, we keep the process from becoming a calendar burden for your team.",
  },
];

export default function UXUIFaq() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section style={{ background: '#fff', padding: '60px 0' }}>
      <div className="container">
        <div className="row">

          {/* Left sticky sidebar */}
          <div className="col-lg-4 col-md-12" >
            <div style={{ position: 'sticky', top: '120px' }}>
              <SectionTitle
                SubTitle="Common questions"
                Title="What clients ask before starting a design engagement"
                className="text-left"
                isDarkMode={false}
              />
              <p style={{ fontSize: '13.5px', color: '#6c757d', lineHeight: '1.65', marginBottom: '24px' }}>
                Not seeing what you need? Book a 30-minute discovery call — we&apos;ll answer everything specific to your project.
              </p>
              {/* <Link
                href="/contact?service=ux-ui-design"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '10px 20px', borderRadius: '8px',
                  background: '#1a1e2d', color: '#fff',
                  fontSize: '13px', fontWeight: '700', textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
              >
                <i className="bi bi-calendar2-check" style={{ fontSize: '13px' }} />
                Book a call
              </Link> */}
            </div>
          </div>

          {/* Right accordion */}
          <div className="col-lg-7 offset-lg-1 col-md-12">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {faqs.map((faq, i) => {
                const isOpen = openIdx === i;
                return (
                  <div
                    key={i}
                    style={{
                      borderBottom: '1px solid #ebebeb',
                      cursor: 'pointer',
                    }}
                    onClick={() => toggle(i)}
                  >
                    {/* Question row */}
                    <div style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      gap: '16px', padding: '18px 0',
                    }}>
                      <span style={{ fontSize: '15px', fontWeight: '600', color: '#1a1e2d', lineHeight: '1.4' }}>
                        {faq.q}
                      </span>
                      <div style={{
                        width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                        background: isOpen ? '#4361EE' : '#f0f0f0',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'background 0.2s',
                      }}>
                        <i
                          className="bi bi-plus-lg"
                          style={{
                            fontSize: '13px',
                            color: isOpen ? '#fff' : '#888',
                            display: 'inline-block',
                            transition: 'transform 0.25s ease, color 0.2s',
                            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                          }}
                        />
                      </div>
                    </div>

                    {/* Answer (animated) */}
                    <div style={{
                      maxHeight: isOpen ? '400px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.35s ease',
                    }}>
                      <p style={{
                        fontSize: '13.5px', color: '#6c757d', lineHeight: '1.75',
                        paddingBottom: '18px', margin: 0,
                      }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
