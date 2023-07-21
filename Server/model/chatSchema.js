// Required Library Imports
import mongoose from 'mongoose';
//const dateTimeObject = new Date();
const {Schema,model} = mongoose;

// Chats Schema.
const chatSchema = new Schema({
    SenderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    sessionID : {
        type: String, 
        required:true
    },
    role : {
        type: String, 
        required:true
    },
    content:{
        type:String,
        required:true
    },
    // date: { 
    //     type: Date,
    //     default: () => Date.now(),
    //     immutable: true, 
    // },
    // time : { 
    //     type: Number, 
    //     default: dateTimeObject.getTime()
    // } 
});

//Chats Documents creation and Updation Time.
chatSchema.set('timestamps', true);

//Chats History Model Creation.
const Chat =  model('chat', chatSchema);
export default Chat;