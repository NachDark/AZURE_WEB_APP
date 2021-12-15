var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/admin', function(req, res, next) {
  res.render('index', { title: 'admin dont try to hack me' });
 // res.render('index');
});
router.get('/', function(req, res, next) {
  
  res.sendFile(path.join(__dirname,"htmls","index.html"));
});


//CSS defined
router.get('/assets/css/main.css', function(req, res, next) {
  
  console.log(__dirname + '\\htmls\\assets\\css\\main.css');
  res.sendFile(path.join(__dirname ,'htmls','assets','css','main.css'));

});

module.exports = router;