const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT;

mongoose.connect(process.env.MONGODB_URI);

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Task = mongoose.model("Task", TaskSchema);

app.get("/get-task", (req, res) => {
    Task.find().then(tasks => {
        res.json(tasks);
    }).catch(err => {
        res.status(500).json({ error: "Failed to fetch tasks" });
    });
});

app.post("/add-task", (req, res) => {
    const { title, description } = req.body;
    const newTask = new Task({ title, description, completed: false });

    newTask.save().then(() => {
        res.status(201).json(newTask);
    }).catch(err => {
        res.status(500).json({ error: "Failed to add task" });
    });
});

app.patch("/update-task/:id", (req, res) => {
    const { id } = req.params;
    const completed = req.body.completed;
    Task.findByIdAndUpdate(id, { completed }, { new: true })
        .then(updatedTask => {
            res.json(updatedTask);
        })
        .catch(err => {
            res.status(500).json({ error: "Failed to update task" });
        });
});

app.delete("/delete-task/:id", (req, res) => {
    const { id } = req.params;
    Task.findByIdAndDelete(id)
        .then((response) => {
            if (!response) {
                throw new Error("Task not found");
            }
            res.json({ message: "Task deleted sucessfully" });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});