"use strict";

var assert = require("chai").assert;
var isSymbol = require("../src/isSymbol");

if (typeof Symbol !== "undefined") {
    suite("#isSymbol", function () {

        test("true", function () {
            assert.equal(isSymbol(Symbol()), true);
            assert.equal(isSymbol(Symbol("")), true);
            assert.equal(isSymbol(Symbol("abc")), true);
        });

        test("false", function () {
            assert.equal(isSymbol(), false);
            assert.equal(isSymbol(undefined), false);
            assert.equal(isSymbol(null), false);
            assert.equal(isSymbol(0), false);
            assert.equal(isSymbol(false), false);
            assert.equal(isSymbol({}), false);
            assert.equal(isSymbol([]), false);
            assert.equal(isSymbol(""), false);
            assert.equal(isSymbol("null"), false);
            assert.equal(isSymbol("abc"), false);
            assert.equal(isSymbol(new String("abc")), false);
        });
    });
}