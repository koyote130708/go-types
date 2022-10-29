var MAX_SAFE_INTEGER = 9007199254740991;
var isInteger = require("./isInteger");

/**
 * Determines whether the value is a safe integer (a primitive number or <code>Number</code> object).
 * A safe integer is an integer that:
 * - can be exactly represented as an IEEE-754 double precision number, and
 * - whose IEEE-754 representation cannot be the result of rounding any other integer to fit the IEEE-754 representation.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a safe integer; <code>false</code> otherwise.
 * @example <caption>Safe integer values</caption>
 * // returns true
 * isSafeInteger(1);
 * isSafeInteger(Number.MAX_SAFE_INTEGER);
 * isSafeInteger(Number.MIN_SAFE_INTEGER);
 * @example <caption>Non-safe-integer values</caption>
 * // returns false
 * isSafeInteger(0.1);
 * isSafeInteger("1");
 * isSafeInteger(Number.MIN_SAFE_INTEGER - 1);
 * isSafeInteger(NaN);
 * @see Number.isSafeInteger
 * @since 1.1.0
 * @memberof Number
 * @static
 */
function isSafeInteger(value) {
    return isInteger(value) && Math.abs(value) <= MAX_SAFE_INTEGER;
}

module.exports = isSafeInteger;