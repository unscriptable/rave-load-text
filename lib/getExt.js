/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */
module.exports = getExt;

function getExt (name) {
	var dot = name ? name.lastIndexOf('.') : -1;
	if (dot >= 0) return name.slice(dot + 1);
}
