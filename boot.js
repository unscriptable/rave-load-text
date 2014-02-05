/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */
var getExt = require('./lib/getExt');
var translateFromString = require('./lib/translateFromString');
var overrideIf = require('boot/lib/overrideIf');
var fetchAsText = require('boot/pipeline/fetchAsText');
var instantiateNode = require('boot/pipeline/instantiateNode');

var extensions = {
	'html': 1,
	'txt': 1,
	'text': 1
};

module.exports = {

	pipeline: createPipeline

};

function createPipeline (context) {
	var pipeline = {
		fetch: fetchAsText,
		translate: translateFromString,
		instantiate: instantiateNode
	};
	return {
		applyTo: function (loader) {
			return overrideIf(hasSupportedExtension, loader, pipeline);
		}
	}
}

function hasSupportedExtension (name) {
	return getExt(name) in extensions;
}
