import BreadCumb from '@/app/Components/Common/BreadCumb';
import CareersPage from '@/app/Components/Career/CareersPage';
import React from 'react';

const page = () => {
    return (
        <div className='careers-page'>
            <BreadCumb Title="Careers"></BreadCumb>
            <CareersPage></CareersPage>
        </div>
    );
};

export default page;