var express = require('express');
var router = express.Router();

const fs = require('fs');


/* GET listing. */
router.get('/', function(req, res) {
  let rawdata = fs.readFileSync('data/edge.json');
  let edge = JSON.parse(rawdata);
  console.log(edge);

    res.send(edge);
});

module.exports = router;
