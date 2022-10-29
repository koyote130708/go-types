/**
 * Determines whether the value is a <code>Map</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a <code>Map</code> object; <code>false</code> otherwise.
 * @example <caption>Map values</caption>
 * // returns true
 * isMap(new Map());
 * @example <caption>Non-Map values</caption>
 * // returns false
 * isMap(new WeakMap());
 * isMap({a: 1, b: 2});
 * @see Map
 * @since 1.0.0
 * @memberof Collection
 * @static
 */
function isMap(value) {
    return typeof Map === "function" && value instanceof Map;
}

module.exports = isMap;