@ = require([
  'mho:std'
]);

var g = require('./test.js');

Object.keys(g) .. @each { |k| exports[k] = g[k]; }
