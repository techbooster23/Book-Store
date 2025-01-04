import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Home/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import Courses from './Courses/Courses.jsx'
import Signup from './components/Signup.jsx'
import Contact from './Contact/Contact.jsx'

function App() {

  return (
     <>
     <Routes>
       <Route path='/' element = {<Home />} />
       <Route path='/course' element = {<Courses />}/>
       <Route path='/register' element = {<Signup />} />
       <Route path='/contact' element = {<Contact />} />
       
     </Routes>
     </>
  )
}

export default App
