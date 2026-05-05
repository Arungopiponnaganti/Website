import BreadCumb from '@/app/Components/Common/BreadCumb';
import DataSolutionsOverview from '@/app/Components/Services/DataSolutionsOverview';
import React from 'react';

const page = () => {
    return (
        <div className='data-solutions-page'>
            <BreadCumb Title="Data Solutions"></BreadCumb>
            <DataSolutionsOverview></DataSolutionsOverview>
        </div>
    );
};

export default page;