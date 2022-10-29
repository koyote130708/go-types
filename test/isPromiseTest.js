"use strict";

var assert = require("chai").assert;
var isPromise = require("../src/isPromise");

if (typeof Promise !== "undefined") {
    suite("#isPromise", function () {

        test("true", function () {
            assert.equal(isPromise(new Promise(function () {}, function () {})), true);
            assert.equal(isPromise(Promise.resolve(true)), true);
            assert.equal(isPromise(Promise.reject(false)), true);
        });

        test("false", function () {
            assert.equal(isPromise(), false);
            assert.equal(isPromise({}), false);
            assert.equal(isPromise({then: function () {}, catch : function () {}}), false);
        });
    });
}