"use client"
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";
import Link from "next/link";
import Image from "next/image";

const Hero1 = ({ bgImg, SubTitle, Title, Content, BtnText, BtnLink, mainImage, VideoText }) => {

	useEffect(() => {
		loadBackgroudImages();
	}, []);


	return (
		<div className="hero-area d-flex align-items-center m-0" data-background={bgImg}>
			<div className="container">
				<div className="row hero align-items-center">
					<div className="col-lg-6">
						<div className="hero-contant">
							<h5>{SubTitle}</h5>
							<h1>{parse(Title)}</h1>
							<p>{Content}</p>
							<div className="solutek-btn">
								<Link href={BtnLink}>
									{BtnText}
									<div className="solutek-hover-btn hover-bx"></div>
									<div className="solutek-hover-btn hover-bx2"></div>
									<div className="solutek-hover-btn hover-bx3"></div>
									<div className="solutek-hover-btn hover-bx4"></div>
								</Link>
							</div>

						</div>
					</div>
					<div className="col-lg-6">
						<div className="hero-thumb">
							<Image src={mainImage} alt="img" width={452} height={771} />
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Hero1;