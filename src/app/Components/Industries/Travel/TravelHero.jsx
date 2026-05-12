'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import DynamicFormModal from '../../Common/DynamicFormModal';

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
    placeholder: 'Tell us more about your travel technology needs...',
    required: false,
    colSize: 12
  },
];

export default function TravelHero({
  badgeText = "Travel, Logistics & Hospitality",
  title = "Smart mobility and logistics technology for modern travel",
  subheadline = "From booking platforms to logistics management systems, we build travel technology that enhances customer experience and operational efficiency.",
  tags = ['Smart mobility', 'Logistics management', 'Booking platforms', 'Customer experience', 'Real-time tracking'],
  primaryCta = { text: "Get a free travel tech consultation →" },
  secondaryCta = { text: "See our travel solutions", href: "#solutions" },
  stats = [
    { num: 'Real-time', lbl: 'Tracking systems' },
    { num: 'Smart', lbl: 'Mobility solutions' },
    { num: 'AI-powered', lbl: 'Route optimization' },
    { num: 'Secure', lbl: 'Booking platforms' }
  ],
  formTitle = "Get a Free Travel Tech Consultation",
  formMetadata = { service: 'travel-logistics-hospitality', pageTitle: 'Travel, Logistics & Hospitality' }
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="hero-area style-three align-items-center" style={{ marginTop: '-120px', paddingTop: '280px', position: 'relative', height: 'auto', minHeight: '800px', overflow: 'hidden' }}>

      <Image
        src="/assets/images/travel-hero.png"
        alt="Travel logistics and hospitality hero background - smart mobility and logistics"
        fill
        priority
        sizes="100vw"
        className="custom-hero-bg-layer"
      />

      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1 }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row hero align-items-center">
          <div className="col-lg-7 col-md-12">
            <div className="hero-contant" style={{ paddingTop: '0' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: 'rgba(6, 182, 212, 0.1)',
                  color: '#06b6d4',
                  fontSize: '13px',
                  padding: '4px 12px',
                  borderRadius: '99px',
                  marginBottom: '20px',
                  fontWeight: '600'
                }}
              >
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#06b6d4' }}></div>
                {badgeText}
              </div>

              <h1 className="mb-4 d-block">{title}</h1>

              <p className="subheadline text-white" style={{ fontSize: '18px', lineHeight: '1.65', maxWidth: '650px', marginBottom: '30px' }}>
                {subheadline}
              </p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
                {tags.map(tag => (
                  <span key={tag} style={{ fontSize: '13px', padding: '4px 14px', borderRadius: '99px', border: '1px solid rgba(255,255,255,0.2)', color: '#e0e0e0', fontWeight: '500' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="d-flex flex-wrap align-items-center gap-4">
                <div className="solutek-btn">
                  <Link href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-2" data-cta="hero-primary">
                    {primaryCta.text}
                  </Link>
                </div>
                <div className="hero-btn-3">
                  <div className="hero-btn-profile">
                    <Link href={secondaryCta.href} onClick={(e) => {
                      if (secondaryCta.href.startsWith('#')) {
                        e.preventDefault();
                        document.getElementById(secondaryCta.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }} style={{ textTransform: 'none', textDecoration: 'none' }}>
                      <div style={{ color: '#ff3c00', textDecoration: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: '600' }}>{secondaryCta.text} &darr;</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 d-none d-lg-block">
            <div
              className="hero-card"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                marginLeft: 'auto',
                maxWidth: '380px'
              }}
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="hc-stat" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  paddingBottom: idx === 3 ? '0' : '20px',
                  borderBottom: idx === 3 ? 'none' : '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <div className="hc-num text-white" style={{ fontSize: '28px', fontWeight: '700' }}>{stat.num}</div>
                  <div className="hc-lbl" style={{ fontSize: '14px', color: '#a0a0a0', fontWeight: '500' }}>{stat.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <DynamicFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={formTitle}
        description="Fill out the form below and we'll get back to you shortly."
        submitButtonText="Submit"
        fields={defaultFormFields}
        metadata={formMetadata}
      />
    </div>
  );
}