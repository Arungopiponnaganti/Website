import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';
import { getPageMetadata } from '@/utils/seo';
import './privacy-policy.css';

export const metadata = getPageMetadata('/privacy-policy');

const page = () => {
    return (
        <div className='privacy-policy-page'>
            <BreadCumb Title="Privacy Policy"></BreadCumb>
            <section className="privacy-content-section pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="privacy-content">
                                <div className="privacy-intro mb-50">
                                    <h2>Privacy Policy</h2>
                                    <p className="last-updated">Last Updated: May 05, 2026</p>
                                    <p>
                                        At Mayurasoft, we value your privacy and are committed to protecting your personal information. 
                                        This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit 
                                        our website or use our services.
                                    </p>
                                </div>

                                <div className="privacy-section mb-40">
                                    <h3>1. Information We Collect</h3>
                                    <p>We collect information that you provide directly to us, including:</p>
                                    <ul>
                                        <li><strong>Contact Information:</strong> Name, email address, phone number, and company name when you fill out forms on our website.</li>
                                        <li><strong>Business Information:</strong> Details about your business and technical requirements when requesting our services.</li>
                                        <li><strong>Communication Data:</strong> Records of your communications with us, including emails and chat transcripts.</li>
                                        <li><strong>Technical Data:</strong> IP address, browser type, operating system, and access times when you visit our website.</li>
                                    </ul>
                                </div>

                                <div className="privacy-section mb-40">
                                    <h3>2. How We Use Your Information</h3>
                                    <p>We use the collected information for the following purposes:</p>
                                    <ul>
                                        <li>To provide and improve our software development and consulting services.</li>
                                        <li>To communicate with you about your projects, proposals, and service updates.</li>
                                        <li>To respond to your inquiries and provide customer support.</li>
                                        <li>To send you relevant content, newsletters, and marketing communications (with your consent).</li>
                                        <li>To analyze website usage and optimize user experience.</li>
                                        <li>To comply with legal obligations and protect our rights.</li>
                                    </ul>
                                </div>

                                <div className="privacy-section mb-40">
                                    <h3>3. Information Sharing & Disclosure</h3>
                                    <p>We do not sell, trade, or otherwise transfer your personal information to external parties, except in the following circumstances:</p>
                                    <ul>
                                        <li><strong>Service Providers:</strong> We work with trusted third-party vendors who assist us in operating our website and delivering services (e.g., hosting providers, analytics tools).</li>
                                        <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                                        <li><strong>Legal Requirements:</strong> We may disclose information when required by law or in response to valid requests by public authorities.</li>
                                    </ul>
                                </div>

                                <div className="privacy-section mb-40">
                                    <h3>4. Data Security</h3>
                                    <p>
                                        We implement appropriate technical and organizational security measures to protect your 
                                        personal information against unauthorized access, alteration, disclosure, or destruction. 
                                        However, no method of transmission over the internet is 100% secure, and we cannot 
                                        guarantee absolute security.
                                    </p>
                                </div>

                                <div className="privacy-section mb-40">
                                    <h3>5. Data Retention</h3>
                                    <p>
                                        We retain your personal information only for as long as necessary to fulfill the purposes 
                                        outlined in this Privacy Policy. When data is no longer needed, we securely delete or 
                                        anonymize it.
                                    </p>
                                </div>

                                <div className="privacy-section mb-40">
                                    <h3>6. Your Rights</h3>
                                    <p>You have the following rights regarding your personal information:</p>
                                    <ul>
                                        <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                                        <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                                        <li><strong>Deletion:</strong> Request deletion of your personal data (where applicable).</li>
                                        <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time.</li>
                                        <li><strong>Data Portability:</strong> Request your data in a portable, machine-readable format.</li>
                                    </ul>
                                    <p>
                                        To exercise these rights, please contact us at <a href="mailto:privacy@mayurasoft.com">privacy@mayurasoft.com</a>.
                                    </p>
                                </div>

                                <div className="privacy-section mb-40">
                                    <h3>7. Cookies & Tracking Technologies</h3>
                                    <p>
                                        Our website uses cookies and similar tracking technologies to enhance user experience and analyze 
                                        site traffic. You can control cookie settings through your browser. Disabling cookies may affect the 
                                        functionality of certain features.
                                    </p>
                                </div>

                                <div className="privacy-section mb-40">
                                    <h3>8. Third-Party Links</h3>
                                    <p>
                                        Our website may contain links to third-party websites, services, or applications. We are not responsible 
                                        for the privacy practices of those third parties. We encourage you to review the privacy policies of any 
                                        third-party sites you visit.
                                    </p>
                                </div>

                                <div className="privacy-section mb-40">
                                    <h3>9. Children&apos;s Privacy</h3>
                                    <p>
                                        Our services are not intended for children under 13 years of age. We do not knowingly collect personal 
                                        information from children. If we become aware that we have collected data from a child without parental 
                                        consent, we will take steps to remove that information.
                                    </p>
                                </div>

                                <div className="privacy-section mb-40">
                                    <h3>10. Changes to This Policy</h3>
                                    <p>
                                        We may update this Privacy Policy from time to time. We will notify you of any material changes by 
                                        posting the new policy on this page and updating the &quot;Last Updated&quot; date. We encourage you to 
                                        review this policy periodically.
                                    </p>
                                </div>

                                <div className="privacy-section mb-40">
                                    <h3>11. Contact Us</h3>
                                    <p>
                                        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                                    </p>
                                    <div className="contact-details">
                                        <p><strong>Mayurasoft Technologies Pvt. Ltd.</strong></p>
                                        <p>Email: <a href="mailto:privacy@mayurasoft.com">privacy@mayurasoft.com</a></p>
                                        <p>Website: <a href="https://mayurasoft.com">mayurasoft.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;