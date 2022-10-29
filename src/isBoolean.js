/**
 * Determines whether the value is a primitive boolean or <code>Boolean</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a primitive boolean or <code>Boolean</code> object; <code>false</code> otherwise.
 * @example <caption>Boolean values</caption>
 * // returns true
 * isBoolean(true);
 * isBoolean(new Boolean(true));
 * @example <caption>Non-boolean values</caption>
 * // returns false
 * isBoolean(1);
 * isBoolean("true");
 * @see Types.isPrimitive
 * @see Types.isObject
 * @see Types.isTypeOf
 * @since 1.0.0
 * @memberof Primitive
 * @static
 */
function isBoolean(value) {
    return typeof value === "boolean" || value instanceof Boolean;
}

module.exports = isBoolean;