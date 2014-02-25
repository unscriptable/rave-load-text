var jsEncode = require('rave/lib/jsEncode');

module.exports = translateFromString;

function translateFromString (load) {
	return 'module.exports = "' + jsEncode(load.source) + '";';
}
