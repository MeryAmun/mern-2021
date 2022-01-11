import './App.css'

import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import About from './components/About'
import Contacts from './components/Contacts'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Navbar from './components/Navbar'
import ProtectedRoute from './ProtectedRoutes'
import Register from './components/Register'
import Services from './components/Services'

function App() {
  const [auth, setAuth] = useState(false)
  const [auth1, setAuth1] = useState(true)

  const isLoggedIn = async () => {
    try {
      const res = await fetch('http://localhost:3001/users/auth', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'Application/json',
        },
        credentials: 'include',
      })
      if (res.status === 200) {
        setAuth(true)
        setAuth1(false)
      }
      if (res.status === 401) {
        setAuth(false)
        setAuth1(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn()
  }, [])

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/contact' component={Contacts} />
        <ProtectedRoute exact path='/login' component={Login} auth={auth1} />

        <ProtectedRoute
          exact
          path='/register'
          component={Register}
          auth={auth1}
        />

        <ProtectedRoute
          exact
          path='/dashboard'
          component={Dashboard}
          auth={auth}
        />

        <ProtectedRoute exact path='/logout' component={Logout} auth={auth} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
