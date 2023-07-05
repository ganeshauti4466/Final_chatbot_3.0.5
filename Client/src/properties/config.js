import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "../components/LearningOptions/LearningOptions";
import LinkList from "../components/LinkList/LinkList";
import Profile from "../components/chatbotUI/Profile";
// import { useAuth0 } from "@auth0/auth0-react";
import OpenAIData from "../components/OpenAIData";
import MyCustomAvatar from "../components/chatbotUI/MyCustomAvatar";
import DogPicture from "../components/DogPicture";
import Moreinfo from "../components/catalog/Moreinfo";
import MyAvatar from "../components/chatbotUI/MyAvatar";
import Fetchjsondata from "../components/jsondata/Fetchjsondata";
import ServiceLocation from "../components/LearningOptions/ServiceLocation";
import NewYorkList from "../components/LinkList/NewYorkList";
import NewJersey from "../components/LinkList/NewJersey";
import Digitalhub from "../components/catalog/Digitalhub";
import Stellantismiss from "../components/chatbotUI/Stellantismiss";
import Careeropp from "../components/catalog/Careeropp";
// import MyCustomChatContainer from "../components/chatbotUI/MyCustomChatContainer";

const showmethod = () => {
    return ("Hello! I am StellaBOT, your assistant for today.\n How may I help you?")
}

