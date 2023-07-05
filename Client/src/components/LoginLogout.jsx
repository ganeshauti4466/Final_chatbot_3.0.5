// import React from 'react'
// import './LoginLogout.css'

// import { useAuth0 } from "@auth0/auth0-react";

// const LoginLogout = () => {
   
//     const { loginWithRedirect  } = useAuth0();

//     return (
//         <div style={{position:'relative'}} >
//             <div  className='headerdiv' >
//                 <div  >
//                     <img src='https://www.carscoops.com/wp-content/uploads/2020/11/stellantis-unveils-official-logo-1-1.jpg'
//                         alt='stellantis_logo' height='200px' width='260px'  ></img>
//                 </div>
//                 <div  >
//                     <h1 style={{fontWeight:'300'}}>Sign in to Stellantis</h1>
//                 </div>
//                 <div className='innerdiv'  >
//                     <div>
//                         <div  onClick={() => loginWithRedirect()} className='loginbutton' >
//                             Login
//                         </div>

//                     </div>

//                     <div>
//                         <div onClick={() => loginWithRedirect()} className='loginbutton' style={{ marginLeft:'80px' }}>
//                             Sign Up
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>

//     )
// }

// export default LoginLogout