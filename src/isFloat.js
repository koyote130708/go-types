var isFinite = require("./isFinite");

/**
 * Determines whether the value is a finite number with a decimal point (a primitive number or <code>Number</code> object).
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a finite number with a decimal point; <code>false</code> otherwise.
 * @example <caption>Float values</caption>
 * // returns true
 * isFloat(0.1);
 * isFloat(-1234.56789);
 * isFloat(new Number(0.1));
 * @example <caption>Non-float values</caption>
 * // returns false
 * isFloat(1);
 * isFloat(1.0);
 * isFloat("1.2");
 * @since 1.0.0
 * @memberof Number
 * @static
 */
function isFloat(value) {
    return isFinite(value) && Math.floor(value) !== value.valueOf();
}

module.exports = isFloat;