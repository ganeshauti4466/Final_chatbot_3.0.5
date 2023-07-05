import React from 'react'

const DealerCard = ( props) => {
    const jpm = props.data ; 
    console.log(jpm);
    // e.preventDefault();

    console.log(`${jpm.dealerName} /n ${jpm.phoneNumber} ${jpm.website} ${jpm.dealerAddress1} ${jpm.dealerCity}`);

    return (

        <div className='newjerseydealerdata'>
            <div>

                <p>
                    <span>Dealer Name: </span>
                    {jpm.dealerName}
                </p>
                <p>
                    <span>Phone: </span>
                    {jpm.phoneNumber}
                </p>
                <a href={jpm.website} style={{ textDecoration: 'none', color: 'blue' }}>
                    <span>Website Link: </span>
                    Click here
                </a>
                {/* <p>{info.website}</p> */}

            </div>

            <div>

                <p>
                    <span>Address: </span>
                    {jpm.dealerAddress1}
                </p>
                <p>
                    <span>City: </span>
                    {jpm.dealerCity}
                </p>

            </div>
        </div>

    )
}

export default DealerCard