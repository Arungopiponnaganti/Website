import SectionTitle from "../Common/SectionTitle";
import data from '../../Data/services4.json';
import Link from "next/link";
import Image from "next/image";

const Services4 = () => {
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
                    {data.map((item, i) => (
                    <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                        
                        <div className="single-service-box">
                            <div className="service-content">
                                <h3 className="service-title"><Link href="/service/service-details">{item.title}</Link></h3>
                                <p className="service-text">{item.desc}</p>
                                {/* <div className="service-btn">
                                <Link href="/service/service-details"><i className="bi bi-plus"></i> READ MORE</Link>
                                </div> */}
                                {/* <div className="services-shape bounce-animate-3">
                                    <Image src="/assets/images/inner/serice-shape.png" alt="img" width={18} height={18}   />
                                </div> */}
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="service-shape bounce-animate3">
                <Image src="/assets/images/service5.png" alt="img" width={199} height={420}   />
                </div>
                <div className="service-shape2">
                <Image src="/assets/images/service7.png" alt="img" width={100} height={100}   />
                </div>
                <div className="service-shape3 bounce-animate4">
                <Image src="/assets/images/service8.png" alt="img" width={341} height={351}   />
                </div>
            </div>
        </div>

    );
};

export default Services4;