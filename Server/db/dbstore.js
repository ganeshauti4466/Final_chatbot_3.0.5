// Required Library Imports
import express from "express";
import cors from 'cors';
const app = express();
import bodyParser from "body-parser";
app.use(bodyParser.json({ extended: false }));
app.use(cors({ origin: '*', }));
//---------------------------------------------

// Models and Schema Imports
import user from "../model/userSchema.js";
import Chat from "../model/chatSchema.js";
//--------------------------------------------

// Database Chats Storage Function.
export const dbstore = async (n) => {
    const {sessionID, chats, result } = n;
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
        sessionID: sessionID,
        role: chats[chats.length - 1].role,
        content: chats[chats.length - 1].content
    });

    const data1 = new Chat({
        SenderId: unameid,
        sessionID: sessionID,
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
};