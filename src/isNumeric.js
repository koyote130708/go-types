var isFinite = require("./isFinite");
var isString = require("./isString");
var isBigInt = require("./isBigInt");

/**
 * Determines whether the value is a numeric value which can be one of the following:
 * - A primitive number or <code>Number</code> object that has a finite value
 * - A primitive string or <code>String</code> object that represents a finite number
 * - A BigInt
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a numeric value; <code>false</code> otherwise.
 * @example <caption>Numeric values</caption>
 * // returns true
 * isNumeric(1);
 * isNumeric(new Number(1));
 * isNumeric("1.0");
 * isNumeric(new String("-1.234e+8"))
 * isNumeric(BigInt(1234567890));
 * isNumeric(Infinity);
 * @example <caption>Non-numeric values</caption>
 * // returns false
 * isNumeric(NaN);
 * isNumeric(Infinity);
 * isNumeric("12000n");
 * isNumeric("1*2");
 * @since 1.0.0
 * @memberof Number
 * @static
 */
function isNumeric(value) {
    return isFinite(value) || (isString(value) && value.length > 0 && isFinite(value * 1)) || isBigInt(value);
}

module.exports = isNumeric;