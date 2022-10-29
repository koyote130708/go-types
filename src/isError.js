/**
 * Determines whether the value is an <code>Error</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is an <code>Error</code> object; <code>false</code> otherwise.
 * @example <caption>Error objects</caption>
 * // returns true
 * isError(new Error("Validation error"));
 * isError(new TypeError("Expected a number, but found: " + value));
 * @example <caption>Non-Error values</caption>
 * // returns false
 * isError(null);
 * isError(NaN);
 * isError(Promise.reject());
 * isError({name: "TypeError", message: "Expected a number"});
 * @see Error
 * @since 1.0.0
 * @memberof Object
 * @static
 */
function isError(value) {
    return value instanceof Error;
}

module.exports = isError;