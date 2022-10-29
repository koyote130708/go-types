/**
 * Determines whether the value is an <code>Object</code>.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is an <code>Object</code>; <code>false</code> otherwise.
 * @example <caption>Object values</caption>
 * // returns true
 * isObject({a: 1, b: 2});
 * isObject(["a", "b"]);
 * isObject(new Object());
 * isObject(new Number(1));
 * isObject(function() {});
 * @example <caption>Non-object values</caption>
 * // returns false
 * isObject(null);
 * isObject("abc");
 * isObject(Symbol("abc"));
 * isObject(1);
 * isObject(BigInt(1));
 * @since 1.0.0
 * @memberof Object
 * @static
 */
function isObject(value) {
    return value instanceof Object;
}

module.exports = isObject;