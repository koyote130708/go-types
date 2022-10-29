var isString = require("./isString");

/**
 * Determines whether the value has a specified type.
 * Based on the type of the type value, it will check the following:
 * - string - checks if the type matches (case-sensitive) using the <code>typeof</code> operator.
 * - function - checks if the value is an instance of the function/class using the <code>instanceof</code> operator; if the test returns <code>false</code>, it checks if the function returns a truthy value when invoked with the value.
 * - null/undefined - checks if the value is equal to the type using the strict equality (<code>===</code>) operator.
 * - array - checks if the value has any type defined in the array.
 * @param {*} value The value to check.
 * @param {(string|Function|null|undefined|Array)} type The expected type
 * @returns {boolean} <code>true</code> if the value is of the type; <code>false</code> otherwise.
 * @example <caption>Matching type values</caption>
 * // returns true
 * isTypeOf(1, "number");
 * isTypeOf({a: 1}, Object);
 * isTypeOf("abc", ["string", undefined]);
 * @example <caption>Non-matching type values</caption>
 * // returns false
 * isTypeOf(1, "boolean");
 * isTypeOf("", String);
 * isTypeOf(null, ["string", String]);
 * @since 1.0.0
 * @memberof Utility
 * @static
 */
function isTypeOf(value, type) {
    if (isString(type)) {
        return typeof value === type;
    } else if (typeof type === "function") {
        return value instanceof type || !!type(value);
    } else if (type instanceof Array) {
        for (var i = 0; i < type.length; i++) {
            if (isTypeOf(value, type[i])) {
                return true;
            }
        }
        return false;
    } else if (type == null) {
        return value === type;
    } else {
        throw new TypeError("The type should be either a string, function, null or undefined, but found: " + type);
    }
}

module.exports = isTypeOf;