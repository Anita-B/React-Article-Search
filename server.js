// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Article Schema
var Article = require("./models/Article");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));


// Mongoose
// =============================================================
// Database configuration with mongoose

var databaseUri = 'mongodb://localhost/nytreact';

if (process.env.MONGODB_URI){
  //this executes if this is being executed in your heroku app
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
}

var db = mongoose.connection;

//Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// Routes
// =============================================================
require("./app/config/routes.js")(app);


// Should this be in routes?
// ====================================================
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


// Listen on port 3000
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});