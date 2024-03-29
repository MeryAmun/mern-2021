import { NavLink } from 'react-router-dom'
import React from 'react'

export default function Navbar({auth}) {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light shadow'>
        <div className='container'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <NavLink to='/' className='nav-link active' aria-current='page'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/about' className='nav-link'>
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/services' className='nav-link'>
                  Services
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/contact' className='nav-link'>
                  Contact
                </NavLink>
              </li>
            </ul>
            {/* <NavLink to='/' className='navbar-brand fw-bolder fs-4 mx-auto'>
              Navbar
            </NavLink> */}
            <NavLink
              to='/login'
              className='btn btn-outline-primary ms-auto px-4 rounded-pill'
            >
              <i className='fa fa-sign-in me-2'></i>
              Login
            </NavLink>
           {
            auth && (
              <>
              <NavLink
              to='/dashboard'
              className='btn btn-outline-primary ms-2 px-4 rounded-pill'
            >
              <i className='fa fa-user-plus me-2'></i>
              Dashboard
            </NavLink>
            <NavLink
              to='/logout'
              className='btn btn-outline-primary ms-2 px-4 rounded-pill'
            >
              <i className='fa fa-sign-out me-2'></i>
              Logout
            </NavLink>
              </>
            )
           }
          </div>
        </div>
      </nav>
    </div>
  )
}
