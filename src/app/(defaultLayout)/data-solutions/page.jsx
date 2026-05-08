import BreadCumb from '@/app/Components/Common/BreadCumb';
import DataSolutionsOverview from '@/app/Components/Services/DataSolutionsOverview';
import React from 'react';
import { getPageMetadata } from '@/utils/seo';
import Faq from '@/app/Components/Faq/Faq';
import '@/app/assets/custom-dev.css';
import DataSolutionsCtaBand from '@/app/Components/ctaBands/dataSolutionsCtaBand';
export const metadata = getPageMetadata('/data-solutions');

const page = () => {
    return (
        <div className='data-solutions-page'>
            <BreadCumb Title="Data Solutions"></BreadCumb>
            <DataSolutionsOverview ClassAdd={'sservice-area bg-light'} ></DataSolutionsOverview>
            <Faq></Faq>
            <DataSolutionsCtaBand></DataSolutionsCtaBand>
        </div>
    );
};

export default page;