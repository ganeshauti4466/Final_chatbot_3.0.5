import React from 'react'
import Link from './Link';

const Digitalhub = () => {
    const getUrl = () => {
        return `https://www.stellantisdigitalhub.com/`
    };
    return (
        <div className='ictindia_page' style={{borderRadius:'21px' , backgroundColor: '#f1f1f1' , fontSize:'8px' , padding: '5px' , boxShadow: '2px 2px 4px rgba(150, 149, 149, 0.4)' }}>
            <Link   url={getUrl()} title={"More info about Stellantis Digital Hub"} />
        </div>
        
    );
}

export default Digitalhub