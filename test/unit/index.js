// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind')

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
// const srcContext = require.context('src', true, /^\.\/(?!main(\.js)?$)/)
const srcContext = require.context('src/services', true, /\.js$/);
console.log( testsContext.keys() );
console.log( srcContext.keys() );
srcContext.keys().forEach(srcContext)

// const servicesContext = require.context('src/services', true, /\.js$/);
// const srcContext = require.context('src', true, /^(\.\/services\/)([^\/]*)$/)
