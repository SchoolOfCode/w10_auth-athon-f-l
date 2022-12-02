import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect} from "react";
import './Profile.css'

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState({});
  //console.log(userMetadata);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-6ai5crx2c6k42ay4.us.auth0.com";
  
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user user_metadata",
        });
  
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const { user_metadata } = await metadataResponse.json();
  
        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  return (
    isAuthenticated && (
      <div className="profile">
        <img src={user.picture} alt={user.name} />
        <h2>Welcome {user.name}!</h2>
        <p>{user.email}</p>
        <p>{userMetadata.user_type}</p>
      </div>
    )
  );
};

export default Profile;