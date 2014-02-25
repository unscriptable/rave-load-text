/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */
var getExt = require('./lib/getExt');
var translateFromString = require('./lib/translateFromString');
var overrideIf = require('rave/lib/overrideIf');
var fetchAsText = require('rave/pipeline/fetchAsText');
var instantiateNode = require('rave/pipeline/instantiateNode');

var extensions = {
	'text': 1,
	'html': 1,
	'txt': 1,
	'htm': 1,
	'css': 1,
	'less': 1,
	'scss': 1
};

module.exports = function (context) {

	// TODO: override extensions here if context.textByExt exists

	return {
		pipeline: createPipeline
	};

};

function createPipeline (loader) {
	var pipeline = {
		fetch: fetchAsText,
		translate: translateFromString,
		instantiate: instantiateNode
	};
	return overrideIf(hasSupportedExtension, loader, pipeline);
}

function hasSupportedExtension (name) {
	return getExt(name) in extensions;
}
