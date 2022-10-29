var isTypeOf = require("./isTypeOf");

/**
 * Determines whether the value is a non-empty array and all elements in the array have the specified type. 
 * @param {*} value The value to check.
 * @param {(string|Function|null|undefined|Array)} type The type of elements
 * @returns {boolean} <code>true</code> if the value is a non-empty array and and all elements in the array have the specified type; <code>false</code> otherwise.
 * @example <caption>Matching values</caption>
 * // returns true
 * isArrayOf([1, 2, 3], "number");
 * isArrayOf(["a", "b", null], ["string", null]);
 * isArrayOf([{a: 1}, {b: 2}], Object);
 * @example <caption>Non-matching values</caption>
 * // returns false
 * isArrayOf([1, 2, "c"], "number");
 * isArrayOf([], undefined);
 * @since 1.1.0
 * @memberof Array
 * @static
 */
function isArrayOf(value, type) {
    if (value instanceof Array && value.length > 0) {
        for (var i = 0; i < value.length; i++) {
            if (!isTypeOf(value[i], type)) {
                return false;
            }
        }
        return true;
    }
    return false;
}

module.exports = isArrayOf;