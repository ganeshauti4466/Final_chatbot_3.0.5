import React from 'react'
import Link from './Link'
const Moreinfo = () => {
    const getUrl = () => {
        return `info link`
    };
    return (
        <div className='info_page' style={{borderRadius:'21px' , backgroundColor: '#f1f1f1' , fontSize:'8px' , padding: '5px' , boxShadow: '2px 2px 4px rgba(150, 149, 149, 0.4)' }}>
            <Link   url={getUrl()} title={"Navigate through this link to know more about Stellantis"} />
        </div>
        
    );
};

export default Moreinfo
