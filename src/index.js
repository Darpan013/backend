import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config()

connectDB()











/*
import express from "express"
const app = express()
const port= process.env.PORT
(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERROR express: ", error);
            throw error
            
        })
        app.listen(port, ()=>{
            console.log(`app is listening at port ${port}`);
            
        })


    } catch (error) {
        console.log("ERROR: ", error);
        throw error
        
    }
})()

*/