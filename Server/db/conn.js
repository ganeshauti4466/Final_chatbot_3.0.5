import mongoose from 'mongoose';
import * as dotenv from "dotenv";
dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE;

//--------DB connection-----------

mongoose.connect(
    DB,)
    .then(() => {
        console.log('connection successful');
    })
    .catch((err) => console.log(err));

//----------------------------------