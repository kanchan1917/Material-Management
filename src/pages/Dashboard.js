import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import MainContent from '../Components/MainContent'
import Footer from '../Components/Footer'


const Dashboard = () =>
{
    return (
        <div>
            <Header />
            <Sidebar />
            <MainContent />
            <Footer />
        </div>
    )
}

export default Dashboard
