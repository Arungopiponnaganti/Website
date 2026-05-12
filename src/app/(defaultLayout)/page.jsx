import React from 'react';
import { getPageMetadata } from '@/utils/seo';
import dynamic from 'next/dynamic';

export const metadata = getPageMetadata('/');

const Hero1 = dynamic(() => import('../Components/Banner/Hero1'), { ssr: true });
const ScaleHero = dynamic(() => import('../Components/Banner/ScaleHero'), { ssr: true });
const Features = dynamic(() => import('../Components/Features/Features'), { ssr: true });
const About1 = dynamic(() => import('../Components/About/About1'));
const WhyChooseUs = dynamic(() => import('../Components/why-choose-us/WhyChooseUs'));
const ServiceOverview = dynamic(() => import('../Components/Services/ServiceOverview'));
const AIAutomationOverview = dynamic(() => import('../Components/Services/AIAutomationOverview'));
const DataSolutionsOverview = dynamic(() => import('../Components/Services/DataSolutionsOverview'));
const Technologies = dynamic(() => import('../Components/technologies/Technologies'));
const Testimonial1 = dynamic(() => import('../Components/Testimonial/Testimonial1'));
const Testimonial2 = dynamic(() => import('../Components/Testimonial/Testimonial2'));
const Testimonial3 = dynamic(() => import('../Components/Testimonial/Testimonial3'));
const Process2 = dynamic(() => import('../Components/Process/Process2'));
const Faq = dynamic(() => import('../Components/Faq/Faq'));
const Contact1 = dynamic(() => import('../Components/Contact/Contact1'));

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
            {/* <Testimonial1></Testimonial1> */}
            <Process2></Process2>

            <Faq />

            <Contact1 className="bg-light"></Contact1>
        </div>
    );
};

export default Home;