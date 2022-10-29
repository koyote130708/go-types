"use strict";

var assert = require("chai").assert;
var isPromiseLike = require("../src/isPromiseLike");

suite("#isPromiseLike", function () {

    test("true", function () {
        assert.equal(isPromiseLike({then: function () {}, catch : function () {}}), true);

        if (typeof Promise !== "undefined") {
            assert.equal(isPromiseLike(Promise.resolve(1)), true);
        }
    });

    test("false", function () {
        assert.equal(isPromiseLike(), false);
        assert.equal(isPromiseLike({then: function () {}}), false);
        assert.equal(isPromiseLike({ catch : function () {}}), false);
        assert.equal(isPromiseLike({then: function () {}, catch : true}), false);
    });
});