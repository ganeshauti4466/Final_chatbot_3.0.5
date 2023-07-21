// Required Library Imports
import mongoose from 'mongoose';
//const dateTimeObject = new Date();
const {Schema,model} = mongoose;

// User Credentials Schema.
const uscredsch = new Schema({
    usname : {
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
});

//User Documents creation and Updation Time.
uscredsch.set('timestamps', true);

//User Credentials Model Creation.
const user = model('user', uscredsch);

export default user;