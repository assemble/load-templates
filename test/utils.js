/*!
 * load-templates <https://github.com/jonschlinkert/load-templates>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var path = require('path');
var chalk = require('chalk');
require('should');
var utils = require('../lib/utils');
var Loader = require('..');
var loader;


describe(chalk.magenta('utils:'), function () {
  beforeEach(function () {
    loader = new Loader();
  });


  describe('hasOwn():', function () {
    it('should return `true` if `object` hasOwnProperty `key`:', function () {
      utils.hasOwn({a: 'b'}, 'a').should.be.true;
    });

    it('should return `false` if the `object` does not:', function () {
      utils.hasOwn({a: 'b'}, 'b').should.be.false;
    });
  });

  describe('options:', function () {
    describe('.flattenDeep():', function () {
      it('should flatten `prop` to the root of the object:', function () {
        var locals = utils.flattenDeep('a', {a: {b: 'b'}, b: {a: {c: 'c'}}, c: {a: {d: 'd'}}});
        locals.should.eql({b: 'b', c: 'c', d: 'd'});
      });

      it('should deep flatten `prop` to the root of the object:', function () {
        var locals = utils.flattenDeep('b', {a: {b: {a: 'b'}}, d: {e: {b: {c: 'd'}}}});
        locals.should.eql({a: 'b', c: 'd'});
      });

      it('should return an empty object when no matching props are found:', function () {
        var locals = utils.flattenDeep('b', 'd');
        locals.should.eql({});
      });

      it('should flatten the same `prop` from multiple objects:', function () {
        var one = {a: {b: 'b'}, b: {a: {c: 'c'}}, c: {a: {d: 'd'}}};
        var two = {a: {g: 'g'}, k: {a: {e: 'e', a: {h: 'h'}}}, z: {a: {f: 'f'}}};

        var locals = utils.flattenDeep('a', one, two);
        locals.should.eql({b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h'});
      });

      it('should return an empty object when nothing is found:', function () {
        utils.flattenDeep({content: 'This is content.'}).should.eql({});
        utils.flattenDeep({}).should.eql({});
      });
    });

    describe('.pickOptions():', function () {
      it('should pick an options object:', function () {
        var opts = utils.pickOptions({a: 'b', locals: {c: 'd'}, options: {foo: true}, content: 'This is content.'});
        opts.should.eql({options: {foo: true}});
      });

      it('should return an empty object when nothing is found:', function () {
        utils.pickOptions({content: 'This is content.'}).should.eql({});
        utils.pickOptions({}).should.eql({});
      });
    });

    describe('.flattenOptions():', function () {
      it('should flatten an options object', function () {
        var opts = utils.flattenOptions({options: {foo: true}, bar: false});
        opts.should.eql({foo: true, bar: false});
      });

      it('should return an empty object when nothing is found:', function () {
        utils.flattenOptions({content: 'This is content.'}).should.eql({});
        utils.flattenOptions({}).should.eql({});
      });
    });

    describe('.omitOptions():', function () {
      it('should omit an options object', function () {
        var opts = utils.omitOptions({options: {foo: true}, bar: false});
        opts.should.eql({bar: false});
      });
    });
  });

  describe('locals:', function () {
    describe('.collectLocals():', function () {
      it('should collect locals from the given object:', function () {
        var locals = utils.collectLocals({a: 'b', locals: {c: 'd'}, content: 'This is content.'});
        locals.should.eql({content: 'This is content.', locals: {a: 'b', c: 'd'}});
      });

      it('should return an empty `locals` object when no relevant props are found:', function () {
        utils.collectLocals({content: 'This is content.'}).should.eql({content: 'This is content.', locals: {}});
        utils.collectLocals({}).should.eql({locals: {}});
      });

      it('should return an empty object when the value is undefined:', function () {
        utils.collectLocals().should.eql({});
      });
    });

    describe('.pickLocals():', function () {
      it('should pick locals from the given object:', function () {
        var locals = utils.pickLocals({a: 'b', locals: {c: 'd'}, content: 'This is content.'});
        locals.should.eql({a: 'b', locals: {c: 'd'}});
      });

      it('should return an empty object when no relevant props are found:', function () {
        utils.pickLocals({content: 'This is content.'}).should.eql({});
        utils.pickLocals({}).should.eql({});
      });
    });

    describe('.flattenLocals():', function () {
      it('should flatten a locals object', function () {
        var locals = utils.flattenLocals({a: 'b', locals: {c: 'd'}, content: 'This is content.'});
        locals.should.eql({a: 'b', c: 'd'});
      });

      it('should return an empty object when no relevant props are found:', function () {
        utils.flattenLocals({content: 'This is content.'}).should.eql({});
        utils.flattenLocals({}).should.eql({});
      });
    });

    describe('.omitLocals():', function () {
      it('should omit locals', function () {
        var locals = utils.omitLocals({a: 'b', locals: {c: 'd'}, content: 'This is content.'});
        locals.should.eql({a: 'b', content: 'This is content.'});
      });

      it('should return an empty object when nothing is found:', function () {
        utils.omitLocals({}).should.eql({});
      });
    });
  });

  describe('root:', function () {
    describe('.pickRoot():', function () {
      it('should pick root properties from the given object:', function () {
        var root = utils.pickRoot({a: 'b', locals: {c: 'd'}, content: 'This is content.'});
        root.should.eql({content: 'This is content.', locals: {c: 'd'}});
      });
    });

    describe('.omitRoot():', function () {
      it('should omit root properties', function () {
        var root = utils.omitRoot({a: 'b', locals: {c: 'd'}, content: 'This is content.'});
        root.should.eql({a: 'b'});
      });
    });
  });
});
