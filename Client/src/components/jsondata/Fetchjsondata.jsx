import React, { useEffect, useState } from 'react'

const Fetchjsondata = () => {
    const [jsondata , setjsondata] = useState(" ") ; 
    useEffect(() => {
        fetch('https://www.mopar.com/bdlws/MDLSMultipleDealerLocator?brandCode=D&countryCode=US&zipCode=10001&radius=50&resultsPage=1&resultsPerPage=20&func=SERV')
        .then((res) => res.json())
        .then((data) => {
            console.log(data.dealer) ; 
            setjsondata(data)
        })
    } , [])
  return (
    <div>
        <h2>{jsondata}</h2>
    </div>
  )
}

export default Fetchjsondata