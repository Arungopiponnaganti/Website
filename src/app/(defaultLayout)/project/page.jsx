import BreadCumb from '@/app/Components/Common/BreadCumb';
import Projecr3 from '@/app/Components/Project/Projecr3';
import React from 'react';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/project');

const page = () => {
    return (
        <div className='project-page'>
            <BreadCumb Title="Project"></BreadCumb>
            <Projecr3></Projecr3>
        </div>
    );
};

export default page;