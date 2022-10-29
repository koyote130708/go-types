/**
 * Determines whether the value is a <code>WeakMap</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a <code>WeakMap</code> object; <code>false</code> otherwise.
 * @example <caption>WeakMap values</caption>
 * // returns true
 * isWeakMap(new WeakMap());
 * @example <caption>Non-WeakMap values</caption>
 * // returns false
 * isWeakMap(new Map());
 * isWeakMap({a: 1, b: 2});
 * @see WeakMap
 * @since 1.0.0
 * @memberof Collection
 * @static
 */
function isWeakMap(value) {
    return typeof WeakMap === "function" && value instanceof WeakMap;
}

module.exports = isWeakMap;