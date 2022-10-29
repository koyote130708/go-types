"use strict";

var assert = require("chai").assert;
var isFragment = require("../src/isFragment");

if (typeof Document !== "undefined") {
    suite("#isFragment", function () {

        test("true", function () {
            assert.equal(isFragment(new DocumentFragment()), true);
        });

        test("false", function () {
            assert.equal(isFragment(), false);
            assert.equal(isFragment(window), false);
            assert.equal(isFragment(document), false);
            assert.equal(isFragment(document.createElement("div")), false);
            assert.equal(isFragment(undefined), false);
            assert.equal(isFragment(null), false);
            assert.equal(isFragment({}), false);
        });
    });
}