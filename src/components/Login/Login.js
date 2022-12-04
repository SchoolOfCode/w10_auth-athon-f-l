import { useAuth0 } from "@auth0/auth0-react";
import React from 'react'
import './Login.css'

function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button className="login" onClick={() => loginWithRedirect()}>Log In/Register</button>
    )
  )
}

export default Login;