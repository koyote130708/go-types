/**
 * Determines whether the value is a <code>Set</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a <code>Set</code> object; <code>false</code> otherwise.
 * @example <caption>Set values</caption>
 * // returns true
 * isSet(new Set());
 * @example <caption>Non-Set values</caption>
 * // returns false
 * isSet(new WeakSet());
 * isSet([1, 2, 3]);
 * @see Set
 * @since 1.0.0
 * @memberof Collection
 * @static
 */
function isSet(value) {
    return typeof Set === "function" && value instanceof Set;
}

module.exports = isSet;

