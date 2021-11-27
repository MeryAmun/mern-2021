import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

export default function Logout() {
  const history = useNavigate()
  const logout = async () => {
    try {
      const res = await fetch('http://localhost:3001/users/logout', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (res.status === 401 || !res) {
        window.alert('please logout later')
      } else {
        window.alert('you logged out')
        history('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    logout()
  })
  return <div></div>
}
