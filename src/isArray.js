/**
 * Determines whether the value is an <code>Array</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is an <code>Array</code> object; <code>false</code> otherwise.
 * @example <caption>Array values</caption>
 * // returns true
 * isArray(["a", "b"]);
 * isArray(new Array());
 * @example <caption>Non-array values</caption>
 * // returns false
 * isArray("abc");
 * isArray({length: 0});
 * isArray(new Int8Array());
 * @since 1.0.0
 * @memberof Array
 * @static
 */
function isArray(value) {
    return value instanceof Array;
}

module.exports = isArray;