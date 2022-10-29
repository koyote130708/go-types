"use strict";

var assert = require("chai").assert;
var isArrayLike = require("../src/isArrayLike");

suite("#isArrayLike", function () {

    test("true", function () {
        assert.equal(isArrayLike(["a", "b"]), true);
        assert.equal(isArrayLike(new Array()), true);
        assert.equal(isArrayLike({length: 0}), true);
        assert.equal(isArrayLike(""), true);
        assert.equal(isArrayLike(new Int8Array()), true);
    });

    test("false", function () {
        assert.equal(isArrayLike(), false);
        assert.equal(isArrayLike(undefined), false);
        assert.equal(isArrayLike(null), false);
        assert.equal(isArrayLike(false), false);
        assert.equal(isArrayLike(0), false);
        assert.equal(isArrayLike({}), false);
        assert.equal(isArrayLike({length: -1}), false);
        assert.equal(isArrayLike(Array), false);

        if (typeof Set !== "undefined") {
            assert.equal(isArrayLike(new Set()), false);
        }

        if (typeof Map !== "undefined") {
            assert.equal(isArrayLike(new Map()), false);
        }
    });
});