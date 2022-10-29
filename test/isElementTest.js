"use strict";

var assert = require("chai").assert;
var isElement = require("../src/isElement");

if (typeof Document !== "undefined") {
    suite("#isElement", function () {

        test("true", function () {
            assert.equal(isElement(document.createElement("div")), true);
        });

        test("false", function () {
            assert.equal(isElement(), false);
            assert.equal(isElement(window), false);
            assert.equal(isElement(document), false);
            assert.equal(isElement(new DocumentFragment()), false);
            assert.equal(isElement(Element), false);
            assert.equal(isElement(undefined), false);
            assert.equal(isElement(null), false);
            assert.equal(isElement({}), false);
        });
    });
}