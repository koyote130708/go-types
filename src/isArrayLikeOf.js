var isArrayLike = require("./isArrayLike");
var isTypeOf = require("./isTypeOf");

/**
 * Determines whether the value is a non-empty array-like object and all elements in the object have the specified type.
 * @param {*} value The value to check.
 * @param {(string|Function|null|undefined|Array)} type The type of elements
 * @returns {boolean} <code>true</code> if the value is a non-empty array-like object and all elements in the object have the specified type; <code>false</code> otherwise.
 * @example <caption>Matching values</caption>
 * // returns true
 * isArrayLikeOf([1, 2, 3], "number");
 * isArrayLikeOf({0: "a", 1: "b", length: 2}, "string");
 * @example <caption>Non-matching values</caption>
 * // returns false
 * isArrayLikeOf([1, 2, "c"], "number");
 * isArrayLikeOf({a: 1, b: 2, length: 2}, "number");
 * @since 1.1.0
 * @memberof Array
 * @static
 */
function isArrayLikeOf(value, type) {
    if (isArrayLike(value) && value.length > 0) {
        for (var i = 0; i < value.length; i++) {
            if (!isTypeOf(value[i], type)) {
                return false;
            }
        }
        return true;
    }
    return false;
}

module.exports = isArrayLikeOf;