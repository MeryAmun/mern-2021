import React, { useEffect } from 'react'

import { useHistory } from 'react-router-dom'

export default function Logout() {
  const history = useHistory()
  const logout = async () => {
    try {
      const res = await fetch('/logout', {
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
