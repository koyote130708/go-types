"use strict";

var assert = require("chai").assert;
var isInvalidDate = require("../src/isInvalidDate");

suite("#isInvalidDate", function () {

    test("true", function () {
        assert.equal(isInvalidDate(new Date("")), true);
        assert.equal(isInvalidDate(new Date(NaN)), true);
    });

    test("false", function () {
        assert.equal(isInvalidDate(new Date()), false);
        assert.equal(isInvalidDate(new Date("2001-01-01T00:00:00.000Z")), false);
        assert.equal(isInvalidDate(new Date(0)), false);
        assert.equal(isInvalidDate(new Date(-1)), false);
        assert.equal(isInvalidDate("2001-01-01T00:00:00.000Z"), false);
        assert.equal(isInvalidDate(0), false);
    });
});