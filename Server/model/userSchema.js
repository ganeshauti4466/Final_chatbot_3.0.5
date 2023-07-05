import mongoose from 'mongoose';
//const dateTimeObject = new Date();
const {Schema,model} = mongoose;


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
uscredsch.set('timestamps', true);

const user = model('user', uscredsch);
export default user;