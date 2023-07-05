import React from 'react'
import { useState } from 'react'
import { Configuration, OpenAIApi } from "openai";


const MyCustomeChatMessages = () => {

    const configuration = new Configuration({
        organization: "org-0nmrFWw6wSm6xIJXSbx4FpTw",
        apiKey: "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",
    });

    const openai = new OpenAIApi(configuration);

    const [message, setMessage] = useState("");
    const [chats, setChats] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    return (

        <div className={isTyping ? "" : "hide"}>
            <p>
                <i>{isTyping ? "Typing" : ""}</i>
            </p>
        </div>
        
    )
}

export default MyCustomeChatMessages