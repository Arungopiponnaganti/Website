import Blog3 from '@/app/Components/Blog/Blog3';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/blog');

const page = () => {
    return (
        <div className='blog-page'>
            <BreadCumb Title="Blog"></BreadCumb>
            <Blog3></Blog3>
        </div>
    );
};

export default page;