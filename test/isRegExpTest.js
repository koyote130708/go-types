"use strict";

var assert = require("chai").assert;
var isRegExp = require("../src/isRegExp");

suite("#isRegExp", function () {

    test("true", function () {
        assert.equal(isRegExp(/[a-z]/), true);
        assert.equal(isRegExp(/[a-z]/g), true);
        assert.equal(isRegExp(new RegExp("[a-z]")), true);
    });

    test("false", function () {
        assert.equal(isRegExp(), false);
        assert.equal(isRegExp("[a-z]"), false);
        assert.equal(isRegExp("/[a-z]/"), false);
        assert.equal(isRegExp({}), false);
    });
});