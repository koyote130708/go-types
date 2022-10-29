/**
 * Determines whether the value is a truthy value. 
 * A truthy value is a value that is considered true when encountered in a Boolean context.
 * All values are truthy except <code>false</code>, <code>0</code>, <code>""</code>, <code>undefined</code>, <code>null</code> and <code>NaN</code>.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a truthy value; <code>false</code> otherwise.
 * @example <caption>Truthy values</caption>
 * // returns true
 * isTruthy(true);
 * isTruthy(1);
 * isTruthy("false");
 * isTruthy(new Boolean(false));
 * isTruthy({});
 * @example <caption>Non-truthy values</caption>
 * // returns false
 * isTruthy(false);
 * isTruthy(0);
 * isTruthy("");
 * isTruthy(undefined);
 * isTruthy(null);
 * isTruthy(NaN);
 * @since 1.0.0
 * @memberof Utility
 * @static
 */
function isTruthy(value) {
    return value ? true : false;
}

module.exports = isTruthy;