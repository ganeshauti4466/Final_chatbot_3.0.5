//**********Fetching the JSON Data here**************** */

import React from 'react'
import { useEffect, useState } from 'react'
import './NewJersey.css'

const NewYorkList = () => {
    const [data1, setData] = useState([]);

//After click invoking this function to retrive data from the json data
//Dealer data card
    const dealerData = (props) => {

        <div>
            <div>
                <ol>
                    <li>{props.dealerName}</li>
                    <li>{props.phoneNumber}</li>
                    <li>{props.website}</li>
                </ol>
            </div>

            <div>
                <ol>
                    <li>{props.dealerAddress1}</li>
                    <li>{props.dealerCity}</li>
                </ol>

            </div>
        </div>
        console.log(`${props.dealerName} ${props.phoneNumber} ${props.website} ${props.dealerAddress1} ${props.dealerCity}`);
    }

    const fetchJson = () => {
        fetch('http://localhost:8000/newyork', {
            method: "GET",
            mode: "cors",
            Headers: {

                Accept: 'application.json',

                'Content-Type': 'application/json'

            },
        })
            .then(response => {
                return response.json();
            }).then(data => {
                // console.log(data.func);
                setData(data.func)
            }).catch((e) => {
                console.log(e.message);
            })
    }

    useEffect(() => {
        fetchJson()
    }, [])

    return (

        // <div onClick={dealerData(data)} style={{ color: 'black' }}>{data1.geoCenterCity}</div>

        // <div>{data1.dealerCity}</div>
        <div >
            {
                data1.map(info => {
                    return (
                        // <div className='newyorkdealers'>
                        //     <div onClick={dealerData(info)} style={{ color: 'black' }} key={info.dealerCode}>{info.dealerName}</div>
                        // </div>
                        <div className='newyorkdealerdata'>
                            <div>

                                <p>
                                    <span>Dealer Name: </span>
                                    {info.dealerName}
                                </p>
                                <p>
                                    <span>Phone: </span>
                                    {info.phoneNumber}
                                </p>
                                <a href={info.website} style={{ textDecoration: 'none', color: 'blue' }}>
                                    <span>Website Link: </span>
                                    Click here
                                </a>
                                {/* <p>{info.website}</p> */}

                            </div>

                            <div>

                                <p>
                                    <span>Address: </span>
                                    {info.dealerAddress1}
                                </p>
                                <p>
                                    <span>City: </span>
                                    {info.dealerCity}
                                </p>

                            </div>
                        </div>
                    )
                })
            }

        </div>



    )
}

export default NewYorkList



// ***************Workink on this*******************

// import React from 'react'
// import { useEffect, useState } from 'react'
// import './NewJersey.css'

// const DealerData = (props) => {
//     const props1 = props.data
//     return (
//         <div>
//             <div>
//                 <ol>
//                     <li>{props1.dealerName}</li>
//                     <li>{props1.phoneNumber}</li>
//                     <li>{props1.website}</li>
//                 </ol>
//             </div>

//             <div>
//                 <ol>
//                     <li>{props1.dealerAddress1}</li>
//                     <li>{props1.dealerCity}</li>
//                 </ol>

//             </div>
//         </div>
//     )

//     console.log(`${props.dealerName} ${props.phoneNumber} ${props.website} ${props.dealerAddress1} ${props.dealerCity}`);
// }

// const NewYorkList = () => {
//     const [data1, setData] = useState([]);
//     const [isShown, setIsShown] = useState(false);

//     const handleClick = event => {
//         setIsShown(true)
//     };

//     const fetchJson = () => {
//         fetch('http://localhost:8000/newyork', {
//             method: "GET",
//             mode: "cors",
//             Headers: {

//                 Accept: 'application.json',

//                 'Content-Type': 'application/json'
//             },
//         })
//             .then(response => {
//                 return response.json();
//             }).then(data => {
//                 // console.log(data.func);
//                 setData(data.func)
//             }).catch((e) => {
//                 console.log(e.message);
//             })
//     }

//     useEffect(() => {
//         fetchJson()
//     }, [])

//     return (

//         // <div onClick={dealerData(data)} style={{ color: 'black' }}>{data1.geoCenterCity}</div>

//         // <div>{data1.dealerCity}</div>
//         <div >
//             {
//                 data1.map(info => {
//                     return (
//                         <div className='newyorkdealers'>
//                             <div onClick={handleClick} style={{ color: 'black' }} key={info.dealerCode}>{info.dealerName}</div>
//                             {
//                                 // isShown && (
//                                 //     <div>
//                                 //         <div>
//                                 //             <ol>
//                                 //                 <li>{info.dealerName}</li>
//                                 //                 <li>{info.phoneNumber}</li>
//                                 //                 <li>{info.website}</li>
//                                 //             </ol>
//                                 //         </div>

//                                 //         <div>
//                                 //             <ol>
//                                 //                 <li>{info.dealerAddress1}</li>
//                                 //                 <li>{info.dealerCity}</li>
//                                 //             </ol>

//                                 //         </div>
//                                 //     </div>

//                                 // )
//                                 isShown && <DealerData data={info} />
//                             }
//                         </div>

//                     )
//                 })
//             }

//         </div>



//     )
// }

// export default NewYorkList