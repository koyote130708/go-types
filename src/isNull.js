/**
 * Determines whether the value is <code>null</code>.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is <code>null</code>; <code>false</code> otherwise.
 * @example <caption>Null values</caption>
 * // returns true
 * isNull(null);
 * @example <caption>Non-null values</caption>
 * // returns false
 * isNull(undefined);
 * isNull(false);
 * isNull(0);
 * isNull("");
 * isNull(NaN);
 * @since 1.0.0
 * @memberof Primitive
 * @static
 */
function isNull(value) {
    return value === null;
}

module.exports = isNull;
