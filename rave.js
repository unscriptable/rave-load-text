/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */
var es5Transform = require('rave/lib/es5Transform');

var defaultExtensions = [ 'text', 'html', 'txt', 'htm', 'css' ];

exports.create = create;
exports.instantiate = instantiate;

function create (context) {
	// override extensions if supplied by dev
	var env = context.env;
	var extensions = (env.loadText && env.loadText.extensions)
		|| defaultExtensions;

	return {
		load: [
			{
				extensions: extensions,
				hooks: {
					locate: locate,
					instantiate: instantiate
				}
			}
		]
	};

}

function locate (load) {
	var metadata = load.metadata;
	metadata.dontAddExt = true;
	return false;
}

function instantiate (load) {
	return {
		execute: function () {
			return new Module(es5Transform.toLoader(load.source));
		}
	}
}
