import mongoose, { connect } from "mongoose";

const connection={};

const connectToDB=async()=>{
    try{
        if(connection.isConnected){
            console.log("Using existing connection")
            return
        }
        const db=await mongoose.connect(process.env.MONGO)
        connection.isConnected=db.connections[0].readyState
    }
    catch(err){
        console.log(err)
        throw new Error(err)
    }
}

export default connectToDB;