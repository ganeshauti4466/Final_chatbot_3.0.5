import data1 from './getFetchdata.js';

export const checkdata = async(nn) =>{
    
    const apidata = await data1;
    let n = nn;
    let arr = []; 
    
    for (const element of apidata.dealer) 
    {
        if (element.dealerObjects[0].dealerState.includes(n)){
            arr.push(element.dealerObjects[0]);
        }else{
            continue;
        }
    }
    
    return arr;
}

//const data2 = await checkdata();

//export default checkdata();