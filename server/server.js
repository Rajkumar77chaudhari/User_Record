const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");
const formidable = require("express-formidable");
const fs = require("fs");
const app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(formidable());

// cors
app.use(cors({ origin: true, credentials: true }));

const users = require("./routes/api");

connectDB();







// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello world!"));

//user Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
