// own model creation
const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type : String
    },
},{timestamp : true});

module.exports = mongoose.model("Task",taskSchema);