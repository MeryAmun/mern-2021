import './App.css'

import About from './components/About'
import Contacts from './components/Contacts'
import Home from './components/Home'
import Navbar from './components/Navbar'
import React from 'react'
import Services from './components/Services'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contacts />
    </>
  )
}

export default App
