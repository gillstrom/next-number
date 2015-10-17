'use strict';
module.exports = function (x, fn) {
	if (typeof x !== 'number') {
		throw new TypeError('Expected a number');
	}

	if (typeof fn !== 'function') {
		throw new TypeError('Expected a function');
	}

	return function () {
		x = fn(x);
		return x;
	};
};
