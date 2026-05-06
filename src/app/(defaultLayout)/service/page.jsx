import Blog1 from '@/app/Components/Blog/Blog1';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Services4 from '@/app/Components/Services/Services4';
import Team1 from '@/app/Components/Team/Team1';
import React from 'react';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/service');

const page = () => {
    return (
        <div className='service-page'>
            <BreadCumb Title="Services"></BreadCumb>
            <Services4></Services4>
            {/* <Team1></Team1> */}
            {/* <Blog1></Blog1> */}
        </div>
    );
};

export default page;