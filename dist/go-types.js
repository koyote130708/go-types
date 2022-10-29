(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Types"] = factory();
	else
		root["Types"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
* @namespace  Primitive 
*/

/** 
* @namespace Utility 
*/

/**
* @namespace Number 
*/

/**
* @namespace Object 
*/

/**
* @namespace Array 
*/

/**
* @namespace Collection 
*/

/**
* @namespace Node 
*/

module.exports.isUndefined = __webpack_require__(1);
module.exports.isNull = __webpack_require__(2);
module.exports.isBoolean = __webpack_require__(3);
module.exports.isNumber = __webpack_require__(4);
module.exports.isString = __webpack_require__(5);
module.exports.isSymbol = __webpack_require__(6);
module.exports.isBigInt = __webpack_require__(7);
module.exports.isPrimitive = __webpack_require__(8);

module.exports.isNullish = __webpack_require__(9);
module.exports.isEmpty = __webpack_require__(10);
module.exports.isBlank = __webpack_require__(15);
module.exports.isTruthy = __webpack_require__(16);
module.exports.isFalsy = __webpack_require__(17);

module.exports.isInteger = __webpack_require__(18);
module.exports.isFloat = __webpack_require__(20);
module.exports.isFinite = __webpack_require__(19);
module.exports.isInfinite = __webpack_require__(21);
module.exports.isNaN = __webpack_require__(22);
module.exports.isNumeric = __webpack_require__(23);
module.exports.isTypeOf = __webpack_require__(24);

module.exports.isObject = __webpack_require__(25);
module.exports.isPlainObject = __webpack_require__(12);
module.exports.isCyclic = __webpack_require__(26);
module.exports.isIterable = __webpack_require__(13);
module.exports.isArray = __webpack_require__(14);
module.exports.isArrayOf = __webpack_require__(28);
module.exports.isArrayLike = __webpack_require__(11);
module.exports.isArrayLikeOf = __webpack_require__(29);
module.exports.isPair = __webpack_require__(30);
module.exports.isMap = __webpack_require__(31);
module.exports.isSet = __webpack_require__(32);
module.exports.isWeakMap = __webpack_require__(33);
module.exports.isWeakSet = __webpack_require__(34);
module.exports.isFunction = __webpack_require__(35);

module.exports.isDate = __webpack_require__(36);
module.exports.isValidDate = __webpack_require__(37);
module.exports.isInvalidDate = __webpack_require__(38);
module.exports.isRegExp = __webpack_require__(39);
module.exports.isPromise = __webpack_require__(40);
module.exports.isPromiseLike = __webpack_require__(41);
module.exports.isThenable = __webpack_require__(42);
module.exports.isError = __webpack_require__(43);
module.exports.isNode = __webpack_require__(44);
module.exports.isElement = __webpack_require__(45);
module.exports.isFragment = __webpack_require__(46);






/***/ }),
/* 1 */
/***/ ((module) => {

/**
 * Determines whether the value is <code>undefined</code>.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is <code>undefined</code>; <code>false</code> otherwise.
 * @example <caption>Undefined values</caption>
 * // returns true
 * isUndefined(undefined);
 * isUndefined(void 0);
 * @example <caption>Non-undefined values</caption>
 * // returns false
 * isUndefined(null);
 * isUndefined(false);
 * isUndefined(0);
 * isUndefined("");
 * isUndefined(NaN);
 * @since 1.0.0
 * @memberof Primitive
 * @static
 */
function isUndefined(value) {
    return value === undefined;
}

module.exports = isUndefined;

/***/ }),
/* 2 */
/***/ ((module) => {

/**
 * Determines whether the value is <code>null</code>.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is <code>null</code>; <code>false</code> otherwise.
 * @example <caption>Null values</caption>
 * // returns true
 * isNull(null);
 * @example <caption>Non-null values</caption>
 * // returns false
 * isNull(undefined);
 * isNull(false);
 * isNull(0);
 * isNull("");
 * isNull(NaN);
 * @since 1.0.0
 * @memberof Primitive
 * @static
 */
function isNull(value) {
    return value === null;
}

module.exports = isNull;


/***/ }),
/* 3 */
/***/ ((module) => {

/**
 * Determines whether the value is a primitive boolean or <code>Boolean</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a primitive boolean or <code>Boolean</code> object; <code>false</code> otherwise.
 * @example <caption>Boolean values</caption>
 * // returns true
 * isBoolean(true);
 * isBoolean(new Boolean(true));
 * @example <caption>Non-boolean values</caption>
 * // returns false
 * isBoolean(1);
 * isBoolean("true");
 * @see Types.isPrimitive
 * @see Types.isObject
 * @see Types.isTypeOf
 * @since 1.0.0
 * @memberof Primitive
 * @static
 */
function isBoolean(value) {
    return typeof value === "boolean" || value instanceof Boolean;
}

module.exports = isBoolean;

/***/ }),
/* 4 */
/***/ ((module) => {

/**
 * Determines whether the value is a primitive number or <code>Number</code> object 
 * which includes the "special" numbers `+Infinity`, `-Infinity` and `NaN`.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a primitive number or <code>Number</code> object; <code>false</code> otherwise.
 * @example <caption>Number values</caption>
 * // returns true
 * isNumber(1);
 * isNumber(-12.34);
 * isNumber(new Number(1));
 * isNumber(Infinity);
 * isNumber(NaN);
 * @example <caption>Non-number values</caption>
 * // returns false
 * isNumber("1");
 * isNumber(true);
 * @see Types.isPrimitive
 * @see Types.isObject
 * @see Types.isTypeOf
 * @since 1.0.0
 * @memberof Primitive
 * @static
 */
function isNumber(value) {
    return typeof value === "number" || value instanceof Number;
}

module.exports = isNumber;

/***/ }),
/* 5 */
/***/ ((module) => {

/**
 * Determines whether the value is a primitive string or <code>String</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a primitive string or <code>String</code> object; <code>false</code> otherwise.
 * @example <caption>String values</caption>
 * // returns true
 * isString("1");
 * isString(new String("abc"));
 * @example <caption>Non-string values</caption>
 * // returns false
 * isString(1);
 * isString(["a", "b"]);
 * @see Types.isPrimitive
 * @see Types.isObject
 * @see Types.isTypeOf
 * @since 1.0.0
 * @memberof Primitive
 * @static
 */
function isString(value) {
    return typeof value === "string" || value instanceof String;
}

module.exports = isString;

/***/ }),
/* 6 */
/***/ ((module) => {

/**
 * Determines whether the value is a primitive <code>Symbol</code>.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a primitive <code>Symbol</code>; <code>false</code> otherwise.
 * @example <caption>Symbol values</caption>
 * // returns true
 * isSymbol(Symbol("abc"));
 * @example <caption>Non-Symbol values</caption>
 * // returns false
 * isSymbol("abc");
 * isSymbol(/[a-z]/);
 * @see Symbol
 * @since 1.0.0
 * @memberof Primitive
 * @static
 */
function isSymbol(value) {
    return typeof value === "symbol";
}

module.exports = isSymbol;

/***/ }),
/* 7 */
/***/ ((module) => {

/**
 * Determines whether the value is a primitive <code>BigInt</code>.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a primitive <code>BigInt</code>; <code>false</code> otherwise.
 * @example <caption>BigInt values</caption>
 * // returns true
 * isBigInt(BigInt(1));
 * isBigInt(BigInt(-1234567890));
 * @example <caption>Non-BigInt values</caption>
 * // returns false
 * isBigInt(Number.MAX_VALUE);
 * isBigInt(Infinity);
 * isBigInt(NaN);
 * isBigInt("1n");
 * @see BigInt
 * @since 1.0.0
 * @memberof Primitive
 * @static
 */
function isBigInt(value) {
    return typeof value === "bigint";
}

module.exports = isBigInt;

/***/ }),
/* 8 */
/***/ ((module) => {

/**
 * Determines whether the value is a primitive value.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a primitive value; <code>false</code> otherwise.
 * @example <caption>Primitive values</caption>
 * // returns true
 * isPrimitive(undefined);
 * isPrimitive(null);
 * isPrimitive(false);
 * isPrimitive(0);
 * isPrimitive("abc");
 * isPrimitive(Symbol("abc"));
 * isPrimitive(BigInt(1234567890));
 * @example <caption>Non-primitive values</caption>
 * // returns false
 * isPrimitive(new Number(1));
 * isPrimitive([1, 2, 3]);
 * isPrimitive(function () {});
 * @since 1.0.0
 * @memberof Primitive
 * @static
 */
function isPrimitive(value) {
    return !(value instanceof Object);
}

module.exports = isPrimitive;

/***/ }),
/* 9 */
/***/ ((module) => {

/**
 * Determines whether the value is <code>null</code> or <code>undefined</code>.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is <code>null</code> or <code>undefined</code>; <code>false</code> otherwise.
 * @example <caption>Nullish values</caption>
 * // returns true
 * isNullish();
 * isNullish(undefined);
 * isNullish(void 0);
 * @example <caption>Non-nullish values</caption>
 * // returns false
 * isNullish(null);
 * isNullish(false);
 * isNullish(0);
 * isNullish("");
 * isNullish([]);
 * isNullish(NaN);
 * @see undefined
 * @see null
 * @since 1.0.0
 * @memberof Utility
 * @static
 */
function isNullish(value) {
    return value == null;
}

module.exports = isNullish;

/***/ }),
/* 10 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isString = __webpack_require__(5);
var isArrayLike = __webpack_require__(11);
var isPlainObject = __webpack_require__(12);
var isIterable = __webpack_require__(13);

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

/***/ }),
/* 11 */
/***/ ((module) => {

var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Determines whether the value is an array-like object with a "length" property 
 * whose value is an integer and is within 0 ~ Number.MAX_SAFE_INTEGER (both inclusive).
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is an array-like object; <code>false</code> otherwise.
 * @example <caption>Array-like objects</caption>
 * // returns true
 * isArrayLike([]);
 * isArrayLike("abc");
 * isArrayLike({length: 0});
 * isArrayLike(new Int8Array());
 * @example <caption>Non-array-like values</caption>
 * // returns false
 * isArrayLike({});
 * isArrayLike({length: -1})
 * isArrayLike(new Set());
 * isArrayLike(Array);
 * @since 1.0.0
 * @memberof Array
 * @static
 */
function isArrayLike(value) {
    return value != null && typeof value.length === "number" && value.length >= 0 && value.length <= MAX_SAFE_INTEGER && typeof value !== "function";
}

module.exports = isArrayLike;

/***/ }),
/* 12 */
/***/ ((module) => {

/**
 * Determines whether the value is a plain object created using object literal or by the <code>Object</code> constructor.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a plain object; <code>false</code> otherwise.
 * @example <caption>Plain object values</caption>
 * // returns true
 * isPlainObject({a: 1, b: 2});
 * isPlainObject(new Object());
 * @example <caption>Non-plain-object values</caption>
 * // returns false
 * isPlainObject(null);
 * isPlainObject("abc");
 * isPlainObject([1, 2]);
 * isPlainObject(new Number(1));
 * @since 1.0.0
 * @memberof Object
 * @static
 */
function isPlainObject(value) {
    return value instanceof Object && value.constructor === Object;
}

module.exports = isPlainObject;

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(14);
var isString = __webpack_require__(5);

/**
 * Determines whether the value is iterable which can be used in a <code>for..of</code> operator.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is iterable; <code>false</code> otherwise.
 * @example <caption>Iterable values</caption>
 * // returns true
 * isIterable([1, 2, 3]);
 * isIterable("abc");
 * isIterable(new Map());
 * isIterable(new Set());
 * isIterable({[Symbol.iterator]: function() {}});
 * @example <caption>Non-iterable values</caption>
 * // returns false
 * isIterable({a: 1, b: 2});
 * isIterable(12345);
 * @see Iterable
 * @since 1.0.0
 * @memberof Object
 * @static
 */
function isIterable(value) {
    return (value != null && typeof Symbol === "function" && Symbol.iterator && typeof value[Symbol.iterator] === "function") || isArray(value) || isString(value);
}

module.exports = isIterable;

/***/ }),
/* 14 */
/***/ ((module) => {

/**
 * Determines whether the value is an <code>Array</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is an <code>Array</code> object; <code>false</code> otherwise.
 * @example <caption>Array values</caption>
 * // returns true
 * isArray(["a", "b"]);
 * isArray(new Array());
 * @example <caption>Non-array values</caption>
 * // returns false
 * isArray("abc");
 * isArray({length: 0});
 * isArray(new Int8Array());
 * @since 1.0.0
 * @memberof Array
 * @static
 */
function isArray(value) {
    return value instanceof Array;
}

module.exports = isArray;

/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isEmpty = __webpack_require__(10);
var isString = __webpack_require__(5);
var isArrayLike = __webpack_require__(11);
var isPlainObject = __webpack_require__(12);
var isNullish = __webpack_require__(9);
var isIterable = __webpack_require__(13);

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

/***/ }),
/* 16 */
/***/ ((module) => {

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

/***/ }),
/* 17 */
/***/ ((module) => {

/**
 * Determines whether the value is a falsy value which can be one of the following:
 * - <code>false</code>
 * - <code>0</code>
 * - <code>""</code>
 * - <code>undefined</code>
 * - <code>null</code>
 * - <code>NaN</code>
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a falsy value; <code>false</code> otherwise.
 * @example <caption>Falsy values</caption>
 * // returns true
 * isFalsy(false);
 * isFalsy(0);
 * isFalsy("");
 * isFalsy(undefined);
 * isFalsy(null);
 * isFalsy(NaN);
 * @example <caption>Non-falsy values</caption>
 * // returns false
 * isFalsy(true);
 * isFalsy(-1);
 * isFalsy("false");
 * isFalsy(new Boolean(false));
 * isFalsy({});
 * @since 1.0.0
 * @memberof Utility
 * @static
 */
function isFalsy(value) {
    return value ? false : true;
}

module.exports = isFalsy;

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFinite = __webpack_require__(19);

/**
 * Determines whether the value is an integer (a primitive number or <code>Number</code> object).
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is an integer; <code>false</code> otherwise.
 * @example <caption>Integer values</caption>
 * // returns true
 * isInteger(1);
 * isInteger(new Number(1));
 * @example <caption>Non-integer values</caption>
 * // returns false
 * isInteger(isInteger(0.1));
 * isInteger("1");
 * isInteger(Infinity);
 * isInteger(NaN);
 * @since 1.0.0
 * @memberof Number
 * @static
 */
function isInteger(value) {
    return isFinite(value) && Math.floor(value) === value.valueOf();
}

module.exports = isInteger;

/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isNumber = __webpack_require__(4);

/**
 * Determines whether the value is a finite number (a primitive number or <code>Number</code> object).
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a finite number; <code>false</code> otherwise.
 * @example <caption>Finite values</caption>
 * // returns true
 * isFinite(0);
 * isFinite(-0.1);
 * isFinite(Number.MAX_VALUE);
 * @example <caption>Non-finite values</caption>
 * // returns false
 * isFinite(Infinity);
 * isFinite("1");
 * isFinite(NaN);
 * @see isFinite
 * @since 1.0.0
 * @memberof Number
 * @static
 */
function isFinite(value) {
    if (isNumber(value)) {
        var val = value.valueOf();
        return val !== Number.POSITIVE_INFINITY && val !== Number.NEGATIVE_INFINITY && val === val;
    }
    return false;
}

module.exports = isFinite;

/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFinite = __webpack_require__(19);

/**
 * Determines whether the value is a finite number with a decimal point (a primitive number or <code>Number</code> object).
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a finite number with a decimal point; <code>false</code> otherwise.
 * @example <caption>Float values</caption>
 * // returns true
 * isFloat(0.1);
 * isFloat(-1234.56789);
 * isFloat(new Number(0.1));
 * @example <caption>Non-float values</caption>
 * // returns false
 * isFloat(1);
 * isFloat(1.0);
 * isFloat("1.2");
 * @since 1.0.0
 * @memberof Number
 * @static
 */
function isFloat(value) {
    return isFinite(value) && Math.floor(value) !== value.valueOf();
}

module.exports = isFloat;

/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isNumber = __webpack_require__(4);

/**
 * Determines whether the value is a primitive number or <code>Number</code> object that represents positive or negative infinity.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a number that represents positive or negative infinity; <code>false</code> otherwise.
 * @example <caption>Infinite values</caption>
 * // returns true
 * isInfinite(Infinity);
 * isInfinite(Number.NEGATIVE_INFINITY);
 * @example <caption>Non-infinite values</caption>
 * // returns false
 * isInfinite(Number.MAX_VALUE);
 * isInfinite(NaN);
 * @see isFinite
 * @since 1.0.0
 * @memberof Number
 * @static
 */
function isInfinite(value) {
    if (isNumber(value)) {
        var val = value.valueOf();
        return  val === Number.POSITIVE_INFINITY || val === Number.NEGATIVE_INFINITY;
    }
    return false;
}

module.exports = isInfinite;

/***/ }),
/* 22 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isNumber = __webpack_require__(4);

/**
 * Determines whether the value is <code>NaN</code> (a primitive number or a <code>Number</code> object). 
 * NaN is the only value in javascript that is not equal to itself.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is <code>NaN</code>; <code>false</code> otherwise.
 * @example <caption>NaN values</caption>
 * // returns true
 * isNaN(NaN);
 * isNaN(new Number(NaN));
 * isNaN(0/0);
 * @example <caption>Non-NaN values</caption>
 * // returns false
 * isNaN(undefined);
 * isNaN(null);
 * isNaN("NaN");
 * isNaN(Infinity);
 * @see Number.isNaN
 * @since 1.0.0
 * @memberof Number
 * @static
 */
