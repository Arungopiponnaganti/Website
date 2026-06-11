import Image from "next/image";
import Link from "next/link";
import contactInfo from "../../Data/contactInfo.json";

const ProjectDetail = () => {

    const InfoBox = [
        {title:'Date', info:'10 January, 2024'},
        {title:'Client', info:'Growing Business Team'},
        {title:'Website', info:'mayurasoft.com'},
        {title:'Location', info:'Hyderabad, India'},
      ];      

      const Services = [
        'Database Security',
        'Technology Consult',
        'App Development',
        'UI/UX Design',
        'Cyber Security',
      ];

    return (
            <div className="project-details-area">
                <div className="container">
                    <div className="row">
                        <div className="project-details">
                            <div className="project-details-thumb">
                                <Image src="/assets/images/inner/project-det-thu.png" alt="Project details main image" width={1296} height={673}   />
                            </div>
                        </div>
                    </div>
                    <div className="row project-box-info">
                    {InfoBox.map((item, i) => (  
                        <div key={i} className="col-lg-3 col-md-3">
                            <div className="project-details-box">
                                <p>{item.title}</p>
                                <h6>{item.info}</h6>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-content">
                                        <h4 className="project-details-title">Audit-Led Technology Roadmap</h4>

                                        <p className="project-details-desc">This example reflects MayuraSoft&apos;s typical delivery pattern: map the workflow, review the current software, inspect data readiness, and identify the safest first implementation step.</p>

                                        <p className="project-details-desc">The output is a practical recommendation that can become a scoped AI automation, software modernization, product engineering, data engineering, or cloud implementation plan. 	
                                        </p>
                                        <div className="project-det-title">
                                            <h3>The Challenge Of Project</h3>
                                        </div>
                                        <p className="project-det-desc">The challenge is usually not a lack of ideas. It is deciding which workflow, integration, data gap, or delivery risk should be handled first before more budget is committed.</p>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="project-details-item-images">
                                                 <Image src="/assets/images/inner/project-det-img.png" alt="Project image" width={416} height={284}   />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="project-details-list-item">
                                                <h4>Process & Results</h4>
                                                <ul>
                                                    <li><i className="bi bi-check-circle-fill"></i>Technology Consultancy</li>
                                                    <li><i className="bi bi-check-circle-fill"></i>Maintenance And Support</li>
                                                    <li><i className="bi bi-check-circle-fill"></i>We Provide best services</li>
                                                    <li><i className="bi bi-check-circle-fill"></i>Requirements Gathering</li>
                                                    <li><i className="bi bi-check-circle-fill"></i>Maintenance good Support</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="project-details-text" href="project-details.html">Competently architect intermandated deliverables client
                                            niches continually underwhelm
                                        </a>
                                        <p className="project-details-desc">MayuraSoft turns the audit findings into a phased plan with clear responsibilities, delivery risks, documentation needs, and next steps for implementation.	
                                        </p>
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

export default ProjectDetail;
