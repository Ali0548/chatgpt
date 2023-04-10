import React from 'react'
import Header from '../partials/Head';
import Sidebar from '../partials/Sidebar';
import Footer from '../partials/Footer';
import Navbar from '../partials/Navbar';
import Custom from '../partials/Custom';
import Generator from './Generator';
const Dashboard = () => {
    return (
        <>
            <Header />
            <div className="wrapper ">
                <Sidebar />
                <div className="main-panel">
                    <Navbar />
                     <Generator />
                </div>
            </div >
            <Footer />
            <Custom />
        </>
    )
}

export default Dashboard
