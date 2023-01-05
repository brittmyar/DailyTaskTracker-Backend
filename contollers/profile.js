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