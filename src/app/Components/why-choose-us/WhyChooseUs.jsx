"use client"
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/image';

const WhyChooseUs = ({MainImg,SubTitle,Title,Content,listTitle1,listTitle2,BoxTitle1,BoxTitle2}) => {

    return (
			<div className="why-choose-us-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="section-title text-left">
								<p className="section-sub-title">{SubTitle}</p>
								<h2 className="section-main-title">{parse(Title)}</h2>
								<p className="section-title-descr">{Content}
								</p>
							</div>
							<div className="why-choose-us-content">
								<div className="why-choose-us-list">
									<ul>
										<li><span>{listTitle1}</span></li>
										<li><span>{listTitle2}</span></li>
									</ul>
								</div>
								<div className="solutek-btn">
									<Link href="/contact">EXPLORE MORE
										<div className="solutek-hover-btn hover-bx"></div>
										<div className="solutek-hover-btn hover-bx2"></div>
										<div className="solutek-hover-btn hover-bx3"></div>
										<div className="solutek-hover-btn hover-bx4"></div>
									</Link>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="why-choose-us-counter-box">
										<div className="why-choose-us-counter-icon">
											<Image src="/assets/images/inner/counter-icon.png"  alt="img" width={70} height={72} priority />
										</div>
										<div className="why-choose-us-counter-content">
											<h4 className="counter">{BoxTitle1}</h4>
											<span>+</span>
											<p>{BoxTitle2}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 mt-5">
							<div className="why-choose-us-thumb mt-3">
								<div className="why-choose-us-img">
									<Image src={MainImg} alt="img" width={635} height={620}   />
								</div>

								<div className="why-choose-us-shape">
									<Image src="/assets/images/inner/us-shape.png" alt="img" width={103} height={22}   />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    );
};

export default WhyChooseUs;
