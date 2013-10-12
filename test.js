'use strict';
var assert = require('assert');
var eslint = require('eslint').cli;


describe('eslint-tap', function () {
	it('should be used by ESLint', function () {
		var ret = false;
		var _log = console.log;

		console.log = function (str) {
			if (/TAP/.test(str)) {
				ret = true;
			}
		}

		eslint.execute(['--format', './tap.js', 'tap.js']);

		console.log = _log;

		assert(ret);
	});
});
