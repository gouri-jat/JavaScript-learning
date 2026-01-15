const express = require("express");
const app = express();
const logger = require("./middleware/logger"); //logger line-1 require
app.use(logger);  //logeer line-2 app.use
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/api/users",userRoutes);

const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);  //CRUD used this one

module.exports = app;