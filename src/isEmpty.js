var isString = require("./isString");
var isArrayLike = require("./isArrayLike");
var isPlainObject = require("./isPlainObject");
var isIterable = require("./isIterable");

/**
 * Determines whether the value is an empty value which can be one of the following: 
 * - <code>null</code>
 * - <code>undefined</code>
 * - A string whose length is zero
 * - An array with no elements
 * - A plain object with no enumerable keys
 * - An iterable with no iterable values
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is an empty value; <code>false</code> otherwise.
 * @example <caption>Empty values</caption>
 * // returns true
 * isEmpty(null);
 * isEmpty(undefined);
 * isEmpty("");
 * isEmpty([]);
 * isEmpty({});
 * isEmpty(new Set());
 * @example <caption>Non-empty values</caption>
 * // returns false
 * isEmpty(" ");
 * isEmpty(0);
 * isEmpty(false);
 * isEmpty([null]);
 * isEmpty({a: ""});
 * isEmpty(NaN);
 * @since 1.0.0
 * @memberof Utility
 * @static
 */
function isEmpty(value) {
    if (value == null) {
        return true;
    } else if (isString(value)) {
        return value.length === 0;
    } else if (isArrayLike(value)) {
        return value.length === 0;
    } else if (isPlainObject(value)) {
        return Object.keys(value).length === 0;
    } else if (isIterable(value)) {
        return value[Symbol.iterator]().next().done === true;
    }
    return false;
}

module.exports = isEmpty;