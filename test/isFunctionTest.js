"use strict";

var assert = require("chai").assert;
var isFunction = require("../src/isFunction");

suite("#isFunction", function () {

    test("true", function () {
        assert.equal(isFunction(function () {}), true);
        assert.equal(isFunction(Object), true);
        assert.equal(isFunction(String), true);
        assert.equal(isFunction(new Function()), true);
    });

    test("false", function () {
        assert.equal(isFunction(), false);
        assert.equal(isFunction(undefined), false);
        assert.equal(isFunction(null), false);
        assert.equal(isFunction(false), false);
        assert.equal(isFunction(0), false);
        assert.equal(isFunction(""), false);
        assert.equal(isFunction({}), false);
        assert.equal(isFunction([]), false);
        assert.equal(isFunction(new String("")), false);
    });
});