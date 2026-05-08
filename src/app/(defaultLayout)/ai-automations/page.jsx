import BreadCumb from '@/app/Components/Common/BreadCumb';
import AIAutomationOverview from '@/app/Components/Services/AIAutomationOverview';
import React from 'react';
import { getPageMetadata } from '@/utils/seo';
import Faq from '@/app/Components/Faq/Faq';
import '@/app/assets/custom-dev.css';
import AICtaBand from '@/app/Components/ctaBands/aiAutomationCtaBand';
export const metadata = getPageMetadata('/ai-automations');

const page = () => {
    return (
        <div className='ai-automations-page'>
            <BreadCumb Title="AI & Automations"></BreadCumb>
            <AIAutomationOverview ClassAdd={'sservice-area bg-light'}></AIAutomationOverview>
            <Faq></Faq>
            <AICtaBand></AICtaBand>
        </div>
    );
};

export default page;