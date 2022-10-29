var isArray = require("./isArray");

/**
 * Determines whether the value is an array with two elements.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is an array with two elements; <code>false</code> otherwise.
 * @example <caption>Pair values</caption>
 * // returns true
 * isPair([1, 2]);
 * isPair([null, {}]);
 * @example <caption>Non-pair values</caption>
 * // returns false
 * isPair([]);
 * isPair({a: 1, b: 2});
 * isPair("ab");
 * @since 1.2.0
 * @memberof Array
 * @static
 */
function isPair(value) {
    return isArray(value) && value.length === 2;
}

module.exports = isPair;