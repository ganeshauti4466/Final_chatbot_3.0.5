import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import Avatar from 'react-avatar';

const MyCustomAvatar = (props) => {

    const { user, isAuthenticated } = useAuth0();


    return (
        
        isAuthenticated ? (
            <div>
                <Avatar name={user.name}
                    src={user.picture} size="43" round={true} style={{ marginLeft: "12px" }} />

            </div>) : (<div
            >
                <Avatar name="profile_avatar"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="profile_img" size="43" round={true} style={{ marginLeft: "12px" }} />
            </div>)

        // <div>
        //     <Avatar name={user.name} src={user.picture} size="43" round={true} style={{marginLeft: "12px"}}  />
        // </div>
    )
}

export default MyCustomAvatar