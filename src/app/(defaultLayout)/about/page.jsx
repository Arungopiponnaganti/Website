import About4 from '@/app/Components/About/About4';
import Blog1 from '@/app/Components/Blog/Blog1';
import Brand from '@/app/Components/Brand/Brand';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Project1 from '@/app/Components/Project/Project1';
import React from 'react';

const page = () => {
    return (
        <div className='about-page'>
            <BreadCumb Title="About Us"></BreadCumb>
            <About4
                MainImg="/assets/images/aboutnew.png"
                SubTitle="MAYURASOFT COMPANY"
                Title="We Can Clients With The<br> About <span>Solution.</span>"
                Content="Monotonectally repurpose maintainable infrastruct whereas MayuraSoft in fermentum quis tempo sapien maximus design."
                listTitle1="Best IT Solutions & Service"
                listTitle2="24 Hour's Customer Service"  
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