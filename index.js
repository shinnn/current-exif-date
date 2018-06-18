'use strict';

const {format} = require('exif-date');

module.exports = function currentExifDate(...args) {
	const argLen = args.length;

	if (argLen !== 0) {
		throw new RangeError(`Expected no arguments, but got ${argLen} argument${
			argLen === 1 ? '' : 's'
		}.`);
	}

	const currentDate = new Date();

	return format(new Date(Date.UTC(
		currentDate.getFullYear(),
		currentDate.getMonth(),
		currentDate.getDate(),
		currentDate.getHours(),
		currentDate.getMinutes(),
		currentDate.getSeconds()
	)));
};
