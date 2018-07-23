var express = require('express')();
var bodyParser = require('body-parser');

var mysql = require('mysql')


//set up the express app

var app = express();
var PORT = process.env.port || 8080;
// var PORT = 3307;

//require models used for syncing 
var db = require("./models");

//sets up the express app to handle data parsing

// parse application 
app.use(bodyParser.urlencoded({ extended: true}));
//parse application and json
app.use(bodyParser.json());


//static directory
app.use(express.static("public"));

//routes

require("./routes/html-routes.js")(app);

//syncing the sequilize models and then starting the exress app

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});