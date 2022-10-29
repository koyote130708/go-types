/**
 * Determines whether the value is a primitive value.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a primitive value; <code>false</code> otherwise.
 * @example <caption>Primitive values</caption>
 * // returns true
 * isPrimitive(undefined);
 * isPrimitive(null);
 * isPrimitive(false);
 * isPrimitive(0);
 * isPrimitive("abc");
 * isPrimitive(Symbol("abc"));
 * isPrimitive(BigInt(1234567890));
 * @example <caption>Non-primitive values</caption>
 * // returns false
 * isPrimitive(new Number(1));
 * isPrimitive([1, 2, 3]);
 * isPrimitive(function () {});
 * @since 1.0.0
 * @memberof Primitive
 * @static
 */
function isPrimitive(value) {
    return !(value instanceof Object);
}

module.exports = isPrimitive;