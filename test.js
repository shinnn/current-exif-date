'use strict';

process.env.TZ = 'UTC';

const currentExifDate = require('.');
const test = require('tape');

test('currentExifDate()', t => {
	const currentDate = new Date();

	t.equal(
		currentExifDate(),
		`${
			currentDate.getFullYear()
		}:${
			`${currentDate.getMonth() + 1}`.padStart(2, '0')
		}:${
			`${currentDate.getDate()}`.padStart(2, '0')
		} ${
			`${currentDate.getHours()}`.padStart(2, '0')
		}:${
			`${currentDate.getMinutes()}`.padStart(2, '0')
		}:${
			`${currentDate.getSeconds()}`.padStart(2, '0')
		}`,
		'should get the current date as an Exif date format.'
	);

	t.throws(
		() => currentExifDate(1),
		/^RangeError.*Expected no arguments, but got 1 argument\./,
		'should throw an error when it takes an argument.'
	);

	t.throws(
		() => currentExifDate(1, 2),
		/^RangeError.*Expected no arguments, but got 2 arguments\./,
		'should throw an error when it takes arguments.'
	);

	t.end();
});
