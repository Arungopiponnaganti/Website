'use client';
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const symptoms = [
  {
    num: '01', icon: 'bi-cpu',
    title: 'End-of-life technology stack',
    body: 'Running on PHP 5, .NET Framework, Java 6, or any stack the vendor no longer patches. Every day without an upgrade is an active security liability.',
    tag: 'Security risk', tagColor: '#c0392b', tagBg: '#FFF0F0', tagBorder: '#ffd0d0',
    accentColor: '#ff3c00',
  },
  {
    num: '02', icon: 'bi-bug',
    title: 'No automated testing',
    body: 'Every release is a manual regression cycle. Developers are afraid to refactor because nothing is tested. Velocity drops with every new hire.',
    tag: 'Delivery bottleneck', tagColor: '#b07a00', tagBg: '#FFF8EC', tagBorder: '#ffe0a0',
    accentColor: '#e67e22',
  },
  {
    num: '03', icon: 'bi-bricks',
    title: 'Monolithic architecture',
    body: "One change in payments breaks the login page. You can't scale individual services. The whole application goes down for every deployment.",
    tag: 'Reliability risk', tagColor: '#c0392b', tagBg: '#FFF0F0', tagBorder: '#ffd0d0',
    accentColor: '#ff3c00',
  },
  {
    num: '04', icon: 'bi-server',
    title: 'On-premise infrastructure',
    body: 'Hardware refresh cycles, unpredictable scaling costs, and data centre risk. Your competitors are 10× more elastic on cloud-native infrastructure.',
    tag: 'Cost exposure', tagColor: '#b07a00', tagBg: '#FFF8EC', tagBorder: '#ffe0a0',
    accentColor: '#e67e22',
  },
  {
    num: '05', icon: 'bi-person-dash',
    title: 'Talent retention problems',
    body: "Strong engineers won't join to work on legacy stacks. The team maintaining it is ageing and leaving. Institutional knowledge walks out the door.",
    tag: 'Org risk', tagColor: '#c0392b', tagBg: '#FFF0F0', tagBorder: '#ffd0d0',
    accentColor: '#ff3c00',
  },
  {
    num: '06', icon: 'bi-shield-exclamation',
    title: 'Compliance exposure',
    body: "GDPR, SOC 2, ISO 27001 — your legacy app wasn't built for modern compliance requirements. Every audit cycle turns into a fire drill.",
    tag: 'Compliance risk', tagColor: '#b07a00', tagBg: '#FFF8EC', tagBorder: '#ffe0a0',
    accentColor: '#e67e22',
  },
];

function PainCard({ s, i }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="am-pp-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        boxShadow: hovered
          ? '0 12px 40px rgba(0,0,0,0.10)'
          : '0 2px 12px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        borderColor: hovered ? s.accentColor : '#ebebeb',
      }}
    >
      {/* Faint number watermark */}
      <span className="am-pp-watermark">{s.num}</span>

      {/* Icon circle */}
      <div
        className="am-pp-icon"
        style={{
          background: hovered ? s.accentColor : '#f5f5f5',
          borderColor: hovered ? s.accentColor : '#ebebeb',
        }}
      >
        <i
          className={`bi ${s.icon}`}
          style={{ color: hovered ? '#fff' : s.accentColor, fontSize: '20px' }}
        />
      </div>

      {/* Content */}
      <h3 className="am-pp-title">{s.title}</h3>
      <p className="am-pp-body">{s.body}</p>

      {/* Tag */}
      <div
        className="am-pp-tag"
        style={{ background: s.tagBg, color: s.tagColor, border: `1px solid ${s.tagBorder}` }}
      >
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: s.tagColor, display: 'inline-block', flexShrink: 0 }} />
        {s.tag}
      </div>
    </div>
  );
}

export default function AMPainPoints() {
  return (
    <section style={{ backgroundColor: '#f8f9fa', padding: '90px 0' }}>
      <div className="container">

        {/* Header */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <SectionTitle
              SubTitle="Is this you?"
              Title="Six signs your app needs modernisation now"
              className="text-left"
              isDarkMode={false}
            />
          </div>
          <div className="col-lg-5 offset-lg-1">
            <p className="section-descr">
              Three or more of these describe your system? You&apos;re already accumulating technical debt that compounds every quarter.
            </p>
          </div>
        </div>

        {/* Card grid */}
        <div className="am-pp-grid">
          {symptoms.map((s, i) => (
            <PainCard key={i} s={s} i={i} />
          ))}
        </div>

        {/* Bottom callout bar */}
        <div className="am-pp-callout">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,60,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <i className="bi bi-lightning-charge-fill" style={{ color: '#ff3c00', fontSize: '16px' }} />
            </div>
            <p style={{ margin: 0, fontSize: '14px', color: '#555', lineHeight: '1.5' }}>
              <strong style={{ color: '#1a1e2d' }}>Recognise three or more?</strong> — The longer you wait, the higher the migration cost. A free audit gives you a concrete roadmap in 5 business days.
            </p>
          </div>
          <a
            href="/contact?service=application-modernisation"
            className="am-pp-callout-btn"
          >
            Book free audit &rarr;
          </a>
        </div>

      </div>

      <style>{`
        /* Card grid */
        .am-pp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 32px;
        }

        /* Individual card */
        .am-pp-card {
          position: relative;
          background: #fff;
          border: 1.5px solid #ebebeb;
          border-radius: 16px;
          padding: 28px 26px 24px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
          cursor: default;
        }

        /* Faint number watermark */
        .am-pp-watermark {
          position: absolute;
          top: -10px;
          right: 16px;
          font-size: 72px;
          font-weight: 900;
          color: #f0f0f0;
          line-height: 1;
          pointer-events: none;
          user-select: none;
          letter-spacing: -2px;
          margin-top: 32px;
        }

        /* Icon circle */
        .am-pp-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          border: 1.5px solid #ebebeb;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
          flex-shrink: 0;
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .am-pp-icon i {
          transition: color 0.25s ease;
        }

        .am-pp-title {
          font-size: 16px;
          font-weight: 700;
          color: #1a1e2d;
          margin-bottom: 10px;
          line-height: 1.35;
          position: relative;
          z-index: 1;
        }
        .am-pp-body {
          font-size: 13.5px;
          color: #6c757d;
          line-height: 1.7;
          flex: 1;
          margin-bottom: 18px;
          position: relative;
          z-index: 1;
        }
        .am-pp-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 99px;
          width: fit-content;
          letter-spacing: 0.02em;
        }

        /* Bottom callout bar */
        .am-pp-callout {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          background: #fff;
          border: 1.5px solid #ebebeb;
          border-radius: 14px;
          padding: 20px 26px;
          flex-wrap: wrap;
        }
        .am-pp-callout-btn {
          display: inline-block;
          padding: 10px 22px;
          border-radius: 8px;
          background: #1a1e2d;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.2s;
          flex-shrink: 0;
        }
        .am-pp-callout-btn:hover { background: #ff3c00; color: #fff; }

        /* Responsive */
        @media (max-width: 1199px) {
          .am-pp-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (max-width: 767px) {
          .am-pp-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .am-pp-card { padding: 22px 18px 20px; }
          .am-pp-watermark { font-size: 56px; }
          .am-pp-callout { flex-direction: column; align-items: flex-start; gap: 14px; }
        }
        @media (max-width: 480px) {
          .am-pp-grid { grid-template-columns: 1fr; gap: 14px; }
          .am-pp-watermark { font-size: 60px; }
        }
      `}</style>
    </section>
  );
}