const botname = "StellaBot";
const config = {

    botname: "StellaBot",

    initialMessages: [createChatBotMessage(`${showmethod()}`),
    // createChatBotMessage(
    //     `I am ${botname} how can I help you...`,
    //     {
    //         delay: 3000,
    //         // widget: 'learningOptions',
    //     }
    // ),
    
    ],

    widgets: [


        // {
        //     widgetName: 'javascriptLinks',
        //     widgetFunc: (props) => <LinkList {...props} />,
        //     props: {
        //         options: [
        //             {
        //                 text: "Introduction to JS",
        //                 url:
        //                     "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
        //                 id: 1,
        //             },
        //             {
        //                 text: "Mozilla JS Guide",
        //                 url:
        //                     "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        //                 id: 2,
        //             },
        //             {
        //                 text: "Frontend Masters",
        //                 url: "https://frontendmasters.com",
        //                 id: 3,
        //             },
        //         ],
        //     },
        // },
        {
            widgetName: 'jeepinfo',
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Jeep Compass",
                        url:
                            "https://www.jeep-india.com/new-compass.html?utm_source=google&utm_medium=search&utm_campaign=Google_Search_Compass_Brand_Dec_22&utm_term=jeep%20comas&utm_content=JEEP_COMPASS_MISSPELLED&gclid=Cj0KCQjwy9-kBhCHARIsAHpBjHj53Dd7uo_kJQAdetFHZuKB6vVtuwSmmrgpvxZ1GYC75g8pnHO0JgQaAiBnEALw_wcB",
                        id: 1,
                    },
                    {
                        text: "Jeep Wrangler",
                        url:
                            "https://www.jeep-india.com/wrangler-jl.html",
                        id: 2,
                    },
                    {
                        text: "Jeep Meridian",
                        url:
                            "https://www.jeep-india.com/new-jeep-meridian.html?utm_source=google&utm_medium=search&utm_campaign=Google_Search_Compass_Brand_Dec_22&utm_term=jeep%20comas&utm_content=JEEP_COMPASS_MISSPELLED&gclid=Cj0KCQjwy9-kBhCHARIsAHpBjHj53Dd7uo_kJQAdetFHZuKB6vVtuwSmmrgpvxZ1GYC75g8pnHO0JgQaAiBnEALw_wcB",
                        id: 3,
                    },
                    {
                        text: "jeep Avenger",
                        url: "https://www.jeep.co.uk/jeep-avenger/electric",
                        id: 4,
                    },
                    {
                        text: "jeep Cherokee",
                        url: "https://www.jeep.co.uk/jeep-avenger/electric",
                        id: 4,
                    },
                ],
            },
            delay: 2000
        },
        {
            widgetName: 'dodgeinfo',
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Dodge Charger",
                        url:
                            "https://www.dodge.com/charger.html",
                        id: 1,
                    },
                    {
                        text: "Dodge Challenger",
                        url:
                            "https://www.dodge.com/challenger.html",
                        id: 2,
                    },
                    {
                        text: "Dodge Hornet",
                        url: "https://www.dodge.com/hornet.html",
                        id: 3,
                    },
                ],
            },
            delay: 2000
        },
        {
            widgetName: 'Peugeotinfo',
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "New 2008",
                        url:
                            "https://www.peugeot.co.uk/models/2008.html",
                        id: 1,
                    },
                    {
                        text: "New 308",
                        url:
                            "https://www.peugeot.co.uk/models/308.html",
                        id: 2,
                    },
                    {
                        text: "New 408",
                        url: "https://www.peugeot.co.uk/models/408.html",
                        id: 3,
                    },
                    {
                        text: "New 508 SW",
                        url: "https://www.peugeot.co.uk/models/308-sw.html",
                        id: 4,
                    },
                    {
                        text: "Hypercar 9X8",
                        url: "https://www.peugeot.co.uk/models/categories/sport/HYPERCAR-9X8.html",
                        id: 5,
                    },
                ],
            },
            delay: 2000
        },
        {
            widgetName: 'Raminfo',
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Ram 1500 TRX",
                        url:
                            "https://www.ramtrucks.com/trx.html",
                        id: 1,
                    },
                    {
                        text: "Ram 1500",
                        url:
                            "https://www.ramtrucks.com/ram-1500.html",
                        id: 2,
                    },
                    {
                        text: "Ram 1500 Classic",
                        url: "https://www.ramtrucks.com/ram-1500classic.html",
                        id: 3,
                    },
                    {
                        text: "Ram 2500",
                        url: "https://www.ramtrucks.com/ram-2500.html",
                        id: 4,
                    },
                    {
                        text: "Ram 3500",
                        url: "https://www.ramtrucks.com/ram-3500.html",
                        id: 5,
                    },
                    {
                        text: "Ram Promaster City",
                        url: "https://www.ramtrucks.com/ram-promaster-city.html",
                        id: 6,
                    },
                ],
            },
            delay: 2000
        },
        {
            widgetName: 'fiatinfo',
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Fiat 500X POP",
                        url:
                            "https://www.fiatusa.com/",
                        id: 1,
                    },
                    {
                        text: "Fiat 500X Trekking",
                        url:
                            "https://www.fiatusa.com/",
                        id: 2,
                    },
                    {
                        text: "Fiat 500X sport",
                        url: "https://www.fiatusa.com/",
                        id: 3,
                    },
                    {
                        text: "Fiat 500X Trekking Plus",
                        url: "https://www.fiatusa.com/",
                        id: 3,
                    },
                ],
            },
            delay: 2000
        },
        {
            widgetName: 'alphainfo',
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Alpha Stelvo",
                        url:
                            "https://www.alfaromeousa.com/suvs/stelvio",
                        id: 1,
                    },
                    {
                        text: "Alpha Giulia",
                        url:
                            "https://www.alfaromeousa.com/cars/giulia",
                        id: 2,
                    },
                    {
                        text: "Alpha Stelvio Quadrifoglio",
                        url: "https://www.alfaromeousa.com/suvs/stelvio/quadrifoglio",
                        id: 3,
                    },
                    {
                        text: "Alpha Tonale",
                        url: "https://www.alfaromeousa.com/tonale",
                        id: 3,
                    },
                ],
            },
            delay: 2000
        },
        {
            widgetName: 'Citroeninfo',
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "C3 AIRCROSS",
                        url:
                            "https://www.citroen.in/exploreC3aircross",
                        id: 1,
                    },
                    {
                        text: "Citroen C3",
                        url:
                            "https://www.citroen.in/exploreC3aircross",
                        id: 2,
                    },
                    {
                        text: "Citroen eC3",
                        url: "https://www.citroen.in/exploreC3aircross",
                        id: 3,
                    },
                ],
            },
            delay: 2000
        },
        {
            widgetName: 'Chryslerinfo',
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Chrysler Pacifica",
                        url:
                            "https://www.chrysler.com/pacifica.html",
                        id: 1,
                    },
                    {
                        text: "Chrysler Pacifica Plug-In Hybrid",
                        url:
                            "https://www.chrysler.com/pacifica/hybrid.html",
                        id: 2,
                    },
                    {
                        text: "Chrysler 300",
                        url: "https://www.chrysler.com/300.html",
                        id: 3,
                    },
                ],
            },
            delay: 2000
        },
        {
            widgetName: 'Maseratiinfo',
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Meserati Home Page",
                        url:
                            "https://www.maserati.com/in/en",
                        id: 1,
                    },
                    {
                        text: "Maserati Grecale",
                        url:
                            "https://www.maserati.com/in/en/models/grecale",
                        id: 2,
                    },
                    {
                        text: "Maserati Granturismo",
                        url: "https://www.maserati.com/in/en/models/granturismo",
                        id: 3,
                    },
                    {
                        text: "Levante",
                        url: "https://www.maserati.com/in/en/models/levante",
                        id: 4,
                    },
                    {
                        text: "Maserati MC20",
                        url: "https://www.maserati.com/in/en/models/mc20",
                        id: 5,
                    },
                    {
                        text: "Maserati Ghibli",
                        url: "https://www.maserati.com/in/en/models/ghibli",
                        id: 6,
                    },
                ],
            },
            delay: 2000
        },
        {
            widgetName: 'OpenAIdata',
            widgetFunc: (props) => <OpenAIData  {...props} />,
            delay: 2000

        },
        {
            widgetName: 'dogPicture',
            widgetFunc: (props) => <DogPicture {...props} />,
            delay: 2000
        },
        {
            widgetName: 'learningOptions',
            widgetFunc: (props) => <LearningOptions {...props} />,
            delay: 2000
        },
        {
            widgetName: 'Newyorkdata',
            widgetFunc: (props) => <NewYorkList {...props} />,
            delay: 2000

        },
        {
            widgetName: 'Newjerseydata',
            widgetFunc: (props) => <NewJersey {...props} />,
            delay: 2000

        },
        {
            widgetName: 'ServiceLocation',
            widgetFunc: (props) => <ServiceLocation {...props} />,
            delay: 2000
        },
        {
            widgetName: 'knowmorelink',
            widgetFunc: (props) => <Moreinfo />
        },
        {
            widgetName: 'ICTDiglink',
            widgetFunc: (props) => <Digitalhub />,
            delay: 3000
        },
        {
            widgetName: 'carrierlink',
            widgetFunc: (props) => <Careeropp />,
            delay: 3000
        },
        {
            widgetName: 'StellaMission',
            widgetFunc: (props) => <Stellantismiss />,
            delay: 3000
        },
        {
            widgetName: 'jsondata',
            widgetFunc: (props) => <Fetchjsondata {...props} />

        }
    ],

    customComponents: {

        header: () => <Profile />,

        userAvatar: () => <MyCustomAvatar />,

        botAvatar: () => <MyAvatar />, 
    },


    customStyles: {

        botMessageBox: {
            backgroundColor: "#243782",
        },

        chatButton: {
            backgroundColor: "#243782",
        },
    }

}

export default config