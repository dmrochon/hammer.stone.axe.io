var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('p2_battleground', {title: 'Rival Battleground'});
});

router.get('/', function(req, res, next){
	res.redirect('/');
});

router.get('/battleground', function(req, res, next){
	res.redirect('/battleground');
});

module.exports = router;