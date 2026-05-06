import BreadCumb from '@/app/Components/Common/BreadCumb';
import DataSolutionsOverview from '@/app/Components/Services/DataSolutionsOverview';
import React from 'react';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/data-solutions');

const page = () => {
    return (
        <div className='data-solutions-page'>
            <BreadCumb Title="Data Solutions"></BreadCumb>
            <DataSolutionsOverview></DataSolutionsOverview>
        </div>
    );
};

export default page;