"use strict";

var assert = require("chai").assert;
var isNode = require("../src/isNode");


if (typeof Document !== "undefined") {
    suite("#isNode", function () {

        test("true", function () {
            assert.equal(isNode(document), true);
            assert.equal(isNode(document.createElement("div")), true);
            assert.equal(isNode(new DocumentFragment()), true);
        });

        test("false", function () {
            assert.equal(isNode(), false);
            assert.equal(isNode(window), false);
            assert.equal(isNode(Node), false);
            assert.equal(isNode({}), false);
            assert.equal(isNode(undefined), false);
            assert.equal(isNode(null), false);
        });
    });
}