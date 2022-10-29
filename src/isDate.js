/**
 * Determines whether the value is a <code>Date</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a <code>Date</code> object; <code>false</code> otherwise.
 * @example <caption>Date values</caption>
 * // returns true
 * isDate(new Date());
 * isDate(new Date(""));
 * @example <caption>Non-date values</caption>
 * // returns false
 * isDate("2001-01-01T00:00:00.000Z");
 * isDate(978307200000);
 * @see Date
 * @since 1.0.0
 * @memberof Object
 * @static
 */
function isDate(value) {
    return value instanceof Date;
}


module.exports = isDate;