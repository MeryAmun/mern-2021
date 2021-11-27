import React, { useState } from 'react'

export default function Contacts() {
  const [msg, setMsg] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setMsg({ ...msg, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, email, message } = msg
    try {
      const res = await fetch('http://localhost:3001/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })

      if (res.status === 400 || !res) {
        window.alert('Registration failed check credentials')
      } else {
        window.alert('message sent')
        setMsg({
          name: '',
          email: '',
          message: '',
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <section id='contact'>
        <div className='container my-5 py-5'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='fs-5 text-center mb-0'>Contact Us</h3>
              <h1 className='display-6 text-center mb-4'>
                Have some <b>Questions?</b>
              </h1>
              <hr className='w25 max-auto' />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <img src='/assets/contact.jpg' alt='contact' className='w-75' />
            </div>
            <div className='col-md-6'>
              <form onSubmit={handleSubmit} action='POST'>
                <div className='mb-3'>
                  <label htmlFor='name' className='form-label'>
                    Your Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Ngwa Suh'
                    id='name'
                    name='name'
                    value={msg.name}
                    onChange={handleChange}
                  />
                </div>
                <div className='mb-3'>
                  <label
                    htmlFor='exampleFormControlInput1'
                    className='form-label'
                  >
                    Email address
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    placeholder=''
                    id='email'
                    name='email'
                    value={msg.email}
                    onChange={handleChange}
                  />
                </div>
                <div className='mb-3'>
                  <label
                    htmlFor='exampleFormControlTextarea1'
                    className='form-label'
                  >
                    Your message
                  </label>
                  <textarea
                    className='form-control'
                    id='message'
                    name='message'
                    value={msg.message}
                    onChange={handleChange}
                    rows='5'
                  ></textarea>
                </div>
                <button className='btn btn-outline-primary rounded-pill px-4'>
                  Send msg
                  <i className='fa fa-paper-plane ms-2'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
