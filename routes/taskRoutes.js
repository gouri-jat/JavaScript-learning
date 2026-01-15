//crud task
const express = require("express");
const router = express.Router();
// const Task = require("../models/taskModel");
// const { createTask } = require("../controller/taskController");
 const {
    createTask,
     getAllTasks,
     getTaskById,
     updateTask,
     deleteTask,
} = require("../controller/taskController");

router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/:id", getTaskById);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

// router.post("/", createTask);
module.exports = router;