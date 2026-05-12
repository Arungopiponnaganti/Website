import BreadCumb from '@/app/Components/Common/BreadCumb';
import Contact1 from '@/app/Components/Contact/Contact1';
import MapForm from '@/app/Components/Map/Mapform';
import React from 'react';
import { generateMetadataAsync } from '@/utils/seo';

export async function generateMetadata(props) {
  return generateMetadataAsync(props);
}

const page = ({ searchParams }) => {
    return (
        <div className='contact-page'>
            <BreadCumb Title="Contact"></BreadCumb>
            <Contact1></Contact1>
            <MapForm></MapForm>
        </div>
    );
};

export default page;