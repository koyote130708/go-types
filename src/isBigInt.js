/**
 * Determines whether the value is a primitive <code>BigInt</code>.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a primitive <code>BigInt</code>; <code>false</code> otherwise.
 * @example <caption>BigInt values</caption>
 * // returns true
 * isBigInt(BigInt(1));
 * isBigInt(BigInt(-1234567890));
 * @example <caption>Non-BigInt values</caption>
 * // returns false
 * isBigInt(Number.MAX_VALUE);
 * isBigInt(Infinity);
 * isBigInt(NaN);
 * isBigInt("1n");
 * @see BigInt
 * @since 1.0.0
 * @memberof Primitive
 * @static
 */
function isBigInt(value) {
    return typeof value === "bigint";
}

module.exports = isBigInt;