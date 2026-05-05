"use client"
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Form from "../Form/Form";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const Contact1 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

	
      
    return (
        <div className="contact-area" data-background="/assets/images/contact-bg2.png">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7">
                            <div className="section-title text-left">
                            <SectionTitle
                                    SubTitle="CONTACT US"
                                    Title="Make an Online Appoinemnt Booking<br> For Business Planing."
                            ></SectionTitle>
                            </div>
                            <Form></Form>
                        </div>
                        
                    </div>
                </div>
                
            </div>

    );
};

export default Contact1;