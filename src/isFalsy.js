/**
 * Determines whether the value is a falsy value which can be one of the following:
 * - <code>false</code>
 * - <code>0</code>
 * - <code>""</code>
 * - <code>undefined</code>
 * - <code>null</code>
 * - <code>NaN</code>
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a falsy value; <code>false</code> otherwise.
 * @example <caption>Falsy values</caption>
 * // returns true
 * isFalsy(false);
 * isFalsy(0);
 * isFalsy("");
 * isFalsy(undefined);
 * isFalsy(null);
 * isFalsy(NaN);
 * @example <caption>Non-falsy values</caption>
 * // returns false
 * isFalsy(true);
 * isFalsy(-1);
 * isFalsy("false");
 * isFalsy(new Boolean(false));
 * isFalsy({});
 * @since 1.0.0
 * @memberof Utility
 * @static
 */
function isFalsy(value) {
    return value ? false : true;
}

module.exports = isFalsy;