import Image from "next/image";
import Link from "next/link";
import websiteContactInfo from "../../Data/contactInfo.json";

const Footer = () => {

    const UsefulLinks = [
        { title: 'About Us', link: '/about' },
        { title: 'Why Choose Us', link: '/why-choose-us' },
        { title: 'Contact Us', link: '/contact' },
    ];

    const Services = [
        { title: 'Custom Software Development', link: '/service/custom-software-development' },
        { title: 'Product Engineering', link: '/service/product-engineering' },
        { title: 'Application Modernisation', link: '/service/application-modernisation' },
        { title: 'UX / UI Design', link: '/service/ux-ui-design' },
        { title: 'Cloud & DevOps', link: '/service/cloud-devops' },
        { title: 'Quality Engineering', link: '/service/quality-engineering' },
        { title: 'Managed App Support', link: '/service/managed-app-support' },
        { title: 'Tech Due Diligence', link: '/service/tech-due-diligence' },
    ];

    const AIAutomations = [
        { title: 'AI Integration Services', link: '/ai-automations/ai-integration' },
        { title: 'Workflow Automation', link: '/ai-automations/workflow-automation' },
        { title: 'Conversational AI & Chatbots', link: '/ai-automations/conversational-ai' },
        { title: 'Document Processing', link: '/ai-automations/document-processing' },
        { title: 'AI Readiness Assessment', link: '/ai-automations/ai-readiness' },
        { title: 'AI Governance & Ethics', link: '/ai-automations/ai-governance' },
    ];

    const DataSolutions = [
        { title: 'Data Engineering & Pipelines', link: '/data-solutions/data-engineering-pipelines' },
        { title: 'Cloud Data Platforms', link: '/data-solutions/cloud-data-platforms' },
        { title: 'Data Governance & Quality', link: '/data-solutions/data-governance' },
        { title: 'Analytics & Business Intelligence', link: '/data-solutions/analytics-business-intelligence' },
        { title: 'Reporting & Visualisation', link: '/data-solutions/reporting-visualisation' },
        { title: 'Data Strategy Consulting', link: '/data-solutions/data-strategy-consulting' },
    ];

    const Industries = [
        { title: 'Banking & Fintech', link: '/industries/banking-fintech' },
        { title: 'Education', link: '/industries/education' },
        { title: 'Startups', link: '/industries/startups' },
        { title: 'Healthcare & Life Sciences', link: '/industries/healthcare-life-sciences' },
        { title: 'Insurance', link: '/industries/insurance' },
        { title: 'Manufacturing', link: '/industries/manufacturing' },
        { title: 'Hi Tech', link: '/industries/hi-tech' },
        { title: 'Professional Services', link: '/industries/professional-services' },
        { title: 'Retail & Consumer Goods', link: '/industries/retail-consumer-goods' },
        { title: 'Travel, Logistics & Hospitality', link: '/industries/travel-logistics-hospitality' },
    ];

    const LogoContent = {
        img1: '/assets/images/mayura-logo-footer.png',
        Content: 'Empowering businesses with innovative software, AI-driven automation, and data solutions that accelerate growth and digital transformation.'
    };

    const AdressContent = {
        Title: 'Elevating Customer Experience.',
        Number: websiteContactInfo.phone
    };

    return (
        <div className="footer_main_area">
            <div className="address-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="address-box d-flex">
                                <div className="address-icon">
                                    <Image src="/assets/images/address1.png" alt="Office location icon" width={35} height={35} />
                                </div>
                                <div className="address-title"><h3>Elevating Customer Experience.</h3></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="address-box2 d-flex">
                                <div className="address-icon">
                                    <a href={`tel:${AdressContent.Number}`}>
                                        <Image
                                            src="/assets/images/address2.png"
                                            alt="Call icon"
                                            width={34}
                                            height={34}
                                        />
                                    </a>
                                </div>
                                <div className="solutek-btn" style={{ color: 'beige' }}>
                                    <Link href={`tel:${AdressContent.Number}`}>
                                        {AdressContent.Number}
                                        <div className="solutek-hover-btn hover-bx"></div>
                                        <div className="solutek-hover-btn hover-bx2"></div>
                                        <div className="solutek-hover-btn hover-bx3"></div>
                                        <div className="solutek-hover-btn hover-bx4"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-area">
                <div className="container">
                    <div className="row footer">
                        <div className="col-lg-2 col-md-12">
                            <div className="footer-widget">
                                <div className="footer-logo d-flex justify-content-center pe-md-5 me-md-5">
                                    <Link href="/">
                                        <Image src={LogoContent.img1} alt="Mayurasoft Footer Logo" width={161} height={42} />
                                    </Link>
                                </div>
                                <p className="footer-widget-text">{LogoContent.Content}</p>
                                <div className="footer-social">
                                    <div className="footer-widget-social">
                                        <a href="#" aria-label="Follow us on Facebook"><i className="bi bi-facebook" aria-hidden="true"></i></a>
                                        <a href="#" aria-label="Follow us on Twitter"><i className="bi bi-twitter" aria-hidden="true"></i></a>
                                        <a href="https://www.linkedin.com/company/mayurasoft" aria-label="Connect on LinkedIn"><i className="bi bi-linkedin" aria-hidden="true"></i></a>
                                        <a href="#" aria-label="Follow us on Instagram"><i className="bi bi-instagram" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-widget left">
                                <div className="widget-title">
                                    <h2>Useful Links</h2>
                                </div>
                                <ul>
                                    {UsefulLinks.map((item, i) => (
                                        <li key={i}><Link href={item.link} className="ps-0">{item.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-widget left">
                                <div className="widget-title">
                                    <h2>Services</h2>
                                </div>
                                <ul>
                                    {Services.map((item, i) => (
                                        <li key={i}><Link href={item.link}  className="ps-0">{item.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-widget left">
                                <div className="widget-title">
                                    <h2>AI & Automations</h2>
                                </div>
                                <ul>
                                    {AIAutomations.map((item, i) => (
                                        <li key={i}><Link href={item.link}  className="ps-0">{item.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-widget left">
                                <div className="widget-title">
                                    <h2>Data Solutions</h2>
                                </div>
                                <ul>
                                    {DataSolutions.map((item, i) => (
                                        <li key={i}><Link href={item.link}  className="ps-0">{item.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-widget left">
                                <div className="widget-title">
                                    <h2>Industries</h2>
                                </div>
                                <ul>
                                    {Industries.map((item, i) => (
                                        <li key={i}><Link href={item.link}  className="ps-0">{item.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row copyright">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="-copyright-text">
                                <p>© Copyright 2026 By Mayurasoft</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="copyright-list">
                                <ul>
                                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link href="/">Supports</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
