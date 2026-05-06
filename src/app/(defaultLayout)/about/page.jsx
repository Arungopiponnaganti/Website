import About4 from '@/app/Components/About/About4';
import Blog1 from '@/app/Components/Blog/Blog1';
import Brand from '@/app/Components/Brand/Brand';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Project1 from '@/app/Components/Project/Project1';
import React from 'react';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/about');

const page = () => {
    return (
        <div className='about-page'>
            <BreadCumb Title="About Us"></BreadCumb>
            <About4
                MainImg="/assets/images/aboutnew.png"
                SubTitle="MAYURASOFT COMPANY"
                Title="We Help Clients With<br> Technology <span>Solutions.</span>"
                Content="MayuraSoft delivers enterprise-grade software solutions. We specialize in custom development, cloud infrastructure, and data engineering for businesses worldwide."
                listTitle1="Best IT Solutions & Service"
                listTitle2="24/7 Customer Support"  
                BoxTitle1="826"
                BoxTitle2="Satisfied Clients"                  
            ></About4>
            {/* <Project1 
                bgImage="/assets/images/inner/project-bg-3.png"
                ClassAdd="project-area style-two"
            ></Project1>
            <Brand></Brand>
            <Blog1></Blog1> */}
        </div>
    );
};
export default page;