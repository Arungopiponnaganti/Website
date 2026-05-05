'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SectionTitle from '../Common/SectionTitle';

const faqList = [
  {
    q: 'Will the system go down during migration?',
    a: 'No. Every modernisation engagement we run uses a zero-downtime strategy. We run the old and new systems in parallel, route traffic incrementally, and only decommission the legacy system after the new one is validated in production. Your users won\'t notice the transition.',
  },
  {
    q: 'How do you handle business logic that isn\'t documented anywhere?',
    a: 'This is the most common challenge in legacy modernisation — and it\'s why we spend significant time in the audit phase on reverse-engineering. We read the code, interview your team, and map every business rule before we design the new system. We don\'t start building until we\'re confident we\'ve captured everything.',
  },
  {
    q: 'Do we need to freeze new feature development during modernisation?',
    a: 'Not with the strangler-fig approach — your team can continue shipping features to the legacy system while we incrementally build out the new architecture in parallel. We coordinate closely so new code follows the target architecture from day one.',
  },
  {
    q: 'What if the codebase turns out to be in worse shape than expected?',
    a: 'It happens — and it\'s why the audit phase exists. If the audit reveals significantly more complexity than initially scoped, we come back to you with a revised proposal before proceeding. You never get a surprise invoice for discovery that happened after you approved a budget.',
  },
  {
    q: 'Can our internal developers be involved during the migration?',
    a: 'Absolutely — we actively encourage it. Embedded working with your developers is the fastest way to ensure knowledge transfer happens during the project rather than in a compressed handover at the end. Your team will understand the new system deeply before we leave.',
  },
  {
    q: 'How long does a typical modernisation take?',
    a: 'It varies by pattern and codebase size. An infrastructure re-platform can take 6–10 weeks. A strangler-fig migration of a mid-size monolith typically runs 4–9 months. A full greenfield rebuild of a complex system can be 9–18 months. We\'ll give you a precise estimate after the audit phase.',
  },
];

export default function AMFaq() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section style={{ padding: '80px 0', background: '#fff' }}>
      <div className="container">
        <div className="row g-5 align-items-start">

          {/* Left — sticky header + CTA */}
          <div className="col-lg-4">
            <div className="am-faq-sticky" style={{ position: 'sticky', top: '100px' }}>
              <SectionTitle
                SubTitle="Common questions"
                Title="What clients ask before starting a modernisation engagement"
                Content="Still have questions? Book a free 30-min call — no pitch, just answers."
                className="text-left"
                isDarkMode={false}
              />
              <Link
                href="/contact?service=application-modernisation"
                style={{
                  display: 'inline-block', padding: '12px 24px', borderRadius: '6px',
                  fontSize: '14px', fontWeight: '700', textDecoration: 'none',
                  background: '#1a1e2d', color: '#fff', transition: 'background 0.2s',
                }}
              >
                Book a free call &rarr;
              </Link>
            </div>
          </div>

          {/* Right — FAQ accordion */}
          <div className="col-lg-8">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {faqList.map((faq, idx) => (
                <div
                  key={idx}
                  style={{
                    borderBottom: idx < faqList.length - 1 ? '1px solid #e8e8e8' : 'none',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                    style={{
                      width: '100%', display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', gap: '16px',
                      padding: '22px 0', border: 'none', background: 'transparent',
                      textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit',
                    }}
                  >
                    <span style={{ fontSize: '16px', fontWeight: '600', color: openIdx === idx ? '#1a1e2d' : '#444', lineHeight: '1.4' }}>
                      {faq.q}
                    </span>
                    <div style={{
                      width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0,
                      background: openIdx === idx ? '#1a1e2d' : '#f0f0f0',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'background 0.2s',
                    }}>
                      <i
                        className="bi bi-plus-lg"
                        style={{
                          fontSize: '13px',
                          color: openIdx === idx ? '#fff' : '#888',
                          transform: openIdx === idx ? 'rotate(45deg)' : 'none',
                          transition: 'transform 0.25s',
                          display: 'block',
                        }}
                      />
                    </div>
                  </button>

                  <div style={{
                    maxHeight: openIdx === idx ? '400px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s ease',
                  }}>
                    <p className="am-faq-answer" style={{
                      fontSize: '15px', color: '#6c757d', lineHeight: '1.75',
                      margin: '0 0 22px',
                      paddingRight: '46px',
                    }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .am-faq-sticky { position: static !important; }
        }
        @media (max-width: 767px) {
          .am-faq-answer { padding-right: 0 !important; }
        }
      `}</style>
    </section>
  );
}
