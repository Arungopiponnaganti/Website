import BlogDetail from '@/app/Components/BlogDetail/BlogDetail';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';
import { getPageMetadata } from '@/utils/seo';

export const metadata = getPageMetadata('/blog/blog-details');

const page = () => {
    return (
        <div className='blog-detail'>
            <BreadCumb Title="Blog Details"></BreadCumb>
            <BlogDetail></BlogDetail>
        </div>
    );
};

export default page;