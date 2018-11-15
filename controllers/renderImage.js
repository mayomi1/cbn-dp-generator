/**
 *Created by mayomi.ayandiran on 2/3/18
 */
const cloudinary = require('cloudinary');
const config = require('../config/main');

class RenderImage {
     getImage(req, res){

        cloudinary.config({
            cloud_name: config.cloud_name,
            api_key: config.api_key,
            api_secret: config.api_secret
        });


        let test =  cloudinary.image( req.session.image+'.png',

            {
                underlay: 'cbnnewerone_orjox2',
                //underlay: req.session.image+'.png',
                width: 700, height: 700,
                transformation: {crop: 'fill', height: 280, width: 280 , gravity: 'face', radius: 'max'}
            });



       // let url = 'https://res.cloudinary.com/solukey/image/upload/c_thumb,w_100,h_100,g_face,r_max/sample.jpg,e_brightness:200,fl_relative,w_0.5,o_60/dpr_2.0/fvylzndslyg3bfrdafhe.png'

       return res.render('show', {image: test});




    }


}

module.exports = new RenderImage();
