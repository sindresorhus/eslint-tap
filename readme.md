# eslint-tap [![Build Status](https://secure.travis-ci.org/sindresorhus/eslint-tap.png?branch=master)](http://travis-ci.org/sindresorhus/eslint-tap)

[TAP](http://testanything.org/wiki/index.php/Main_Page) formatter (reporter) for [ESLint](https://github.com/nzakas/eslint/)

> TAP, the Test Anything Protocol, is a simple text-based interface between testing modules in a test harness. TAP started life as part of the test harness for Perl but now has implementations in C/C++, Python, PHP, Perl and probably others by the time you read this.

![screenshot](screenshot.png)


## Install

Install with [npm](https://npmjs.org/package/eslint-tap): `npm install --save-dev eslint-tap`


## Getting started

Use it with:

#### ESLint CLI

```
eslint --format node_modules/eslint-tap/tap.js file.js
```

#### [grunt-eslint](https://github.com/sindresorhus/grunt-eslint/)

```js
grunt.initConfig({
	eslint: {
		options: {
			format: 'node_modules/eslint-tap/tap.js'
		},
		target: ['file.js']
	}
});

grunt.loadNpmTasks('grunt-eslint');
grunt.registerTask('default', ['eslint']);
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
