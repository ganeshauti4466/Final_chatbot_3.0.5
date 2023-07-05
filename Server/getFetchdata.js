import * as dotenv from "dotenv";
dotenv.config({ path: './config.env' });
const moparapi = process.env.MOPARAPI;

const getFetchdata = async() =>{
    
    try {
        let res = await fetch(moparapi);
        let data = await res.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

const data1 = await getFetchdata();

export default data1;

