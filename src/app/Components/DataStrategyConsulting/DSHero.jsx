"use client";
import React, { useState } from 'react';
import Link from 'next/link';
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

export default function DSHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="hero-area style-three d-flex align-items-center" style={{ marginTop: '-120px', paddingTop: '280px', position: 'relative', height: 'auto', minHeight: '800px' }}>
      
      {/* Background Shapes positioned relative to the full section width */}
      {/* <div className="hero-left-shape" style={{ position: 'absolute', top: '28%', transform: 'translateY(-50%)', left: '10%', zIndex: 0 }}>
        <Image src="/assets/images/home-3/hero-geo.png" alt="img" width={680} height={680} priority />
      </div> */}

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row hero align-items-center mb-5">
          
          {/* Left Copy */}
          <div className="col-lg-7 col-md-12">
            <div className="hero-contant py-0 mb-0" style={{ paddingTop: '0' }}>
              
              {/* Category chips */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '11px', fontWeight: '600', padding: '4px 12px', borderRadius: '99px', background: '#dbeafe', color: '#1d4ed8', border: '1px solid #93c5fd' }}>
                  Data Strategy Consulting
                </span>
                <span style={{ fontSize: '11px', fontWeight: '500', padding: '4px 12px', borderRadius: '99px', background: 'rgba(255,255,255,0.1)', color: '#d1d5db', border: '1px solid rgba(255,255,255,0.12)' }}>
                  Data Solutions
                </span>
              </div>

              <h1 className="mb-4 d-block" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', lineHeight: 1.2 }}>
                Your data investments are only as valuable as the strategy behind them
              </h1>
              
              <p className="subheadline text-white" style={{ fontSize: '18px', lineHeight: '1.65', maxWidth: '650px', marginBottom: '30px' }}>
                MayuraSoft works directly with CDOs, CTOs, and data leadership teams to define where data can drive the most business value — and build the roadmap that gets there, prioritised by impact and sequenced by feasibility.
              </p>
              
              <div className="d-flex flex-column gap-2 mb-4" style={{fontSize: '15px', color: '#cbd5e1'}}>
                <div className="d-flex align-items-center gap-2"><span style={{color: '#10b981', fontWeight: '700'}}>✓</span> A data vision your board understands and funds</div>
                <div className="d-flex align-items-center gap-2"><span style={{color: '#10b981', fontWeight: '700'}}>✓</span> A 12–24 month roadmap prioritised by business impact</div>
                <div className="d-flex align-items-center gap-2"><span style={{color: '#10b981', fontWeight: '700'}}>✓</span> Investment cases for every data initiative</div>
                <div className="d-flex align-items-center gap-2"><span style={{color: '#10b981', fontWeight: '700'}}>✓</span> A build vs. buy vs. partner framework</div>
              </div>

              <div className="d-flex flex-wrap align-items-center gap-4 mt-4">
                <div className="solutek-btn">
                  <Link href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-2">
                    Start strategy engagement &rarr;
                  </Link>
                </div>
                <div className="hero-btn-3">
                  <div className="hero-btn-profile">
                    <Link href="#framework" style={{ textTransform: 'none', textDecoration: 'none' }}>
                      <div style={{ color: '#ff3c00', textDecoration: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: '600' }}>Download framework &darr;</div>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Framework Visual */}
          <div className="col-lg-5 col-md-12 mt-5 mt-lg-0 d-flex justify-content-center">
            <div className="ds-fw-visual w-100" style={{maxWidth: '540px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)'}}>
              <div className="ds-fw-label">MayuraSoft data strategy framework</div>
              
              <div className="ds-fw-row">
                <div className="ds-fw-node" style={{background: '#ede9fe', borderColor: '#ddd6fe'}}>
                  <div className="ds-fw-node-t">Business goals</div>
                  <div className="ds-fw-node-s">What does the business need to achieve?</div>
                </div>
                <div className="ds-fw-node" style={{background: '#dbeafe', borderColor: '#bfdbfe'}}>
                  <div className="ds-fw-node-t">Data value map</div>
                  <div className="ds-fw-node-s">Where does data create or protect value?</div>
                </div>
              </div>
              
              <div className="ds-fw-arrow">↓</div>
              
              <div className="ds-fw-row">
                <div className="ds-fw-node" style={{background: '#fef3c7', borderColor: '#fde68a'}}>
                  <div className="ds-fw-node-t">Capability gap analysis</div>
                  <div className="ds-fw-node-s">What data capabilities are missing?</div>
                </div>
                <div className="ds-fw-node" style={{background: '#d1fae5', borderColor: '#a7f3d0'}}>
                  <div className="ds-fw-node-t">Investment prioritisation</div>
                  <div className="ds-fw-node-s">Which gaps to close first, and why?</div>
                </div>
              </div>
              
              <div className="ds-fw-arrow">↓</div>
              
              <div className="ds-fw-row w-100">
                <div className="ds-fw-node w-100" style={{background: '#ffedd5', borderColor: '#fed7aa'}}>
                  <div className="ds-fw-node-t">Sequenced 12–24 month roadmap</div>
                  <div className="ds-fw-node-s">Phased, funded, and board-ready</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <DynamicFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Start Strategy Engagement"
        description="Fill out the form below and we'll get back to you shortly."
        submitButtonText="Submit"
        fields={defaultFormFields}
        metadata={{ service: 'data-strategy', pageTitle: 'Data Strategy Consulting' }}
      />
    </div>
  );
}
