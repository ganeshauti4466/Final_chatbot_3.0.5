class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {

        console.log(message);

        const lowerCaseMessage = message.toLowerCase()

        if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('how are you') || lowerCaseMessage.includes('hey')) {
            // this.actionProvider.handelOpenAIdata({message})
            this.actionProvider.greet()
        }
        if (lowerCaseMessage.includes('jeep')) {
            this.actionProvider.handleJeepList()
        }
        if (lowerCaseMessage.includes('maserati')) {
            this.actionProvider.handleMaseratiList()
        }
        if (lowerCaseMessage.includes('dodge')) {
            this.actionProvider.handeldodgeList()
        }
        if (lowerCaseMessage.includes('ram')) {
            this.actionProvider.handleRamList()
        }
        if (lowerCaseMessage.includes('fiat')) {
            this.actionProvider.handelfiatList()
        }
        if (lowerCaseMessage.includes('dog')) {
            this.actionProvider.handleDog()
        }
        if (lowerCaseMessage.includes('Peugeot')) {
            this.actionProvider.handlePguList()
        }
        if (lowerCaseMessage.includes('json')) {
            this.actionProvider.handlejsoneData()
        }
        if (lowerCaseMessage.includes('ai')) {
            this.actionProvider.handelOpenAIdata({ message })
        }
        if (lowerCaseMessage.includes('dealers')) {
            this.actionProvider.handleServiceList()
        }
        if (lowerCaseMessage.includes('mission')) {
            this.actionProvider.handelstellamission()
        }
        if (lowerCaseMessage.includes('career') || lowerCaseMessage.includes('job') || lowerCaseMessage.includes('vacancy')) {
            this.actionProvider.handelcarrierlink()
        }
        if (lowerCaseMessage.includes('ict')) {
            this.actionProvider.handelICTDigitalinfo()
        }
        if (lowerCaseMessage.includes('catalog') || lowerCaseMessage.includes('car') || lowerCaseMessage.includes('cars') || lowerCaseMessage.includes('vehicles') || lowerCaseMessage.includes('products')) {
            this.actionProvider.handelcarscatalog()
        }
        if (lowerCaseMessage.includes('info') || lowerCaseMessage.includes('information') || lowerCaseMessage.includes('more') || lowerCaseMessage.includes('details') || lowerCaseMessage.includes('explore') || lowerCaseMessage.includes('else') || lowerCaseMessage.includes('company')) {
            this.actionProvider.handelMoreinfo()
        }
        // else{
        //     this.actionProvider.handelOpenAIdata({message})
        // }
    }
}

export default MessageParser;