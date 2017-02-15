/**
* @Author: Justin Schieck
* @Date:   2017-02-14T23:43:51-05:00
* @Email:  schieck91@gmail.com
* @Last modified by:   Justin Schieck
* @Last modified time: 2017-02-14T23:45:10-05:00
*/



//express
let express = require('express');
let router = express.Router();

/*GET books main page*/
router.get('/', function(req, res, next){
  res.render('georgian/index');
});

//make this file public
module.exports = router;
