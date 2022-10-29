/**
 * Determines whether the value is a primitive string or <code>String</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a primitive string or <code>String</code> object; <code>false</code> otherwise.
 * @example <caption>String values</caption>
 * // returns true
 * isString("1");
 * isString(new String("abc"));
 * @example <caption>Non-string values</caption>
 * // returns false
 * isString(1);
 * isString(["a", "b"]);
 * @see Types.isPrimitive
 * @see Types.isObject
 * @see Types.isTypeOf
 * @since 1.0.0
 * @memberof Primitive
 * @static
 */
function isString(value) {
    return typeof value === "string" || value instanceof String;
}

module.exports = isString;