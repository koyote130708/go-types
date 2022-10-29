/**
 * Determines whether the value is a DOM <code>Element</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a DOM <code>Element</code> object; <code>false</code> otherwise.
 * @example <caption>Element objects</caption>
 * // returns true
 * isElement(document.createElement("div"));
 * @example <caption>Non-Element values</caption>
 * // returns false
 * isElement(document);
 * isElement(window);
 * isElement(new DocumentFragment());
 * @see Element
 * @since 1.1.0
 * @memberof Node
 * @static
 */
function isElement(value) {
    return typeof Element === "function" && value instanceof Element;
}

module.exports = isElement;