/**
 * Determines whether the value is a <code>DocumentFragment</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a <code>DocumentFragment</code> object; <code>false</code> otherwise.
 * @example <caption>DocumentFragment objects</caption>
 * // returns true
 * isFragment(new DocumentFragment());
 * @example <caption>Non-DocumentFragment values</caption>
 * // returns false
 * isFragment(document);
 * isFragment(window);
 * isFragment(document.createElement("div"));
 * @see DocumentFragment
 * @since 1.1.0
 * @memberof Node
 * @static
 */
function isFragment(value) {
    return typeof DocumentFragment === "function" && value instanceof DocumentFragment;
}

module.exports = isFragment;