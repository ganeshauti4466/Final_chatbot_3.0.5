
//Fetching the JSON Data Link all the DATA is stores in data variable

import React, { useEffect, useState } from 'react'

const Fetchjsondata = () => {
    const [jsondata , setjsondata] = useState(" ") ; 
    useEffect(() => {
        fetch('JSON API link')
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
