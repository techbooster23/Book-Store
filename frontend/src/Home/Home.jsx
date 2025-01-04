import React from 'react'
import Navbar from "../components/Navbar.jsx"
import Banner from "../components/Banner.jsx"
import Freebook from "../components/Freebook.jsx"
import Footer from "../components/Footer.jsx"


function Home() {
    return (
        <>
        <div className='dark:bg-slate-900 dark:text-white'>
            <Navbar />
            <Banner />
            <Freebook />
            <Footer />
            </div>
        </>
    )
}

export default Home