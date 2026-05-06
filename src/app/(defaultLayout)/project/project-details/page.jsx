import BreadCumb from '@/app/Components/Common/BreadCumb';
import ProjectDetail from '@/app/Components/ProjectDetail/ProjectDetail';
import React from 'react';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/project/project-details');

const page = () => {
    return (
        <div className='project-detail'>
            <BreadCumb Title="Project Details"></BreadCumb>
            <ProjectDetail></ProjectDetail>
        </div>
    );
};

export default page;