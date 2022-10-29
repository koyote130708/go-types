var isArray = require("./isArray");
var isString = require("./isString");

/**
 * Determines whether the value is iterable which can be used in a <code>for..of</code> operator.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is iterable; <code>false</code> otherwise.
 * @example <caption>Iterable values</caption>
 * // returns true
 * isIterable([1, 2, 3]);
 * isIterable("abc");
 * isIterable(new Map());
 * isIterable(new Set());
 * isIterable({[Symbol.iterator]: function() {}});
 * @example <caption>Non-iterable values</caption>
 * // returns false
 * isIterable({a: 1, b: 2});
 * isIterable(12345);
 * @see Iterable
 * @since 1.0.0
 * @memberof Object
 * @static
 */
function isIterable(value) {
    return (value != null && typeof Symbol === "function" && Symbol.iterator && typeof value[Symbol.iterator] === "function") || isArray(value) || isString(value);
}

module.exports = isIterable;