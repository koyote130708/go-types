/**
 * Determines whether the value is a <code>WeakSet</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a <code>WeakSet</code> object; <code>false</code> otherwise.
 * @example <caption>WeakSet values</caption>
 * // returns true
 * isWeakSet(new WeakSet());
 * @example <caption>Non-WeakSet values</caption>
 * // returns false
 * isWeakSet(new Set());
 * isWeakSet([1, 2, 3]);
 * @see WeakSet
 * @since 1.0.0
 * @memberof Collection
 * @static
 */
function isWeakSet(value) {
    return typeof WeakSet === "function" && value instanceof WeakSet;
}

module.exports = isWeakSet;