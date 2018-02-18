// DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');


// EXPRESS CONFIGURATION
// create an "express" server
var app = express();
//set up port
var PORT = process.env.PORT || 8080;

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(express.static('public'));
app.use('/scripts', express.static(path.join(__dirname, 'app/public/scripts')));
app.use('/css', express.static(path.join(__dirname, 'app/public/css')));
//
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("Friend finder is listening on " + PORT);
});
