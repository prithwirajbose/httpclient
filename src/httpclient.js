var express = require('express'),
    request = require('request'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    favicon = require('serve-favicon'),
    open = require('open'),
    path = require('path'),
    fs = require('fs-extra'),
    _ = require('lodash');
require('dotenv').config();
//Include routes and controllers
routes = require('./routes');

var debug = !_.isNil(global) && _.get(global, '$jsDebugIsRegistered', false) === true;
var PORT = debug ? 8080 : Math.floor((Math.random() * 10000) + 30000);


//Create Express App
var app = express();

//Parse Input as JSON
app.use(bodyParser.json({ extended: true }));
app.use(favicon(path.join(__dirname, 'pages', 'favicon.ico')));
app.use('/', express.static(path.join(__dirname, 'pages')));
//catch express errors
app.use(cors());

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("HTTP Client crashed! Restart the Application!");
});


//Setup Routes
app.use('/', routes);

if (!fs.existsSync(process.env.DATA_FOLDER)) {
    fs.mkdirSync(process.env.DATA_FOLDER);
}

var server = app.listen(PORT, function() {
    console.log('HTTP Client can be accessed from your browser using URL http://127.0.0.1:' + PORT + '/');
    console.log("DO NOT CLOSE THIS WINDOW. HTTP Client will stop when this window is closed");
    console.log("Do not delete the '" + process.env.DATA_FOLDER + "' folder created beside the exe file. It contains your workspace data.");
    if (!debug) {
        open('http://127.0.0.1:' + PORT);
    }
});

module.exports = server;