const express = require('express');
const profileRouter = express.Router();
const Task = require('../models/task');

// profile/task Index route
profileRouter.get('/taskPage', async (req, res) => {
    try{
        // send all tasks
        res.json(await Task.find({}));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});

// Profile/task Create route
profileRouter.post('/taskPage', async (req, res) => {
    try {
        res.json(await Task.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});


// Profile/task Delete route
profileRouter.delete("/task/:id", async (req, res) => {
    try {
        // send all task
        res.json(await Task.findByIdAndRemove(req.params.id));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});

// Profile/task Update route
profileRouter("/task/:id", async (req, res) => {
    try {
        // send all task
        res.json(
            await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});











module.exports = profileRouter;