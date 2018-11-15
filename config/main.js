/**
 * Created by mayomi on 11/15/18 by 3:59 PM.
 */
require('dotenv').config();

module.exports = {
	'api_key': process.env.API_KEY,
	'api_secret': process.env.API_SECRET || 3000,
	'cloud_name': process.env.CLOUD_NAME,
	'underlay_image': process.env.UNDERLAY_IMAGE,
};
