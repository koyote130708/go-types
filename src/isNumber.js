/**
 * Determines whether the value is a primitive number or <code>Number</code> object 
 * which includes the "special" numbers `+Infinity`, `-Infinity` and `NaN`.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a primitive number or <code>Number</code> object; <code>false</code> otherwise.
 * @example <caption>Number values</caption>
 * // returns true
 * isNumber(1);
 * isNumber(-12.34);
 * isNumber(new Number(1));
 * isNumber(Infinity);
 * isNumber(NaN);
 * @example <caption>Non-number values</caption>
 * // returns false
 * isNumber("1");
 * isNumber(true);
 * @see Types.isPrimitive
 * @see Types.isObject
 * @see Types.isTypeOf
 * @since 1.0.0
 * @memberof Primitive
 * @static
 */
function isNumber(value) {
    return typeof value === "number" || value instanceof Number;
}

module.exports = isNumber;