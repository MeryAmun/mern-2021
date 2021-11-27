import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

export default function Login() {
  const history = useHistory()

  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = user
    try {
      const res = await fetch('http://localhost:3001/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })

      if (res.status === 400 || !res) {
        window.alert('Registration failed check credentials')
      } else {
        window.alert('logged in')
        window.location.reload()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className='container shadow my-5'>
        <div className='row'>
          <div className='col-md-5 d-flex flex-column align-items-center text-white justify-content-center form'>
            <h1 className='display-4 fw-bolder'>Welcome Back</h1>
            <p className='lead'>Enter Your Credentials to Login</p>
            <h5>OR</h5>
            <NavLink
              to='/register'
              className='btn btn-outline-light rounded-pill pb-2 w-50'
            >
              Register
            </NavLink>
          </div>
          <div className='col-md-6 p-5'>
            <h1 className='display-6 fw-bolder mb-5'>LOGIN</h1>
            <form onSubmit={handleSubmit} method='POST'>
              <div className='mb-3'>
                <label htmlFor='exampleInputEmail1' className='form-label'>
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  value={user.email}
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
              <div className='mb-3 form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='exampleCheck1'
                />
                <label className='form-check-label' htmlFor='exampleCheck1'>
                  Remember me
                </label>
              </div>
              <button
                type='submit'
                className='btn btn-primary w-100 mt-4 rounded-pill'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
