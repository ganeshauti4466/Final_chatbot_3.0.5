import mongoose from 'mongoose';
//const dateTimeObject = new Date();
const {Schema,model} = mongoose;


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
chatSchema.set('timestamps', true);

const Chat =  model('chat', chatSchema);
export default Chat;