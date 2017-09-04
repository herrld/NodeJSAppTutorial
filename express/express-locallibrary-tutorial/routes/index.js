var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 
   res.writeHead(200, {'Content-Type':'application/json'}); 
   var dataObj = {name:"test"};
   res.end(JSON.stringify(dataObj));
  // res.render('index', { title: 'Express3' });
});

module.exports = router;
