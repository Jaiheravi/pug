'use strict';

var fs = require('fs');
var path = require('path');
var assert = require('assert');
var walk = require('../../walk');
var lex = require('../../lexer');
var parse = require('../../parser');
var load = require('../');

test('pug-load', () => {
  var filename = __dirname + '/foo.pug';
  var ast = load.file(filename, {
    lex: lex,
    parse: parse,
  });

  ast = walk(
    ast,
    function(node) {
      if (node.filename)
        node.filename = '<dirname>/' + path.basename(node.filename);
      if (node.fullPath)
        node.fullPath = '<dirname>/' + path.basename(node.fullPath);
    },
    {includeDependencies: true}
  );

  expect(ast).toMatchSnapshot();
});
