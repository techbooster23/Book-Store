import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Home/Home.jsx'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Courses from './Courses/Courses.jsx'
import Signup from './components/Signup.jsx'
import Contact from './Contact/Contact.jsx'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx'

function App() {
  const [authUser, setAutUser] = useAuth()
  const navigate = useNavigate()
  return (
     <>
     <Routes>
       <Route path='/' element = {<Home />} />
       <Route path='/course' element = { authUser? <Courses /> : <Navigate to="/register" /> }/>
       <Route path='/register' element = {<Signup />} />
       <Route path='/contact' element = {<Contact />} />
     </Routes>
     <div className='z-50]'>
     <Toaster />
     </div>
     
     </>
  )
}

export default App
