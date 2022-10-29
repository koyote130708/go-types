var isNumber = require("./isNumber");

/**
 * Determines whether the value is a primitive number or <code>Number</code> object that represents positive or negative infinity.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a number that represents positive or negative infinity; <code>false</code> otherwise.
 * @example <caption>Infinite values</caption>
 * // returns true
 * isInfinite(Infinity);
 * isInfinite(Number.NEGATIVE_INFINITY);
 * @example <caption>Non-infinite values</caption>
 * // returns false
 * isInfinite(Number.MAX_VALUE);
 * isInfinite(NaN);
 * @see isFinite
 * @since 1.0.0
 * @memberof Number
 * @static
 */
function isInfinite(value) {
    if (isNumber(value)) {
        var val = value.valueOf();
        return  val === Number.POSITIVE_INFINITY || val === Number.NEGATIVE_INFINITY;
    }
    return false;
}

module.exports = isInfinite;