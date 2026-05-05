import BreadCumb from '@/app/Components/Common/BreadCumb';
import Contact1 from '@/app/Components/Contact/Contact1';
import MapForm from '@/app/Components/Map/Mapform';
import React from 'react';

const page = () => {
    return (
        <div className='contact-page'>
            <BreadCumb Title="Contact"></BreadCumb>
            <Contact1></Contact1>
            <MapForm></MapForm>
        </div>
    );
};

export default page;