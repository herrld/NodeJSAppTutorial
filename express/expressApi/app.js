var express = require("express")
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var apiRouter = require('./routes/api-router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// app.use('*',express.static(path.join(__dirname,'src')));
// app.use(express.static(path.join(__dirname,"/src")));
app.use(express.static(path.join(__dirname,'src')));
app.get('/application*',function(req, res){
res.sendfile('src/index.html');
});
// app.use("/api",apiRouter);





module.exports = app;