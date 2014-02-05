module.exports = translateFromString;

function translateFromString (load) {
	return 'module.exports = "' + escapeQuotes(load.source) + '";';
}

function escapeQuotes (str) {
	return str.replace(/(")|(\n)/g, function (m, q, lf) {
		return q ? '\\"' : '\\n';
	});
}
