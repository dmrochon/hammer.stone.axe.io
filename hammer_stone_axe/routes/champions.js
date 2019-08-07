var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('/champions', {title: 'Champions\' Hall'});
});

router.get('/', function(req, res, next){
	redirect('/');
});

module.exports = router;