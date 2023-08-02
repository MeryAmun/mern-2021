import { Link } from 'react-router-dom'
import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className='footer text-white'>
        <div className='container-xs'>
          <footer className='py-5'>
            <div className='row'>
              <div className='col-3 mx-2'>
                <h4>FINE ART</h4>
              </div>
              <div className='col-2'>
                <h5>section</h5>
                <ul className='nav flex-column'>
                  <li className='nav-item mb-2'>
                    <Link to='/' className='nav-link p-0 text-white'>
                      Home
                    </Link>
                  </li>

                  <li className='nav-item mb-2'>
                    <Link to='/' className='nav-link p-0 text-white'>
                      Features
                    </Link>
                  </li>
                  <li className='nav-item mb-2'>
                    <Link to='/' className='nav-link p-0 text-white'>
                      Pricing
                    </Link>
                  </li>
                  <li className='nav-item mb-2'>
                    <Link to='/' className='nav-link p-0 text-white'>
                      FAQs
                    </Link>
                  </li>
                  <li className='nav-item mb-2'>
                    <Link to='/' className='nav-link p-0 text-white'>
                      About
                    </Link>
                  </li>
                </ul>
              </div>

              <div className='col-4 offset-1'>
                <form>
                  <h5 className='xs-hidden'>Subscribe to our newsletter</h5>
                  <p>Monthly digest of whats new and exciting from us</p>
                  <div className='d-flex w-100 gap-2'>
                    <label htmlFor='newsletter1' className='visually-hidden'>
                      Email Address
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Email address'
                    />
                    <button className='btn btn-primary rounded-pill px-4 py-2'>
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>

              <div className='d-flex justify-content-center pt-4 mt-4 border-top'>
                <p>&copy; 2021 Company, Inc.All rights reserved,</p>
                <ul className='list-unstyled d-flex'>
                  <li className='ms-3'>
                    <Link to='/' className='link-light'>
                      <i className='fa fa-facebook fa-2x'></i>
                    </Link>
                  </li>
                  <li className='ms-3'>
                    <Link to='/' className='link-light'>
                      <i className='fa fa-instagram fa-2x'></i>
                    </Link>
                  </li>
                  <li className='ms-3'>
                    <Link to='/' className='link-light'>
                      <i className='fa fa-twitter fa-2x'></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </footer>
    </div>
  )
}
