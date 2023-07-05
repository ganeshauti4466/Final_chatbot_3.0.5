import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const UserImg = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return (
        isAuthenticated ? (
            <div  style={{ display:'block' , width:'60px' , maxWidth:'100%'}} >
                <img src={user.picture} alt={user.name} style={{maxWidth:'100%',width:'43px',height:'43px',borderRadius:'100%' , marginTop:'3px'}}/>
                {/* <h2>{user.name}</h2>
                <p>{user.email}</p> */}
            </div>
        ) :
            (
                <div style={{ display:'block' , width:'60px'}}>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="profile_img" style={{ maxWidth:'100%',width:'43px',height:'43px',borderRadius:'100%',marginTop:'3px' }}></img>
                </div>
            )
    )
}

export default UserImg