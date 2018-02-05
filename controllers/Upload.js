/**
 *Created by mayomi.ayandiran on 1/26/18
 */

const multer = require('multer');
var cloudinary = require('cloudinary');

const UploadModel = require('../models/Upload');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

let upload = multer({storage: storage}).single('image');


module.exports = (req, res) => {

    upload(req, res, function (err) {
        // if(err) {
        //     return res.json({
        //         status: false,
        //         message: 'Cannot upload picture, please try again',
        //         error: err
        //     })
        // }

        cloudinary.config({
            cloud_name: 'solukey',
            api_key: '675925443541542',
            api_secret: '86g6GjPMCdRvOD64b5CYm56cnxk'
        });

        cloudinary.uploader.upload(req.file.path,
            function(result) {
                req.session.image = result.public_id;

                return res.redirect('/show');
        });



    })
};