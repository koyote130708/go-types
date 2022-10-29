var hasCircularReference = require("./hasCircularReference");

/**
 * Determines whether the value is an cyclic object with a circular reference.
 * A cycle object has an enumerable property (or a sub-property) whose value points 
 * to the object itself or a property of the object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a cyclic object with a circular reference; <code>false</code> otherwise.
 * @example <caption>Cyclic object</caption>
 * // returns true
 * var obj = {};
 * obj.ref = obj;
 * 
 * isCyclic(obj);
 * @example <caption>Non-cyclic values</caption>
 * // returns false
 * isCyclic({a: 1, b: 2});
 * isCyclic([1, 2, 3]);
 * isCyclic("abc");
 * isCyclic(function() {});
 * @since 1.2.0
 * @memberof Object
 * @static
 */
function isCyclic(value) {
    return value instanceof Object && hasCircularReference(value, [], [value]);
}

module.exports = isCyclic;

