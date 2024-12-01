import mongoose from "mongoose";

export const dbConn= async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        if(conn){
            console.log('connected to mongodb')
        }
    }catch(err){
        console.log(err)
    }
}