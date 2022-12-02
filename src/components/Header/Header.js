import React from 'react'
import Login from '../Login/Login'
import Logout from '../Logout/Logout'
import './Header.css'

export default function Header() {
  return (
    <header>
        <img className='logo' src='https://i.imgur.com/p4L7rso.png' alt="smart shop"></img>
        <div>
            <Login />
            <Logout />
        </div>
    </header>
  )
}
