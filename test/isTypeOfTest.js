"use strict";

var assert = require("chai").assert;
var isTypeOf = require("../src/isTypeOf");
var isString = require("../src/isString");
var isPrimitive = require("../src/isPrimitive");

suite("#isTypeOf", function () {
    function Foo() {
    }

    test("true", function () {
        assert.equal(isTypeOf(undefined, "undefined"), true);
        assert.equal(isTypeOf(null, "object"), true);
        assert.equal(isTypeOf(false, "boolean"), true);
        assert.equal(isTypeOf(0, "number"), true);
        assert.equal(isTypeOf("", "string"), true);
        assert.equal(isTypeOf(Foo, "function"), true);
        assert.equal(isTypeOf({}, "object"), true);
        assert.equal(isTypeOf(new String(""), "object"), true);
        assert.equal(isTypeOf(new String(""), String), true);
        assert.equal(isTypeOf(new String(""), isString), true);
        assert.equal(isTypeOf(new Foo(), Foo), true);
        assert.equal(isTypeOf(1, ["number", "boolean", "string"]), true);
        assert.equal(isTypeOf(true, ["number", "boolean", "string"]), true);
        assert.equal(isTypeOf("abc", ["number", "boolean", "string"]), true);
        assert.equal(isTypeOf("abc", [isString, isPrimitive]), true);
    });

    test("false", function () {
        assert.equal(isTypeOf({}, ["number", "boolean", "string"]), false);
    });

    test("exceptions", function () {
        assert.throws(isTypeOf.bind(null, {}, 0), TypeError);
        assert.throws(isTypeOf.bind(null, {}, true), TypeError);
        assert.throws(isTypeOf.bind(null, {}, {}), TypeError);
    });
});