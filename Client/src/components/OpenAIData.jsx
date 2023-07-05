// import React, { useEffect, useState } from 'react';

// const OpenAIData = () => {
//     const [chats, setChats] = useState([]);
//     // const chats = [{ role: "user", content: "" }];
//     const message = "explain AI in less then 100 words";
//     let msgs = chats;
//     msgs.push({ role: "user", content: message });
//     setChats(msgs);

//     useEffect(() => {
//         fetch('http://localhost:8000', {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 chats,
//             }),
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 msgs.push(data.output);
//                 setChats(msgs)
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }, []);

// export default OpenAIData ; 

// fetch('http://localhost:8000/', {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         msgs,
//     }),
// })
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data.output);
//         // msgs.push(data.output);
//         // setChats(msgs)
//     })
//     .catch((error) => {
//         console.log(error);
//     });


//     return (
//         <div style={{ color: 'black' }}>`this is the messahe I want to see ${setChats}`

//         </div>
//     )
// }

// export default OpenAIData



// *************Used Axios ****************

// import React from 'react'
// import axios from "axios"


// const baseURL = "http://localhost:8000/";

// const OpenAIData = () => {
//     const chats = [{ role: "user", content: "Exaplin AI in less than 100 words" }];

//     const [post, setPost] = React.useState(null);

//     React.useEffect(() => {
//         axios.get(`${baseURL}/1`).then((response) => {
//             setPost(response.data);
//         });
//     }, []);

//     function createPost() {
//         axios
//             .post(baseURL, {
//                 title: "Hello World",
//                 body: JSON.stringify({
//                     chats,
//                 })
//             })
//             .then((response) => {
//                 setPost(response.data);
//             });
//     }
//     if (!post) return "No post!"

//     return (
//         <div>
//             <h1>{post.title}</h1>
//             <p>{post.body}</p>
//             <button onClick={createPost}>Create Post</button>
//         </div>
//     )
// }

// export default OpenAIData


import React from 'react'
import { useState } from 'react'
import UserImg from './chatbotUI/UserImg'
import './typing.css'

// import { createChatBotMessage } from 'react-chatbot-kit'


const OpenAIData = (props) => {


    // console.log(props.data)


    // console.log("OPenAI!!!!")
    // console.log(props.data)
    const [message, setMessage] = useState("");
    const [chats, setChats] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    const chat = async (e, /*message*/) => {
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

                                        <div style={{ color: '#fff', justifyContent: 'center', alignItems: 'center', backgroundColor: '#243782',padding:'6px' , paddingBottom:'10px' , borderRadius:'5px' , marginTop:'15px' }}>



                                            <img style={{ width: '45px', height: '45px', paddingRight: '5px', paddingTop: '5px' }} alt='Img was here
                                                ' src='https://cdn-icons-png.flaticon.com/512/4712/4712109.png'></img>


                                            <span style={{ color: '#fff' }}> : </span>
                                            <span style={{ color: '#fff', marginBottom: '10px' }}>{chat.content}</span>
                                        </div>
                                    )
                                        :
                                        (
                                            <div style={{ display: 'flex', alignItems: 'center' , backgroundColor:'rgb(241, 241, 241)', padding:'6px',borderRadius:'5px',marginTop:'15px' }}>

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

//*************BBB*****************

// import React, { useState } from 'react';
// import { Chatbot } from 'react-chatbot-kit';

// const OpenAIData = () => {

//     const [messages, setMessages] = useState([]);

//     const handelNewUserMessage = async (messages) => {

//         const response = await fetch('http://localhost:8080/', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': "application/json",
//             },
//             body: JSON.stringify({ messages }),
//         });
//         if (response.ok) {
//             const data = await response.json();
//             const botMessage = data.response;
//             console.log(botMessage)

//             setMessages((prevMessages) => [
//                 ...prevMessages,
//                 { author: 'bot', message: botMessage },
//             ]);
//         }
//         else {
//             console.error('Error:', response.status);
//         }
//     };

//     return (


//         <Chatbot
//             messages={messages}
//             onnewUserMessages={handelNewUserMessage} />

//     );
// };

// export default OpenAIData


