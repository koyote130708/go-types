var isFinite = require("./isFinite");

/**
 * Determines whether the value is an integer (a primitive number or <code>Number</code> object).
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is an integer; <code>false</code> otherwise.
 * @example <caption>Integer values</caption>
 * // returns true
 * isInteger(1);
 * isInteger(new Number(1));
 * @example <caption>Non-integer values</caption>
 * // returns false
 * isInteger(isInteger(0.1));
 * isInteger("1");
 * isInteger(Infinity);
 * isInteger(NaN);
 * @since 1.0.0
 * @memberof Number
 * @static
 */
function isInteger(value) {
    return isFinite(value) && Math.floor(value) === value.valueOf();
}

module.exports = isInteger;