function isNaN(value) {
    if (isNumber(value)) {
        var val = value.valueOf();
        return val !== val;
    }
    return false;
}

module.exports = isNaN;

/***/ }),
/* 23 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFinite = __webpack_require__(19);
var isString = __webpack_require__(5);
var isBigInt = __webpack_require__(7);

/**
 * Determines whether the value is a numeric value which can be one of the following:
 * - A primitive number or <code>Number</code> object that has a finite value
 * - A primitive string or <code>String</code> object that represents a finite number
 * - A BigInt
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a numeric value; <code>false</code> otherwise.
 * @example <caption>Numeric values</caption>
 * // returns true
 * isNumeric(1);
 * isNumeric(new Number(1));
 * isNumeric("1.0");
 * isNumeric(new String("-1.234e+8"))
 * isNumeric(BigInt(1234567890));
 * isNumeric(Infinity);
 * @example <caption>Non-numeric values</caption>
 * // returns false
 * isNumeric(NaN);
 * isNumeric(Infinity);
 * isNumeric("12000n");
 * isNumeric("1*2");
 * @since 1.0.0
 * @memberof Number
 * @static
 */
function isNumeric(value) {
    return isFinite(value) || (isString(value) && value.length > 0 && isFinite(value * 1)) || isBigInt(value);
}

