import './App.css'

import { Route, Routes } from 'react-router-dom'

import About from './components/About'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import React from 'react'
import Register from './components/Register'
import Services from './components/Services'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/contact' element={<Contacts />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
