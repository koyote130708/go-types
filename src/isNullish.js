/**
 * Determines whether the value is <code>null</code> or <code>undefined</code>.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is <code>null</code> or <code>undefined</code>; <code>false</code> otherwise.
 * @example <caption>Nullish values</caption>
 * // returns true
 * isNullish();
 * isNullish(undefined);
 * isNullish(void 0);
 * @example <caption>Non-nullish values</caption>
 * // returns false
 * isNullish(null);
 * isNullish(false);
 * isNullish(0);
 * isNullish("");
 * isNullish([]);
 * isNullish(NaN);
 * @see undefined
 * @see null
 * @since 1.0.0
 * @memberof Utility
 * @static
 */
function isNullish(value) {
    return value == null;
}

module.exports = isNullish;