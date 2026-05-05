import React from 'react';
import HeaderStyle2 from '../Components/Header/HeaderStyle2';
import Footer from '../Components/Footer/Footer';

const DefalultLayout = ({ children }) => {
    return (
        <div className='main-page-area'>
            <HeaderStyle2></HeaderStyle2>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default DefalultLayout;