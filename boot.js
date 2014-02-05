/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */
var getExt = require('./lib/getExt');
var overrideIf = require('boot/lib/overrideIf');
var fetchAsText = require('boot/pipeline/fetchAsText');

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
		fetch: fetchAsText
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
