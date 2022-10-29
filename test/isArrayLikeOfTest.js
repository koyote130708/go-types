"use strict";

var assert = require("chai").assert;
var isArrayLikeOf = require("../src/isArrayLikeOf");


suite("#isArrayLikeOf", function () {

    test("true", function () {
        assert.equal(isArrayLikeOf("abc", "string"), true);
        assert.equal(isArrayLikeOf({0: "a", 1: "b", length: 2}, "string"), true);

        assert.equal(isArrayLikeOf([undefined], undefined), true);
        assert.equal(isArrayLikeOf([null], null), true);
        assert.equal(isArrayLikeOf([true], "boolean"), true);
        assert.equal(isArrayLikeOf([1, 2], "number"), true);
        assert.equal(isArrayLikeOf(["a", "b"], "string"), true);
        assert.equal(isArrayLikeOf([{a: 1}, {b: 2}], Object), true);
        assert.equal(isArrayLikeOf([1, new Number(2)], ["number", Number]), true);
    });

    test("false", function () {
        assert.equal(isArrayLikeOf("123", "number"), false);
        assert.equal(isArrayLikeOf({0: "a", 1: "b", length: 2}, "number"), false);

        assert.equal(isArrayLikeOf(), false);
        assert.equal(isArrayLikeOf([], "number"), false);
        assert.equal(isArrayLikeOf([1, "2"], "number"), false);
        assert.equal(isArrayLikeOf([1, new Number(2)], "number"), false);
    });
});