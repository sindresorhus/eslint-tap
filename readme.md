# eslint-tap [![Build Status](https://travis-ci.org/sindresorhus/eslint-tap.svg?branch=master)](https://travis-ci.org/sindresorhus/eslint-tap)

[TAP](http://testanything.org/wiki/index.php/Main_Page) reporter for [ESLint](https://github.com/nzakas/eslint/)

> TAP, the Test Anything Protocol, is a simple text-based interface between testing modules in a test harness. TAP started life as part of the test harness for Perl but now has implementations in C/C++, Python, PHP, Perl and probably others by the time you read this.

![screenshot](screenshot.png)


## Install

```bash
$ npm install --save-dev eslint-tap
```


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
			format: require('eslint-tap')
		},
		target: ['file.js']
	}
});

grunt.loadNpmTasks('grunt-eslint');
grunt.registerTask('default', ['eslint']);
```


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
