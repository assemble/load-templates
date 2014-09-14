# loader [![NPM version](https://badge.fury.io/js/loader.svg)](http://badge.fury.io/js/loader)


> The most interesting project in the world > Verb

## Install
#### Install with [npm](npmjs.org):

```bash
npm i loader --save-dev
```

## Run tests

```bash
npm test
```

## Usage

```js
var loader = require('loader');
console.log(loader('abc'));
//=> ['a', 'b', 'c'];
```

## API
### [Loader](index.js#L25)

Create a new instance of `Loader`, optionally passing default `options`.

* `options` **{Object}**: Default options for front-matter and template naming.

**Example:**

```js
var Loader = require('load-templates');
var templates = new Loader();
```

### [.option](index.js#L59)

Set or get an option.

* `key` **{String}**
* `value` **{*}**
* `returns`: {*}

```js
loader.option('a', true)
loader.option('a')
// => true
```

### [.read](index.js#L126)

* `filepath` **{String}**: The path of the file to read.
* `Options` **{Object}**: Options or `locals`.

Read the given file. `fs.readFileSync` is used by default.

### [.parse](index.js#L146)

* `str` **{String}**: The string to parse.
* `Options` **{Object}**: Options or `locals`.

Parse the content of each template loaded using whatever parsing function
is defined on the options.

## Author

**Jon Schlinkert**


## License
Copyright (c) 2014 Jon Schlinkert, contributors.
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on September 14, 2014._