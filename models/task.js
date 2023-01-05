const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    date: { type: Number },
    time: { type: Number },
    description: { type: String },
    important: { type: Number }
});


const Task = mongoose.model("Task", TaskSchema);


module.exports = Task;