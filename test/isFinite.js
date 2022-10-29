"use strict";

var assert = require("chai").assert;
var isFinite = require("../src/isFinite");

suite("#isFinite", function () {

    test("true", function () {
        assert.equal(isFinite(0), true);
        assert.equal(isFinite(-1), true);
        assert.equal(isFinite(1.00001), true);
        assert.equal(isFinite(Number.MAX_VALUE), true);
        assert.equal(isFinite(Number.MIN_VALUE), true);
        assert.equal(isFinite(new Number(1)), true);
    });

    test("false", function () {
        assert.equal(isFinite(Number.POSITIVE_INFINITY), false);
        assert.equal(isFinite(Number.NEGATIVE_INFINITY), false);
        assert.equal(isFinite(Number.NaN), false);
        assert.equal(isFinite(null), false);
        assert.equal(isFinite("0"), false);
    });
});