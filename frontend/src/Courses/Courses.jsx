import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Course from '../components/Course'

function Courses() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Navbar />
    <Course />
    <Footer />
    </div>
    
    
    </>
  )
}

export default Courses