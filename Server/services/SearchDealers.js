import data1 from '../getFetchdata.js';

// function SearchDealers(n) 

export const SearchDealers = async(n) =>
{
    const apidata = data1;
    let arr = [];
    //---------Location Comparison--------------------------------
    let ln = '';
    let loc = (n.location || n.city || n.state) ?? 'None';
    const loc1 = loc.toLowerCase();
    if (loc1.includes('new') && loc1.includes('york')) 
    {
        ln = 'NY';
    } 
    else if (loc1.includes('new') && loc1.includes('jersey'))
    {
        ln = 'NJ';
    }
    else if (loc1.includes('connecticut'))
    {
        ln = 'CT';
    }
    else
    {
        // return ["State/City Not Found"];
        return ["notfound"];
    }
    //----------------Brand Comparison-----------------------------
    let bn = '';
    let brn = n.brand ?? 'None';
    const brn1 = brn.toLowerCase();
    // const arr1 = [];
    if (brn1.includes('chrysler') || brn1.includes('dodge') || brn1.includes('jeep') || brn1.includes('ram')) 
    {
        bn = 'C';
    } 
    else if (brn1.includes('wagoneer'))
    {
        bn = 'X';
    }
    else
    {
        // return ["Brand Not Found"];
        return ["notfound"];
    }
    //----------------Data Extraction from Mopar API------------------------------
    for (const element of apidata.dealer) {
        //console.log(`${property}: ${inputdata[property]}`);
        // console.log(element.supportedBrands);
        // if (element.supportedBrands.includes(m) && element.dealerObjects[0].dealerState.includes(n)){
        if (element.dealerObjects[0].dealerState.includes(ln) && element.supportedBrands.includes(bn)){
            arr.push(element.dealerObjects[0].dealerName);
            // console.log(element.dealerObjects[0].dealerName);
           // arr.push(element.supportedBrands);
        }else{
            continue;
        }
    }
    // console.log(arr);
    return arr;
}