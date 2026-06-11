"use client"
import { useEffect, useRef, useState } from "react";
import data from '../../Data/faq.json';
import Link from "next/link";
import Image from "next/image";
import contactInfo from "../../Data/contactInfo.json";

const ServiceDetail = () => {

    const Services = [
        'Database Security',
        'IT Solution',
        'Technology Consult',
        'App Development',
        'UI/UX Design',
        'Cyber Security',
      ];  

      const accordionContentRef = useRef(null);
      const [openItemIndex, setOpenItemIndex] = useState(-1);
      const [firstItemOpen, setFirstItemOpen] = useState(true);
    
      const handleItemClick = index => {
        if (index === openItemIndex) {
          setOpenItemIndex(-1);
        } else {
          setOpenItemIndex(index);
        }
      };
      useEffect(() => {
        if (firstItemOpen) {
          setOpenItemIndex(0);
          setFirstItemOpen(false);
        }
      }, [firstItemOpen]);   
      

    return (
            <div className="services-details-area mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="services-details-thumb">
                                        <Image src="/assets/images/inner/service-details.png" alt="Service details illustration" width={856} height={504}   />
                                    </div>
                                    <div className="services-details-content">
                                        <h4 className="services-details-title">Software, AI, And Data Delivery That Starts With Clarity</h4>

                                        <p className="services-details-desc">MayuraSoft reviews your workflow, current systems, data readiness, integrations, and delivery risks before recommending what to build, automate, modernize, or fix first.</p>

                                        <p className="services-details-desc">Our delivery model keeps discovery, planning, implementation, QA, documentation, and handover under one accountable team so buyers avoid fragmented vendors and unclear ownership. 	
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="service-detalis-text-box">
                                                <div className="service-details-content">
                                                    <h4>Why Choose Us</h4>
                                                    <p>We connect business workflow, engineering execution, AI readiness, and data reliability before recommending a solution.</p>
                                                </div>
                                                <div className="service-details-list">
                                                    <ul>
                                                        <li><i className="bi bi-arrow-right"></i>Free AI/Data Audit</li>
                                                        <li><i className="bi bi-arrow-right"></i>Clear delivery plan</li>
                                                        <li><i className="bi bi-arrow-right"></i>Documentation and handover</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="service-details-icon-box">
                                                <div className="service-det-icon">
                                                <Image src="/assets/images/inner/det-icon.png" alt="Service detail icon" width={56} height={60}   />
                                                </div>
                                                <div className="service-det-content">
                                                    <h3>Empowering Your Success</h3>
                                                    <p>From software modernization to AI integration and data engineering, MayuraSoft gives teams a practical path from audit to shipped work.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="tab_container">
                                            <div className="feq-content">
                                                <h4 className="faq-title">Frequently Asked Questions</h4>
                                                <p className="faq-description">Common questions about MayuraSoft&apos;s audit-first approach to software, AI, data, and cloud delivery.</p>
                                            </div>
                                            <div id="tab" className="tab_content">
                                                <ul className="accordion">
                                                {data.map((item, index)=>(
                                                    <li key={index} className={`cs_accordian ${index === openItemIndex ? "active" : "" }`}>
                                                        <a onClick={() => handleItemClick(index)}><span>{item.title}</span></a>
                                                        <p ref={accordionContentRef}>{item.desc}</p>
                                                    </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="widget-sidber">
                                        <div className="widget-sidber-content">
                                            <h4>Main Services</h4>
                                        </div>
                                        <div className="widget-category">
                                            <ul>
                                            {Services.map((item, i) => ( 
                                                <li key={i}><Link href="/service/service-details">
                                                    <Image src="/assets/images/inner/category-icon.png" alt="Category icon" width={19} height={14}   />
                                                    {item}<i className="bi bi-arrow-right"></i></Link></li>
                                            ))}
                                            </ul>
                                        </div>
                                    </div>						
                                    <div className="widget-sidber">
                                        <div className="widget-sidber-content">
                                            <h4>Downloads</h4>
                                        </div>
                                        <div className="widget-sidber-download-button">
                                            <a href="#"><i className="bi bi-file-earmark-pdf"></i>Service Report<span><i className="bi bi-download"></i></span></a>

                                            <a className="active" href="#"><i className="bi bi-file-earmark-pdf"></i>Download Lists<span><i className="bi bi-download"></i></span></a>
                                        </div>
                                    </div>
                                    <div className="widget-sidber-contact-box">
                                        <div className="widget-sidber-contact">
                                             
                                        </div>
                                        <p className="widget-sidber-contact-text">Call Us Anytime</p>
                                        <h3 className="widget-sidber-contact-number">{contactInfo.phone}</h3>
                                        <span className="widget-sidber-contact-gmail"><i className="bi bi-envelope-fill"></i>{contactInfo.email}</span>
                                        <div className="widget-sidber-contact-btn">
                                           <Link href="/contact">Contact Us <i className="bi bi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ServiceDetail;
