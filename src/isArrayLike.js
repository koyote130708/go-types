var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Determines whether the value is an array-like object with a "length" property 
 * whose value is an integer and is within 0 ~ Number.MAX_SAFE_INTEGER (both inclusive).
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is an array-like object; <code>false</code> otherwise.
 * @example <caption>Array-like objects</caption>
 * // returns true
 * isArrayLike([]);
 * isArrayLike("abc");
 * isArrayLike({length: 0});
 * isArrayLike(new Int8Array());
 * @example <caption>Non-array-like values</caption>
 * // returns false
 * isArrayLike({});
 * isArrayLike({length: -1})
 * isArrayLike(new Set());
 * isArrayLike(Array);
 * @since 1.0.0
 * @memberof Array
 * @static
 */
function isArrayLike(value) {
    return value != null && typeof value.length === "number" && value.length >= 0 && value.length <= MAX_SAFE_INTEGER && typeof value !== "function";
}

module.exports = isArrayLike;