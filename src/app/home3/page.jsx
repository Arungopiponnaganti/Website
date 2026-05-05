import React from 'react';
import Hero3 from '../Components/Banner/Hero3';
import Services3 from '../Components/Services/Services3';
import About3 from '../Components/About/About3';
import Counter from '../Components/Counter/Counter';
import CaseStudy from '../Components/CaseStudy/CaseStudy';
import Testimonial3 from '../Components/Testimonial/Testimonial3';
import Process2 from '../Components/Process/Process2';
import Faq2 from '../Components/Faq/Faq2';
import Blog2 from '../Components/Blog/Blog2';

const page = () => {
    return (
        <div className='home-page3'>
            <Hero3></Hero3>
            <Services3></Services3>
            <About3
                bgImg="/assets/images/home-3/about3-bg.png"
                MainImg="/assets/images/home-3/about-thu3.png"
                SubTitle="about company"
                Title="Customized Solutions to Meet Client <span>Needs.</span>"
                Content="Solution is a long established fact that a reader will be distracted the reada content of a page when looking at layout the point."
                BoxTitle1="Cloud Based Solution"
                BoxTitle2="Best Services"  
                listTitle1="Sed non odio non elit porttitor tinc"
                listTitle2="Sed non odio non elit porttitor tincidunt donec"                         
           ></About3>
           <Counter></Counter>
           <CaseStudy></CaseStudy>
           <Testimonial3></Testimonial3>
           <Process2></Process2>
           <Faq2></Faq2>
           <Blog2></Blog2>
        </div>
    );
};

export default page;