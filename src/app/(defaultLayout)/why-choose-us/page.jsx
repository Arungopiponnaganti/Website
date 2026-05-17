import Brand from '@/app/Components/Brand/Brand';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Faq from '@/app/Components/Faq/Faq';
import Project1 from '@/app/Components/Project/Project1';
import WhyChooseUs from '@/app/Components/why-choose-us/WhyChooseUs';
import React from 'react';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/why-choose-us');

const page = () => {
  return (
    <div className='why-choose-us-page'>
      <BreadCumb Title="Why Choose Us"></BreadCumb>
      <WhyChooseUs
        MainImg="/assets/images/whychooseusnew.png"
        SubTitle="WHY CHOOSE US"
        Title="We Provide The Best<br/>Solution For Your <span>Business.</span>"
        Content="Monotonectally repurpose maintainable infrastructure whereas MayuraSoft in fermentum quis tempo sapien maximus design."
        listTitle1="Best IT Solutions & Service"
        listTitle2="24 Hour's Customer Service"
        BoxTitle1="100%"
        BoxTitle2="QUALITY FOCUSED"
        formTitle="Get in Touch"
        formMetadata={{ pageTitle: 'Why Choose Us' }}
      ></WhyChooseUs>
      <Faq />
      {/* <Project1
        bgImage="/assets/images/inner/project-bg-3.png"
        ClassAdd="project-area style-two"
      ></Project1> */}
      {/* <Brand></Brand> */}
    </div>
  );
};

export default page;