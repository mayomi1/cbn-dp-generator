const express = require('express');
const router = express.Router();
const isOperamini = require('is-opera-mini');

const uploadController = require('../controllers/Upload');
const showImageController = require('../controllers/renderImage');

/* GET home page. */
router.get('/', function(req, res, next) {

  if(isOperamini){
    return res.json('no support');
  }
  res.render('index', { title: 'Express' });
});


router.post('/upload', uploadController);

router.get('/show', showImageController.getImage);


module.exports = router;
