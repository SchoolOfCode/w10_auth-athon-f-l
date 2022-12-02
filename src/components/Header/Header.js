import React from 'react'
import Login from '../Login/Login'
import Register from '../Register/Register'
import './Header.css'

export default function Header() {
  return (
    <header>
        <p>Logo</p>
        <div>
            <Login />
            <Register />
        </div>
    </header>
  )
}