module.exports = isNumeric;

/***/ }),
/* 24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isString = __webpack_require__(5);

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

/***/ }),
/* 25 */
/***/ ((module) => {

/**
 * Determines whether the value is an <code>Object</code>.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is an <code>Object</code>; <code>false</code> otherwise.
 * @example <caption>Object values</caption>
 * // returns true
 * isObject({a: 1, b: 2});
 * isObject(["a", "b"]);
 * isObject(new Object());
 * isObject(new Number(1));
 * isObject(function() {});
 * @example <caption>Non-object values</caption>
 * // returns false
 * isObject(null);
 * isObject("abc");
 * isObject(Symbol("abc"));
 * isObject(1);
 * isObject(BigInt(1));
 * @since 1.0.0
 * @memberof Object
 * @static
 */
function isObject(value) {
    return value instanceof Object;
}

module.exports = isObject;

/***/ }),
/* 26 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasCircularReference = __webpack_require__(27);

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



/***/ }),
/* 27 */
/***/ ((module) => {

module.exports = function hasCircularReference(obj, path, seen) {
    var objs = [];
    for (var k in obj) {
        var val = obj[k];
        objs[objs.length] = val;
        if (seen.indexOf(val) >= 0) {
            return true;
        } else if (val instanceof Object) {
            if (hasCircularReference(val, path.concat(k), seen.concat(objs))) {
                return true;
            }
        }
    }
    return false;
};

/***/ }),
/* 28 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isTypeOf = __webpack_require__(24);

/**
 * Determines whether the value is a non-empty array and all elements in the array have the specified type. 
 * @param {*} value The value to check.
 * @param {(string|Function|null|undefined|Array)} type The type of elements
 * @returns {boolean} <code>true</code> if the value is a non-empty array and and all elements in the array have the specified type; <code>false</code> otherwise.
 * @example <caption>Matching values</caption>
 * // returns true
 * isArrayOf([1, 2, 3], "number");
 * isArrayOf(["a", "b", null], ["string", null]);
 * isArrayOf([{a: 1}, {b: 2}], Object);
 * @example <caption>Non-matching values</caption>
 * // returns false
 * isArrayOf([1, 2, "c"], "number");
 * isArrayOf([], undefined);
 * @since 1.1.0
 * @memberof Array
 * @static
 */
