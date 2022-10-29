"use strict";

var assert = require("chai").assert;
var isNaN = require("../src/isNaN");


suite("#isNaN", function () {

    test("true", function () {
        assert.equal(isNaN(Number.NaN), true);
        assert.equal(isNaN(0 / 0), true);
        assert.equal(isNaN(new Number(Number.NaN)), true);
    });

    test("false", function () {
        assert.equal(isNaN(undefined), false);
        assert.equal(isNaN(null), false);
        assert.equal(isNaN("NaN"), false);
        assert.equal(isNaN("0"), false);
        assert.equal(isNaN("0/0"), false);
        assert.equal(isNaN(Number.POSITIVE_INFINITY), false);
        assert.equal(isNaN(Number.NEGATIVE_INFINITY), false);
    });
});