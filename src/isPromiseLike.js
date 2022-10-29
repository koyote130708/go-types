/**
 * Determines whether the value is an object that defines <code>then</code> and <code>catch</code> methods.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a Promise-like object; <code>false</code> otherwise.
 * @example <caption>Promise-like objects</caption>
 * // returns true
 * isPromiseLike(new Promise(resolve, reject));
 * isPromiseLike({then: function() {}, catch: function() {}});
 * @example <caption>Non-promise-like values</caption>
 * // returns false
 * isPromiseLike({then: function() {}});
 * isPromiseLike({then: true, catch: true});
 * @see {@link https://www.promisejs.org/api|Promise API Reference}
 * @since 1.0.0
 * @memberof Object
 * @static
 */
function isPromiseLike(value) {
    return value instanceof Object && typeof value.then === "function" && typeof value.catch === "function";
}

module.exports = isPromiseLike;