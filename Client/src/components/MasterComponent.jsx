import React from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import '../App.css'
import ActionProvider from '../properties/ActionProvider'
// import OpenAIData from './OpenAIData'

import MessageParser from '../properties/MessageParser'
import config from '../properties/config'
// import opengptturbo from './opengptturbo'
import { useState } from 'react'
// import OpenAIData from './OpenAIData'

// import { Configuration, Op`enAIApi } from "openai";
// import { useAuth0 } from '@auth0/auth0-react'


const MasterComponent = () => {
    const [showBot, toggleBot] = useState(false);

    // const [message, setMessage] = useState("");
    // const [chats, setChats] = useState([]);
    // const [isTyping, setIsTyping] = useState(false);

    // const { loginWithRedirect } = useAuth0();
    // const { logout } = useAuth0();
    // const { isAuthenticated } = useAuth0();

    const saveMessages = (messages, HTMLString) => {

        localStorage.setItem('chat_messages', JSON.stringify(messages));
    };

    const loadMessages = () => {
        const messages = JSON.parse(localStorage.getItem('chat_messages'));
        return messages;
    };

    // const handleUserInput = (inputText) => {
    //     // Handle user input here
    //     console.log('User input: comming from MasterComponent::', inputText);

    //     // Send user input to an API or perform any desired logic
    // };


    // const chat = async (e, message) => {
    //     e.preventDefault();

    //     if (!message) return;
    //     setIsTyping(true);
    // }

    // function showmessage() {
    //     const f = document.getElementsByClassName('react-chatbot-kit-chat-input');
    //     const var1 = f[0].value ; 
    //     //<OpenAIData data={var1} />
    //     // console.log(f[0].value);
    //     return var1  
    // }

    // const configuration = new Configuration({
    //     organization: " ",
    //     apiKey: "",
    // });

    //const openai = new OpenAIApi(configuration);

    // document.getElementsByClassName('react-chatbot-kit-chat-btn-send').id = 'click_buttonsend'
    // buttonsend.addEventlistner('click', showmessage) ; 
    // var buttonsend = document.getElementById('click_buttonsend')
    // buttonsend.addEventListener('click',showmessage,false)
    // console.log(buttonsend)


    // const boxes = document.getElementsByClassName('.react-chatbot-kit-chat-btn-send') ; 
    // boxes.actionProvider('click',showmessage)
    // console.log(boxes)
    // boxes.addEventListener('click', showmessage);

    // const handelChange = (e) => {
    //     console.log(e.target.value) ; 
    // }


    return (
        <div className="App" id='my_chatbot'>
            <header className="App-header">
                {showBot && (
                    <Chatbot headerText='StellaBot!'

                        config={config}
                        actionProvider={ActionProvider}
                        messageHistory={loadMessages()}
                        messageParser={MessageParser}
                        saveMessages={saveMessages}
                        disableScrollToBottom
                    />
                )}

                {/* <button onClick={() => toggleBot((prev) => !prev) }>Bot</button> */}

                {
                    <button id="chatbot_toggle" onClick={() => toggleBot((prev) => !prev)} >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'none' }}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
                    </button>
                }
                {/* {isAuthenticated ? (<button style={{ marginTop: '10px', position: 'absolute', left: '71%', top: '87%', backgroundColor: '#f44336', color: 'white', margin: '8px 0', border: 'none', cursor: 'pointer', width: 'auto', padding: '10px 18px', borderRadius: '9px' }}
                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>) : (<button style={{ marginTop: '10px', position: 'absolute', left: '71%', top: '87%', width: 'auto', padding: '10px 18px', backgroundColor: '#04AA6D', color: 'white', border: 'none', borderRadius: '9px' }} onClick={() => loginWithRedirect()}>Log In</button>)} */}

                {/* { <button id='test-app-button' className='test-button' onClick={showmessage} style={{ marginTop: '23px' }}>Click ME!</button> } */}
                {/* <OpenAIData data={showmessage} />  */}

                {/* <OpenAIData /> */}

            </header>
        </div>
    );
}

export default MasterComponent