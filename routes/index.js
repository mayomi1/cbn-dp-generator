const express = require('express');
const router = express.Router();

const uploadController = require('../controllers/Upload');
const showImageController = require('../controllers/renderImage');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/upload', uploadController);

router.get('/show', showImageController.getImage);


module.exports = router;
