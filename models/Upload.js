/**
 *Created by mayomi.ayandiran on 1/26/18
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//= ===============================
// Resource Schema
//= ===============================
const ImageSchema = new Schema({
        fullName: {
            type: String
        },
        image: {
            type: String
        }
    },
    {
        timestamps: true
    });

module.exports = mongoose.model('image', ImageSchema);