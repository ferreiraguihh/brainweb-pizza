var express = require('express');
var router = express.Router();

const fs = require('fs');


/* GET listing. */
router.get('/', function(req, res) {
  let rawdata = fs.readFileSync('data/pasta.json');
  let pasta = JSON.parse(rawdata);
  console.log(pasta);

    res.send(pasta);
});

module.exports = router;
