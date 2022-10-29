/**
 * Determines whether the value is a plain object created using object literal or by the <code>Object</code> constructor.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a plain object; <code>false</code> otherwise.
 * @example <caption>Plain object values</caption>
 * // returns true
 * isPlainObject({a: 1, b: 2});
 * isPlainObject(new Object());
 * @example <caption>Non-plain-object values</caption>
 * // returns false
 * isPlainObject(null);
 * isPlainObject("abc");
 * isPlainObject([1, 2]);
 * isPlainObject(new Number(1));
 * @since 1.0.0
 * @memberof Object
 * @static
 */
function isPlainObject(value) {
    return value instanceof Object && value.constructor === Object;
}

module.exports = isPlainObject;