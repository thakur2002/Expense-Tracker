const mongoose=require("mongoose");
// require("dotenv").config();
async function connectDB(username,password) {
    //  const mongourl=process.env.dbconnectionstring;
    let connection;
    const mongouri=`mongodb+srv://${username}:${password}@myapplicationscluster.ogeo77y.mongodb.net/?retryWrites=true&w=majority&appName=Myapplicationscluster`
try{
    if (connection) {
        await mongoose.disconnect();
      }
    connection=await mongoose.connect(mongouri);
    const db=mongoose.connection;
    db.on('connected',()=>console.log("connected to mongodb"));
    db.on('error',()=>console.log("error"));
    db.on('disconnected',()=>console.log("disconnected from mongodb"));
    return { success: true };
}
catch(err){ 
    return { success: false, error: err.message };
    // console.error(err.message);
    // process.exit(1);
} 
    

}
module.exports=connectDB;