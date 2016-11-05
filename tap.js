'use strict';
var path = require('path');
var yamlish = require('yamlish');

module.exports = function (results) {
	var ret = '\nTAP version 13\n';
	var total = 0;

	results.forEach(function (result) {
		var messages = result.messages;

		if (messages.length === 0) {
			ret += 'ok ' + (++total) + ' ' + path.relative(process.cwd(), result.filePath) + '\n';
			return;
		}

		ret += messages.map(function (el) {
			var severity = 'warning';

			if (el.fatal || el.severity === 2) {
				severity = 'error';
			}

			return 'not ok ' + (++total) + '\n    ---' + yamlish.encode({
				message: el.message,
				severity: severity,
				file: result.filePath,
				line: el.line || 0,
				name: el.ruleId
			}) + '\n    ...\n';
		}).join('\n') + '\n';
	});

	ret += '1..' + total;

	return ret;
};
