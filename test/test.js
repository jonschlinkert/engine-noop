/*!
 * engine-cache <https://github.com/jonschlinkert/engine-cache>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var should = require('should');
var noop = require('..');

describe('engines', function() {

  it('should pass through content with noop engine.', function(done) {
    noop.render('<%= name %>', function (err, content) {
      content.should.equal('<%= name %>');
      done();
    });
  });

  it('should synchronously pass through content.', function () {
    noop.renderSync('<%= abc %>').should.equal('<%= abc %>');
  });
});
