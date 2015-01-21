/**
 * Created by stephen on 1/14/15.
 */
"use strict";
const 
    rdfparser = require('../lib/rdf-parser.js'),
    expectedValue = require('./pg132.json');


exports.testRDFParser = function(test) {
    rdfparser(__dirname + '/pg132.rdf', function(err, book) {
        test.expect(2);
        test.ifError(err);
        test.deepEqual(book, expectedValue, "book should match expected");
        console.log('book \t', book, '\n expected \t', expectedValue);
        test.done();
    });
};