"use client"
import SectionTitle from "../Common/SectionTitle";
// import data from '../../Data/services4.json';
import data from '../../Data/serviceOverview.json';
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { useRef } from "react";

const Services4 = () => {
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
        <div className="sservice-area style-two">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <SectionTitle
                                    SubTitle="MAYURASOFT COMPANY"
                                    Title="How Professionalvgu IT Services<br> Can Drive <span>Success.</span>"
                            ></SectionTitle>
                        </div>
                    </div>
                    {/* {data.map((item, i) => (
                    <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                        
                        <div className="single-service-box">
                            <div className="service-content">
                                <h3 className="service-title"><Link href="/service/service-details">{item.title}</Link></h3>
                                <p className="service-text">{item.desc}</p> */}
                                {/* <div className="service-btn">
                                <Link href="/service/service-details"><i className="bi bi-plus"></i> READ MORE</Link>
                                </div> */}
                                {/* <div className="services-shape bounce-animate-3">
                                    <Image src="/assets/images/inner/serice-shape.png" alt="Service decorative shape" width={18} height={18}   />
                                </div> */}
                            {/* </div>
                        </div>
                    </div>
                    ))} */}
                </div>
                <div className="row">
  {data.map((item, i) => (
    <div key={i} className="col-lg-4 col-md-6 mb-4 d-flex">
      
      <div className="service-single-box d-flex flex-column pt-4 w-100 bg-white">
        
        {/* ADD THIS (you removed it earlier) */}
        {/* <div className="service-icon mb-0 text-center">
          <Image
            src={item.icon}
            alt={`${item.title} icon`}
            width={100}
            height={100}
          />
        </div> */}

        <div className="service-content d-flex flex-column flex-grow-1 text-center">
          
          <h3 className="service-title">{item.title}</h3>

          <p className="service-text flex-grow-1">
            {item.desc}
          </p>

          {/* <div className="service-btn mt-auto">
            <Link href={item.btnLink}>
              <i className="bi bi-plus home-ai-plus-bg"></i>
              <span className="text-light"> {item.btnText}</span>
            </Link>
          </div> */}

        </div>

      </div>

    </div>
  ))}
</div>
                {/* <div className="row carousel">
                    <div className="service-overview-list cs_slider_gap_30">
                        <Slider ref={sliderRef} {...settings}>
                            {data.map((item, i) => (
                                <div key={i} className="d-flex h-100">
                                    <div className="service-single-box d-flex flex-column pt-4 h-100 w-100 bg-white">
                                        <div className="service-icon mb-0">
                                            <Image src={item.icon} alt={`${item.title} automation service icon`} width={100} height={100} priority={i < 3} />
                                        </div>
                                        <div className="service-content d-flex flex-column flex-grow-1">
                                            <h3 className="service-title">{item.title}</h3>
                                            <p className="service-text flex-grow-1">{item.desc}</p>
                                            <div className="service-btn mt-auto">
                                                <Link href={item.btnLink} tabIndex="-1">
                                                    <i className="bi bi-plus home-ai-plus-bg"></i><span className="text-light"> {item.btnText}</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div> */}
                {/* <div className="service-shape bounce-animate3">
                <Image src="/assets/images/service5.png" alt="img" width={199} height={420}   />
                </div>
                <div className="service-shape2">
                <Image src="/assets/images/service7.png" alt="Service feature icon" width={100} height={100}   />
                </div>
                <div className="service-shape3 bounce-animate4">
                <Image src="/assets/images/service8.png" alt="img" width={341} height={351}   />
                </div> */}
            </div>
        </div>

    );
};

export default Services4;