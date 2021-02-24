var express = require('express');
var router = express.Router();

const fs = require('fs');


/* GET listing. */
router.get('/', function(req, res) {
  let rawdata = fs.readFileSync('data/suggestion.json');
  let suggestion = JSON.parse(rawdata);
  console.log(suggestion);

    res.send(suggestion);
});

module.exports = router;
