'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import DynamicFormModal from '../Common/DynamicFormModal';

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

const stats = [
  { value: '68%', label: 'of users abandon due to poor UX, not bad products' },
  { value: '3:1', label: 'ROI on every rupee invested in UX (Forrester)' },
  { value: '2 wks', label: 'Brief to first testable prototype' },
  { value: '100%', label: 'Designs tested with real users before dev' },
];

export default function UXUIHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="hero-area style-three d-flex align-items-center uxui-hero-wrap">
      {/* ── Full-width animated SVG background ── */}
      <div className="uxui-hero-bg-container">



        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/ux-ui-hero.svg"
          alt="Abstract geometric design elements representing UI/UX design - shapes, colors and creative patterns"
          aria-hidden="true"
          className="uxui-hero-bg-img"
          width={1920}
          height={1080}
        />


        {/* Left-to-right gradient overlay — keeps text legible */}
        <div className="uxui-hero-overlay-1" />
        {/* Bottom fade to blend hero into next section */}
        <div className="uxui-hero-overlay-2" />

</div>

    <Image
      src="/assets/images/ui-ux-hero.png"
      alt="background"
      fill
      priority
      sizes="100vw"
      className="uxui-hero-bg-png"
      style={{ zIndex: 1 }}
    />



      {/* ── Hero text content (floats on top of SVG background) ── */}
      <div className="container uxui-hero-content-wrap">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-10 col-sm-12">
            <div className="hero-contant uxui-hero-content">

              {/* Blue service pill */}
              <div className="uxui-hero-pill">
                <span className="uxui-hero-pill-dot" />
                UX / UI Design
              </div>

              <h1 className="d-block">
                Design that converts visitors into customers&nbsp;&mdash; not just looks good
              </h1>

              <p className="subheadline text-white uxui-hero-desc">
                MayuraSoft designs interfaces grounded in user research and business data. Every pixel earns its place by serving a measurable outcome — lower bounce rates, higher conversions, faster time-to-value.
              </p>

              {/* CTAs */}
              <div className="uxui-hero-cta-container d-flex flex-wrap align-items-center gap-4 mb-5">
                <div className="solutek-btn">
                  <Link href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-2" data-cta="hero-primary">
                    Get a free design audit &rarr;
                  </Link>
                </div>
                <div className="hero-btn-3">
                  <div className="hero-btn-profile">
                    <Link
                      href="#process"
                      onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
                      className="uxui-hero-link"
                    >
                      <span className="uxui-hero-link-text">See our process &darr;</span>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <DynamicFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get a Free Design Audit"
        description="Fill out the form below and we'll get back to you shortly."
        submitButtonText="Submit"
        fields={defaultFormFields}
        metadata={{ service: 'ux-ui-design', pageTitle: 'UX/UI Design' }}
      />
    </div>
  );
}