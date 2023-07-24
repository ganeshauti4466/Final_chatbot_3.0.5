
//******Open AI integration Part***** */


import React from 'react'
import { useState, useEffect } from 'react'
import UserImg from './chatbotUI/UserImg'
import './typing.css'


//OpenAI data component

const OpenAIData = (props) => {

    const [message, setMessage] = useState("");
    const [chats, setChats] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    //Getting the user Input data from the input field
    useEffect(() => {
        const array1 = props.state.messages

        for (let index = array1.length - 1; index >= 0; index--) {
            // console.log(index);
            const typw = array1[index]
            if (typw.type === 'user') {
                console.log(typw.message);
                break;
            }
            // console.log(typw.message);
            // console.log(typw.type);
        }
    }, []);


    //Function to fetch OpenAI data from the Backend

    const chat = async (e, message) => {

        e.preventDefault();

        if (!message) return;
        setIsTyping(true);

        let msgs = chats;
        msgs.push({ role: "user", content: message });
        setChats(msgs);

        setMessage("");

        fetch("http://localhost:8000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chats,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                msgs.push(data.output);
                console.log(data.output)
                setChats(msgs);
                setIsTyping(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div >
                <section >
                    {chats && chats.length
                        ? chats.map((chat, index) => (

                            <div style={{ borderRadius: "5px", fontSize: '0.9rem', position: 'realative', display: 'inline-block' }} key={index} className={chat.role === "user" ? "user_msg" : ""} >

                                {

                                    chat.role === 'assistant' ? (

                                        <div style={{ color: '#fff', justifyContent: 'center', alignItems: 'center', backgroundColor: '#243782', padding: '6px', paddingBottom: '10px', borderRadius: '5px', marginTop: '15px' }}>



                                            <img style={{ width: '45px', height: '45px', paddingRight: '5px', paddingTop: '5px' }} alt='Img was here
                                                ' src='https://cdn-icons-png.flaticon.com/512/4712/4712109.png'></img>


                                            <span style={{ color: '#fff' }}> : </span>
                                            <span style={{ color: '#fff', marginBottom: '10px' }}>{chat.content}</span>
                                        </div>
                                    )
                                        :
                                        (
                                            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgb(241, 241, 241)', padding: '6px', borderRadius: '5px', marginTop: '15px' }}>

                                                {/* <span style={{ color: '#fff', marginLeft: '7px' }}> : </span> */}
                                                <span style={{ color: '#585858', marginLeft: '5px' }}>{chat.content}</span>
                                                <div>
                                                    <UserImg />
                                                </div>
                                            </div>

                                        )

                                }

                            </div>
                        ))
                        : ""}
                </section >
            </div >

            {/* <div className={isTyping ? "" : "hide"}>
                <p>
                    <i style={{ color: 'blue' }}>{isTyping ? "Typing..." : ""}</i>
                </p>
            </div> */}
            <div className={isTyping ? "typing-indicator" : "hide"}>
                <p>
                    <i className="typing-text">Typing...</i>
                </p>
            </div>

            <form action="" onSubmit={(e) => chat(e, message)}>
                <input
                    type="text"
                    name="message"
                    value={message}
                    placeholder="Ai serch Here..."
                    onChange={(e) => setMessage(e.target.value)}
                    autoComplete='off'
                />
            </form>
        </>
    )
}

export default OpenAIData

