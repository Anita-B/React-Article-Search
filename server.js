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



// Should this be in routes?
// ====================================================
// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
	console.log("in get");
  //res.sendFile(__dirname + "/public/index.html");
});

// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
app.get("/api", function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
  Article.find({}).sort([
    ["date", "descending"]
  ]).limit(5).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// This is the route we will send POST requests to save each search.
app.post("/api", function(req, res) {
  console.log("TITLE: " + req.body.articleTitle, req.body.articleUrl, req.body.articleDate);

  // Here we'll save the location based on the JSON input.
  // We'll use Date.now() to always get the current date time
  Article.create({
    title: req.body.articleTitle,
    date: req.body.articleDate,
    url: req.body.articleUrl
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Search");
    }
  });
});

// app.get("*", function(req, res) {
//   res.sendFile(__dirname + "/public/index.html");
// });


// Listen on port 3000
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
