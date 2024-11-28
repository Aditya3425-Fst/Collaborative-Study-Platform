import mongoose from "mongoose";
const dbConnection = ()=>{
    return mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("DB connection established")).catch((err)=>console.log(err));
}

export default dbConnection;