# load-templates [![NPM version](https://badge.fury.io/js/load-templates.svg)](http://badge.fury.io/js/load-templates)  [![Build Status](https://travis-ci.org/jonschlinkert/load-templates.svg)](https://travis-ci.org/jonschlinkert/load-templates)

> Load templates.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i load-templates --save
```

## Usage

In addition to what's shown in the below examples, if a glob pattern or valid filepath is passed, a `stat` object will be added to the `file` object as well.

```js
var loader = require('load-templates');
// optionally pass an object to use for caching the views
var cache = {};
var views = loader(cache);
```

**load views from objects**

```js
views({
  a: {path: 'a'},
  b: {path: 'b'},
  c: {path: 'c'}
});
```

**from key-value pairs**

```js
views('d', {path: 'd'});
views('e', {path: 'e'});
views('f', {path: 'f'});
```

**from globs or file paths**

```js
views(['views/*.js']); 
```

**Results**

All of the above examples combined result in:

```js
{
  a: {path: 'a'},
  b: {path: 'b'},
  c: {path: 'c'},
  d: {path: 'd'},
  e: {path: 'e'},
  f: {path: 'f'},
  g: {path: 'g'},
  h: {path: 'h'},
  i: {path: 'i'},
  j: {path: 'j'}
}
```

## Options

### options.cwd

Special (leading) characters are expanded on `options.cwd`

* `~` expands to user home. example: `{cwd: '~/foo'}`
* `@` expands to global npm modules. example: `{cwd: '@/bar'}`

### options.renameKey

Rename the key of each `file` object.

Type: `Function`

Default: `noop` Full filepath or whatever key is passed.

### glob options

All options are also passed to [globby](https://github.com/sindresorhus/globby).

## Related projects

* [assemble](http://assemble.io): Static site generator for Grunt.js, Yeoman and Node.js. Used by Zurb Foundation, Zurb Ink, H5BP/Effeckt,… [more](http://assemble.io)
* [templates](https://github.com/jonschlinkert/templates): System for creating and managing template collections, and rendering templates with any node.js template engine.… [more](https://github.com/jonschlinkert/templates)
* [verb](https://github.com/verbose/verb): Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used… [more](https://github.com/verbose/verb)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Coverage summary

As of version 0.9.2

```
Statements   : 100% (81/81)
Branches     : 100% (44/44)
Functions    : 100% (13/13)
Lines        : 100% (79/79)
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/load-templates/issues/new).

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2014-2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on October 08, 2015._