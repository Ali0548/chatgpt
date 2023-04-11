import React from 'react'
import Header from '../partials/Head';
import Sidebar from '../partials/Sidebar';
import Footer from '../partials/Footer';
import Navbar from '../partials/Navbar';
import Custom from '../partials/Custom';
import Chatting from './Chatting';
const Dashboard = () => {
    return (
        <>
            <Header />
         
                   
                <Sidebar />
                <div className="main-panel">
                     <Chatting />
                </div>
         
    
            <Custom />
        </>
    )
}

export default Dashboard
