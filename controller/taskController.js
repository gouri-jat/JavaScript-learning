const Task = require("../models/task");
// create --crud
exports.createTask = async (req, res) => {
  try {
    const { name , email } = req.body;

    const task = await Task.create({ name , email }); //Task model wla

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      task,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating task",
      error: error.message,
    });
  }
};

// read (all)-- crud
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();  // get all documents

    res.status(200).json({
      success: true,
      count: tasks.length,
      tasks,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching tasks",
      error: error.message,
    });
  }
};

//read (specific) --crud
exports.getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      task,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Invalid Task ID",
      error: error.message,
    });
  }
};

//update -- crud
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            req.body,
            { new: true } // updated task return karega
        );

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json(updatedTask);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//Delete crud
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTask = await Task.findByIdAndDelete(id);
        
        if (!deleteTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({
           message : "Task deleted successfully",
           task : deleteTask,
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};











// module.exports = { createTask, getAllTasks, updateTask };
