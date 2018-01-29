/**
 *Created by mayomi.ayandiran on 1/26/18
 */

const multer = require('multer');

const UploadModel = require('../models/Upload');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

let upload = multer({storage: storage}).single('image');


module.exports = (req, res) => {
    upload(req, res, function (err) {
        if(err) {
            return res.json({
                status: false,
                message: 'Cannot upload picture, please try again',
                error: err
            })
        }

        const fullName = req.body.fullName;

        let image;
        if(req.file) {
            image = req.file.filename;
        }

        const newImage = UploadModel({
            fullName: fullName,
            image: image
        });

        return newImage.save().then((savedImage) => {
            return res.json({
                status: true,
                data: savedImage
            })

        }).catch((error) => {
            return res.json({
                status: false,
                message: 'unable to store image',
                error: error
            })
        })



    })
};