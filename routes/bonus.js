var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
    let x;
    if (req.query.x){
        x = parseFloat(req.query.x);
    }
    else{
        x = Math.random() * 100;
    }
    let y = Math.cos(x)
    res.send(`Math.cos() aplied to ${x} is ${y}`);
});

module.exports = router;