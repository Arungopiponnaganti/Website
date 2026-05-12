import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';
import { getPageMetadata } from '@/utils/seo';
import '@/app/assets/custom-dev.css';
import Faq from '@/app/Components/Faq/Faq';
import ServicesCtaBand from '@/app/Components/ctaBands/servicesCtaBand';

export const metadata = getPageMetadata('/industries');

const page = () => {
    return (
        <div className='industries-page'>
            <BreadCumb Title="Industries"></BreadCumb>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center mb-4">Industries We Serve</h1>
                        <p className="text-center mb-5 lead">
                            We deliver tailored, scalable solutions across industries with deep domain knowledge and modern technology.
                        </p>
                    </div>
                </div>
            </div>
            <Faq></Faq>
            <ServicesCtaBand></ServicesCtaBand>
        </div>
    );
};

export default page;