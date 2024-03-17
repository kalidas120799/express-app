const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

// static file
app.use('/public', express.static(path.join(__dirname, '../public')))

// cors
app.use(cors());

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// combined routers
app.use("/api",require("./routers"));

module.exports = app;