'use strict';
const path = require('path');
const yamlish = require('yamlish');

module.exports = results => {
	let ret = '\nTAP version 13\n';
	let total = 0;

	results.forEach(result => {
		const messages = result.messages;

		if (messages.length === 0) {
			ret += `ok ${++total} ` + path.relative(process.cwd(), result.filePath) + '\n';
			return;
		}

		ret += messages.map(el => {
			let severity = 'warning';

			if (el.fatal || el.severity === 2) {
				severity = 'error';
			}

			return `not ok ${++total}\n    ---` + yamlish.encode({
				message: el.message,
				severity,
				file: result.filePath,
				line: el.line || 0,
				name: el.ruleId
			}) + '\n    ...\n';
		}).join('\n') + '\n';
	});

	ret += `1..${total}`;

	return ret;
};
