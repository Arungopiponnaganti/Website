import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer/Footer';

const layout = ({ children }) => {
    return (
        <div className='main-page-area2'>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default layout;