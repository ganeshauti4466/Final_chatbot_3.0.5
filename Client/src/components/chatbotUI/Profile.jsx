
import { useAuth0 } from "@auth0/auth0-react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLanguage } from '@fortawesome/free-solid-svg-icons'

import React from "react";




const Profile = () => {


  const { user, isAuthenticated, isLoading } = useAuth0();
  const botname = "StellaBot";

  const { loginWithRedirect, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }


  return (

    isAuthenticated ? (<div>
      <div>
        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Stellantis.svg/2560px-Stellantis.svg.png'} style={{ height: '100%', width: '73%', marginTop: '7px' }} alt="stellantis_logo" />
      </div>


      <div style={{
        backgroundColor: '#243782',
        backgroundImage: ('your logo img link'),
        padding: "7px",
        display: "flex",
        fontSize: '0.9rem',
        justifyContent: "left",
        alignItems: "center",
        height: "40px",
        align: "left",
      }} >

        <img src={user.picture} alt={user.name} style={{
          height: "80%", borderRadius: "50%", marginRight: "10px", marginLeft: "6px"
        }} />

        <div style={{ fontSize: "small", fontWeight: "bold" }}>{user.name}</div>
        <div style={{ display: 'block', fontSize: 'initial', fontWeight: 'bold', cursor: 'pointer', marginLeft: 'auto', marginRight: '5px' }}>
          {isAuthenticated ? (<p
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</p>) : (<p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => loginWithRedirect()}>Log In</p>)}
        </div>

      </div >
    </div>

    ) : (<div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black', padding: '5px' }}>
        <img src={'your logo img link'} style={{ height: '100%', width: '73%', marginLeft: '5px' }} alt="stellantis_logo" />
        <div style={{ marginLeft: '25px' }}>
        </div>
      </div>

      <div style={{
        backgroundColor: "#243782",
        backgroundImage: ('your logo img link'),
        padding: "7px",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        height: "40px",
        align: "left"
      }} >
        <img src="your logo img link" alt="profile_img" style={{ height: "80%", borderRadius: "50%", marginRight: "10px", marginLeft: "6px" }}></img>

        <div style={{ fontSize: "medium", fontWeight: "bold", height: "80%", marginLeft: "6px", marginTop: "6px" }}>{botname}</div>
        <div style={{ display: 'block', fontSize: 'initial', fontWeight: 'bold', cursor: 'pointer', marginLeft: 'auto', marginRight: '5px' }}>
          {isAuthenticated ? (<p
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</p>) : (<p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => loginWithRedirect()}>Log In</p>)}
        </div>

      </div>

    </div>

    )

  );
};

export default Profile;
