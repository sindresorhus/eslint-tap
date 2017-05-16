import test from 'ava';
import {cli as eslint} from 'eslint';

test(t => {
	let ret = 0;
	const _log = console.log;

	console.log = str => {
		console.error(str);

		if (/TAP/.test(str) && /ok \d+ fixture-clean\.js/.test(str)) {
			ret += 1;
		}

		if (str.includes(`  message: '''foo'' is not defined.'`)) {
			ret += 1;
		}
	};

	eslint.execute({
		_: ['tap.js', 'fixture-clean.js', 'fixture-fail.js'],
		format: './'
	});

	console.log = _log;

	t.is(ret, 2);
});
