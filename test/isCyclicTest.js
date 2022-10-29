"use strict";

var assert = require("chai").assert;
var isCyclic = require("../src/isCyclic");

suite("#isCyclic", function () {

    test("true", function () {
        var c1 = {};
        var c2 = [{id: 1}, {id: 2}];

        c1.ref = c1;
        c2.push(c1);

        assert.equal(isCyclic(c1), true);
        assert.equal(isCyclic(c2), true);
    });

    test("false", function () {
        var obj = {};

        Object.defineProperty(obj, "ref", {
            enumerable: false,
            value: obj
        });
        assert.equal(isCyclic(), false);
        assert.equal(isCyclic(null), false);
        assert.equal(isCyclic({a: null}), false);
        assert.equal(isCyclic(obj), false);
        assert.equal(isCyclic([1, 2, 3]), false);
        assert.equal(isCyclic(function () {}), false);
        assert.equal(isCyclic("abc"), false);
    });
});