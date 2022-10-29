var isEmpty = require("./isEmpty");
var isString = require("./isString");
var isArrayLike = require("./isArrayLike");
var isPlainObject = require("./isPlainObject");
var isNullish = require("./isNullish");
var isIterable = require("./isIterable");

var NON_SPACE_REGEX = new RegExp("\\S");

/**
 * Determines whether the value is a blank value which can be one of the following: 
 * - <code>null</code>
 * - <code>undefined</code>
 * - A string whose length is zero or has only space characters
 * - An array that has no elements or has only nullish values
 * - A plain object that has no enumerable keys or has only nullish values
 * - An iterable that has no iterable values or has only nullish values.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a blank value; <code>false</code> otherwise.
 * @example <caption>Blank values</caption>
 * // returns true
 * isBlank(null);
 * isBlank(undefined);
 * isBlank(" \t\n ");
 * isBlank([undefined, null]);
 * isBlank({a: null, b: undefined});
 * isBlank(new Set(null));
 * @example <caption>Non-blank values</caption>
 * // returns false
 * isBlank(0);
 * isBlank(false);
 * isBlank(" a ");
 * isBlank([""]);
 * isBlank({a: ""});
 * isBlank(NaN);
 * @since 1.0.0
 * @memberof Utility
 * @static
 */
function isBlank(value) {
    if (isEmpty(value)) {
        return true;
    } else if (isString(value)) {
        return !NON_SPACE_REGEX.test(value);
    } else if (isArrayLike(value)) {
        return Array.prototype.every.call(value, isNullish);
    } else if (isPlainObject(value)) {
        return Array.prototype.every.call(Object.values(value), isNullish);
    } else if (isIterable(value)) {
        var iter = value[Symbol.iterator]();
        var entry;

        while ((entry = iter.next()).done !== true) {
            if (entry.value != null) {
                return false;
            }
        }
        return true;
    }
    return false;
}

module.exports = isBlank;