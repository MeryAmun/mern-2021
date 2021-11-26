import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const history = useNavigate()
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })

  //handle change
  const handleInput = (e) => {
    let name = e.target.name
    let value = e.target.value
    setUser({ ...user, [name]: value })
  }

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { username, email, password } = user
    console.log(user)
    try {
      const res = await fetch('http://localhost:3001/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      })

      if (res.status === 400 || !res) {
        return res.status(400).json({
          message: 'Registration failed check credentials',
        })
      } else {
        history('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div className='container shadow my-5'>
        <div className='row'>
          <div className='col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2'>
            <h1 className='display-4 fw-bolder'>Hello Friend</h1>
            <p className='lead'>Enter Your to Register</p>
            <h5>OR</h5>
            <NavLink
              to='/login'
              className='btn btn-outline-light rounded-pill pb-2 w-50'
            >
              Login
            </NavLink>
          </div>
          <div className='col-md-6 p-5'>
            <h1 className='display-6 fw-bolder mb-5'>Register</h1>
            <form onSubmit={handleSubmit} method='POST'>
              <div className='mb-3'>
                <label htmlFor='name' className='form-label'>
                  Username
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='username'
                  name='username'
                  value={user.username}
                  onChange={handleInput}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='exampleInputEmail1' className='form-label'>
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  name='email'
                  value={user.email}
                  onChange={handleInput}
                />
                <div id='emailHelp' className='form-text'>
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className='mb-3'>
                <label htmlFor='exampleInputPassword1' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  name='password'
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <div className='mb-3 form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='exampleCheck1'
                />
                <label className='form-check-label' htmlFor='exampleCheck1'>
                  I Agree to Terms and Conditions
                </label>
              </div>
              <button
                type='submit'
                className='btn btn-outline-primary w-100 mt-4 rounded-pill'
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
