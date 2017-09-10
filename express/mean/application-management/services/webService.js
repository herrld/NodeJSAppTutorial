var https = require("https")
 var bufferList = require('bl');

exports.get = function(options, callback){
    https.get(options.url,function (response){
        response.pipe(bufferList(function(err, data){
            if(err){
                callback(err);
            }
            else{
                callback(null, data.toString());
            }
        }));
    });
};

