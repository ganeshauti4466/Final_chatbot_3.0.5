// Required Library Imports
import { Configuration, OpenAIApi } from "openai";
import express from "express";
import cors from 'cors';
const app = express();
import bodyParser from "body-parser";
app.use(bodyParser.json({ extended: false }));
app.use(cors({ origin: '*', }));
import { LocalStorage } from 'node-localstorage';
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import session from "express-session";
//---------------------------------------

// File Imports
dotenv.config({ path: './config.env' });
import "./db/conn.js";
import "./getFetchdata.js";

// Required Function Imports
import {dbstore} from "./db/dbstore.js";
import {checkdata} from "./checkdata.js";
//---------------------------------------

// Environment Variables Import
const PT = process.env.PORT;
const orz = process.env.ORZ;
const api_key = process.env.APIKEY;
//----------------------------------------

// OpenAI API configuration
const configuration = new Configuration({
  organization: orz,
  apiKey: api_key,
});
const openai = new OpenAIApi(configuration);
//---------------------------------------

// SESSION Creation
app.use(cookieParser());
app.use(session({
  secret: '34SDgsdgspxxxxxxxdfsG', // just a long random string
  resave: false,
  saveUninitialized: true
}));
//-----------------------------------

/*Local Storage declaration*/
var localStorage = new LocalStorage('./scratch');
if (!localStorage.getItem("chat")) {
  localStorage.setItem("chat", JSON.stringify([]));
}
var chatHistory = JSON.parse(localStorage.getItem("chat"));
// var prevHistory = JSON.parse('[]');
//-------------------------------------

// CURD Operations
/*-------------------POST METHOD for OpenAI API-------------------------*/
app.post("/", async (req, res) => {
  console.log("inside post function");
  const { chats } = req.body;
  //console.log(chats);

  //---------LOCAL storage-----------
  chatHistory.push(chats[0]);
  //---------------------------------

 // Previous chat Edit
  const newStr = chats[chats.length - 1].content;
  const newStr1 = newStr.concat(" ", ".Give Response in less than 50 words.");
  // console.log(newStr1);
  chats[chats.length - 1].content = newStr1;
  //---------------------------------

  //-----------OpenAI API Integeration----------
  const result = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    max_tokens: 500,
    // temperature: 0,
    // top_p:0,
    // frequency_penalty:0,
    // presence_penalty:0,
    messages: [
      {
        role: "system",
        content: "You are a Stellantis AI chatbot which shows relevant details for the Stellantis organization only and strictly without any additional text of any other organization, don't include any starting or ending prices of vehicles and give sequencing if required.",
      },
      ...chats,
    ],
  });
  //--------------------------------------------

  //console.log(`Session ID : ` + req.sessionID);

  //---------Conversation DB storage-----------
  let n = {sessionID: req.sessionID, chats, result };
  await dbstore(n);
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
/*-----------------------------------------------------*/

/*-------------------POST METHOD for Dealer and OpenAI API-------------------------*/
app.post("/dealerapi", async (request, response) => {
  const { chats } = request.body;
  let result1="";

  chatHistory.push(chats[0]);

  //-----------------------------------
  const last = chats[chats.length - 1];
  // var last = chats.slice(-1)[0];
  const lst = last.content;
  // let lne = "Classify the intent and entities:\nUser Input:"
  let lne = "Classify the intent and entities and respond in JSON format only and strictly without any additional text. User Input:"
  // let text2 = last.content
  const text3 = lne.concat(" ", last.content);
  chats[chats.length - 1].content = text3;

  // console.log(chats[chats.length - 1]);
  //--------------------------------------------------
  const result = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    max_tokens: 1000,
    messages: [
      {
        role: "system",
        content: "You are a Intent and Entities Classification assistant. Classify intent with entities in format:user input query:give some Jeep Wrangler dealer in newyork city:{\"intent\": \"search_dealers\",\"entities\": {\"brand\": \"Jeep\",\"model\": \"Wrangler\",\"location\": \"new york\"}}. sample intents:(OrderFood,BookFlight,search_dealers,GetSalesData,search_dealers_info,dealer_name,DealerEmail,GetDealerEmailAddress,GetDealerTimings,GetDealerHours,DealerHours).sample entities: (\"brand\": \"value\",\"model\":\" value\", \"state\": \"value\",\"city\": \"value\",\"location\": \"value\", \"dealer_name\":\"value\", \"department\":\"sales\",\"services\",\"parts\",\"bodyshop\",\"used\") ",
      },
      ...chats,
    ],
  });
  
  console.log("openAI response 1");
  console.log(result.data.choices[0].message);

  console.log("Checkdata func");
  const msg1 = await parseMessage(result.data.choices[0].message.content);
  console.log("Parsed message ");
  console.log(msg1);
  const arrayAsString = msg1.join('\n');
  //----------------------------------------------------------------
  // let newStr = last.content;
  // console.log(lst);
  const newStr1 = lst.concat(" ", ".Give Response in less than 50 words.");
  // console.log(newStr1);
  chats[chats.length - 1].content = newStr1;
  // console.log(chats[chats.length - 1].content);
  //----------------------------------------------------------------

  // console.log(arrayAsString);
  
  if(arrayAsString === "notfound"){
    result1 = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      max_tokens: 500,
      messages: [
        {
          role: "system",
          content: "You are a AI chatbot which shows relevant details for the Stellantis organization only and strictly without any additional text of another other organization.dont inlcude any starting or ending sentence.",
        },
        ...chats,
      ],
    });
    console.log("openAI response  2");
    console.log(result1.data.choices[0].message); // Output: "apple,banana,orange
    response.json({
      output: result.data.choices[0].message,
      output1: result1.data.choices[0].message,
    });
  }else{
    
    response.json({
      output: result.data.choices[0].message,
      output1: {"role": "assistant", "content": msg1},
    });
  }
  //------------------------------------------------

  localStorage.setItem("chat", JSON.stringify(chatHistory));
});
/*------------------------------------------------------*/


/* City dealer API fetch */
app.get("/newyork", async (request, response) => {

  const n = "NY"
  let func = await checkdata(n);
  response.json({
    func
  });

});

app.get("/newjersey", async (request, response) => {

  const n = "NJ"
  let func = await checkdata(n);
  response.json({
    func
  });

});
//---------------------------------------------------------//

app.get('/', (req, res) => {
  res.send(`Currently running on this Server : ${PT}`);
});

app.listen(PT, () => {
  console.log(`listening on port ${PT}`);
});