function isArrayOf(value, type) {
    if (value instanceof Array && value.length > 0) {
        for (var i = 0; i < value.length; i++) {
            if (!isTypeOf(value[i], type)) {
                return false;
            }
        }
        return true;
    }
    return false;
}

module.exports = isArrayOf;

/***/ }),
/* 29 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(11);
var isTypeOf = __webpack_require__(24);

/**
 * Determines whether the value is a non-empty array-like object and all elements in the object have the specified type.
 * @param {*} value The value to check.
 * @param {(string|Function|null|undefined|Array)} type The type of elements
 * @returns {boolean} <code>true</code> if the value is a non-empty array-like object and all elements in the object have the specified type; <code>false</code> otherwise.
 * @example <caption>Matching values</caption>
 * // returns true
 * isArrayLikeOf([1, 2, 3], "number");
 * isArrayLikeOf({0: "a", 1: "b", length: 2}, "string");
 * @example <caption>Non-matching values</caption>
 * // returns false
 * isArrayLikeOf([1, 2, "c"], "number");
 * isArrayLikeOf({a: 1, b: 2, length: 2}, "number");
 * @since 1.1.0
 * @memberof Array
 * @static
 */
function isArrayLikeOf(value, type) {
    if (isArrayLike(value) && value.length > 0) {
        for (var i = 0; i < value.length; i++) {
            if (!isTypeOf(value[i], type)) {
                return false;
            }
        }
        return true;
    }
    return false;
}

