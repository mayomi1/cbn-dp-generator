const express = require('express');
const router = express.Router();

const uploadController = require('../controllers/Upload');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/upload', uploadController);


module.exports = router;
