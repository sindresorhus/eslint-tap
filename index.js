'use strict';
const path = require('path');
const jsYaml = require('js-yaml');
const indentString = require('indent-string');

module.exports = results => {
	let ret = 'TAP version 13\n';
	let total = 0;

	for (const result of results) {
		const messages = result.messages;

		if (messages.length === 0) {
			ret += `ok ${++total} ` + path.relative(process.cwd(), result.filePath) + '\n';
			continue;
		}

		ret += messages.map(el => {
			let severity = 'warning';

			if (el.fatal || el.severity === 2) {
				severity = 'error';
			}

			const block = '---\n' + jsYaml.safeDump({
				message: el.message,
				severity,
				file: result.filePath,
				line: el.line || 0,
				name: el.ruleId
			}) + '...';

			return `not ok ${++total}\n${indentString(block, 2)}`;
		}).join('\n') + '\n';
	}

	ret += `1..${total}`;

	return ret;
};
