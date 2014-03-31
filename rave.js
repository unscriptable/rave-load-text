/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */
var createFileExtFilter = require('rave/lib/createFileExtFilter');
var overrideIf = require('rave/lib/overrideIf');
var es5Transform = require('rave/lib/es5Transform');

var defaultExtensions = [ 'text', 'html', 'txt', 'htm' ];

module.exports = function (context) {
	var pipeline = {
		instantiate: instantiate
	};

	// override extensions if supplied by dev
	var extensions = 'loadText' in context
		? context.loadText
		: defaultExtensions;

	return {
		pipeline: function (loader) {
			return overrideIf(createFileExtFilter(extensions), loader, pipeline);
		}
	};

};

function instantiate (load) {
	return {
		execute: function () {
			return new Module(es5Transform.toLoader(load.source));
		}
	}
}
