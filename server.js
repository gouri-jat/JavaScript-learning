//creating server by myself
const express = require("express");
const app = express();

let users = [
    {id:1,name: "mannat"},
    {id:2, name : "xyz" }
];

app.get("/",(req,res) =>{
    res.send("Now creating server");
});
 app.get("/users",(req,res) =>{
    res.send("user CRUD creation");
 });

//lest try CRUD in express manually



app.listen(3000,() =>{
    console.log("Server is starting Yahooo");
});