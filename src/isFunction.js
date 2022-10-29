/**
 * Determines whether the value is a <code>Function</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a <code>Function</code> object; <code>false</code> otherwise.
 * @example <caption>Function values</caption>
 * // returns true
 * isFunction(function() {});
 * isFunction(Object);
 * @example <caption>Non-function values</caption>
 * // returns false
 * isFunction(null);
 * isFunction(new Object());
 * isFunction("function() {}");
 * @since 1.0.0
 * @memberof Object
 * @static
 */function isFunction(value) {
    return typeof value === "function";
}

module.exports = isFunction;