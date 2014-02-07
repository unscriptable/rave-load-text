var jsEncode = require('boot/lib/jsEncode');

module.exports = translateFromString;

function translateFromString (load) {
	return 'module.exports = "' + jsEncode(load.source) + '";';
}
