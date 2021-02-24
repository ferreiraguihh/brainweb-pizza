var express = require('express');
var router = express.Router();

const fs = require('fs');


/* GET listing. */
router.get('/', function(req, res) {
  let rawdata = fs.readFileSync('data/size.json');
  let size = JSON.parse(rawdata);
  console.log(size);

    res.send(size);
});

module.exports = router;
