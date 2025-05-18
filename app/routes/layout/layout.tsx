import { Outlet } from 'react-router';
import Navbar from '~/components/Navbar/Navbar';
import Footer from '~/components/Footer';
import { useState } from 'react';

export default function () {
    return (
        <div>
            <div className='navi'>
                <Navbar />
            </div>
            <Outlet></Outlet>
            <Footer />
        </div>
    );
}