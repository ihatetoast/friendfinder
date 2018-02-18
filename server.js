// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");


// EXPRESS CONFIGURATION
// create an "express" server
var app = express();
//set up port
var PORT = process.env.PORT || 8080;

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

//V?
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("Friend finder is listening on " + PORT);
});
