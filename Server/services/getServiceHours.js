import data1 from '../getFetchdata.js';

export const getServiceHours = async (n) => {
    const apidata = data1;
    let arr = [];
    

    //---------City Comparison--------------------------------
    let loc1 = (n.location || n.city || n.state) ?? 'None'; // if undefined condition
    let dep2 = (n.department) ?? 'None';
    // loc1 = loc1.toLowerCase();
    // dep2 = dep2.toLowerCase();
    // console.log(loc1);
    // console.log(loc2);   
    let arr1 = [{ key1: "value1" }];
    let v2 = null;
    let dname = null;
    for (const element of apidata.dealer) {
        const dealer = element.dealerObjects[0];
        if (
            dealer.dealerState.toLowerCase() === loc1.toLowerCase() ||
            dealer.dealerCity.toLowerCase() === loc1.toLowerCase() ||
            dealer.dealerName.includes(loc1)
        ) {
            dname = dealer.dealerName;
            if (dep2 === 'service' || dep2 === 'services') {
                v2 = dealer.departments.service.hours;
            } else if (dep2 === 'sales' || dep2 === 'sale') {
                v2 = dealer.departments.sales.hours;
            } else if (dep2 === 'parts' || dep2 === 'part') {
                v2 = dealer.departments.parts.hours;
            } else if (dep2 === 'bodyshop' || dep2 === 'bodyshops') {
                v2 = dealer.departments.bodyShop.hours;
            } else if (dep2 === 'used') {
                v2 = dealer.departments.used.hours;
            } else {
                // return ["Department Not Found"];
                return ["notfound"];
            }
            arr1[0] = v2;
        }
    }
    if (arr1.some(obj => Object.values(obj).includes("value1"))) {
        // return ["Department/Location Not Found"];c
        return ["notfound"];
    }
    else {
        let elements = Object.entries(arr1[0]);
        arr = elements.map(([key, value]) => {
            console.log(key + ': ' + value);
            const t1 = value.closed ? 'Closed' : 'Open';
            const t2 = `${value.open.time} ${value.open.ampm}`;
            const t3 = `${value.close.time} ${value.close.ampm}`;

            return `${key} : ${t1}\nopen: ${t2}\nclose: ${t3}`;
        });
        arr.unshift(dname);
    }
    // console.log(arr);
    return arr;
    //----------------previous code ----------------
    // for (const element of apidata.dealer) {
    //     if (element.dealerObjects[0].dealerState.toLowerCase() === loc1 || element.dealerObjects[0].dealerCity.toLowerCase() === loc1 || element.dealerObjects[0].dealerName.includes(loc1)) {
    //         // let v1 = element.dealerObjects[0].departments.service;
    //         // let v1 = Object.keys(element.dealerObjects[0].departments);
    //         // console.log(v1);
    //         console.log(element.dealerObjects[0]);
    //         let v2 = null;
    //         if (dep2 === 'service' || dep2 === 'services') {
    //             // console.log('service IF');
    //             v2 = element.dealerObjects[0].departments.service.hours;
    //         } else if (dep2 === 'sales' || dep2 === 'sale') {
    //             // console.log('sales IF');
    //             v2 = element.dealerObjects[0].departments.sales.hours;
    //         }
    //         else if (dep2 === 'parts' || dep2 === 'part') {
    //             v2 = element.dealerObjects[0].departments.parts.hours;
    //         }
    //         else if (dep2 === 'bodyshop' || dep2 === 'bodyshops') {
    //             v2 = element.dealerObjects[0].departments.bodyShop.hours;
    //         }
    //         else if (dep2 === 'used') {
    //             v2 = element.dealerObjects[0].departments.used.hours;
    //         }
    //         else {
    //             return ["Department Not Found"];
    //         }
    //         arr1[0] = v2;
    //         // console.log(v2);
    //     } else {
    //         continue;
    //     }
    // }
    // console.log(arr1);-*
    // let elements = Object.entries(arr1[arr1.length - 1]);
    // console.log(elements);
    // elements.forEach((element) => {
    //     let t0 = element[0];
    //     let t1 = '';
    //     if (element[1].closed )
    //     {
    //         t1 = 'Closed';
    //     }
    //     else
    //     {
    //         t1 = 'Open';
    //     }
    //     // let t2 = element[1].open;
    //     let t2_0 = element[1].open.time;
    //     let t2_1 = element[1].open.ampm;
    //     // let t3 = element[1].close;
    //     let t3_0 = element[1].close.time;
    //     let t3_1 = element[1].close.ampm;
    //     arr.push(t0 + ' : ' + t1 + '\n' + 'open: ' + t2_0 + ' ' + t2_1 + '\n' + 'close: ' + t3_0 + ' ' + t3_1);
    // });

}