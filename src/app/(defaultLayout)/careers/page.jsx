import BreadCumb from '@/app/Components/Common/BreadCumb';
import CareersPage from '@/app/Components/Career/CareersPage';
import React from 'react';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/careers');

const page = () => {
    return (
        <div className='careers-page'>
            <BreadCumb Title="Careers"></BreadCumb>
            <CareersPage></CareersPage>
        </div>
    );
};

export default page;
