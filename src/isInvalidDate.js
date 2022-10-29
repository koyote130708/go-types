var isNaN = require("./isNaN");

/**
 * Determines whether the value is an invalid <code>Date</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is an invalid <code>Date</code> object; <code>false</code> otherwise.
 * @example <caption>Invalid Date objects</caption>
 * // returns true
 * isInvalidDate(new Date(""));
 * isInvalidDate(new Date(NaN));
 * @example <caption>Valid Date & non-date values</caption>
 * // returns false
 * isInvalidDate(new Date());
 * isInvalidDate("2001-01-01T00:00:00.000Z");
 * isInvalidDate(978307200000);
 * @see Date
 * @since 1.3.0
 * @memberof Object
 * @static
 */
function isInvalidDate(value) {
    return value instanceof Date && isNaN(value.getTime());
}

module.exports = isInvalidDate;