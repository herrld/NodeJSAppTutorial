
var web = require("../services/webService");

exports.all = function (req, res) {
    var options = {url : "https://www.reddit.com/.json?feed=e818538ce0d5cf4988038a13f4a3ede94d3ac575&user=bainon"};
    web.get(options, function (err, response) {
        res.end(response);
        });
    }
    
