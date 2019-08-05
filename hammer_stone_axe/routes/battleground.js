var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
	res.render('battleground', {title: 'Battleground'});
});

// router.get('/', function(req, res, next){
// 	res.redirect('/');
// });

module.exports = router;