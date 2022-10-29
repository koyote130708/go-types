/**
 * Determines whether the value is <code>undefined</code>.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is <code>undefined</code>; <code>false</code> otherwise.
 * @example <caption>Undefined values</caption>
 * // returns true
 * isUndefined(undefined);
 * isUndefined(void 0);
 * @example <caption>Non-undefined values</caption>
 * // returns false
 * isUndefined(null);
 * isUndefined(false);
 * isUndefined(0);
 * isUndefined("");
 * isUndefined(NaN);
 * @since 1.0.0
 * @memberof Primitive
 * @static
 */
function isUndefined(value) {
    return value === undefined;
}

module.exports = isUndefined;