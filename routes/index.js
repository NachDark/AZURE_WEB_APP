/*habria que realizar la llamada relativa y que haga la llamada al archivo de manera relativa tambien */



var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
var path = require('path');


/* GET home page. */
router.get('/admin', function (req, res, next) {


  res.render('index', { title: 'admin dont try to hack me' });
  // res.render('index');
});
router.get('/', function (req, res, next) {

  res.sendFile(path.join(__dirname, "htmls", "index.html"));
});

router.get('/chart', function (req, res, next) {

  res.sendFile(path.join(__dirname, "htmls", "chart.html"));
});


//CSS defined

router.get('/assets/:path', function (req, res, next) {

  res.sendFile(path.join(__dirname, 'htmls', 'assets', req.params.path));

});
router.get('/assets/:path/:path2', function (req, res, next) {

  res.sendFile(path.join(__dirname, 'htmls', 'assets', req.params.path, req.params.path2));

});

router.get('/assets/:path/:path2/:path3', function (req, res, next) {

  res.sendFile(path.join(__dirname, 'htmls', 'assets', req.params.path, req.params.path2, req.params.path3));

});
router.get('/assets/:path/:path2/:path3/:path4', function (req, res, next) {

  res.sendFile(path.join(__dirname, 'htmls', 'assets', req.params.path, req.params.path2, req.params.path3, req.params.path4));

});







module.exports = router;
