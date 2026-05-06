import BreadCumb from '@/app/Components/Common/BreadCumb';
import AIAutomationOverview from '@/app/Components/Services/AIAutomationOverview';
import React from 'react';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/ai-automations');

const page = () => {
    return (
        <div className='ai-automations-page'>
            <BreadCumb Title="AI & Automations"></BreadCumb>
            <AIAutomationOverview></AIAutomationOverview>
        </div>
    );
};

export default page;