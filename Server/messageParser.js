import data1 from './getFetchdata.js';
import { SearchDealers } from './services/SearchDealers.js';
import { getServiceHours } from './services/getServiceHours.js';
// 
// Sample intents and their corresponding services
// const intents = {
//     'service_hours': getServiceHours,
//     'dealer_name': getDealerName,
//     'dealer_city': getDealerCity
// };

//----------------------------------------------------------------
// Sample functions for different services
function getDealerName() {
    return 'Our dealer name is XYZ Motors.';
}

function getDealerCity() {
    return 'Our dealer is located in New York City.';
}

//----------------------------------------------------------------
// Message parser function

// function parseMessage(message)


// Check if the intent exists in the intents object
// else if ((intent.includes('service') && intent.includes('Closing') && intent.includes('Time')) || intent.includes('GetServiceClosingTime'))
export const parseMessage = async (message) => {
    const input = JSON.parse(message);
    const { intent, entities } = input;
    // console.log(input);
    const intent1 = intent.toLowerCase();

    if (intent1.includes('search_dealers') || intent1.includes('SearchDealers') || ((intent1.includes('search') && intent1.includes('dealers')))) {
        return SearchDealers(entities);
    }
    else if (intent1.includes('getdealerhours') || intent1.includes('getservicehours') || (intent1.includes('get') && (intent1.includes('dealers') || intent1.includes('dealer') || intent1.includes('service')) && intent1.includes('hours'))) {
        return getServiceHours(entities);
    }
    else if (intent1.includes('department') && intent1.includes('get')) {
        return 'music';
    }
    else {
        // return 'default';
        return ["notfound"];
    }
};

