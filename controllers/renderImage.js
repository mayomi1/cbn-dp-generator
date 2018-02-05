/**
 *Created by mayomi.ayandiran on 2/3/18
 */
var cloudinary = require('cloudinary');

class RenderImage {
    getImage(req, res){
        console.log('working1');

        cloudinary.config({
            cloud_name: 'solukey',
            api_key: '675925443541542',
            api_secret: '86g6GjPMCdRvOD64b5CYm56cnxk'
        });

        let test =  cloudinary.image('sample.jpg',

            {
                underlay: "rzqnqtnh21w5iv5tv4zy.png",
                width: 180, height: 180, effect: "brightness:100",
                transformation: {crop: 'thumb', height: 80, width: 80 , gravity: 'face', radius: 'max'}
            });



       // let url = 'https://res.cloudinary.com/solukey/image/upload/c_thumb,w_100,h_100,g_face,r_max/sample.jpg,e_brightness:200,fl_relative,w_0.5,o_60/dpr_2.0/fvylzndslyg3bfrdafhe.png'

       return res.render('show', {image: test});





    }

}

module.exports = new RenderImage();