"use strict";

var assert = require("chai").assert;
var isPlainObject = require("../src/isPlainObject");

suite("#isPlainObject", function () {

    test("true", function () {
        assert.equal(isPlainObject({}), true);
        assert.equal(isPlainObject(new Object()), true);
    });

    test("false", function () {
        assert.equal(isPlainObject(), false);
        assert.equal(isPlainObject(undefined), false);
        assert.equal(isPlainObject(null), false);
        assert.equal(isPlainObject(false), false);
        assert.equal(isPlainObject(0), false);
        assert.equal(isPlainObject(""), false);
        assert.equal(isPlainObject(function () {}), false);
        assert.equal(isPlainObject([]), false);
        assert.equal(isPlainObject(new String("")), false);
    });
});