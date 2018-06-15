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

	t.end();
});
