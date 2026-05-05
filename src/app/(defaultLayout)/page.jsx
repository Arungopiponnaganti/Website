import React from 'react';
import Hero1 from '../Components/Banner/Hero1';
import ScaleHero from '../Components/Banner/ScaleHero';
import Features from '../Components/Features/Features';
import About1 from '../Components/About/About1';
import Services1 from '../Components/Services/Services1';
import Brand from '../Components/Brand/Brand';
import Faq from '../Components/Faq/Faq';
import Testimonial1 from '../Components/Testimonial/Testimonial1';
import Contact1 from '../Components/Contact/Contact1';
import Blog1 from '../Components/Blog/Blog1';
import WhyChooseUs from '../Components/why-choose-us/WhyChooseUs';
import Technologies from '../Components/technologies/Technologies';
import Process from '../Components/Process/Process';
import Testimonial2 from '../Components/Testimonial/Testimonial2';
import Testimonial3 from '../Components/Testimonial/Testimonial3';
import Process2 from '../Components/Process/Process2';
import Project1 from '../Components/Project/Project1';
import Project2 from '../Components/Project/Project2';
import ServiceOverview from '../Components/Services/ServiceOverview';
import AIAutomationOverview from '../Components/Services/AIAutomationOverview';
import DataSolutionsOverview from '../Components/Services/DataSolutionsOverview';

const Home = () => {
    return (
        <div className='home-page'>

            <Hero1
                bgImg="/assets/images/hero-bg.png"
                SubTitle="Software · AI · Data"
                Title="Build software. <br/> <span style='color:#ff3b00'> Automate work. </span> <br/> Decide with data."
                Content="MayuraSoft is an IT services company that helps businesses build reliable software, integrate AI into operations, and turn data into something their teams can trust and act on."
                BtnText="EXPLORE MORE"
                BtnLink="/about"
                mainImage="/assets/images/hero-thumb.png"
            ></Hero1>

            <Features></Features>


            <About1
                MainImg="/assets/images/about-thumb.png"
                ImgTitle="TRUSTED IT PARTNER"
                SubTitle="ABOUT US"
                Title="IT Services Built for How Modern<br> <span>Businesses Work.</span>"
                Content="MayuraSoft helps businesses build reliable software, integrate AI into day-to-day operations, and establish data infrastructure their teams can act on. We skip the lengthy proposals — every engagement starts with a free audit and ends with a full handover."
                listTitle="Software · AI Integration · Data Engineering"
                BottomText="Whether you're launching a new product, modernising a legacy system, or building a governed data platform — we cover the full stack under one contract. No fragmented vendors, no handoff gaps."
                BtnUrl="/about"
                BtnText="EXPLORE MORE"
            ></About1>
            <WhyChooseUs
                MainImg="/assets/images/why-choose-us.webp"
                ImgTitle="BEST IT SOLUTION"
                SubTitle="WHY CHOOSE US"
                Title="Why Businesses<br> Choose <span>MayuraSoft.</span>"
                Content="We deliver software that works, AI that integrates cleanly into your operations, and data pipelines your team can trust. No scope creep. No vendor lock-in. Just reliable outcomes with a free audit and complete handover on every engagement."
                listTitle1="End-to-End Software Delivery"
                listTitle2="AI & Data Engineering"
                BoxTitle1="10+"
                BoxTitle2="Years of Experience"
                BtnUrl="/about"
                BtnText="EXPLORE MORE"
            ></WhyChooseUs>
            <ScaleHero
                tagline="Ship Faster."
                subtitle="Built for teams that can't afford to slow down."
                description="From prototype to production, MayuraSoft moves quickly because we've already solved the hard problems. Software that ships on schedule, AI that works in practice, data pipelines that hold under load — one team, one contract."
                btn1Text="KNOW MORE"
                btn1Link="/about"
                btn2Text="HOW WE WORK"
                btn2Link="/about"
                heroImage="/assets/images/ship-new.png"
                imageAlt="MayuraSoft IT Services"
            />
            <ServiceOverview ClassAdd={'sservice-area'} />
            <AIAutomationOverview ClassAdd={'sservice-area bg-white'} />
            <DataSolutionsOverview ClassAdd={'sservice-area'} />


            <Technologies />
            <Testimonial1></Testimonial1>
            <Process2></Process2>

            {/* <Project1 />
            <Project2 /> */}





            {/* <Services1></Services1> */}

            <Faq />

            <Contact1></Contact1>
        </div>
    );
};

export default Home;