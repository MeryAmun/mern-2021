import { NavLink } from 'react-router-dom'
import React from 'react'

export default function About() {
  return (
    <div>
      <section id='about'>
        <div className='container-xs my-5 py-5'>
          <div className='row'>
            <div className='col-md-6'>
              <img src='/assets/about.jpg' alt='about' className='w-75 mt-5' />
            </div>
            <div className='col-md-6'>
              <h3 className='fs-5 mb-0 mx-2'>About Us</h3>
              <h1 className='display-6 mb-2 mx-2'>
                Who<b>we</b> Are
              </h1>
              <hr className='w-50' />
              <p className='lead p-2 mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, omnis? Mollitia quaerat voluptatum nostrum odit
                reiciendis? Aliquid unde corporis ipsa distinctio! Voluptatum
                officia excepturi voluptatem id pariatur harum nam nisi ducimus
                reiciendis? Neque odio, ab repellendus omnis sint autem rerum
                magnam repellat, debitis laudantium accusantium ratione
                temporibus. At, iusto tempora?
              </p>
              <button className='btn btn-primary rounded-pill px-2 py-2 mx-2'>
                Get Started
              </button>
              <NavLink
                to='/contact'
                className='btn btn-primary rounded-pill px-2 py-2 mx-2'
              >
                Our Services
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
