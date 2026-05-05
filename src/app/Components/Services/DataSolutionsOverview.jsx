"use client"
import Slider from "react-slick";
import data from '../../Data/dataSolutionsOverview.json';
import { useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";
import Image from "next/image";

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
        infinite: true,
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
        <div className={`service-overview-area${ClassAdd ? ` ${ClassAdd}` : ''} p-5`} data-background={bgImage}>
            <div className="container-fluid">
                <div className="row project align-items-center">
                    <div className="col-lg-6">
                        <div className="section-title text-left">
                            <SectionTitle
                                SubTitle="DATA SOLUTIONS"
                                Title="Data your teams can trust and act on"
                                Content="We build pipelines, platforms, and reporting systems that make data reliable — from raw sources to a governed, analytics-ready foundation."
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="project-right">
                            <div className="cs_slider_arrows cs_style_2 testtimonial_arow_area cs_hide_md">
                                <div className="cs_left_arrow cs_slider_arrow cs_center" onClick={previous}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_ds_left)">
                                            <path d="M6.4 1.59961L7.52 2.71961L3.04 7.19961H16V8.79961H3.04L7.52 13.2796L6.4 14.3996L0 7.99961L6.4 1.59961Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_ds_left">
                                                <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 1 16 0)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="cs_right_arrow cs_slider_arrow cs_center" onClick={next}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_ds_right)">
                                            <path d="M9.6 1.59961L8.48 2.71961L12.96 7.19961H0V8.79961H12.96L8.48 13.2796L9.6 14.3996L16 7.99961L9.6 1.59961Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_ds_right">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row carousel">
                    <div className="service-overview-list cs_slider_gap_30">
                        <Slider ref={sliderRef} {...settings}>
                            {data.map((item, i) => (
                                <div key={i} className="d-flex h-100">
                                    <div className="service-single-box d-flex flex-column pt-4 h-100 w-100">
                                        <div className="service-icon mb-0">
                                            <Image src={item.icon} alt="img" width={100} height={100} />
                                        </div>
                                        <div className="service-content d-flex flex-column flex-grow-1">
                                            <h3 className="service-title">{item.title}</h3>
                                            <p className="service-text flex-grow-1">{item.desc}</p>
                                            <div className="service-btn mt-auto">
                                                <Link href={item.btnLink}>
                                                    <i className="bi bi-plus"></i><span> {item.btnText}</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataSolutionsOverview;
