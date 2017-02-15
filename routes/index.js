/**
* @Author: Justin Schieck
* @Date:   2017-02-14T23:37:33-05:00
* @Email:  schieck91@gmail.com
* @Last modified by:   Justin Schieck
* @Last modified time: 2017-02-15T01:29:11-05:00
*/



var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET ABOUT */
router.get('/about', function(req, res, next){
  /*load the register*/
  res.render('About');
});

/* GET CONTACT */
router.get('/contact', function(req, res, next){
  /*load the CONTACT page*/
  res.render('Contact');
});

module.exports = router;
