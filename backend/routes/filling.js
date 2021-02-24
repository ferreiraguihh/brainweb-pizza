var express = require('express');
var router = express.Router();

const fs = require('fs');


/* GET listing. */
router.get('/', function(req, res) {
  let rawdata = fs.readFileSync('data/filling.json');
  let filling = JSON.parse(rawdata);
  console.log(filling);

    res.send(filling);
});

module.exports = router;