module.exports = isArrayLikeOf;

/***/ }),
/* 30 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(14);

/**
 * Determines whether the value is an array with two elements.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is an array with two elements; <code>false</code> otherwise.
 * @example <caption>Pair values</caption>
 * // returns true
 * isPair([1, 2]);
 * isPair([null, {}]);
 * @example <caption>Non-pair values</caption>
 * // returns false
 * isPair([]);
 * isPair({a: 1, b: 2});
 * isPair("ab");
 * @since 1.2.0
 * @memberof Array
 * @static
 */
function isPair(value) {
    return isArray(value) && value.length === 2;
}

module.exports = isPair;

/***/ }),
/* 31 */
/***/ ((module) => {

/**
 * Determines whether the value is a <code>Map</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a <code>Map</code> object; <code>false</code> otherwise.
 * @example <caption>Map values</caption>
 * // returns true
 * isMap(new Map());
 * @example <caption>Non-Map values</caption>
 * // returns false
 * isMap(new WeakMap());
 * isMap({a: 1, b: 2});
 * @see Map
 * @since 1.0.0
 * @memberof Collection
 * @static
 */
function isMap(value) {
    return typeof Map === "function" && value instanceof Map;
}

module.exports = isMap;

/***/ }),
/* 32 */
/***/ ((module) => {

/**
 * Determines whether the value is a <code>Set</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a <code>Set</code> object; <code>false</code> otherwise.
 * @example <caption>Set values</caption>
 * // returns true
 * isSet(new Set());
 * @example <caption>Non-Set values</caption>
 * // returns false
 * isSet(new WeakSet());
 * isSet([1, 2, 3]);
 * @see Set
 * @since 1.0.0
 * @memberof Collection
 * @static
 */
function isSet(value) {
    return typeof Set === "function" && value instanceof Set;
}

module.exports = isSet;



/***/ }),
/* 33 */
/***/ ((module) => {

/**
 * Determines whether the value is a <code>WeakMap</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a <code>WeakMap</code> object; <code>false</code> otherwise.
 * @example <caption>WeakMap values</caption>
 * // returns true
 * isWeakMap(new WeakMap());
 * @example <caption>Non-WeakMap values</caption>
 * // returns false
 * isWeakMap(new Map());
 * isWeakMap({a: 1, b: 2});
 * @see WeakMap
 * @since 1.0.0
 * @memberof Collection
 * @static
 */
function isWeakMap(value) {
    return typeof WeakMap === "function" && value instanceof WeakMap;
}

module.exports = isWeakMap;

/***/ }),
/* 34 */
/***/ ((module) => {

/**
 * Determines whether the value is a <code>WeakSet</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a <code>WeakSet</code> object; <code>false</code> otherwise.
 * @example <caption>WeakSet values</caption>
 * // returns true
 * isWeakSet(new WeakSet());
 * @example <caption>Non-WeakSet values</caption>
 * // returns false
 * isWeakSet(new Set());
 * isWeakSet([1, 2, 3]);
 * @see WeakSet
 * @since 1.0.0
 * @memberof Collection
 * @static
 */
function isWeakSet(value) {
    return typeof WeakSet === "function" && value instanceof WeakSet;
}

module.exports = isWeakSet;

/***/ }),
/* 35 */
/***/ ((module) => {

/**
 * Determines whether the value is a <code>Function</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a <code>Function</code> object; <code>false</code> otherwise.
 * @example <caption>Function values</caption>
 * // returns true
 * isFunction(function() {});
 * isFunction(Object);
 * @example <caption>Non-function values</caption>
 * // returns false
 * isFunction(null);
 * isFunction(new Object());
 * isFunction("function() {}");
 * @since 1.0.0
 * @memberof Object
 * @static
 */function isFunction(value) {
    return typeof value === "function";
}

module.exports = isFunction;

/***/ }),
/* 36 */
/***/ ((module) => {

/**
 * Determines whether the value is a <code>Date</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a <code>Date</code> object; <code>false</code> otherwise.
 * @example <caption>Date values</caption>
 * // returns true
 * isDate(new Date());
 * isDate(new Date(""));
 * @example <caption>Non-date values</caption>
 * // returns false
 * isDate("2001-01-01T00:00:00.000Z");
 * isDate(978307200000);
 * @see Date
 * @since 1.0.0
 * @memberof Object
 * @static
 */
function isDate(value) {
    return value instanceof Date;
}


module.exports = isDate;

/***/ }),
/* 37 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isInteger = __webpack_require__(18);

/**
 * Determines whether the value is a valid <code>Date</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a valid <code>Date</code> object; <code>false</code> otherwise.
 * @example <caption>Valid Date objects</caption>
 * // returns true
 * isValidDate(new Date());
 * isValidDate(new Date("2001-01-01T00:00:00.000Z"));
 * isValidDate(new Date(-1));
 * @example <caption>Invalid Date & non-date values</caption>
 * // returns false
 * isValidDate(new Date(""));
 * isValidDate("2001-01-01T00:00:00.000Z");
 * isValidDate(978307200000);
 * @see Date
 * @since 1.3.0
 * @memberof Object
 * @static
 */
