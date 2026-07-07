import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
// import Sidebar from '../components/Sidebar';

const MainLayout = () => {
    return (
        <>
            <Header />
            <main className="pt-6 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto w-full max-w-7xl">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;