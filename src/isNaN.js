var isNumber = require("./isNumber");

/**
 * Determines whether the value is <code>NaN</code> (a primitive number or a <code>Number</code> object). 
 * NaN is the only value in javascript that is not equal to itself.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is <code>NaN</code>; <code>false</code> otherwise.
 * @example <caption>NaN values</caption>
 * // returns true
 * isNaN(NaN);
 * isNaN(new Number(NaN));
 * isNaN(0/0);
 * @example <caption>Non-NaN values</caption>
 * // returns false
 * isNaN(undefined);
 * isNaN(null);
 * isNaN("NaN");
 * isNaN(Infinity);
 * @see Number.isNaN
 * @since 1.0.0
 * @memberof Number
 * @static
 */
function isNaN(value) {
    if (isNumber(value)) {
        var val = value.valueOf();
        return val !== val;
    }
    return false;
}

module.exports = isNaN;