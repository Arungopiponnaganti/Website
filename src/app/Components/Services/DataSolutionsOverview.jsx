"use client"
import Slider from "react-slick";
import data from '../../Data/dataSolutionsOverview.json';
import { useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const dataIcons = {
  "Data Engineering & Pipelines": (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="16" width="48" height="36" rx="4" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M8 24h48M8 32h48M8 40h32" stroke="currentColor" strokeWidth="2"/>
      <circle cx="48" cy="44" r="6" fill="currentColor"/>
      <path d="M52 44l4 0M50 42l0 4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 8v8M32 8v12M44 8v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="20" cy="16" r="3" fill="currentColor"/>
      <circle cx="32" cy="20" r="3" fill="currentColor"/>
      <circle cx="44" cy="16" r="3" fill="currentColor"/>
    </svg>
  ),
  "Cloud Data Platforms": (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="32" cy="40" rx="20" ry="8" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M16 32a10 10 0 0 1 0-20 14 14 0 0 1 28 0 10 10 0 0 1 0 20" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="24" cy="28" r="3" fill="currentColor"/>
      <circle cx="36" cy="28" r="3" fill="currentColor"/>
      <path d="M20 44l-4 8M32 44v10M44 44l4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  "Data Governance & Quality": (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 8L12 20v16c0 13.3 8.5 25.6 20 28 11.5-2.4 20-14.7 20-28V20L32 8z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M24 32l6 6 10-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M32 8V4M12 20l-4 4M52 20l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  "Analytics & Business Intelligence": (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="36" width="8" height="20" rx="1" stroke="currentColor" strokeWidth="2.5"/>
      <rect x="20" y="24" width="8" height="32" rx="1" stroke="currentColor" strokeWidth="2.5"/>
      <rect x="32" y="16" width="8" height="40" rx="1" stroke="currentColor" strokeWidth="2.5"/>
      <rect x="44" y="8" width="8" height="48" rx="1" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M12 32l8-8 4 4 12-12 8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "Reporting & Visualisation": (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="48" height="40" rx="4" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M16 40l10-16 8 12 12-20 10 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="16" cy="40" r="2" fill="currentColor"/>
      <circle cx="26" cy="24" r="2" fill="currentColor"/>
      <circle cx="34" cy="36" r="2" fill="currentColor"/>
      <circle cx="46" cy="16" r="2" fill="currentColor"/>
      <circle cx="56" cy="24" r="2" fill="currentColor"/>
    </svg>
  ),
  "Data Strategy Consulting": (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M32 16v8M32 40v8M16 32h8M40 32h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="32" cy="32" r="2" fill="currentColor"/>
      <path d="M20 20l4 4M40 40l-4-4M20 44l4-4M40 16l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
};

const DataSolutionsOverview = ({ bgImage, ClassAdd }) => {

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
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <SectionTitle
                                SubTitle="DATA SOLUTIONS"
                                Title="Data your teams can trust and act on"
                                Content="We build pipelines, platforms, and reporting systems that make data reliable — from raw sources to a governed, analytics-ready foundation."
                            />
                        </div>
                    </div>
                </div>
                <div className="service-grid">
                  {data.map((item, i) => (
                    <Link href={item.btnLink} key={i} className="service-single-box text-decoration-none">
                      <div className="service-icon" style={{ color: '#ff3b00' }}>
                        {dataIcons[item.title] || (
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
    );
};

export default DataSolutionsOverview;
