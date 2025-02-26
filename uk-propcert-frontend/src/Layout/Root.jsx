import React from 'react';
import Navbar from '../Pages/Sheard/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Sheard/Footer';

const Root = () => {
    return (
        <div className="min-h-screen flex flex-col">
        <div className="sticky top-0 z-50">
            <Navbar />
        </div>

        <main className="flex-grow">
            <Outlet />
        </main>

        <div className="mt-auto">
            <Footer />
        </div>
    </div>

    );
};

export default Root;