import mongoose from 'mongoose'
import dotenv from "dotenv";
dotenv.config();

const Connection = async () =>{
    try{
        mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected");
    } catch(err){
        console.log("Error: " + err);
    }
}
Connection()