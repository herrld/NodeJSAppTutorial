var express = require("express")
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var apiRouter = require('./routes/api-router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',express.static(path.join(__dirname,'src')));
app.use("/api",apiRouter);
module.exports = app;