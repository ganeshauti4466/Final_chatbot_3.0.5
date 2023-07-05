import OpenAIData from "../components/OpenAIData";
// import config from "./config";


class ActionProvider {

    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }
    handleDog = () => {
        const botMessage = this.createChatBotMessage(
            "Here's a nice dog picture for you!",
            {
                widget: 'dogPicture',
            }
        );
        this.updateChatbotState(botMessage);
    };
    handlejsoneData = () => {
        const jsoneMessage = this.createChatBotMessage(
            "This is the message comming ffrom json data",
            {
                widget: 'jsondata',
            }
        );
        this.updateChatbotState(jsoneMessage);
    };
    handleJeepList = () => {
        const message1 = this.createChatBotMessage(
            "Fantastic these are some vehicle references: ",
            {
                widget: "jeepinfo"
            }
        )
        this.updateChatbotState(message1);
    }
    handleRamList = () => {
        const messageram = this.createChatBotMessage(
            "Fantastic these are some vehicle references: ",
            {
                widget: "Raminfo"
            }
        )
        this.updateChatbotState(messageram);
    }
    handlePguList = () => {
        const messagepgu = this.createChatBotMessage(
            "Fantastic these are some vehicle references: ",
            {
                widget: "Peugeotinfo"
            }
        )
        this.updateChatbotState(messagepgu);
    }
    handleServiceList = () => {
        const servicemessage = this.createChatBotMessage(
            "Please select the state name ",
            {
                widget: "ServiceLocation"
            }
        )
        this.updateChatbotState(servicemessage);
    }
    handleNewYorkList = () => {
        const NewYorkmessage = this.createChatBotMessage(
            "Please select the dealer in your state",
            {
                widget: "Newyorkdata"
            }
        )
        this.updateChatbotState(NewYorkmessage);
    }
    handleNewJerseyList = () => {
        const NewJerseymessage = this.createChatBotMessage(
            "Please select the dealer in your state",
            {
                widget: "Newjerseydata"
            }
        )
        this.updateChatbotState(NewJerseymessage);
    }
    handelOpenAIdata = (message) => {
        console.log(message);
        <OpenAIData data={message} />
        // config={message}

        const AIdata = this.createChatBotMessage(
            "This data is comming from open AI API",
            {
                widget: 'OpenAIdata'

            }
        )
        this.updateChatbotState(AIdata)
    }

    handleMaseratiList = () => {
        const message2 = this.createChatBotMessage(
            "Fantastic these are some Maserati references: ",
            {
                widget: "Maseratiinfo"
            }
        )
        this.updateChatbotState(message2);
    }

    handeldodgeList = () => {
        const dodgemessage = this.createChatBotMessage(
            "Fantastic these are some Dodge references: ",
            {
                widget: "dodgeinfo"
            }
        )
        this.updateChatbotState(dodgemessage);
    }
    handelfiatList = () => {
        const fiatmessage = this.createChatBotMessage(
            "Fantastic these are some Fiat references: ",
            {
                widget: "fiatinfo"
            }
        )
        this.updateChatbotState(fiatmessage);
    }
    handelalphaList = () => {
        const fiatmessage = this.createChatBotMessage(
            "Fantastic these are some Alpha references: ",
            {
                widget: "alphainfo"
            }
        )
        this.updateChatbotState(fiatmessage);
    }
    handelcitronList = () => {
        const fiatmessage = this.createChatBotMessage(
            "Fantastic these are some Citroen references: ",
            {
                widget: "Citroeninfo"
            }
        )
        this.updateChatbotState(fiatmessage);
    }
    handelcrislerList = () => {
        const fiatmessage = this.createChatBotMessage(
            "Fantastic these are some Citroen references: ",
            {
                widget: "Chryslerinfo"
            }
        )
        this.updateChatbotState(fiatmessage);
    }

    handelcarscatalog = () => {
        const message3 = this.createChatBotMessage(
            "These are some of the cars we have! ",
            {
                widget: 'learningOptions'
            }
        )
        this.updateChatbotState(message3);
    }
    handelstellamission = () => {
        const message31 = this.createChatBotMessage(
            "Our Mission ",
            {
                widget: 'StellaMission'
            }
        )
        this.updateChatbotState(message31);
    }
    handelcarrierlink = () => {
        const message32 = this.createChatBotMessage(
            "Please click the below link to see carrier opportunity at stellantis ",
            {
                widget: 'carrierlink'
            }
        )
        this.updateChatbotState(message32);
    }

    handelMoreinfo = () => {
        const message4 = this.createChatBotMessage(
            "To know more information about our organiazation and brands please click on the link below",
            {
                widget: "knowmorelink",
                loading: true,
                terminateLoading: true,
                withAvatar: true
            }
        );

        this.updateChatbotState(message4);
    }
    handelICTDigitalinfo = () => {
        const message5 = this.createChatBotMessage(
            "ICT India Digital Hub is helping Stellantis at the forefront of a New Era in Sustainable Mobility. Our center is based out of Hyderabad. Please follow the link to know more about us.",
            {
                widget: "ICTDiglink",
                loading: true,
                terminateLoading: true,
                withAvatar: true

            }
        );

        this.updateChatbotState(message5);
    }


    greet() {
        const greetingMessage = this.createChatBotMessage("Hi, friend...How can I help you ?!");
        this.updateChatbotState(greetingMessage)
    }

    updateChatbotState(message) {

        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }));
    }
}



export default ActionProvider;