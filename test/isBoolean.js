"use strict";

var assert = require("chai").assert;
var isBoolean = require("../src/isBoolean");

suite("#isBoolean", function () {

    test("boolean", function () {
        assert.equal(isBoolean(false), true);
        assert.equal(isBoolean(true), true);
        assert.equal(isBoolean(new Boolean(true)), true);
    });

    test("not boolean", function () {
        assert.equal(isBoolean(), false);
        assert.equal(isBoolean(undefined), false);
        assert.equal(isBoolean(null), false);
        assert.equal(isBoolean(""), false);
        assert.equal(isBoolean("false"), false);
        assert.equal(isBoolean(0), false);
        assert.equal(isBoolean(NaN), false);
        assert.equal(isBoolean(Boolean), false);
        assert.equal(isBoolean({}), false);
        assert.equal(isBoolean([]), false);
        assert.equal(isBoolean(function(){}), false);
    });
});