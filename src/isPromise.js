/**
 * Determines whether the value is a <code>Promise</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a <code>Promise</code> object; <code>false</code> otherwise.
 * @example <caption>Promise values</caption>
 * // returns true
 * isPromise(new Promise(resolve, reject));
 * isPromise(Promise.resolve());
 * isPromise(Promise.reject());
 * @example <caption>Non-promise values</caption>
 * // returns false
 * isPromise({then: function() {}, catch: function() {}});
 * @see Promise
 * @since 1.0.0
 * @memberof Object
 * @static
 */
function isPromise(value) {
    return typeof Promise === "function" && value instanceof Promise;
}

module.exports = isPromise;

