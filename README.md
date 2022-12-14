# Go Types

**Type-checking utilities for JavaScript.**

![codecov.io Code Coverage](https://img.shields.io/badge/coverage-100%25-green.svg)
[![jsdoc](https://img.shields.io/badge/docs-100%25-green.svg)](https://github.com/koyote130708/go-types#documentation)
[![donation](https://img.shields.io/badge/donate-blue.svg)](https://www.paypal.com/donate/?business=T7Q29NNMZVW98\&no_recurring=0\&item_name=Your+support+will+help+us++continue+our+work+and+improve+the+quality+of+our+products.+Thank+you!\&currency_code=USD)

*   **version**: 1.3.1
*   **license**: MIT

<br />

## Installation

```javascript
npm i go-types
```

or

```javascript
yarn add go-types
```

<br />

## Usage

### ES6

```javascript
import Types from 'go-types'

Types.isArray([]);
```

or

```javascript
import { isArray } from 'go-types';

isArray([]);
```

### Node

```javascript
const Types = require('go-types');

Types.isArray([]);
```

or

```javascript
const { isArray } = require('go-types');

isArray([]);
```

### Web browser

```javascript
<script src="dist/go-types.min.js"></script>
<script>
    const { isArray } = Types;

    isArray([]);
</script>

```

<br />

## Documentation

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

*   [Primitive](#primitive)
    *   [isUndefined](#isundefined)
        *   [Parameters](#parameters)
        *   [Examples](#examples)
    *   [isNull](#isnull)
        *   [Parameters](#parameters-1)
        *   [Examples](#examples-1)
    *   [isBoolean](#isboolean)
        *   [Parameters](#parameters-2)
        *   [Examples](#examples-2)
    *   [isNumber](#isnumber)
        *   [Parameters](#parameters-3)
        *   [Examples](#examples-3)
    *   [isString](#isstring)
        *   [Parameters](#parameters-4)
        *   [Examples](#examples-4)
    *   [isSymbol](#issymbol)
        *   [Parameters](#parameters-5)
        *   [Examples](#examples-5)
    *   [isBigInt](#isbigint)
        *   [Parameters](#parameters-6)
        *   [Examples](#examples-6)
    *   [isPrimitive](#isprimitive)
        *   [Parameters](#parameters-7)
        *   [Examples](#examples-7)
*   [Utility](#utility)
    *   [isNullish](#isnullish)
        *   [Parameters](#parameters-8)
        *   [Examples](#examples-8)
    *   [isEmpty](#isempty)
        *   [Parameters](#parameters-9)
        *   [Examples](#examples-9)
    *   [isBlank](#isblank)
        *   [Parameters](#parameters-10)
        *   [Examples](#examples-10)
    *   [isTruthy](#istruthy)
        *   [Parameters](#parameters-11)
        *   [Examples](#examples-11)
    *   [isFalsy](#isfalsy)
        *   [Parameters](#parameters-12)
        *   [Examples](#examples-12)
    *   [isTypeOf](#istypeof)
        *   [Parameters](#parameters-13)
        *   [Examples](#examples-13)
*   [Number](#number)
    *   [isInteger](#isinteger)
        *   [Parameters](#parameters-14)
        *   [Examples](#examples-14)
    *   [isFloat](#isfloat)
        *   [Parameters](#parameters-15)
        *   [Examples](#examples-15)
    *   [isFinite](#isfinite)
        *   [Parameters](#parameters-16)
        *   [Examples](#examples-16)
    *   [isInfinite](#isinfinite)
        *   [Parameters](#parameters-17)
        *   [Examples](#examples-17)
    *   [isNaN](#isnan)
        *   [Parameters](#parameters-18)
        *   [Examples](#examples-18)
    *   [isNumeric](#isnumeric)
        *   [Parameters](#parameters-19)
        *   [Examples](#examples-19)
*   [Object](#object)
    *   [isObject](#isobject)
        *   [Parameters](#parameters-20)
        *   [Examples](#examples-20)
    *   [isPlainObject](#isplainobject)
        *   [Parameters](#parameters-21)
        *   [Examples](#examples-21)
    *   [isCyclic](#iscyclic)
        *   [Parameters](#parameters-22)
        *   [Examples](#examples-22)
    *   [isIterable](#isiterable)
        *   [Parameters](#parameters-23)
        *   [Examples](#examples-23)
    *   [isFunction](#isfunction)
        *   [Parameters](#parameters-24)
        *   [Examples](#examples-24)
    *   [isDate](#isdate)
        *   [Parameters](#parameters-25)
        *   [Examples](#examples-25)
    *   [isValidDate](#isvaliddate)
        *   [Parameters](#parameters-26)
        *   [Examples](#examples-26)
    *   [isInvalidDate](#isinvaliddate)
        *   [Parameters](#parameters-27)
        *   [Examples](#examples-27)
    *   [isRegExp](#isregexp)
        *   [Parameters](#parameters-28)
        *   [Examples](#examples-28)
    *   [isPromise](#ispromise)
        *   [Parameters](#parameters-29)
        *   [Examples](#examples-29)
    *   [isPromiseLike](#ispromiselike)
        *   [Parameters](#parameters-30)
        *   [Examples](#examples-30)
    *   [isThenable](#isthenable)
        *   [Parameters](#parameters-31)
        *   [Examples](#examples-31)
    *   [isError](#iserror)
        *   [Parameters](#parameters-32)
        *   [Examples](#examples-32)
*   [Array](#array)
    *   [isArray](#isarray)
        *   [Parameters](#parameters-33)
        *   [Examples](#examples-33)
    *   [isArrayOf](#isarrayof)
        *   [Parameters](#parameters-34)
        *   [Examples](#examples-34)
    *   [isArrayLike](#isarraylike)
        *   [Parameters](#parameters-35)
        *   [Examples](#examples-35)
    *   [isArrayLikeOf](#isarraylikeof)
        *   [Parameters](#parameters-36)
        *   [Examples](#examples-36)
    *   [isPair](#ispair)
        *   [Parameters](#parameters-37)
        *   [Examples](#examples-37)
*   [Collection](#collection)
    *   [isMap](#ismap)
        *   [Parameters](#parameters-38)
        *   [Examples](#examples-38)
    *   [isSet](#isset)
        *   [Parameters](#parameters-39)
        *   [Examples](#examples-39)
    *   [isWeakMap](#isweakmap)
        *   [Parameters](#parameters-40)
        *   [Examples](#examples-40)
    *   [isWeakSet](#isweakset)
        *   [Parameters](#parameters-41)
        *   [Examples](#examples-41)
*   [Node](#node)
    *   [isNode](#isnode)
        *   [Parameters](#parameters-42)
        *   [Examples](#examples-42)
    *   [isElement](#iselement)
        *   [Parameters](#parameters-43)
        *   [Examples](#examples-43)
    *   [isFragment](#isfragment)
        *   [Parameters](#parameters-44)
        *   [Examples](#examples-44)

### Primitive

#### isUndefined

Determines whether the value is <code>undefined</code>.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Undefined values

```javascript
// returns true
isUndefined(undefined);
isUndefined(void 0);
```

Non-undefined values

```javascript
// returns false
isUndefined(null);
isUndefined(false);
isUndefined(0);
isUndefined("");
isUndefined(NaN);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is <code>undefined</code>; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isNull

Determines whether the value is <code>null</code>.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Null values

```javascript
// returns true
isNull(null);
```

Non-null values

```javascript
// returns false
isNull(undefined);
isNull(false);
isNull(0);
isNull("");
isNull(NaN);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is <code>null</code>; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isBoolean

*   **See**: Types.isPrimitive
*   **See**: Types.isObject
*   **See**: Types.isTypeOf

Determines whether the value is a primitive boolean or <code>Boolean</code> object.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Boolean values

```javascript
// returns true
isBoolean(true);
isBoolean(new Boolean(true));
```

Non-boolean values

```javascript
// returns false
isBoolean(1);
isBoolean("true");
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a primitive boolean or <code>Boolean</code> object; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isNumber

*   **See**: Types.isPrimitive
*   **See**: Types.isObject
*   **See**: Types.isTypeOf

Determines whether the value is a primitive number or <code>Number</code> object
which includes the "special" numbers `+Infinity`, `-Infinity` and `NaN`.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Number values

```javascript
// returns true
isNumber(1);
isNumber(-12.34);
isNumber(new Number(1));
isNumber(Infinity);
isNumber(NaN);
```

Non-number values

```javascript
// returns false
isNumber("1");
isNumber(true);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a primitive number or <code>Number</code> object; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isString

*   **See**: Types.isPrimitive
*   **See**: Types.isObject
*   **See**: Types.isTypeOf

Determines whether the value is a primitive string or <code>String</code> object.

##### Parameters

*   `value` **any** The value to check.

##### Examples

String values

```javascript
// returns true
isString("1");
isString(new String("abc"));
```

Non-string values

```javascript
// returns false
isString(1);
isString(["a", "b"]);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a primitive string or <code>String</code> object; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isSymbol

*   **See**: Symbol

Determines whether the value is a primitive <code>Symbol</code>.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Symbol values

```javascript
// returns true
isSymbol(Symbol("abc"));
```

Non-Symbol values

```javascript
// returns false
isSymbol("abc");
isSymbol(/[a-z]/);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a primitive <code>Symbol</code>; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isBigInt

*   **See**: BigInt

Determines whether the value is a primitive <code>BigInt</code>.

##### Parameters

*   `value` **any** The value to check.

##### Examples

BigInt values

```javascript
// returns true
isBigInt(BigInt(1));
isBigInt(BigInt(-1234567890));
```

Non-BigInt values

```javascript
// returns false
isBigInt(Number.MAX_VALUE);
isBigInt(Infinity);
isBigInt(NaN);
isBigInt("1n");
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a primitive <code>BigInt</code>; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isPrimitive

Determines whether the value is a primitive value.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Primitive values

```javascript
// returns true
isPrimitive(undefined);
isPrimitive(null);
isPrimitive(false);
isPrimitive(0);
isPrimitive("abc");
isPrimitive(Symbol("abc"));
isPrimitive(BigInt(1234567890));
```

Non-primitive values

```javascript
// returns false
isPrimitive(new Number(1));
isPrimitive([1, 2, 3]);
isPrimitive(function () {});
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a primitive value; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

### Utility

#### isNullish

*   **See**: undefined
*   **See**: null

Determines whether the value is <code>null</code> or <code>undefined</code>.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Nullish values

```javascript
// returns true
isNullish();
isNullish(undefined);
isNullish(void 0);
```

Non-nullish values

```javascript
// returns false
isNullish(null);
isNullish(false);
isNullish(0);
isNullish("");
isNullish([]);
isNullish(NaN);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is <code>null</code> or <code>undefined</code>; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isEmpty

Determines whether the value is an empty value which can be one of the following:

*   <code>null</code>
*   <code>undefined</code>
*   A string whose length is zero
*   An array with no elements
*   A plain object with no enumerable keys
*   An iterable with no iterable values

##### Parameters

*   `value` **any** The value to check.

##### Examples

Empty values

```javascript
// returns true
isEmpty(null);
isEmpty(undefined);
isEmpty("");
isEmpty([]);
isEmpty({});
isEmpty(new Set());
```

Non-empty values

```javascript
// returns false
isEmpty(" ");
isEmpty(0);
isEmpty(false);
isEmpty([null]);
isEmpty({a: ""});
isEmpty(NaN);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is an empty value; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isBlank

Determines whether the value is a blank value which can be one of the following:

*   <code>null</code>
*   <code>undefined</code>
*   A string whose length is zero or has only space characters
*   An array that has no elements or has only nullish values
*   A plain object that has no enumerable keys or has only nullish values
*   An iterable that has no iterable values or has only nullish values.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Blank values

```javascript
// returns true
isBlank(null);
isBlank(undefined);
isBlank(" \t\n ");
isBlank([undefined, null]);
isBlank({a: null, b: undefined});
isBlank(new Set(null));
```

Non-blank values

```javascript
// returns false
isBlank(0);
isBlank(false);
isBlank(" a ");
isBlank([""]);
isBlank({a: ""});
isBlank(NaN);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a blank value; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isTruthy

Determines whether the value is a truthy value.
A truthy value is a value that is considered true when encountered in a Boolean context.
All values are truthy except <code>false</code>, <code>0</code>, <code>""</code>, <code>undefined</code>, <code>null</code> and <code>NaN</code>.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Truthy values

```javascript
// returns true
isTruthy(true);
isTruthy(1);
isTruthy("false");
isTruthy(new Boolean(false));
isTruthy({});
```

Non-truthy values

```javascript
// returns false
isTruthy(false);
isTruthy(0);
isTruthy("");
isTruthy(undefined);
isTruthy(null);
isTruthy(NaN);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a truthy value; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isFalsy

Determines whether the value is a falsy value which can be one of the following:

*   <code>false</code>
*   <code>0</code>
*   <code>""</code>
*   <code>undefined</code>
*   <code>null</code>
*   <code>NaN</code>

##### Parameters

*   `value` **any** The value to check.

##### Examples

Falsy values

```javascript
// returns true
isFalsy(false);
isFalsy(0);
isFalsy("");
isFalsy(undefined);
isFalsy(null);
isFalsy(NaN);
```

Non-falsy values

```javascript
// returns false
isFalsy(true);
isFalsy(-1);
isFalsy("false");
isFalsy(new Boolean(false));
isFalsy({});
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a falsy value; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isTypeOf

Determines whether the value has a specified type.
Based on the type of the type value, it will check the following:

*   string - checks if the type matches (case-sensitive) using the <code>typeof</code> operator.
*   function - checks if the value is an instance of the function/class using the <code>instanceof</code> operator; if the test returns <code>false</code>, it checks if the function returns a truthy value when invoked with the value.
*   null/undefined - checks if the value is equal to the type using the strict equality (<code>===</code>) operator.
*   array - checks if the value has any type defined in the array.

##### Parameters

*   `value` **any** The value to check.
*   `type` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function) | null | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined) | [Array](#array))** The expected type

##### Examples

Matching type values

```javascript
// returns true
isTypeOf(1, "number");
isTypeOf({a: 1}, Object);
isTypeOf("abc", ["string", undefined]);
```

Non-matching type values

```javascript
// returns false
isTypeOf(1, "boolean");
isTypeOf("", String);
isTypeOf(null, ["string", String]);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is of the type; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

### Number

#### isInteger

Determines whether the value is an integer (a primitive number or <code>Number</code> object).

##### Parameters

*   `value` **any** The value to check.

##### Examples

Integer values

```javascript
// returns true
isInteger(1);
isInteger(new Number(1));
```

Non-integer values

```javascript
// returns false
isInteger(isInteger(0.1));
isInteger("1");
isInteger(Infinity);
isInteger(NaN);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is an integer; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isFloat

Determines whether the value is a finite number with a decimal point (a primitive number or <code>Number</code> object).

##### Parameters

*   `value` **any** The value to check.

##### Examples

Float values

```javascript
// returns true
isFloat(0.1);
isFloat(-1234.56789);
isFloat(new Number(0.1));
```

Non-float values

```javascript
// returns false
isFloat(1);
isFloat(1.0);
isFloat("1.2");
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a finite number with a decimal point; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isFinite

*   **See**: isFinite

Determines whether the value is a finite number (a primitive number or <code>Number</code> object).

##### Parameters

*   `value` **any** The value to check.

##### Examples

Finite values

```javascript
// returns true
isFinite(0);
isFinite(-0.1);
isFinite(Number.MAX_VALUE);
```

Non-finite values

```javascript
// returns false
isFinite(Infinity);
isFinite("1");
isFinite(NaN);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a finite number; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isInfinite

*   **See**: isFinite

Determines whether the value is a primitive number or <code>Number</code> object that represents positive or negative infinity.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Infinite values

```javascript
// returns true
isInfinite(Infinity);
isInfinite(Number.NEGATIVE_INFINITY);
```

Non-infinite values

```javascript
// returns false
isInfinite(Number.MAX_VALUE);
isInfinite(NaN);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a number that represents positive or negative infinity; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isNaN

*   **See**: Number.isNaN

Determines whether the value is <code>NaN</code> (a primitive number or a <code>Number</code> object).
NaN is the only value in javascript that is not equal to itself.

##### Parameters

*   `value` **any** The value to check.

##### Examples

NaN values

```javascript
// returns true
isNaN(NaN);
isNaN(new Number(NaN));
isNaN(0/0);
```

Non-NaN values

```javascript
// returns false
isNaN(undefined);
isNaN(null);
isNaN("NaN");
isNaN(Infinity);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is <code>NaN</code>; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isNumeric

Determines whether the value is a numeric value which can be one of the following:

*   A primitive number or <code>Number</code> object that has a finite value
*   A primitive string or <code>String</code> object that represents a finite number
*   A BigInt

##### Parameters

*   `value` **any** The value to check.

##### Examples

Numeric values

```javascript
// returns true
isNumeric(1);
isNumeric(new Number(1));
isNumeric("1.0");
isNumeric(new String("-1.234e+8"))
isNumeric(BigInt(1234567890));
isNumeric(Infinity);
```

Non-numeric values

```javascript
// returns false
isNumeric(NaN);
isNumeric(Infinity);
isNumeric("12000n");
isNumeric("1*2");
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a numeric value; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

### Object

#### isObject

Determines whether the value is an <code>Object</code>.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Object values

```javascript
// returns true
isObject({a: 1, b: 2});
isObject(["a", "b"]);
isObject(new Object());
isObject(new Number(1));
isObject(function() {});
```

Non-object values

```javascript
// returns false
isObject(null);
isObject("abc");
isObject(Symbol("abc"));
isObject(1);
isObject(BigInt(1));
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is an <code>Object</code>; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isPlainObject

Determines whether the value is a plain object created using object literal or by the <code>Object</code> constructor.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Plain object values

```javascript
// returns true
isPlainObject({a: 1, b: 2});
isPlainObject(new Object());
```

Non-plain-object values

```javascript
// returns false
isPlainObject(null);
isPlainObject("abc");
isPlainObject([1, 2]);
isPlainObject(new Number(1));
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a plain object; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isCyclic

Determines whether the value is an cyclic object with a circular reference.
A cycle object has an enumerable property (or a sub-property) whose value points
to the object itself or a property of the object.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Cyclic object

```javascript
// returns true
var obj = {};
obj.ref = obj;

isCyclic(obj);
```

Non-cyclic values

```javascript
// returns false
isCyclic({a: 1, b: 2});
isCyclic([1, 2, 3]);
isCyclic("abc");
isCyclic(function() {});
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a cyclic object with a circular reference; <code>false</code> otherwise.

**Meta**

*   **since**: 1.2.0

#### isIterable

*   **See**: Iterable

Determines whether the value is iterable which can be used in a <code>for..of</code> operator.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Iterable values

```javascript
// returns true
isIterable([1, 2, 3]);
isIterable("abc");
isIterable(new Map());
isIterable(new Set());
isIterable({[Symbol.iterator]: function() {}});
```

Non-iterable values

```javascript
// returns false
isIterable({a: 1, b: 2});
isIterable(12345);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is iterable; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isFunction

Determines whether the value is a <code>Function</code> object.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Function values

```javascript
// returns true
isFunction(function() {});
isFunction(Object);
```

Non-function values

```javascript
// returns false
isFunction(null);
isFunction(new Object());
isFunction("function() {}");
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a <code>Function</code> object; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isDate

*   **See**: Date

Determines whether the value is a <code>Date</code> object.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Date values

```javascript
// returns true
isDate(new Date());
isDate(new Date(""));
```

Non-date values

```javascript
// returns false
isDate("2001-01-01T00:00:00.000Z");
isDate(978307200000);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a <code>Date</code> object; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isValidDate

*   **See**: Date

Determines whether the value is a valid <code>Date</code> object.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Valid Date objects

```javascript
// returns true
isValidDate(new Date());
isValidDate(new Date("2001-01-01T00:00:00.000Z"));
isValidDate(new Date(-1));
```

Invalid Date & non-date values

```javascript
// returns false
isValidDate(new Date(""));
isValidDate("2001-01-01T00:00:00.000Z");
isValidDate(978307200000);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a valid <code>Date</code> object; <code>false</code> otherwise.

**Meta**

*   **since**: 1.3.0

#### isInvalidDate

*   **See**: Date

Determines whether the value is an invalid <code>Date</code> object.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Invalid Date objects

```javascript
// returns true
isInvalidDate(new Date(""));
isInvalidDate(new Date(NaN));
```

Valid Date & non-date values

```javascript
// returns false
isInvalidDate(new Date());
isInvalidDate("2001-01-01T00:00:00.000Z");
isInvalidDate(978307200000);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is an invalid <code>Date</code> object; <code>false</code> otherwise.

**Meta**

*   **since**: 1.3.0

#### isRegExp

*   **See**: RegExp

Determines whether the value is a <code>RegExp</code> object.

##### Parameters

*   `value` **any** The value to check.

##### Examples

RegExp values

```javascript
// returns true
isRegExp(/[a-z]/);
isRegExp(new RegExp("[a-z]"));
```

Non-RegExp values

```javascript
// returns false
isRegExp("[a-z]");
isRegExp("/[a-z]/");
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a <code>RegExp</code> object; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isPromise

*   **See**: Promise

Determines whether the value is a <code>Promise</code> object.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Promise values

```javascript
// returns true
isPromise(new Promise(resolve, reject));
isPromise(Promise.resolve());
isPromise(Promise.reject());
```

Non-promise values

```javascript
// returns false
isPromise({then: function() {}, catch: function() {}});
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a <code>Promise</code> object; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isPromiseLike

*   **See**: [Promise API Reference](https://www.promisejs.org/api)

Determines whether the value is an object that defines <code>then</code> and <code>catch</code> methods.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Promise-like objects

```javascript
// returns true
isPromiseLike(new Promise(resolve, reject));
isPromiseLike({then: function() {}, catch: function() {}});
```

Non-promise-like values

```javascript
// returns false
isPromiseLike({then: function() {}});
isPromiseLike({then: true, catch: true});
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a Promise-like object; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isThenable

Determines whether the value is an object that defines a <code>then</code> method.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Thenable objects

```javascript
// returns true
isThenable(new Promise(resolve, reject));
isThenable({then: function() {}});
```

Non-thenable values

```javascript
// returns false
isThenable(null);
isThenable({then: true});
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a thenable object; <code>false</code> otherwise.

**Meta**

*   **since**: 1.1.0

#### isError

*   **See**: Error

Determines whether the value is an <code>Error</code> object.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Error objects

```javascript
// returns true
isError(new Error("Validation error"));
isError(new TypeError("Expected a number, but found: " + value));
```

Non-Error values

```javascript
// returns false
isError(null);
isError(NaN);
isError(Promise.reject());
isError({name: "TypeError", message: "Expected a number"});
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is an <code>Error</code> object; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

### Array

#### isArray

Determines whether the value is an <code>Array</code> object.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Array values

```javascript
// returns true
isArray(["a", "b"]);
isArray(new Array());
```

Non-array values

```javascript
// returns false
isArray("abc");
isArray({length: 0});
isArray(new Int8Array());
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is an <code>Array</code> object; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isArrayOf

Determines whether the value is a non-empty array and all elements in the array have the specified type.

##### Parameters

*   `value` **any** The value to check.
*   `type` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function) | null | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined) | [Array](#array))** The type of elements

##### Examples

Matching values

```javascript
// returns true
isArrayOf([1, 2, 3], "number");
isArrayOf(["a", "b", null], ["string", null]);
isArrayOf([{a: 1}, {b: 2}], Object);
```

Non-matching values

```javascript
// returns false
isArrayOf([1, 2, "c"], "number");
isArrayOf([], undefined);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a non-empty array and and all elements in the array have the specified type; <code>false</code> otherwise.

**Meta**

*   **since**: 1.1.0

#### isArrayLike

Determines whether the value is an array-like object with a "length" property
whose value is an integer and is within 0 ~ Number.MAX\_SAFE\_INTEGER (both inclusive).

##### Parameters

*   `value` **any** The value to check.

##### Examples

Array-like objects

```javascript
// returns true
isArrayLike([]);
isArrayLike("abc");
isArrayLike({length: 0});
isArrayLike(new Int8Array());
```

Non-array-like values

```javascript
// returns false
isArrayLike({});
isArrayLike({length: -1})
isArrayLike(new Set());
isArrayLike(Array);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is an array-like object; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isArrayLikeOf

Determines whether the value is a non-empty array-like object and all elements in the object have the specified type.

##### Parameters

*   `value` **any** The value to check.
*   `type` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function) | null | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined) | [Array](#array))** The type of elements

##### Examples

Matching values

```javascript
// returns true
isArrayLikeOf([1, 2, 3], "number");
isArrayLikeOf({0: "a", 1: "b", length: 2}, "string");
```

Non-matching values

```javascript
// returns false
isArrayLikeOf([1, 2, "c"], "number");
isArrayLikeOf({a: 1, b: 2, length: 2}, "number");
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a non-empty array-like object and all elements in the object have the specified type; <code>false</code> otherwise.

**Meta**

*   **since**: 1.1.0

#### isPair

Determines whether the value is an array with two elements.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Pair values

```javascript
// returns true
isPair([1, 2]);
isPair([null, {}]);
```

Non-pair values

```javascript
// returns false
isPair([]);
isPair({a: 1, b: 2});
isPair("ab");
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is an array with two elements; <code>false</code> otherwise.

**Meta**

*   **since**: 1.2.0

### Collection

#### isMap

*   **See**: Map

Determines whether the value is a <code>Map</code> object.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Map values

```javascript
// returns true
isMap(new Map());
```

Non-Map values

```javascript
// returns false
isMap(new WeakMap());
isMap({a: 1, b: 2});
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a <code>Map</code> object; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isSet

*   **See**: Set

Determines whether the value is a <code>Set</code> object.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Set values

```javascript
// returns true
isSet(new Set());
```

Non-Set values

```javascript
// returns false
isSet(new WeakSet());
isSet([1, 2, 3]);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a <code>Set</code> object; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isWeakMap

*   **See**: WeakMap

Determines whether the value is a <code>WeakMap</code> object.

##### Parameters

*   `value` **any** The value to check.

##### Examples

WeakMap values

```javascript
// returns true
isWeakMap(new WeakMap());
```

Non-WeakMap values

```javascript
// returns false
isWeakMap(new Map());
isWeakMap({a: 1, b: 2});
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a <code>WeakMap</code> object; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

#### isWeakSet

*   **See**: WeakSet

Determines whether the value is a <code>WeakSet</code> object.

##### Parameters

*   `value` **any** The value to check.

##### Examples

WeakSet values

```javascript
// returns true
isWeakSet(new WeakSet());
```

Non-WeakSet values

```javascript
// returns false
isWeakSet(new Set());
isWeakSet([1, 2, 3]);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a <code>WeakSet</code> object; <code>false</code> otherwise.

**Meta**

*   **since**: 1.0.0

### Node

#### isNode

*   **See**: Node

Determines whether the value is a DOM <code>Node</code> object.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Node objects

```javascript
// returns true
isNode(document);
isNode(document.createElement("div"));
isNode(new DocumentFragment());
```

Non-Node values

```javascript
// returns false
isNode(Node);
isNode(window);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a DOM <code>Node</code> object; <code>false</code> otherwise.

**Meta**

*   **since**: 1.1.0

#### isElement

*   **See**: Element

Determines whether the value is a DOM <code>Element</code> object.

##### Parameters

*   `value` **any** The value to check.

##### Examples

Element objects

```javascript
// returns true
isElement(document.createElement("div"));
```

Non-Element values

```javascript
// returns false
isElement(document);
isElement(window);
isElement(new DocumentFragment());
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a DOM <code>Element</code> object; <code>false</code> otherwise.

**Meta**

*   **since**: 1.1.0

#### isFragment

*   **See**: DocumentFragment

Determines whether the value is a <code>DocumentFragment</code> object.

##### Parameters

*   `value` **any** The value to check.

##### Examples

DocumentFragment objects

```javascript
// returns true
isFragment(new DocumentFragment());
```

Non-DocumentFragment values

```javascript
// returns false
isFragment(document);
isFragment(window);
isFragment(document.createElement("div"));
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** <code>true</code> if the value is a <code>DocumentFragment</code> object; <code>false</code> otherwise.

**Meta**

*   **since**: 1.1.0
