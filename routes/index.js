/*habria que realizar la llamada relativa y que haga la llamada al archivo de manera relativa tambien */



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
/*
router.get('/assets/css/main.css', function(req, res, next) {
  
  console.log(__dirname + '\\htmls\\assets\\css\\main.css');
  res.sendFile(path.join(__dirname ,'htmls','assets','css','main.css'));

});

router.get('/assets/css/images/bg.jpg', function(req, res, next) {
  
  
  res.sendFile(path.join(__dirname ,'htmls','assets','css','images','bg.jpg'));

});

router.get('/assets/css/fontawesome-all.min.css', function(req, res, next) {
  
  
  res.sendFile(path.join(__dirname ,'htmls','assets','css','fontawesome-all.min.css'));

});

router.get('/assets/webfonts/fa-brands-400.woff2', function(req, res, next) {
  
  
  res.sendFile(path.join(__dirname ,'htmls','assets','webfonts','fa-brands-400.woff2'));

});
router.get('/assets/css/images/overlay.svg', function(req, res, next) {
  
  
  res.sendFile(path.join(__dirname ,'htmls','assets','images','overlay.svg'));

});
router.get('/assets/webfonts/fa-solid-900.woff2', function(req, res, next) {
  
  
  res.sendFile(path.join(__dirname ,'htmls','assets','webfonts','fa-solid-900.woff2'));

});
*/
router.get('/assets/:path', function(req, res, next) {
  
  console.log(path.join(__dirname ,'htmls','assets',req.params.path));
  res.sendFile(path.join(__dirname ,'htmls','assets',req.params.path));

});







module.exports = router;