function isValidDate(value) {
    return value instanceof Date && isInteger(value.getTime());
}

module.exports = isValidDate;

/***/ }),
/* 38 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isNaN = __webpack_require__(22);

/**
 * Determines whether the value is an invalid <code>Date</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is an invalid <code>Date</code> object; <code>false</code> otherwise.
 * @example <caption>Invalid Date objects</caption>
 * // returns true
 * isInvalidDate(new Date(""));
 * isInvalidDate(new Date(NaN));
 * @example <caption>Valid Date & non-date values</caption>
 * // returns false
 * isInvalidDate(new Date());
 * isInvalidDate("2001-01-01T00:00:00.000Z");
 * isInvalidDate(978307200000);
 * @see Date
 * @since 1.3.0
 * @memberof Object
 * @static
 */
function isInvalidDate(value) {
    return value instanceof Date && isNaN(value.getTime());
}

module.exports = isInvalidDate;

/***/ }),
/* 39 */
/***/ ((module) => {

/**
 * Determines whether the value is a <code>RegExp</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a <code>RegExp</code> object; <code>false</code> otherwise.
 * @example <caption>RegExp values</caption>
 * // returns true
 * isRegExp(/[a-z]/);
 * isRegExp(new RegExp("[a-z]"));
 * @example <caption>Non-RegExp values</caption>
 * // returns false
 * isRegExp("[a-z]");
 * isRegExp("/[a-z]/");
 * @see RegExp
 * @since 1.0.0
 * @memberof Object
 * @static
 */
function isRegExp(value) {
    return value instanceof RegExp;
}

module.exports = isRegExp;

/***/ }),
/* 40 */
/***/ ((module) => {

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



/***/ }),
/* 41 */
/***/ ((module) => {

/**
 * Determines whether the value is an object that defines <code>then</code> and <code>catch</code> methods.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is a Promise-like object; <code>false</code> otherwise.
 * @example <caption>Promise-like objects</caption>
 * // returns true
 * isPromiseLike(new Promise(resolve, reject));
 * isPromiseLike({then: function() {}, catch: function() {}});
 * @example <caption>Non-promise-like values</caption>
 * // returns false
 * isPromiseLike({then: function() {}});
 * isPromiseLike({then: true, catch: true});
 * @see {@link https://www.promisejs.org/api|Promise API Reference}
 * @since 1.0.0
 * @memberof Object
 * @static
 */
function isPromiseLike(value) {
    return value instanceof Object && typeof value.then === "function" && typeof value.catch === "function";
}

module.exports = isPromiseLike;

/***/ }),
/* 42 */
/***/ ((module) => {

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

/***/ }),
/* 43 */
/***/ ((module) => {

/**
 * Determines whether the value is an <code>Error</code> object.
 * @param {*} value The value to check.
 * @returns {boolean} <code>true</code> if the value is an <code>Error</code> object; <code>false</code> otherwise.
 * @example <caption>Error objects</caption>
 * // returns true
 * isError(new Error("Validation error"));
 * isError(new TypeError("Expected a number, but found: " + value));
 * @example <caption>Non-Error values</caption>
 * // returns false
 * isError(null);
 * isError(NaN);
 * isError(Promise.reject());
 * isError({name: "TypeError", message: "Expected a number"});
 * @see Error
 * @since 1.0.0
 * @memberof Object
 * @static
 */
function isError(value) {
    return value instanceof Error;
}

module.exports = isError;

/***/ }),
/* 44 */
/***/ ((module) => {

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

/***/ }),
/* 45 */
/***/ ((module) => {

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

/***/ }),
/* 46 */
/***/ ((module) => {

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

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});