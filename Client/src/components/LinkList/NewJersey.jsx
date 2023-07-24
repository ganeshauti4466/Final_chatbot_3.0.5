/********Fetching static data from JSON file**********/

import React from 'react'
import { useEffect, useState } from 'react'
import DealerCard from './DealerCard'
import './NewJersey.css'


const NewJersey = () => {
    const [data1, setData] = useState([]);

    const dealerData = (e, props) => {
        e.preventDefault();

        console.log(`${props.dealerName} ${props.phoneNumber} ${props.website} ${props.dealerAddress1} ${props.dealerCity}`);
        <DealerCard data={props} />

        // console.log(props);
        return (

            <div className='newjerseydealerdata'>
                <div>

                    <p>
                        <span>Dealer Name: </span>
                        {props.dealerName}
                    </p>
                    <p>
                        <span>Phone: </span>
                        {props.phoneNumber}
                    </p>
                    <a href={props.website} style={{ textDecoration: 'none', color: 'blue' }}>
                        <span>Website Link: </span>
                        Click here
                    </a>
                    {/* <p>{info.website}</p> */}

                </div>

                <div>

                    <p>
                        <span>Address: </span>
                        {props.dealerAddress1}
                    </p>
                    <p>
                        <span>City: </span>
                        {props.dealerCity}
                    </p>

                </div>
            </div>

        )
    }

    const fetchJson = () => {
        fetch('http://localhost:8000/newjersey', {
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
        <div >
            {
                data1.map(info => {
                    return (
                        <div className='newjerseydelaers'>
                            <div onClick={(e) => dealerData(e, info)} style={{ color: 'black', textAlign: 'left', marginLeft: '10px' }} key={info.dealerZipCode}>{info.dealerName}</div>
                        </div>
                        // <div className='newjerseydelaers'>
                        //     <div onClick={(info) => { <DealerCard data={info} /> }} style={{ color: 'black', textAlign: 'left', marginLeft: '10px' }} key={info.dealerZipCode}>{info.dealerName}</div>
                        // </div>

                    )
                })
            }
        </div>
    )
}

export default NewJersey