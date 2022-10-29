/**
 * Determines whether the value is an object that defines a <code>then</code> method.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a thenable object; <code>false</code> otherwise.
 * @example <caption>Thenable objects</caption>
 * // returns true
 * isThenable(new Promise(resolve, reject));
 * isThenable({then: function() {}});
 * @example <caption>Non-thenable values</caption>
 * // returns false
 * isThenable(null);
 * isThenable({then: true});
 * @since 1.1.0
 * @memberof Object
 * @static
 */
function isThenable(value) {
    return value instanceof Object && typeof value.then === "function";
}

module.exports = isThenable;