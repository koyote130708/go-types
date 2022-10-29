var isNumber = require("./isNumber");

/**
 * Determines whether the value is a finite number (a primitive number or <code>Number</code> object).
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a finite number; <code>false</code> otherwise.
 * @example <caption>Finite values</caption>
 * // returns true
 * isFinite(0);
 * isFinite(-0.1);
 * isFinite(Number.MAX_VALUE);
 * @example <caption>Non-finite values</caption>
 * // returns false
 * isFinite(Infinity);
 * isFinite("1");
 * isFinite(NaN);
 * @see isFinite
 * @since 1.0.0
 * @memberof Number
 * @static
 */
function isFinite(value) {
    if (isNumber(value)) {
        var val = value.valueOf();
        return val !== Number.POSITIVE_INFINITY && val !== Number.NEGATIVE_INFINITY && val === val;
    }
    return false;
}

module.exports = isFinite;