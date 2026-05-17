"use client"
import Slider from "react-slick";
import data from '../../Data/serviceOverview.json';
import { useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const serviceIcons = {
  "Custom Software Development": (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="12" width="48" height="40" rx="4" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M20 28h24M20 36h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="48" cy="48" r="8" fill="currentColor"/>
      <path d="M52 44l4-4M52 52l4 4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  "Product Engineering": (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="16" width="52" height="36" rx="4" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M14 28h14v8H14zM36 28h14v8H36z" stroke="currentColor" strokeWidth="2"/>
      <circle cx="21" cy="32" r="3" fill="currentColor"/>
      <circle cx="43" cy="32" r="3" fill="currentColor"/>
      <path d="M32 8v8M26 12l6-4 6 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "Application Modernisation": (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 8L8 24h48L32 8z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M12 24v32h40V24" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M20 36h24M20 44h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M44 40l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "UX / UI Design": (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="48" height="40" rx="4" stroke="currentColor" strokeWidth="2.5"/>
      <rect x="14" y="14" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
      <rect x="32" y="14" width="18" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
      <rect x="32" y="28" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M18 36h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  "Cloud & DevOps": (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 44a12 12 0 0 1 0-24 16 16 0 0 1 32 0 12 12 0 0 1 0 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M12 36a8 8 0 0 1 0-16 12 12 0 0 1 24 0 8 8 0 0 1 0 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="36" cy="48" r="4" fill="currentColor"/>
      <path d="M36 52v6M32 56l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "Quality Engineering": (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 8L12 20v16c0 13.3 8.5 25.6 20 28 11.5-2.4 20-14.7 20-28V20L32 8z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M24 32l6 6 10-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "Managed App Support": (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="8" width="40" height="48" rx="4" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M24 20h16M24 28h16M24 36h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="32" cy="48" r="4" fill="currentColor"/>
      <path d="M32 44v-4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M32 52v2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  "Tech Due Diligence": (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M32 18v14l10 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="32" cy="32" r="2" fill="currentColor"/>
    </svg>
  )
};

const ServiceOverview = ({ bgImage, ClassAdd }) => {

    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: false,
        accessibility: false,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className={`service-overview-area${ClassAdd ? ` ${ClassAdd}` : ''}`} data-background={bgImage}>
            <div className="container-fluid">
                <div className="row project align-items-center">
                    <div className="col-lg-12">
                        <div className="section-title text-center ">
                            <SectionTitle
                                SubTitle="MAYURASOFT SERVICES"
                                Title="Build, modernise, and run your  <span>software</span>"
                                Content={'End-to-end software services — from building new products to maintaining existing systems. We work across the full lifecycle.'}
                            />
                        </div>
                    </div>
                </div>
                <div className="container">
                  <div className="service-grid pt-0">
                    {data.map((item, i) => (
                      <Link href={item.btnLink} key={i} className="service-single-box text-decoration-none">
                        <div className="service-icon" style={{ color: '#ff3b00' }}>
                          {serviceIcons[item.title] || (
                            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2.5"/>
                              <path d="M32 22v20M22 32h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                            </svg>
                          )}
                        </div>
                        <div className="service-content text-center">
                          <h3 className="service-title">{item.title}</h3>
                          <p className="service-text">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
              </div>
            </div>
        </div>
    );
};

export default ServiceOverview;
