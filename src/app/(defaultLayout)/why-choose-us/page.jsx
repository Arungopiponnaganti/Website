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
        Title="Practical Technology Delivery<br/>For <span>Growing Teams.</span>"
        Content="MayuraSoft brings software development, AI integration, automation, data engineering, and cloud delivery into one accountable roadmap. We start with a practical audit, identify the safest first move, and deliver with documentation, governance, and full handover."
        listTitle1="Audit-first roadmap before build spend"
        listTitle2="Software, AI, data, and cloud under one team"
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
