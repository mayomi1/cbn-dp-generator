/**
 *Created by mayomi.ayandiran on 2/3/18
 */


'use strict';

var express = require("express");
var multer = require('multer');
var app = express();
var options  = require('./config/config')
var mongoose = require('mongoose');

/* photo manenos */
var cloudinary = require('cloudinary');
/* configure mongoose */
mongoose.connect('mongodb://localhost:27017/theToDos');
/* include models */
var Photo= require('./models/photos');

/* actual work */
var upload = multer({ dest : '../public/uploads'}).single('userPhoto');
app.use(express.static(__dirname + '/public'));
app.post('/api/photo', function(req,res){
    upload(req, res, function(err){
        if(err){ return res.end("Error")};
        console.log(req);
        res.end("file uploaded")

        cloudinary.config({
            cloud_name: options.cloudinary.cloud_name,
            api_key: options.cloudinary.api_key,
            api_secret: options.cloudinary.api_secret
        });

        cloudinary.uploader.upload(req.file.path, function(result) {
            console.log(result);
            //create an urembo product
            var photo = new Photo();
            photo.name = req.body.name;
            photo.picture = result.url;
            photo.place = req.body.place;
            photo.city = req.body.city;
            //save the product and check for errors
            photo.save(function(err, photos){
                if(err)
                    res.send(err);
                res.json({ message: 'photographed place created.'});
                console.log(photos);
            });
        });

    });
});

app.get('/api/photos', function(req, res){
    Photo.find(function( err, photos){
        if(err)
            res.send(err);
        res.json(photos);
    });
});

app.listen(3000, function(){
    console.log("Working on port 3000");
});