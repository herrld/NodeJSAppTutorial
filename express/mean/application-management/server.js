var express = require('express');
var stylus = require('stylus');
var http = require('http');
var logger = require('morgan');
var bodyParser = require('body-parser');
var apiRouter = require('./server-routers/api-router');

var env = process.env.Node_ENV = process.env.Node_ENV || 'development';

var app = express();

function compile(str, path){
    return stylus(str).set('filename',path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine','jade');

app.use(stylus.middleware(
    {
        src: __dirname +'/public',
        compile : compile
    }
));
app.use('/api',apiRouter);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));
app.get('/home*',function(req,res){
    res.sendFile(__dirname+"/server/views/home/index.html")
})
app.get('/app/*', function(req, res){
    res.sendFile(__dirname+"/server/views/app-management/index.html")
});

var port = 3030;


app.set('port',port);
var server = http.createServer(app);
server.listen(port);
console.log(port);