/**
 * Determines whether the value is a DOM <code>Node</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a DOM <code>Node</code> object; <code>false</code> otherwise.
 * @example <caption>Node objects</caption>
 * // returns true
 * isNode(document);
 * isNode(document.createElement("div"));
 * isNode(new DocumentFragment());
 * @example <caption>Non-Node values</caption>
 * // returns false
 * isNode(Node);
 * isNode(window);
 * @see Node
 * @since 1.1.0
 * @memberof Node
 * @static
 */
function isNode(value) {
    return typeof Node === "function" && value instanceof Node;
}

module.exports = isNode;