'use strict';

const format = require('exif-date').format;

module.exports = function currentExifDate() {
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
