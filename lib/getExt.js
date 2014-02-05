/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */
module.exports = getExt;

function getExt (load) {
	var name = typeof load === 'string' ? load : load.name;
	var dot = name ? name.lastIndexOf('.') : -1;
	var slash = name ? name.lastIndexOf('/') : -1;
	return dot > slash ? name.slice(dot + 1) : '';
}
