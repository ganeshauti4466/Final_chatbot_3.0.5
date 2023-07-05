import { Configuration, OpenAIApi } from "openai";
import express from "express";
import cors from 'cors';
const app = express();
import bodyParser from "body-parser";
app.use(bodyParser.json({ extended: false }));
app.use(cors({ origin: '*', }));
// import { request } from "http";
import { LocalStorage } from 'node-localstorage';
import * as dotenv from "dotenv";
import mongoose from 'mongoose';
// const { Schema, model } = mongoose;
import cookieParser from "cookie-parser";
import session from "express-session";
// import axios from "axios";

//------file import-----------
dotenv.config({ path: './config.env' });
const PT = process.env.PORT;
const orz = process.env.ORZ;
const api_key = process.env.APIKEY;
import "./db/conn.js";
import user from "./model/userSchema.js";
import Chat from "./model/chatSchema.js";
import { checkdata } from "./checkdata.js";
import "./getFetchdata.js"
//----------------------------

//------OpenAI API configuration---------
const configuration = new Configuration({
  organization: orz,
  apiKey: api_key,
});
const openai = new OpenAIApi(configuration);
//---------------------------------------

//---------------SESSION------------------
app.use(cookieParser());
app.use(session({
  secret: '34SDgsdgspxxxxxxxdfsG', // just a long random string
  resave: false,
  saveUninitialized: true
}));
//-----------------------------------

//------------------------------------
/*Local Storage declaration*/
var localStorage = new LocalStorage('./scratch');
if (!localStorage.getItem("chat")) {
  localStorage.setItem("chat", JSON.stringify([]));
}
var chatHistory = JSON.parse(localStorage.getItem("chat"));
var prevHistory = JSON.parse('[]');
//-------------------------------------

//-------------------POST METHOD-------------------------//
app.post("/", async (req, res) => {
  console.log("inside post function");
  const { chats } = req.body;
  //console.log(chats);

  //---------LOCAL storage-----------
  chatHistory.push(chats[0]);
  //localStorage.setItem("chat", JSON.stringify(chatHistory));
  //---------------------------------

  //-------Previous History----------
  // prevHistory.push(chats[0].content);
  // const n = 3;
  // let text3 = "";
  // let text1 = prevHistory.slice(-n);
  // //console.log(text1);
  // let len = text1.length;
  // for (let i = 0; i < len; i++) {
  //   let text2 = JSON.stringify(text1[i]);
  //   text3 = text3.concat(".", text2);
  // }
  // const aprep = text3.replaceAll("\"", "");
  // let newStr = aprep.replace(/^./, "");
  // //console.log(newStr);
  const newStr = chats[0].content;
  const newStr1 = newStr.concat(" ", ".Give Response in less than 50 words.");
  // console.log(newStr1);
  chats[0].content = newStr1;

  //---------------------------------

  //-----------OpenAI API Integeration----------
  const result = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    max_tokens: 500,
    messages: [
      {
        role: "system",
        content: "You are a AI chatbot which shows relevant details for the Stellantis organization only and strictly without any additional text of any other organization.dont inlcude any starting or ending sentence.",
      },
      ...chats,
    ],
  });
  //--------------------------------------------
  //console.log(`Session ID : ` + req.sessionID);
  //---------setting user id and pass-----------
  // const usd = new chatSchemaJs.user({
  //     usname: 'Ian Fleming',
  //     password : 'flem123'
  // });

  // await usd.save().then(() => {
  //     console.log('user saved successful');
  // }).catch((err) => console.log(err));
  //--------------------


  //---------getting user id-----------
  const unameid = await user.exists({ usname: "Ian Fleming" }, { password: 'flem123' });
  //console.log(unameid);
  //-----------------------------------

  //----------chat storing to mongodb-----------
  const data = new Chat({
    SenderId: unameid,
    sessionID: req.sessionID,
    role: chats[0].role,
    content: chats[0].content
  });

  const data1 = new Chat({
    SenderId: unameid,
    sessionID: data.sessionID,
    role: result.data.choices[0].message.role,
    content: result.data.choices[0].message.content
  });

  await data.save().then(async () => {
    console.log('saved data successful');
    await data1.save().then(() => {
      console.log('saved data 1 successful');
    }).catch((err) => console.log('Unsaved'));
  }).catch((err) => console.log('Unsaved'));
  //---------------------------------------------

  //---------LOCAL storage-----------
  chatHistory.push(result.data.choices[0].message);
  localStorage.setItem("chat", JSON.stringify(chatHistory));
  //---------------------------------

  res.json({
    //output: chats[0],
    output: result.data.choices[0].message,
  });
});

app.get("/newyork", async(request, response) => {

  const n = "NY"
  let func = await checkdata(n);
  response.json({
    func
  });

});

app.get("/newjersey", async(request, response) => {

  const n = "NJ"
  let func = await checkdata(n);
  response.json({
    func
  });

});
//---------------------------------------------------------//

app.get('/', (req, res) => {
  res.send(`Welcome to Server : ${PT}`);
});

app.listen(PT, () => {
  console.log(`listening on port ${PT}`);
});


