///////////////
// DEPENDENCIES
///////////////
// get . env variables 
require("dotenv").config();
// pull PORT from .env, give default value of 4000 and pull MONGODB_URL from .env
const { PORT = 4000, MONGODB_URL } = process.env;
// import express
const express = require("express");
// create application object
const app = express();
// import mongoose
const mongoose = require("mongoose");
// import middleware
const cors = require("cors");
const morgan = require("morgan");

///////////////////////
// DATABASE CONNECTION
//////////////////////
// Establish Connection
mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
// Connection Events
mongoose.connection
.on("open", () => console.log("you are connected to mongoose"))
.on("close", () => console.log("you are disconnected from mongoose"))
.on("error", (error) => console.log(error));

////////////////
// MiddleWare
///////////////
app.use(cors()); // To prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies

////////////
// ROUTES
///////////
// create a test route 
app.get("/", (req, res) => {
    res.send("hello world");
});

/////////////
// LISTENER
////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
