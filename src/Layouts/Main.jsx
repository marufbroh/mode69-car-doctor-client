import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Navbar from '../pages/Shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='container mx-auto min-h-[calc(100vh-386px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;