var isInteger = require("./isInteger");

/**
 * Determines whether the value is a valid <code>Date</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a valid <code>Date</code> object; <code>false</code> otherwise.
 * @example <caption>Valid Date objects</caption>
 * // returns true
 * isValidDate(new Date());
 * isValidDate(new Date("2001-01-01T00:00:00.000Z"));
 * isValidDate(new Date(-1));
 * @example <caption>Invalid Date & non-date values</caption>
 * // returns false
 * isValidDate(new Date(""));
 * isValidDate("2001-01-01T00:00:00.000Z");
 * isValidDate(978307200000);
 * @see Date
 * @since 1.3.0
 * @memberof Object
 * @static
 */
function isValidDate(value) {
    return value instanceof Date && isInteger(value.getTime());
}

module.exports = isValidDate;