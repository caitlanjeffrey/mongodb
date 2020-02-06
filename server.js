
const dotenv = require("dotenv")
dotenv.config();
const path = require("path")
const express = require("express");
const exphbs = require("express-handlebars");
const logger = require("morgan");
const mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
// var db = require("./models");

var PORT = 3000;

// Initialize Express
var app = express();

// Configure middleware

// Serve static content for the app from the "public" directory in the application directory.
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(express.static('public'));

// Routes
// =============================================================
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app)

mongoose.connect("mongodb://localhost/unit18Populater", { useNewUrlParser: true });

var syncOptions = { force: false };

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

module.exports = app; 
