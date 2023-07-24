import React, { useEffect } from 'react'

const ShowMessage = (props) => {
  useEffect(()=>{
    const array = props.state.messages 
    
    for (let index = array.length-1; index >= 0; index--) {
        const typw = array[index];
        if (typw.type === 'user') {
            console.log(typw.messages);
            break ; 
        }
    }
  })
}

export default ShowMessage