"use strict";

var assert = require("chai").assert;
var isArrayOf = require("../src/isArrayOf");

suite("#isArrayOf", function () {

    test("true", function () {
        assert.equal(isArrayOf([undefined], undefined), true);
        assert.equal(isArrayOf([null], null), true);
        assert.equal(isArrayOf([true], "boolean"), true);
        assert.equal(isArrayOf([1, 2], "number"), true);
        assert.equal(isArrayOf(["a", "b"], "string"), true);
        assert.equal(isArrayOf([{a: 1}, {b: 2}], Object), true);
        assert.equal(isArrayOf([1, new Number(2)], ["number", Number]), true);
    });

    test("false", function () {
        assert.equal(isArrayOf(), false);
        assert.equal(isArrayOf([], "number"), false);
        assert.equal(isArrayOf([1, "2"], "number"), false);
        assert.equal(isArrayOf([1, new Number(2)], "number"), false);
    });
});