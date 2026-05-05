import BreadCumb from '@/app/Components/Common/BreadCumb';
import AIAutomationOverview from '@/app/Components/Services/AIAutomationOverview';
import React from 'react';

const page = () => {
    return (
        <div className='ai-automations-page'>
            <BreadCumb Title="AI & Automations"></BreadCumb>
            <AIAutomationOverview></AIAutomationOverview>
        </div>
    );
};

export default page;