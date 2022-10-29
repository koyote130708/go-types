"use strict";

var assert = require("chai").assert;
var isNullish = require("../src/isNullish");


suite("#isNullish", function () {

    test("nullish", function () {
        assert.equal(isNullish(), true);
        assert.equal(isNullish(undefined), true);
        assert.equal(isNullish(null), true);
    });

    test("not nullish", function () {
        assert.equal(isNullish(0), false);
        assert.equal(isNullish(NaN), false);
        assert.equal(isNullish(false), false);
        assert.equal(isNullish(""), false);
        assert.equal(isNullish({}), false);
        assert.equal(isNullish([]), false);
        assert.equal(isNullish(function () {}), false);
    });
});