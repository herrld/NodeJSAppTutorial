var express = require('express')
var router = express.Router();
var reddit = require("../server-controllers/redditController");

router.get('/', reddit.all);

module.exports = router;