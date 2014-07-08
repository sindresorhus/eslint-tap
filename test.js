'use strict';
var test = require('ava');
var eslint = require('eslint').cli;

test('should be used by ESLint', function (t) {
	var ret = false;
	var _log = console.log;

	console.log = function (str) {
		if (/TAP/.test(str)) {
			ret = true;
		}
	};

	eslint.execute({
		_: ['tap.js'],
		format: './tap.js'
	});

	console.log = _log;

	t.assert(ret);
});
