/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */
var createFileExtFilter = require('rave/lib/createFileExtFilter');
var overrideIf = require('rave/lib/overrideIf');
var fetchAsText = require('rave/pipeline/fetchAsText');
var jsEncode = require('rave/lib/jsEncode');
var instantiateScript = require('rave/pipeline/instantiateScript');

var defaultExtensions = [ 'text', 'html', 'txt', 'htm' ];

module.exports = function (context) {
	var pipeline = {
		fetch: fetchAsText,
		translate: function (load) { return '"' + jsEncode(load.source) + '"'; },
		instantiate: instantiateScript
	};

	// override extensions if supplied by dev
	var extensions = 'textByext' in context
		? context.textByext
		: defaultExtensions;

	return {
		pipeline: function (loader) {
			return overrideIf(createFileExtFilter(extensions), loader, pipeline);
		}
	};



};

