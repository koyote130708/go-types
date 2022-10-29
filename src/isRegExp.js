/**
 * Determines whether the value is a <code>RegExp</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a <code>RegExp</code> object; <code>false</code> otherwise.
 * @example <caption>RegExp values</caption>
 * // returns true
 * isRegExp(/[a-z]/);
 * isRegExp(new RegExp("[a-z]"));
 * @example <caption>Non-RegExp values</caption>
 * // returns false
 * isRegExp("[a-z]");
 * isRegExp("/[a-z]/");
 * @see RegExp
 * @since 1.0.0
 * @memberof Object
 * @static
 */
function isRegExp(value) {
    return value instanceof RegExp;
}

module.exports = isRegExp;