var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next){
    var testObj = {prop : "test prop"};
res.send(JSON.stringify(testObj));
});

module.exports = router;