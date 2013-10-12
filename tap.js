'use strict';
var yamlish = require('yamlish');

function getMessageType(message, rules) {
	if (message.fatal) {
		return 'error';
	}

	var severity = rules[message.ruleId][0] || rules[message.ruleId];

	if (severity === 2) {
		return 'error';
	}

	return 'warning';
}

module.exports = function (results, config) {
	var ret = '\nTAP version 13\n';
	var total = 0;

	results.forEach(function (result) {
		ret += result.messages.map(function (el) {
			return 'not ok ' + ++total + '\n    ---' + yamlish.encode({
				message: el.message,
				severity: getMessageType(el, config.rules || {}),
				file: result.filePath,
				line: el.line || 0,
				name: el.ruleId
			}) + '\n    ...\n';
		}).join('\n') + '\n';
	});

	ret += '1..' + total;

	return ret;
};
