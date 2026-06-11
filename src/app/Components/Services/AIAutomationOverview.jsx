"use client"
import Slider from "react-slick";
import data from '../../Data/aiAutomationOverview.json';
import { useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const aiIcons = {
  "AI Integration Services": (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="24" width="48" height="24" rx="12" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="20" cy="36" r="6" stroke="currentColor" strokeWidth="2"/>
      <circle cx="32" cy="36" r="2" fill="currentColor"/>
      <path d="M38 32v8M44 36h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="44" cy="36" r="2" fill="currentColor"/>
      <path d="M16 16c4-4 12-4 16 0M32 16c4-4 12-4 16 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  "Workflow Automation": (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="48" cy="16" r="8" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="16" cy="48" r="8" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="48" cy="48" r="8" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M24 16h16M16 24v16M48 24v16M24 48h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="32" cy="32" r="6" fill="currentColor"/>
    </svg>
  ),
  "Conversational AI & Chatbots": (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 16c0-8 8-16 24-16s24 8 24 16v16c0 8-8 16-24 16s-24-8-24-16V16z" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="24" cy="28" r="3" fill="currentColor"/>
      <circle cx="40" cy="28" r="3" fill="currentColor"/>
      <path d="M22 40c2-2 6-2 8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 16l4 8M52 16l-4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  "Intelligent Document Processing": (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8h32l12 12v36a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M44 8v12h12" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M20 28h24M20 36h16M20 44h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="48" cy="48" r="8" fill="currentColor"/>
      <path d="M52 44l4 4M56 44l-4 4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  "AI Readiness Assessment": (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 8v4M32 52v4M8 32h4M52 32h4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M15 15l3 3M46 46l3 3M15 49l3-3M46 18l3-3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M32 26v12l8 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "AI Governance & Ethics": (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 8L12 18v16c0 11 8.5 21 20 24 11.5-3 20-13 20-24V18L32 8z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M24 32l6 6 12-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="32" cy="16" r="2" fill="currentColor"/>
      <circle cx="20" cy="22" r="2" fill="currentColor"/>
      <circle cx="44" cy="22" r="2" fill="currentColor"/>
    </svg>
  )
};

const AIAutomationOverview = ({ bgImage, ClassAdd }) => {

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
        <div className={`service-overview-area ai-services-bg${ClassAdd ? ` ${ClassAdd}` : ''}`} data-background={bgImage}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <SectionTitle
                                SubTitle="AI & AUTOMATIONS"
                                Title="Add <span> AI </span> to what you already run"
                                Content="We integrate machine learning models into existing systems, build intelligent workflows, and create conversational assistants — without rebuilding your current stack."
                            />
                        </div>
                    </div>
                </div>
                <div className="service-grid">
                  {data.map((item, i) => (
                    <Link href={item.btnLink} key={i} className="service-single-box service-card-alt text-decoration-none">
                      <div className="service-icon" style={{ color: '#ff3b00' }}>
                        {aiIcons[item.title] || (
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

export default AIAutomationOverview;
