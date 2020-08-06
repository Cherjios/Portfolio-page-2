var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 8000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/about.html"));
});

app.get("/portfolio", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/portfolio.html"));
});

app.get("/resume", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/documents/SergioLopez_Resume.pdf"));
});




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});