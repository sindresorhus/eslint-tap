import test from 'ava';
import {cli as eslint} from 'eslint';

test(t => {
	let ret = false;
	const _log = console.log;

	console.log = str => {
		if (/TAP/.test(str) && /ok \d+ clean\.js/.test(str)) {
			ret = true;
		}
	};

	eslint.execute({
		_: ['tap.js', 'clean.js'],
		format: './'
	});

	console.log = _log;

	t.truthy(ret);
});
