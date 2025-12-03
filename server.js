//creating server by myself
const express = require("express");
const app = express();
app.use(express.json());

app.get("/",(req,res) => {
    res.send("Now creating server");
});
 

//lest try CRUD in express manually
app.get("/users",(req,res) => {
    res.send("start creating backend");
 });

app.post("/posting",(req,res) => {
  res.send("posting backend");
});

app.put("/update",(req,res) => {
    res.send("updating backend");
});

app.delete("/delete",(req,res) => {
    res.send("deleting backend");
});


app.listen(3000,() =>{
    console.log("Server is starting Yahooo");
});