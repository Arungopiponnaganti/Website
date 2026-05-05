'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';
import Image from 'next/image';

const CHANNELS = [
  {
    iconBg: '#E1F5EE',
    iconColor: '#0F6E56',
    icon: 'bi-window',
    title: 'Website chat widget',
    desc: 'Embedded chat widget, fully customisable to match your brand — desktop and mobile responsive. Trigger proactively based on page or scroll behaviour.',
    caps: ['Proactive triggers', 'File attachments', 'Rich cards', 'Co-browsing ready'],
  },
  {
    iconBg: '#EAF3DE',
    iconColor: '#27500A',
    icon: 'bi-whatsapp',
    title: 'WhatsApp Business',
    desc: "India's highest-adoption messaging channel. 97% open rate vs 20% for email. Supports rich messages, template broadcasts, and quick-reply buttons.",
    caps: ['Template messages', 'Quick replies', 'Media sharing', 'Broadcast lists'],
  },
  {
    iconBg: '#EEEDFE',
    iconColor: '#534AB7',
    icon: 'bi-slack',
    title: 'Slack & Teams',
    desc: 'Internal bots for HR, IT, and operations — deployed where your team already works all day. No new tool adoption required.',
    caps: ['Slash commands', 'Interactive modals', 'Thread replies', 'DM conversations'],
  },
  {
    iconBg: '#FAEEDA',
    iconColor: '#854F0B',
    icon: 'bi-chat-square-dots',
    title: 'In-app chat',
    desc: 'Embedded conversational AI inside your product — context-aware, user-authenticated, and personalised based on where the user is in the app.',
    caps: ['Session context', 'Feature-aware replies', 'In-app actions', 'Onboarding flows'],
  },
];

export default function CAIChannels() {
  return (
    <section className="py-5 position-relative" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container py-4">
        <SectionTitle
          className="text-center mb-5"
          SubTitle="Where your bot lives"
          Title="Deploy on any channel — we handle the integration"
          Content="Your customers already use these channels. We bring your AI assistant to wherever they are — no app download, no friction."
          isDarkMode={false}
        />

        <div className="row g-4">
          {CHANNELS.map((ch, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '35px 30px',
                  position: 'relative',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.02)',
                  height: '100%',
                  minHeight: '260px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0px 15px 35px rgba(0, 0, 0, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0px 10px 30px rgba(0, 0, 0, 0.02)';
                }}
              >
                <div style={{ marginBottom: '15px' }}>
                  <div style={{ background: ch.iconBg, width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <i className={`bi ${ch.icon}`} style={{ color: ch.iconColor, fontSize: '22px' }} />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1e2d', marginBottom: '10px' }}>{ch.title}</h3>
                  <p style={{ fontSize: '14.5px', color: '#6c757d', lineHeight: '1.6', marginBottom: '0' }}>{ch.desc}</p>
                </div>

                <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #f0f0f0' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {ch.caps.map((cap, j) => (
                      <span key={j} style={{ background: ch.iconBg, color: ch.iconColor, padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>{cap}</span>
                    ))}
                  </div>
                </div>

                <div style={{ position: 'absolute', bottom: '20px', right: '30px', opacity: 0.15, fontSize: '46px', color: '#1a1e2d', pointerEvents: 'none' }}>
                  <i className={`bi ${ch.icon}`} style={{ color: ch.iconColor, fontSize: '50px' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="service-shape bounce-animate3">
        <Image src="/assets/images/service5.png" alt="img" width={199} height={420} />
      </div>
      <div className="service-shape2">
        <Image src="/assets/images/service7.png" alt="img" width={100} height={100} />
      </div>
      <div className="service-shape3 bounce-animate4">
        <Image src="/assets/images/service8.png" alt="img" width={341} height={351} />
      </div>
    </section>
  );
}
