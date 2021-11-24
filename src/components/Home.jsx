import About from './About'
import Contacts from './Contacts'
import { NavLink } from 'react-router-dom'
import React from 'react'
import Services from './Services'

export default function Home() {
  return (
    <div>
      <section id='home'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8 mt-5'>
              <h1 className='display-4 fw-bolder mb-4 text-center text-white'>
                Feels the fresh business perspective
              </h1>
              <p className='lead text-center fs-4 mb-5 text-white'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                magnam, asperiores beatae accusantium repudiandae maxime officia
                dolorum facere commodi explicabo fugiat assumenda ex aperiam
                aliquid suscipit fugit quidem necessitatibus quae.
              </p>
              <div className='button d-flex justify-content-center'>
                <NavLink
                  to='/contact'
                  className='btn btn-light me-4 rounded-pill px-4 py-2'
                >
                  Get Quote
                </NavLink>
                <NavLink
                  to='/services'
                  className='btn btn-outline-light rounded-pill px-4 py-2'
                >
                  Our Services
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Contacts />
    </div>
  )
}
