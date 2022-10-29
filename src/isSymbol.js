/**
 * Determines whether the value is a primitive <code>Symbol</code>.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a primitive <code>Symbol</code>; <code>false</code> otherwise.
 * @example <caption>Symbol values</caption>
 * // returns true
 * isSymbol(Symbol("abc"));
 * @example <caption>Non-Symbol values</caption>
 * // returns false
 * isSymbol("abc");
 * isSymbol(/[a-z]/);
 * @see Symbol
 * @since 1.0.0
 * @memberof Primitive
 * @static
 */
function isSymbol(value) {
    return typeof value === "symbol";
}

module.exports = isSymbol;