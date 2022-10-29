"use strict";

var assert = require("chai").assert;
var isDate = require("../src/isDate");

suite("#isDate", function () {

    test("true", function () {
        assert.equal(isDate(new Date()), true);
        assert.equal(isDate(new Date("")), true);
    });

    test("false", function () {
        assert.equal(isDate(), false);
        assert.equal(isDate("2001-01-01T00:00:00.000Z"), false);
        assert.equal(isDate(978307200000), false);
        assert.equal(isDate({}), false);
    });
});