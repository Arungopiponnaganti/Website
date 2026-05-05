import React from 'react';
import Hero2 from '../Components/Banner/Hero2';
import Brand from '../Components/Brand/Brand';
import Services2 from '../Components/Services/Services2';
import About2 from '../Components/About/About2';
import Team1 from '../Components/Team/Team1';
import Project2 from '../Components/Project/Project2';
import Testimonial2 from '../Components/Testimonial/Testimonial2';
import Process from '../Components/Process/Process';
import Blog2 from '../Components/Blog/Blog2';

const home2 = () => {
    return (
        <div className='home-page2'> 
            <Hero2
                bgImg="/assets/images/home-two/hero2-bg.jpg"
                SubTitle="MAYURASOFT IT SERVICES"
                Title="Empowering Your<br> Digital Future"
                Content="Where your interests international networks intersect provid custom software solutions for any value software."
                BtnText="EXPLORE MORE"
                BtnLink="/contact"
                mainImage="/assets/images/home-two/hero2-thu.png"
            ></Hero2>
            <Brand></Brand>
            <Services2></Services2>
            <About2
                bgImg="/assets/images/home-two/about-bg.png"
                MainImg="/assets/images/home-two/about-thu2.png"
                SubTitle="MAYURASOFT COMPANY"
                Title="Essential IT Solutions for<br> Modern Businesses"
                Content="Monotonectally repurpose maintainable infrastruct whereas MayuraSoft in fermentum quis tempo sapien maximus design."
                listTitle1="Website & Mobile application design & Development"
                listTitle2="Professional User Experince & Interface researching"
                ContactText="Contact Us"
                Number="12 345 6732 5894"
            ></About2>
            <Team1></Team1>
            <Project2></Project2>
            <Testimonial2></Testimonial2>
            <Process></Process>
            <Blog2></Blog2>
        </div>
    );
};

export default home2;