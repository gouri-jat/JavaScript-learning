// after installing mongoose , mongoose = acts as a bridge and provide smoothness b/w nodejs and mongodb
const mongoose = require("mongoose");  //odm (smooth + act as a bridge b/w : nodejs & mongodb)
const connectDB = async()=>{
    try{
     await mongoose.connect(process.env.MONGO_URI);
     console.log("MongoDB connected successfully!");

    }catch(error){
        console.error("MongoDB connection Failed: ",error.message);
        process.exit(1);
    }
};
module.exports = connectDB;