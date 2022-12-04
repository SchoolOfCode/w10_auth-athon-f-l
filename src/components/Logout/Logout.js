import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './Logout.css'

const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button className="logout" onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    )
    
  );
};

export default Logout;